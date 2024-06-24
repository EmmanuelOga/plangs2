import type { NN_Partial } from "../util";
import { validChars } from "./vertex";
import type { VertexTable } from "./vertex_table";

/** Key: from ~ to ~ suffix */
export type KFTS = `${string}~${string}~${string}`;

/** Key: type ~ directed (d | u) ~ from ~ to ~ suffix */
export type EdgeKey = `${string}~${"d" | "u"}~${string}~${string}~${string}`;

/** Extract the components off of an edge key. */
export function parseEdgeKey(eid: string): {
  type: string;
  d: boolean;
  from: string;
  to: string;
  s: string;
} {
  const parts = eid.split("~");
  return { type: parts[0], d: parts[1] === "d", from: parts[2], to: parts[3], s: parts[4] };
}

// biome-ignore lint/suspicious/noExplicitAny: We don't care what kind of data the vertices have.
type _T_Any_V_Data = any;

/**
 * Stores edges between vertices.
 */
export class EdgeTable<T_Id_V_From extends string, T_Id_V_To extends string, T_EdgeData>
  implements Iterable<[EdgeKey, T_EdgeData]>
{
  readonly #edge: Map<string, T_EdgeData> = new Map();
  readonly #adjFrom: Map<string, Set<string>> = new Map();
  readonly #adjTo: Map<string, Set<string>> = new Map();

  constructor(
    public readonly type: string,
    public readonly directed: boolean,
    public readonly fromTable: VertexTable<T_Id_V_From, _T_Any_V_Data>,
    public readonly toTable: VertexTable<T_Id_V_To, _T_Any_V_Data>,
  ) {
    if (!validChars(type)) throw new Error(`'${type}' is not valid as an edge type.`);
  }

  set(from: T_Id_V_From, to: T_Id_V_To, value: T_EdgeData, suffix = ""): this {
    const kft = this.#edgeKey(from, to, suffix);
    this.#edge.set(kft, value);
    this.#updateAdjacent(from, to, suffix, "add");
    return this;
  }

  get(from: T_Id_V_From, to: T_Id_V_To, suffix = ""): T_EdgeData | undefined {
    if (!this.validParams(from, to, suffix))
      throw new Error(`Invalid id(s) in edge: ${from} -> ${to}${suffix ? ` ${suffix}` : ""}.`);
    return this.#edge.get(this.#edgeKey(from, to, suffix));
  }

  has(from: T_Id_V_From, to: T_Id_V_To, suffix = ""): boolean {
    if (!this.validParams(from, to, suffix)) return false;
    return this.#edge.has(this.#edgeKey(from, to, suffix));
  }

  delete(from: T_Id_V_From, to: T_Id_V_To, suffix = ""): boolean {
    this.#updateAdjacent(from, to, suffix, "delete");
    return this.#edge.delete(this.#edgeKey(from, to, suffix));
  }

  /** Like set, stablishes a connection, but without setting any edge data (also won't overwrite any existing edge data). */
  connect(from: T_Id_V_From, to: T_Id_V_To, suffix = ""): NN_Partial<T_EdgeData> {
    const key = this.#edgeKey(from, to, suffix);
    let edata = this.#edge.get(key);
    if (!edata) {
      edata = {} as T_EdgeData;
      this.#edge.set(key, edata);
    }
    this.#updateAdjacent(from, to, suffix, "add");
    return edata as NN_Partial<T_EdgeData>;
  }

  merge(from: T_Id_V_From, to: T_Id_V_To, value: NN_Partial<T_EdgeData>, suffix = ""): NN_Partial<T_EdgeData> {
    const key = this.#edgeKey(from, to, suffix);

    // We'll store value as the new data, but we want to keep any existing data that is not in value.
    if (this.#edge.has(key)) {
      const existing = this.#edge.get(key);
      for (const prop in existing) {
        // biome-ignore lint/suspicious/noExplicitAny: the existing value is of type T_EdgeData.
        if (!(prop in value)) value[prop as any] = existing[prop];
      }
    }

    this.#edge.set(key, value as T_EdgeData);
    this.#updateAdjacent(from, to, suffix, "add");

    return value;
  }

  validParams(from: T_Id_V_From, to: T_Id_V_To, suffix = ""): boolean {
    return this.fromTable.validParams(from) && this.toTable.validParams(to) && (!suffix || validChars(suffix));
  }

  /**
   * A single graph should not use two edge tables with the same key,
   * otherwise there could be edges with duplicate keys.
   */
  get tableKey(): string {
    const t = this.type;
    const d = this.directed ? "d" : "u";
    const from = this.fromTable.vtype;
    const to = this.toTable.vtype;
    return `${t}~${d}~${from}~${to}`;
  }

  #edgeKey(from: string, to: string, suffix: string): KFTS {
    let from_ = from;
    let to_ = to;

    // When not directed, we want the same key for both directions,
    // this way the same data is stored in the edge map for both directions.
    if (!this.directed && to_ > from_) {
      const t_from_ = from_;
      from_ = to_;
      to_ = t_from_;
    }

    return `${from_}~${to_}~${suffix}`;
  }

  *[Symbol.iterator](): IterableIterator<[EdgeKey, T_EdgeData]> {
    // This yields keys similar to what {@link EdgeTable#edgeKey} would return.
    const prefix = `${this.type}~${this.directed ? "d" : "u"}~`;
    for (const [key, edge] of this.#edge) {
      yield [`${prefix}${key}` as EdgeKey, edge];
    }
  }

  edgeKey(from: string, to: string, suffix: string): EdgeKey {
    return `${this.type}~${this.directed ? "d" : "u"}~${this.#edgeKey(from, to, suffix)}`;
  }

  #updateAdjacent(from: T_Id_V_From, to: T_Id_V_To, suffix: string, operation: "add" | "delete") {
    if (!this.validParams(from, to, suffix))
      throw new Error(`Invalid id(s) in edge: ${from} -> ${to}${suffix ? ` ~ ${suffix}` : ""}`);

    // Add suffix to allow multiple edges between the same vertices.
    const from_ = suffix ? `${from}~${suffix}` : from;
    const to_ = suffix ? `${to}~${suffix}` : to;

    // If not directed, use the same map for both directions.
    const mapFrom = this.#adjFrom;
    const mapTo = this.directed ? this.#adjTo : this.#adjFrom;

    if (!mapFrom.has(from_)) mapFrom.set(from_, new Set());
    if (!mapTo.has(to_)) mapTo.set(to_, new Set());

    // Note that the suffix is not included in the adjacency sets, only on the maps.
    // This is because the sets don't need to distinguish between edges: they are just sets of vertices.
    if (operation === "add") {
      mapFrom.get(from_)?.add(to);
      mapTo.get(to_)?.add(from);
    } else {
      mapFrom.get(from_)?.delete(to);
      mapTo.get(to_)?.delete(from);
    }
  }

  /** Number of edges. */
  public get size(): number {
    return this.#edge.size;
  }

  toJSON(): Record<string, T_EdgeData> {
    const result: Record<string, T_EdgeData> = {};
    for (const [key, value] of this.#edge.entries()) {
      result[key] = value;
    }
    return result;
  }

  *adjacentFrom(from: T_Id_V_From | T_Id_V_To, suffix = ""): Generator<string, void, undefined> {
    if (!this.fromTable.validParams(from)) throw new Error(`Invalid id: ${from}.`);
    const from_ = suffix ? `${from}~${suffix}` : from;
    yield* this.#adjFrom.get(from_) ?? [];
  }

  *adjacentTo(to: T_Id_V_To, suffix = ""): Generator<string, void, undefined> {
    if (!this.toTable.validParams(to)) throw new Error(`Invalid id: ${to}.`);
    const to_ = suffix ? `${to}~${suffix}` : to;
    yield* (this.directed ? this.#adjTo : this.#adjFrom).get(to_) ?? [];
  }
}
