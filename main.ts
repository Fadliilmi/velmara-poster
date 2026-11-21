// SPDX-License-Identifier: MIT
// Velmara — The Poster for a Place That Isn't There.
// This program writes the entry image to /output/entry.png.
// It reads the poster asset shipped in this repository and copies it
// byte for byte. No network, no pixels generated at runtime: the poster
// itself is the entry, and this program is its courier.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "assets", "poster.png");
const outputDir = "/output";
const output = join(outputDir, "entry.png");

const bytes = readFileSync(source);
// The poster is 1024x1024 and under the 1 MiB gate; copy it unchanged
// so the graded bytes are exactly the poster this session made.
mkdirSync(outputDir, { recursive: true });
writeFileSync(output, bytes);
console.log(`wrote ${output} (${bytes.length} bytes)`);
