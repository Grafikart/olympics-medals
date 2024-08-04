import "./mascots.css";
import { render } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { useWindowWidth } from "./hooks/useWindowWidth.ts";
import { randomBetween } from "./functions/number.ts";
import confetti from "canvas-confetti";
import { rgbToHex } from "./functions/color.ts";

/**
 * Make mascots mascot cross the screen
 */
export function callMascots(source: HTMLElement) {
  const mascots = document.getElementById("mascots");
  if (!mascots) {
    return;
  }
  const color = rgbToHex(getComputedStyle(source).color);
  const div = document.createElement("div");
  mascots.appendChild(div);
  render(<Mascots color={color} />, div);
  // Wait the end of the animation to clean
  const clear = () => {
    render(null, div);
    div.remove();
  };
  let ended = 0;
  Array.from(div.children).forEach((mascot) => {
    mascot.addEventListener("animationend", () => {
      ended++;
      if (ended === div.children.length) {
        clear();
      }
    });
  });
}

function Mascots({ color }: { color: string }) {
  return (
    <>
      {Array.from({ length: 11 }).map((_, k) => (
        <Mascot index={k} key={k} color={color} />
      ))}
    </>
  );
}

/**
 * Rule to have better control on the mascots distribution
 * - 1 megaphone
 * - 2 confetti
 * - 3/4 big hands
 * - 1/4 jumping
 */
function getMascot(index: number): number {
  if (index === 9) {
    return 3;
  }
  if (index % 5 === 0) {
    return 2;
  }
  return index % 4 > 0 ? 0 : 1;
}

function Mascot({ color, index }: { index: number; color: string }) {
  const width = useWindowWidth();
  const style = {
    "--walk-duration": width.value / 700,
    "--walk-bouncing-delay": randomBetween(-2, 0),
    "--walk-cross-offset": randomBetween(0, 1),
    "--scale-ratio": randomBetween(0, 1),
  };
  const el = useRef<HTMLDivElement>(null);
  const img = getMascot(index);

  // The second mascot emit confettis
  useEffect(() => {
    if (img === 2) {
      return;
    }
    const interval = setInterval(
      () => {
        if (!el.current) {
          return;
        }
        const rect = el.current.getBoundingClientRect();
        confetti({
          angle: 60,
          scalar: 0.8,
          startVelocity: 30,
          spread: randomBetween(50, 70),
          particleCount: 10,
          origin: {
            x: (rect.left + rect.width) / window.innerWidth,
            y: (rect.top + 0.5 * rect.height) / window.innerHeight,
          },
          colors: [color],
        });
      },
      3_000 + Math.random() * 1_000,
    );
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="mascot" style={style} ref={el}>
      <img src={`./mascot${img}.png`} />
    </div>
  );
}
