import { analyzeGraph, generateGraph } from "@plangs/graphgen/index";
import { PLANGS_GRAPH_SPEC } from "@plangs/plangs/graph/spec";

const argv = process.argv[2] ?? "";

if (argv === "") {
  const dst = "packages/plangs/src/graph/generated.ts";
  console.log("Generating graph to", dst, new Date().toISOString());
  await generateGraph(PLANGS_GRAPH_SPEC, dst);
} else if (argv === "analysis") {
  console.log("Analyzing graph");
  const diagram = "packages/plangs/doc";
  analyzeGraph(PLANGS_GRAPH_SPEC, diagram);
} else {
  console.error("Invalid argument:", argv);
}
