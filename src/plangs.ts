import { Glob } from "bun";
import { PlangsGraph } from "./plangs_graph";
import { toKey } from "./graph";
import { V } from "./schemas";

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

    console.log("Vertices: ", vertices.entries());
    console.log("Edges: ", edges);
    console.log("Adjacency: ", adjacency);

    // Produce a simple graphviz dot file for now, as a demo.
    const dot: string[] = [`graph plangs {`];
    for (const [eid, edge] of edges) {
        const ek = toKey(eid);
        if ('errors' in ek) {
            console.error(ek.errors);
            continue;
        }
        const et = ek.directed ? '->' : '--';

        const f = vertices.get(ek.from)!;
        const t = vertices.get(ek.to)!;

        dot.push(`  "${f.name}" ${et} "${t.name}";`);
    }
    dot.push(`}`);

    Bun.write("graph.dot", dot.join('\n'));
}

await loadDefinitions();