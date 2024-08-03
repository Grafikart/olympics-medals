import { writeFileSync } from "node:fs";
import jsdom from "jsdom";

/**
 * Fetch medals data scrapping olympiandatabase.com
 */
async function main() {
  const html = await fetch(
    "https://www.olympiandatabase.com/index.php?id=180770&L=1",
  ).then((r) => r.text());
  const dom = new jsdom.JSDOM(html);
  const tables = dom.window.document.querySelectorAll("table.frame_space");
  if (tables.length < 3) {
    throw new Error("Cannot find the table with medals");
  }
  const rows = tables[2].querySelectorAll("tr");
  const continents = [];
  for (let i = 0; i < 5; i++) {
    const cells = rows[3 + i * 2].querySelectorAll("td");
    continents.push({
      name: cells[1].textContent.trim(),
      gold: parseInt(cells[3].textContent.trim(), 10),
      bronze: parseInt(cells[4].textContent.trim(), 10),
      silver: parseInt(cells[5].textContent.trim(), 10),
      total: parseInt(cells[6].textContent.trim(), 10),
    });
  }
  writeFileSync("./src/continents.json", JSON.stringify(continents, null, 2));
  console.log("Medals.json generated with success");
}

main();
