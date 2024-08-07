/** Vertex wrapper. */
export abstract class Vertex<T_Data extends { id: T_Id }, T_Id = T_Data["id"]> {
  readonly data: Partial<T_Data> = {};

  constructor(public readonly id: T_Id) {
    this.data.id = this.id;
  }

  merge(data: Partial<T_Data>): this {
    Object.assign(this.data, data);
    return this;
  }
}

/** Extracts the type param from Vertex */
export type VertexParam<T> = T extends Vertex<infer T_Data> ? T_Data : never;

/** Stores vertices by vertex id. */
export class VertexMap<V extends Vertex<T_Data>, T_Data extends { id: T_Data["id"] } = VertexParam<V>> {
  readonly #map = new Map<V["id"], V>();

  constructor(private ctor: (id: V["id"]) => V) {}

  get(id: V["id"]): V {
    const v = this.#map.get(id);
    if (v) return v;
    const newVertex = this.ctor(id);
    this.#map.set(id, newVertex);
    return newVertex;
  }

  has(id: V["id"]): boolean {
    return this.#map.has(id);
  }
}

/** Edge wrapper. */
export abstract class Edge<
  T_Data extends { type: T_Type; from: T_From; to: T_To },
  T_Type = T_Data["type"],
  T_From = T_Data["from"],
  T_To = T_Data["to"],
> {
  readonly data: Partial<T_Data> = {};

  constructor(
    public readonly type: T_Type,
    public readonly from: T_From,
    public readonly to: T_To,
  ) {
    this.data.type = this.type;
    this.data.from = this.from;
    this.data.to = this.to;
  }

  merge(data: Partial<T_Data>): this {
    Object.assign(this.data, data);
    return this;
  }
}

/** Extracts the type param from Edge. */
type EdgeParam<T> = T extends Edge<infer T> ? T : never;

/** Stores edges by the compound keys (from, to) and (to, from). */
export class EdgeMap<E extends Edge<T>, T extends { type: T["type"]; from: T["from"]; to: T["to"] } = EdgeParam<E>> {
  readonly #adjFrom = new Map2<T["from"], T["to"], E>();
  readonly #adjTo = new Map2<T["to"], T["from"], E>();

  constructor(private ctor: (from: T["from"], to: T["to"]) => E) {}

  connect(from: T["from"], to: T["to"]): E {
    let e = this.#adjFrom.get(from, to);
    if (e) return e;
    e = this.ctor(from, to);
    this.#adjFrom.set(from, to, e);
    this.#adjTo.set(to, from, e);
    return e;
  }

  adjFrom(from: T["from"]): Map<T["to"], E> {
    return this.#adjFrom.getMap(from) ?? new Map();
  }

  adjTo(to: T["to"]): Map<T["from"], E> {
    return this.#adjFrom.getMap(to) ?? new Map();
  }
}

/** Two dimensional Map. */
class Map2<K1, K2, V> {
  #map = new Map<K1, Map<K2, V>>();

  set(k1: K1, k2: K2, v: V): this {
    let m2 = this.#map.get(k1);
    if (!m2) {
      m2 = new Map();
      this.#map.set(k1, m2);
    }
    m2.set(k2, v);
    return this;
  }

  get(k1: K1, k2: K2): V | undefined {
    const m2 = this.#map.get(k1);
    if (!m2) return undefined;
    return m2.get(k2);
  }

  getMap(k1: K1): Map<K2, V> | undefined {
    return this.#map.get(k1);
  }

  has(k1: K1, k2: K2): boolean {
    const m2 = this.#map.get(k1);
    if (!m2) return false;
    return m2.has(k2);
  }
}
