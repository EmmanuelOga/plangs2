export abstract class Vertex<T_Data extends { id: T }, T = T_Data["id"]> {
  readonly data: Partial<T_Data> = {};

  constructor(public readonly id: T) {
    this.data.id = this.id;
  }

  merge(data: Partial<T_Data>): this {
    Object.assign(this.data, data);
    return this;
  }
}

// biome-ignore lint/suspicious/noExplicitAny: The vertex types can be any vertex type.
export class VertexMap<V extends Vertex<any>> {
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

export class EdgeMap<E extends Edge<any>> {
  readonly #adjTo = new Map<E["to"], Set<E>>();
  readonly #adjFrom = new Map<E["from"], Set<E>>();
}
