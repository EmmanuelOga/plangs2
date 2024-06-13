import { Glob } from "bun";
import { VTables, ETables } from "./tables";
import { toGraph } from "./graph";

async function loadDefinitions() {
    const glob = new Glob("**/*.ts");

    const vt = new VTables();
    const et = new ETables();

    // Scans the current working directory and each of its sub-directories recursively
    for await (const path of glob.scan(__dirname + "/entities")) {
        const module = await import(`./entities/${path}`);
        if (typeof module.define === "function") module.define(vt, et);
    }

    const { vertices, edges, adjacency } = toGraph(vt.allVertices(), et.allEdges());

    console.log("Vertices: ", vertices);
    console.log("Edges: ", edges);
    console.log("Adjacency: ", adjacency);
}

await loadDefinitions();