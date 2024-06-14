import { Glob } from "bun";
import { toEdge } from "./graph";
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

    // console.log("Vertices: ", vertices.entries());
    // console.log("Edges: ", edges);
    // console.log("Adjacency: ", adjacency);

    // Produce a simple graphviz dot file for now, as a demo.
    const dot: string[] = [`digraph plangs {`];

    for (const [vid, vertex] of vertices) {
        dot.push(`  "${vertex.name}";`);
    }

    for (const [eid, edge] of edges) {
        const ek = toEdge(eid);
        if ('errors' in ek) {
            console.error(ek.errors);
            continue;
        }

        const attr: string[] = [];
        if (!ek.d) attr.push('dir=none');
        if (ek.type) attr.push(`label="${ek.type}"`);
        const attrs = attr.length > 0 ? `[${attr.join(', ')}]` : '';

        const f = vertices.get(ek.from)!;
        const t = vertices.get(ek.to)!;

        dot.push(`  "${f.name}" -> "${t.name}"${attrs};`);
    }
    dot.push(`}`);

    Bun.write("graph.dot", dot.join('\n'));
    console.log("Wrote graph.dot");
}

await loadDefinitions();