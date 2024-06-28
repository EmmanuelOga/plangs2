import { EdgeTable } from "./edge_table";
import { VertexTable } from "./vertex_table";

// biome-ignore lint/suspicious/noExplicitAny: We need to store any kind vertex or edge.
type _Any = any;

type SerializedGraph = {
  vtables: Record<string, _Any>;
  etables: Record<string, _Any>
}

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
    directed: "directed" | "undirected" = "directed",
  ): EdgeTable<T_VId_From, T_VId_To, T_EdgeData> {
    if (type.length === 0) throw new Error("Type cannot be empty.");
    const table = new EdgeTable<T_VId_From, T_VId_To, _Any>(type, directed === "directed", from, to);
    if (this.etables.has(table.tableKey)) throw new Error(`Table already defined: ${table.tableKey}`);
    this.etables.set(table.tableKey, table);
    return table;
  }

  get numEdges(): number {
    let count = 0;
    for (const et of this.etables.values()) {
      count += et.size;
    }
    return count;
  }

  get numVertices(): number {
    let count = 0;
    for (const vt of this.vtables.values()) {
      count += vt.size;
    }
    return count;
  }

  *allVertices(): IterableIterator<[string, _Any]> {
    for (const vt of this.vtables.values()) {
      yield* vt;
    }
  }

  *allEdges(): IterableIterator<[string, _Any]> {
    for (const et of this.etables.values()) {
      yield* et;
    }
  }

  toJSON(): SerializedGraph {
    const graph = { vtables: {}, etables: {} };

    for (const [key, val] of this.vtables) {
      console.log('Serializing vertex table:', key);
      graph.vtables[key] = val.toJSON();
    }

    for (const [key, val] of this.etables) {
      console.log('Serializing edge table:', key);
      graph.etables[key] = val.toJSON();
    }

    return graph;
  }

  loadJSON(data: SerializedGraph) {
    for (const [vtype, vdata] of Object.entries(data.vtables)) {
      const vt = this.vtables.get(vtype);
      if (!vt) throw new Error(`Vertex table not found: ${vtype}`);
      vt.loadJSON(vdata);
    }

    for (const [etype, edata] of Object.entries(data.etables)) {
      const et = this.etables.get(etype);
      if (!et) throw new Error(`Edge table not found: ${etype}`);
      et.loadJSON(edata);
    }
  }
}
