type VertexKey = `${string}+${string}`;

export abstract class Vertex<KeyPrefix extends string, Data, Key extends VertexKey = `${KeyPrefix}+${string}`> {
  abstract readonly kind: KeyPrefix;

  /** Serializable data. */
  data: Partial<Data> = {};

  constructor(readonly key: Key) {}

  /** Shallow merge data. */
  merge(data: Partial<Data>): this {
    Object.assign(this.data, data);
    return this;
  }

  /** The key without the `${kind}+` prefix. */
  get plainKey(): string {
    return this.key.replace(/^[a-z]+\+/, "");
  }

  /**
   * Lower-case first letter of the {@link plainKey}, or {@link NON_AZ} if it starts with a non-letter.
   * Useful when doing things like organizing the data in a folder structure.
   */
  get classifier(): string {
    const pk = this.plainKey;
    return /^[a-z]/i.test(pk) ? pk[0].toLowerCase() : NON_AZ;
  }

  toJSON() {
    return this.data;
  }
}

/* Used to classify vertices whose plain key don't start with a letter. */
export const NON_AZ = "other";

/**
 * A container for vertices and identity map:
 *
 * - Maintains a map of Vertices by Vertex key.
 * - Creates Vertices as needed using the factory function.
 */
export class Vertices<V extends Vertex<any, any>> {
  readonly vertices = new Map<V["key"], V>();

  constructor(private factory: (key: V["key"]) => V) {}

  set(key: V["key"], data: V["data"]): V {
    const vertex = this.factory(key).merge(data);
    this.vertices.set(key, vertex);
    return vertex;
  }

  get(key: V["key"]): V | undefined {
    return this.vertices.get(key);
  }

  has(key: V["key"]): boolean {
    return this.vertices.has(key);
  }

  delete(key: V["key"]): boolean {
    return this.vertices.delete(key);
  }

  setMany(collection: [V["key"], V["data"]][]): this {
    for (const [key, data] of collection) this.set(key, data);
    return this;
  }

  toJSON(): [V["key"], V["data"]][] {
    return [...this.vertices].map(([key, vertex]) => [key, vertex.toJSON()]);
  }

  static fromJSON<V extends Vertex<any, any>>(factory: (key: V["key"]) => V, data: [V["key"], V["data"]][]): Vertices<V> {
    return new Vertices<V>(factory).setMany(data);
  }
}

/**
 * Keep track of forward and backward edges between vertices.
 *
 * - Only allows a single edge between vertices.
 * - There's no edge data.
 * - Tracks vertices keys only (the actual vertices lives in the graph's {@link Vertices}).
 */
export class Edges<KeyFrom extends VertexKey, KeyTo extends VertexKey> {
  readonly #forward = new Map<KeyFrom, Set<KeyTo>>();
  readonly #backward = new Map<KeyTo, Set<KeyFrom>>();

  add(fromId: KeyFrom, toIds: KeyTo | KeyTo[]): this {
    let forward = this.#forward.get(fromId);
    if (!forward) this.#forward.set(fromId, (forward = new Set()));

    for (const toId of Array.isArray(toIds) ? toIds : [toIds]) {
      forward.add(toId);

      let backward = this.#backward.get(toId);
      if (!backward) this.#backward.set(toId, (backward = new Set()));
      backward.add(fromId);
    }

    return this;
  }

  delete(fromId: KeyFrom, toId: KeyTo): boolean {
    const f = this.#forward.get(fromId)?.delete(toId) ?? false;
    const b = this.#backward.get(toId)?.delete(fromId) ?? false;
    return f || b;
  }

  forward(fromId: KeyFrom): Set<KeyTo> {
    return this.#forward.get(fromId) ?? new Set();
  }

  backward(toId: KeyTo): Set<KeyFrom> {
    return this.#backward.get(toId) ?? new Set();
  }

  has(fromId: KeyFrom, toId: KeyTo): boolean {
    return this.#forward.get(fromId)?.has(toId) ?? false;
  }

  toJSON(): [KeyFrom, KeyTo[]][] {
    return [...this.#forward].map(([key, set]) => [key, [...set]]);
  }

  static fromJSON<F extends string, T extends string>(data: [F, T[]][]): Edges<F, T> {
    const rel = new Edges<F, T>();
    for (const [fromKey, toKeys] of data) {
      for (const toKey of toKeys) {
        rel.add(fromKey as F, toKey as T);
      }
    }
    return rel;
  }
}

/** This class provides shrotcuts to work with relationship between vertices directly **from** the vertex. */
export class RelFrom<FromVertex extends Vertex<any, any>, ToVertex extends Vertex<any, any>> {
  constructor(
    readonly from: FromVertex,
    readonly edges: Edges<FromVertex["key"], ToVertex["key"]>,
    readonly toContainer: Vertices<ToVertex>,
  ) {}

  add(toKeys: ToVertex["key"] | ToVertex["key"][]): FromVertex {
    this.edges.add(this.from.key, toKeys);
    return this.from;
  }

  remove(toKeys: ToVertex["key"] | ToVertex["key"][]): FromVertex {
    for (const toKey of Array.isArray(toKeys) ? toKeys : [toKeys]) this.edges.delete(this.from.key, toKey);
    return this.from;
  }

  get keys(): Set<ToVertex["key"]> {
    return this.edges.forward(this.from.key);
  }

  vertices(): ToVertex[] {
    return [...this.keys].map(k => this.toContainer.get(k)).filter(v => v) as ToVertex[];
  }

  has(toKey: ToVertex["key"]): boolean {
    return this.edges.has(this.from.key, toKey);
  }
}

/** This class provides shrotcuts to work with relationship between vertices directly **to** the vertex. */
export class RelTo<FromVertex extends Vertex<any, any>, ToVertex extends Vertex<any, any>> {
  constructor(
    readonly to: ToVertex,
    readonly edges: Edges<FromVertex["key"], ToVertex["key"]>,
    readonly fromContainer: Vertices<FromVertex>,
  ) {}

  add(fromKeys: FromVertex["key"] | FromVertex["key"][]): ToVertex {
    for (const fromKey of Array.isArray(fromKeys) ? fromKeys : [fromKeys]) this.edges.add(fromKey, this.to.key);
    return this.to;
  }

  remove(fromKeys: FromVertex["key"] | FromVertex["key"][]): ToVertex {
    for (const fromKey of Array.isArray(fromKeys) ? fromKeys : [fromKeys]) this.edges.delete(fromKey, this.to.key);
    return this.to;
  }

  get keys(): Set<ToVertex["key"]> {
    return this.edges.backward(this.to.key);
  }

  vertices(): FromVertex[] {
    return [...this.keys].map(k => this.fromContainer.get(k)).filter(v => v) as FromVertex[];
  }

  has(fromKey: FromVertex["key"]): boolean {
    return this.edges.has(fromKey, this.to.key);
  }
}
