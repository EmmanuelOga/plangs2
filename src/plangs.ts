import { Glob } from "bun";
import { PlangsGraph } from "./plangs_graph";

/**
 * Scans the ./entities directory and loads all graph data from `define` functions.
 */
async function loadDefinitions() {
    const glob = new Glob("**/*.ts");

    const g = new PlangsGraph();

    for await (const path of glob.scan(__dirname + "/entities")) {
        const module = await import(`./entities/${path}`);
        if (typeof module.define === "function") module.define(g);
    }

    const { vertices, edges, adjacency } = g.merge();

    console.log("Vertices: ", vertices);
    console.log("Edges: ", edges);
    console.log("Adjacency: ", adjacency);
}

await loadDefinitions();