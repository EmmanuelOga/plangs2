import { caller, type NN_Partial } from "../util";
import { validChars } from "./vertex";
import type { VertexTable } from "./vertex_table";

/** Key: from ~ to */
export type KFTS = `${string}~${string}`;

/** Key: type ~ directed ~ from ~ to */
export type EdgeKey = `${string}~${"d" | "u"}~${string}~${string}`;

/** Extract the components off of an edge key. */
export function parseEdgeKey(eid: string): {
  type: string;
  d: boolean;
  from: string;
  to: string;
} {
  const parts = eid.split("~");
  return { type: parts[0], d: parts[1] === "d", from: parts[2], to: parts[3] };
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

  set(from: T_Id_V_From, to: T_Id_V_To, value: T_EdgeData): this {
    const kft = this.#edgeKey(from, to);
    this.#edge.set(kft, value);
    this.#updateAdjacent(from, to, "add");
    return this;
  }

  get(from: T_Id_V_From, to: T_Id_V_To): T_EdgeData | undefined {
    if (!this.validParams(from, to)) throw new Error(`Invalid id(s) in edge: ${from} -> ${to}.`);
    return this.#edge.get(this.#edgeKey(from, to));
  }

  has(from: T_Id_V_From, to: T_Id_V_To): boolean {
    if (!this.validParams(from, to)) return false;
    return this.#edge.has(this.#edgeKey(from, to));
  }

  delete(from: T_Id_V_From, to: T_Id_V_To): boolean {
    this.#updateAdjacent(from, to, "delete");
    return this.#edge.delete(this.#edgeKey(from, to));
  }

  /** Like set, stablishes a connection, but without setting any edge data (also won't overwrite any existing edge data). */
  connect(from: T_Id_V_From, to: T_Id_V_To): NN_Partial<T_EdgeData> {
    const key = this.#edgeKey(from, to);
    let edata = this.#edge.get(key);
    if (!edata) {
      edata = {} as T_EdgeData;
      this.#edge.set(key, edata);
    }
    this.#updateAdjacent(from, to, "add");
    return edata as NN_Partial<T_EdgeData>;
  }

  merge(from: T_Id_V_From, to: T_Id_V_To, value: NN_Partial<T_EdgeData>): NN_Partial<T_EdgeData> {
    const key = this.#edgeKey(from, to);

    // We'll store value as the new data, but we want to keep any existing data that is not in value.
    if (this.#edge.has(key)) {
      const existing = this.#edge.get(key);
      for (const prop in existing) {
        // biome-ignore lint/suspicious/noExplicitAny: the existing value is of type T_EdgeData.
        if (!(prop in value)) value[prop as any] = existing[prop];
      }
    }

    this.#edge.set(key, value as T_EdgeData);
    this.#updateAdjacent(from, to, "add");

    return value;
  }

  validParams(from: T_Id_V_From, to: T_Id_V_To): boolean {
    return this.fromTable.validParams(from) && this.toTable.validParams(to);
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

  #edgeKey(from: string, to: string): KFTS {
    let from_ = from;
    let to_ = to;

    // When not directed, we want the same key for both directions,
    // this way the same data is stored in the edge map for both directions.
    if (!this.directed && from_ > to_) {
      const t_from_ = from_;
      from_ = to_;
      to_ = t_from_;
    }

    return `${from_}~${to_}`;
  }

  *[Symbol.iterator](): IterableIterator<[EdgeKey, T_EdgeData]> {
    // This yields keys similar to what {@link EdgeTable#edgeKey} would return.
    const prefix = `${this.type}~${this.directed ? "d" : "u"}~`;
    for (const [key, edge] of this.#edge) {
      yield [`${prefix}${key}` as EdgeKey, edge];
    }
  }

  edgeKey(from: string, to: string): EdgeKey {
    return `${this.type}~${this.directed ? "d" : "u"}~${this.#edgeKey(from, to)}`;
  }

  #updateAdjacent(from: T_Id_V_From, to: T_Id_V_To, operation: "add" | "delete") {
    if (!this.validParams(from, to)) throw new Error(`Invalid id(s) in edge: ${from} -> ${to}`);

    // If not directed, use the same map for both directions.
    const mapFrom = this.#adjFrom;
    const mapTo = this.directed ? this.#adjTo : this.#adjFrom;

    if (!mapFrom.has(from)) mapFrom.set(from, new Set());
    if (!mapTo.has(to)) mapTo.set(to, new Set());

    if (operation === "add") {
      mapFrom.get(from)?.add(to);
      mapTo.get(to)?.add(from);
    } else {
      mapFrom.get(from)?.delete(to);
      mapTo.get(to)?.delete(from);
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

  *adjacentFrom(from: T_Id_V_From | T_Id_V_To): Generator<string, void, undefined> {
    if (!(this.fromTable.validParams(from) || this.toTable.validParams(from))) throw new Error(`Invalid id: ${from}.`);
    yield* this.#adjFrom.get(from) ?? [];
  }

  *adjacentTo(to: T_Id_V_To): Generator<string, void, undefined> {
    if (!this.toTable.validParams(to)) throw new Error(`Invalid id: ${to}.`);
    yield* (this.directed ? this.#adjTo : this.#adjFrom).get(to) ?? [];
  }
}
