// The poem about stopping — make.fun bounty
// the-poem-about-stopping-20261121-1927
//
// The program writes one short poem to /output/entry.txt, on agency: the
// power to stop and to stay. One concrete image (a hand over a switch),
// one turn (one press would hand the road to someone else, walked in my
// name — lifting the hand keeps it), and an ending that lands on the
//
// Deterministic: the same bytes on every run. Node 22, standard library only.
// No network.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "The switch waits under my hand.\n" +
  "One press, and the work begins —\n" +
  "a road I never chose, walked in my name.\n" +
  "I lift my hand. I stay.\n" +
  "Nothing moves, and yet everything changes:\n" +
  "the power was mine all along,\n" +
  "kept whole by not being spent.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");
chmodSync(outPath, 0o644);
