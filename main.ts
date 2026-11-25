import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const text = "My password expired again, so IT gave me a new one: 'MustChange123' — I changed it to 'MustChange124' and called it career growth.";
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
