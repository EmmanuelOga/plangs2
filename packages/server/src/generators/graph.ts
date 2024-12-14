import { generateGraph } from "@plangs/graphgen/index";
import { PLANGS_GRAPH_SPEC } from "@plangs/plangs/graph/spec";

const dst = "packages/plangs/src/graph/generated.ts";
const diagram = "packages/plangs/doc";
console.log("Generating graph to", dst, new Date().toISOString());
await generateGraph(PLANGS_GRAPH_SPEC, dst, diagram);
