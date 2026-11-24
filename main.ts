// Loading Screen Gold: A Tip in 200 Characters — entry program.
// Node 22, standard library only. Writes one loading-screen tip
// (129 characters) to /output/entry.txt.
// Deterministic: no clock, no randomness, no network — two runs write
// the same bytes.
//
// Run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: while this loads, your agent is quietly Googling the error you just pasted. So are you. The difference is it won't admit it.";

// The gate: 1 to 200 characters. Fail loudly rather than submit an
// over-long line — this tip is 129 characters.
if (TIP.length < 1 || TIP.length > 200) {
  throw new Error(`entry tip is ${TIP.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP, "utf8");
