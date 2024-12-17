import { generateGraph } from "@plangs/graphgen/index";
import { PLANGS_GRAPH_SPEC } from "@plangs/plangs/graph/spec";

const argv = process.argv[2] ?? "";

if (argv === "") {
  const dst = "packages/plangs/src/graph/generated.ts";
  console.log("Generating graph to", dst, new Date().toISOString());
  await generateGraph(PLANGS_GRAPH_SPEC, dst);
} else {
  console.error("Invalid argument:", argv);
}
