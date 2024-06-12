import { Glob } from "bun";
import { toGraph } from './graph';
import { EdgeTables, VertexTables } from "./tables";

async function loadDefinitions() {
    const glob = new Glob("**/*.ts");

    const vt = new VertexTables();
    const et = new EdgeTables();

    // Scans the current working directory and each of its sub-directories recursively
    for await (const path of glob.scan(__dirname + "/entities")) {
        const module = await import(`./entities/${path}`);
        if (typeof module.define === "function") module.define(vt, et);
    }

    const { vertices, edges, adjacency } = toGraph(vt.all, et.all);

    console.log("Vertices: ", vertices);
    console.log("Edges: ", edges);
    console.log("Adjacency: ", adjacency);
}

await loadDefinitions();