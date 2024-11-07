import type { LanguishLang } from "@plangs/languist/types";

// Convert the keys.csv file to a JSON file.
async function readCsv(name: string) {
  const content = await Bun.file(name).text();
  const lines = content.split("\n");
  const rows = lines
    .filter(line => line.trim())
    .map(line => line.split(",").map(value => value.replace(/(^")|("$)/g, "")))
    .slice(1);

  const result: LanguishLang[] = [];

  for (const row of rows) {
    if (!row[0]) {
      console.log("Missing key in row", row);
      continue;
    }
    const data: LanguishLang = { githubName: row[0] };
    if (row[1]) data.wikipedia = row[1];
    if (row[2]) data.reddit = row[2];
    if (row[3]) data.stackoverflow = row[3].split("|");
    result.push(data);
  }

  return result;
}

Bun.write("src/languish.json", JSON.stringify(await readCsv("in/languish-keys.csv")));
