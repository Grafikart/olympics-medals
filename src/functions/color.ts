export function rgbToHex(color: string) {
  return color
    .split("(")[1]
    .split(")")[0]
    .split(",")
    .map((x) => x.trim())
    .map((x) => {
      x = parseInt(x).toString(16);
      return x.length === 1 ? "0" + x : x;
    })
    .join("");
}
