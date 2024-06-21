import type { NN_Partial } from "../util";
import { validChars } from "./vertex";
import type { VertexTable } from "./vertex_table";

/** Key:      from      to */
export type KFT = `${string}~${string}`;

/** Key:          type   ~  from   ~  to     ~  dir.      ~ suffix */
export type EdgeKey = `${string}~${string}~${string}~${"d" | "u"}~${string}`;

/** Extract the components off of an edge key. */
export function parseEdgeKey(eid: string): {
  type: string;
  from: string;
  to: string;
  d: boolean;
  s: string;
} {
  const parts = eid.split("~");
  return {
    type: parts[0],
    from: parts[1],
    to: parts[2],
    d: parts[3] === "d",
    s: parts[4],
  };
}

// biome-ignore lint/suspicious/noExplicitAny: We don't care what kind of data the vertices have.
type _T_Any_V_Data = any;

type _TableData<T_EdgeData> = {
  edge: Map<string, T_EdgeData>;
  adjFrom: Map<string, Set<string>>;
  adjTo: Map<string, Set<string>>;
};

/**
 * Stores edges between vertices.
 */
export class EdgeTable<T_Id_V_From extends string, T_Id_V_To extends string, T_EdgeData>
  implements Iterable<[EdgeKey, T_EdgeData]>
{
  // Each suffix uses its own edge and adjacency map.
  // If we ever find ourselves with a lot of suffix usage, we may need to change this.
  private readonly _perSuffix: Map<string, _TableData<T_EdgeData>> = new Map();

  constructor(
    public readonly type: string,
    public readonly from_t: VertexTable<T_Id_V_From, _T_Any_V_Data>,
    public readonly to_t: VertexTable<T_Id_V_To, _T_Any_V_Data>,
    public readonly directed: boolean,
  ) {
    if (!validChars(type)) throw new Error(`'${type}' is not valid as an edge type.`);
  }

  set(from: T_Id_V_From, to: T_Id_V_To, value: T_EdgeData, suffix?: string): this {
    const [kft, data] = this._init(from, to, suffix);
    data.edge.set(kft, value);
    this._updateAdjacent(data, from, to, "add");
    return this;
  }

  get(from: T_Id_V_From, to: T_Id_V_To, suffix?: string): T_EdgeData | undefined {
    if (!this.validParams(from, to, suffix))
      throw new Error(`Invalid id(s) in edge: ${from} -> ${to}${s ? ` ${s}` : ""}.`);
    const data = this._perSuffix.get(suffix ?? "");
    return data?.edge?.get(this._keyFromTo(from, to));
  }

  has(from: T_Id_V_From, to: T_Id_V_To, suffix?: string): boolean {
    if (!this.validParams(from, to, suffix)) return false;
    const data = this._perSuffix.get(suffix ?? "");
    return !!data?.edge?.has(this._keyFromTo(from, to));
  }

  delete(from: T_Id_V_From, to: T_Id_V_To, suffix?: string): boolean {
    const [kft, data] = this._init(from, to, suffix);
    this._updateAdjacent(data, from, to, "delete");
    return data.edge.delete(kft);
  }

  /** Like set, stablishes a connection, but without setting any edge data (also won't overwrite any existing edge data). */
  connect(from: T_Id_V_From, to: T_Id_V_To, suffix?: string): NN_Partial<T_EdgeData> {
    const [kft, data] = this._init(from, to, suffix);
    let edata = data.edge.get(kft);
    if (!edata) {
      edata = {} as T_EdgeData;
      data.edge.set(kft, edata);
    }
    this._updateAdjacent(data, from, to, "add");
    return edata as NN_Partial<T_EdgeData>;
  }

  merge(from: T_Id_V_From, to: T_Id_V_To, value: T_EdgeData, suffix?: string): NN_Partial<T_EdgeData> {
    const [kft, data] = this._init(from, to, suffix);
    if (!data.edge.has(kft)) {
      data.edge.set(kft, {} as T_EdgeData);
    }
    const edata = Object.assign(data.edge.get(kft) as any, value);
    this._updateAdjacent(data, from, to, "add");
    return edata as NN_Partial<T_EdgeData>;
  }

  validParams(from: T_Id_V_From, to: T_Id_V_To, suffix?: string): boolean {
    return this.from_t.validParams(from) && this.to_t.validParams(to) && (!suffix || validChars(suffix));
  }

  *[Symbol.iterator](): IterableIterator<[EdgeKey, T_EdgeData]> {
    for (const [suffix, data] of this._perSuffix) {
      for (const [kft, edge] of data.edge) {
        const [from, to] = kft.split("~");
        yield [this.edgeKey(from, to, suffix), edge];
      }
    }
  }

  *adjacentTo(to: T_Id_V_To, suffix?: string) {
    if (!this.to_t.validParams(to)) throw new Error(`Invalid id: ${to}.`);
    const data = this._perSuffix.get(suffix ?? "");
    if (!data) return;
    const adjSet = (this.directed ? data.adjTo.get(to) : data.adjFrom.get(to)) ?? [];
    for (const vid of adjSet) {
      const from = vid as T_Id_V_From;
      yield { from, to, edata: data.edge.get(this._keyFromTo(from, to)) };
    }
  }

  *adjacentFrom(from: string, suffix?: string) {
    if (!this.from_t.validParams(from)) throw new Error(`Invalid id: ${from}.`);
    const data = this._perSuffix.get(suffix ?? "");
    if (!data) return;
    // We don't check this.directed since in both cases we want to return the same set.
    const adjSet = data.adjFrom.get(from) ?? [];
    for (const vid of adjSet) {
      const to = vid as T_Id_V_To;
      yield { from, to, edata: data.edge.get(this._keyFromTo(from, to)) };
    }
  }

  /** Number of edges. */
  public get size(): number {
    let size = 0;
    for (const data of this._perSuffix.values()) { size += data.edge.size; }
    return size;
  }

  /**
   * This key should be unique in a single graphs,
   * so that we can join all edges in a single graph without edge id conflicts.
   */
  get tableKey(): string {
    const t = this.type;
    const from = this.from_t.vtype;
    const to = this.to_t.vtype;
    const d = this.directed ? "d" : "u";
    return `${t}~${from}~${to}~${d}`;
  }

  edgeKey(from: string, to: string, suffix?: string): EdgeKey {
    return `${this.type}~${from}~${to}~${this.directed ? "d" : "u"}~${suffix ?? ""}`;
  }

  private _keyFromTo(from: string, to: string): KFT {
    // When not directed, we want the same key for both directions,
    // this way the same data is stored in the edge map for both directions.
    let from_ = from as string;
    let to_ = to as string;
    if (!this.directed && to_ > from_) {
      const t_from_ = from_;
      from_ = to_;
      to_ = t_from_;
    }
    return `${from_}~${to_}`;
  }

  private _init(from: T_Id_V_From, to: T_Id_V_To, suffix?: string): [KFT, _TableData<T_EdgeData>] {
    const s = suffix ?? "";
    if (!this.validParams(from, to, s)) throw new Error(`Invalid id(s) in edge: ${from} -> ${to}${s ? ` ${s}` : ""}.`);

    // Initialize containers for the given vertices, but don't stablish any data or connections.
    let d = this._perSuffix.get(s);
    if (d === undefined) {
      d = {
        edge: new Map<string, T_EdgeData>(),
        adjFrom: new Map<string, Set<string>>(),
        adjTo: new Map<string, Set<string>>(),
      };
      this._perSuffix.set(s, d);
    }

    // Use one ore two adjacency sets as needed.
    if (this.directed) {
      if (!d.adjFrom.has(from)) d.adjFrom.set(from, new Set());
      if (!d.adjTo.has(to)) d.adjTo.set(to, new Set());
    } else {
      if (!d.adjFrom.has(from)) d.adjFrom.set(from, new Set());
      if (!d.adjFrom.has(to)) d.adjFrom.set(to, new Set());
    }

    this.from_t.declare(from);
    this.to_t.declare(to);

    return [this._keyFromTo(from, to), d];
  }

  private _updateAdjacent(data: _TableData<T_EdgeData>, from: T_Id_V_From, to: T_Id_V_To, operation: "add" | "delete") {
    if (operation === "add") {
      if (this.directed) {
        data.adjFrom.get(from)?.add(to);
        data.adjTo.get(to)?.add(from);
      } else {
        data.adjFrom.get(from)?.add(to);
        data.adjFrom.get(to)?.add(from);
      }
    } else {
      if (this.directed) {
        data.adjFrom.get(from)?.delete(to);
        data.adjTo.get(to)?.delete(from);
      } else {
        data.adjFrom.get(from)?.delete(to);
        data.adjFrom.get(to)?.delete(from);
      }
    }
  }
}
