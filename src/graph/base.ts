import { type EdgeKey, EdgeTable } from "./edge_table";
import { VertexTable } from "./vertex_table";

// biome-ignore lint/suspicious/noExplicitAny: We need to store any kind vertex or edge.
type _Any = any;

/**
 * A Graph consists of set of Vertices and Edges.
 */
export class Graph {
    readonly vtables: Map<string, VertexTable<_Any, _Any>> = new Map();
    readonly etables: Map<string, EdgeTable<_Any, _Any, _Any>> = new Map();

    protected v_table<T_VData, T_VId extends string>(type: string): VertexTable<T_VId, T_VData> {
        const table = new VertexTable<T_VId, T_VData>(type);
        if (this.vtables.has(type)) throw new Error(`Table already defined: ${table.vtype}`);
        this.vtables.set(table.vtype, table);
        return table;
    }

    protected e_table<T_EdgeData, T_VId_From extends string, T_VId_To extends string>(
        type: string,
        from: VertexTable<T_VId_From, _Any>,
        to: VertexTable<T_VId_To, _Any>,
        directed: 'directed' | 'undirected' = 'directed',
    ): EdgeTable<T_VId_From, T_VId_To, T_EdgeData> {
        if (type.length === 0) throw new Error('Type cannot be empty.');
        const table = new EdgeTable<T_VId_From, T_VId_To, _Any>(type, from, to, directed === 'directed');
        if (this.etables.has(table.tableKey)) throw new Error(`Table already defined: ${table.tableKey}`);
        this.etables.set(table.tableKey, table);
        return table;
    }

    *allVertices(): IterableIterator<[string, _Any]> {
        for (const vt of this.vtables.values()) { yield* vt; }
    }

    *allEdges(): IterableIterator<[EdgeKey, _Any]> {
        for (const et of this.etables.values()) { yield* et; }
    }
}