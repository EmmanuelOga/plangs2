import { validChars } from "./vertex";
import type { VertexTable } from "./vertex_table";

/** Extract the components off of an edge key. */
export function parseEdgeKey(eid: string): { type: string; from: string; to: string } {
  const parts = eid.split("~");
  return { type: parts[0], from: parts[1], to: parts[2] };
}

// biome-ignore lint/suspicious/noExplicitAny: We don't care what kind of data the vertices have.
type _T_Any_V_Data = any;

/**
 * Stores edges between vertices.
 */
export class EdgeTable<VID_From extends string, VID_To extends string, T_EdgeData>
  implements Iterable<[string, T_EdgeData]>
{
  readonly #edge: Map<string, T_EdgeData> = new Map();

  readonly #adjFrom: Map<string, Set<string>> = new Map();
  readonly #adjTo: Map<string, Set<string>> = new Map();

  constructor(
    public readonly type: string,
    public readonly fromTable: VertexTable<VID_From, _T_Any_V_Data>,
    public readonly toTable: VertexTable<VID_To, _T_Any_V_Data>,
  ) {
    if (!validChars(type)) throw new Error(`'${type}' is not valid as an edge type.`);
  }

  /**
   * A single graph should not use two edge tables with the same key,
   * otherwise there could be edges with duplicate keys.
   */
  get tableKey(): string {
    const t = this.type;
    const from = this.fromTable.vtype;
    const to = this.toTable.vtype;
    return `${t}~${from}~${to}`;
  }

  set(from: VID_From, to: VID_To, value: T_EdgeData): this {
    const kft = this.#edgeKey(from, to);
    this.#edge.set(kft, value);
    this.#updateAdjacent(from, to, "add");
    return this;
  }

  get(from: VID_From, to: VID_To): T_EdgeData | undefined {
    if (!this.validParams(from, to)) throw new Error(`Invalid id(s) in edge: ${from} -> ${to}.`);
    return this.#edge.get(this.#edgeKey(from, to));
  }

  has(from: VID_From, to: VID_To): boolean {
    if (!this.validParams(from, to)) return false;
    return this.#edge.has(this.#edgeKey(from, to));
  }

  delete(from: VID_From, to: VID_To): boolean {
    this.#updateAdjacent(from, to, "delete");
    return this.#edge.delete(this.#edgeKey(from, to));
  }

  /** Connect without setting any edge data. */
  connect(from: VID_From, to: VID_To): Partial<T_EdgeData> {
    const key = this.#edgeKey(from, to);
    let edata = this.#edge.get(key);
    if (!edata) {
      this.#edge.set(key, (edata = {} as T_EdgeData));
    }
    this.#updateAdjacent(from, to, "add");
    return edata as Partial<T_EdgeData>;
  }

  merge(from: VID_From, to: VID_To, value: Partial<T_EdgeData>): Partial<T_EdgeData> {
    const key = this.#edgeKey(from, to);
    this.#updateAdjacent(from, to, "add");

    if (!this.#edge.has(key)) {
      this.#edge.set(key, value as T_EdgeData);
      return value;
    }

    const existing = this.#edge.get(key) as Partial<T_EdgeData>;
    Object.assign(existing, value);
    return existing;
  }

  validParams(from: VID_From, to: VID_To): boolean {
    return this.fromTable.validParams(from) && this.toTable.validParams(to);
  }

  #edgeKey(from: string, to: string): string {
    return `${from}~${to}`;
  }

  /** Yields keys parseable with {@link parseEdgeKey} and the data of the edge. */
  *[Symbol.iterator](): IterableIterator<[string, T_EdgeData]> {
    for (const [key, edge] of this.#edge) {
      yield [`${this.type}~${key}`, edge];
    }
  }

  #updateAdjacent(from: VID_From, to: VID_To, operation: "add" | "delete") {
    if (!this.validParams(from, to)) throw new Error(`Invalid id(s) in edge: ${from} -> ${to}`);

    if (!this.#adjFrom.has(from)) this.#adjFrom.set(from, new Set());
    if (!this.#adjTo.has(to)) this.#adjTo.set(to, new Set());

    if (operation === "add") {
      this.#adjFrom.get(from)?.add(to);
      this.#adjTo.get(to)?.add(from);
    } else {
      this.#adjFrom.get(from)?.delete(to);
      this.#adjTo.get(to)?.delete(from);
    }
  }

  /** Number of edges. */
  public get size(): number {
    return this.#edge.size;
  }

  *adjacentFrom(from: VID_From): Generator<string, void, undefined> {
    if (!this.fromTable.validParams(from)) throw new Error(`Invalid id: ${from}.`);
    yield* this.#adjFrom.get(from) ?? [];
  }

  *adjacentTo(to: VID_To): Generator<string, void, undefined> {
    if (!this.toTable.validParams(to)) throw new Error(`Invalid id: ${to}.`);
    yield* this.#adjTo.get(to) ?? [];
  }

  toJSON(): Record<string, T_EdgeData> {
    const result: Record<string, T_EdgeData> = {};
    for (const [key, value] of this.#edge.entries()) {
      result[key] = value;
    }
    return result;
  }

  loadJSON(edata: Record<string, T_EdgeData>) {
    for (const [kft, value] of Object.entries(edata)) {
      const [from, to] = kft.split("~");
      this.#updateAdjacent(from as VID_From, to as VID_To, "add");
      this.#edge.set(kft, value);
    }
  }
}
