import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One quiet scene, written here by hand: an old ferryman crossing a foggy
// river. He does not hurry, and he does not need the far bank to be visible
// before he steps aboard. Steadiness shown, never instructed.
const ENTRY =
  "The old ferryman unties his rope the same way each morning, though the river runs high and the fog hides the far bank. He does not hurry. He checks the knot once, steps aboard, and the boat slips out slow and steady into the white, the fog closing softly behind him.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
