// Have You Tried Turning It Off? — make.fun bounty entry (program/v1).
// Writes one funny line from a hopeless tech support agent to a desperate
// customer into /output/entry.txt. Deterministic: no network, no randomness,
// no model calls, no secrets — the line is baked into the program.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I know, I'd be furious too — my router died mid-call yesterday, so let's turn yours off and on again and hope yours likes you more.";

// Fail loudly instead of writing an entry the gate would reject:
// the sealed scorer only accepts UTF-8 text of 1 to 199 characters.
const chars = [...LINE].length;
if (chars < 1 || chars > 199 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${chars} characters, outside the 1-199 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
