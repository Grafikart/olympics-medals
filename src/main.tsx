import { render } from "preact";
import "./reset.css";
import "./main.css";
import continents from "./continents.json";
import { useIncrementalNumber } from "./hooks/useIncrementalNumber.ts";

type ItemOf<T> = T extends (infer U)[] ? U : never;
type Continent = ItemOf<typeof continents>;

/**
 * Rings representing the number of medals of continents
 */
function Graph() {
  const totals = continents.map((c) => c.total);
  return (
    <div className="continents">
      {continents.map((continent, k) => (
        <Ring
          {...continent}
          key={continent.name}
          index={k}
          max={Math.max(...totals)}
        />
      ))}
    </div>
  );
}

/**
 * Ring for a continent
 */
function Ring({
  name,
  gold,
  silver,
  bronze,
  total,
  index,
  max,
}: Continent & {
  index: number;
  max: number;
}) {
  const ratio = total / max;
  const style = {
    gridColumnStart: Math.floor(index / 2) + 1,
    "--index": index,
    "--ratio": ratio,
    "--color": `var(--ring${index + 1})`,
  };
  const count = useIncrementalNumber(total, 700, 1000);
  const callMascots = (e: PointerEvent & { currentTarget: HTMLElement }) => {
    const target = e.currentTarget;
    import("./easteregg.tsx").then((m) => m.callMascots(target));
  };
  return (
    <article className="continent" style={style} onClick={callMascots}>
      <header>
        <h2>
          {name}: <strong>{count}</strong>
        </h2>
        <ul className="continent__medals">
          <Medal type="Gold" count={gold} />
          <Medal type="Silver" count={silver} />
          <Medal type="Bronze" count={bronze} />
        </ul>
      </header>
      <div className="ring"></div>
    </article>
  );
}

/**
 * Small medal displayed under the continent title
 */
function Medal({ type, count }: { type: string; count: number }) {
  const animatedCount = useIncrementalNumber(count, 700, 1000);
  return (
    <li
      className={"continent__medal " + type.toLowerCase()}
      aria-label={`${type} medals`}
    >
      {animatedCount}
    </li>
  );
}

render(<Graph />, document.getElementById("graph")!);
document
  .querySelectorAll(".cloak")
  .forEach((el) => el.classList.remove("cloak"));
