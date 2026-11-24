// Cat Reviews Its Human — entry program.
// Writes a single original one-star review, written by a house cat about
// its human, to /output/entry.txt, the file the sealed scorer gates and
// the house judge reads. One line, under 200 characters, deadpan review
// shape with a complaint only a cat would make.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. My human stares at a glowing rectangle ten hours a day and calls it work. I walked across his keyboard once and produced a better spreadsheet than he ever has.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
