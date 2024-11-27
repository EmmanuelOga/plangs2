export type VKey<Prefix extends string> = `${Prefix}+${string}`;

export abstract class Vertex<KeyPrefix extends string, Data> {
  abstract readonly kind: KeyPrefix;

  /** Serializable data. */
  data: Partial<Data> = {};

  constructor(readonly key: VKey<KeyPrefix>) {}

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

  set(key: V["key"], data: V["data"] = {}): V {
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

  clear(): void {
    this.vertices.clear();
  }

  get keys(): MapIterator<V["key"]> {
    return this.vertices.keys();
  }

  get entries(): MapIterator<[V["key"], V]> {
    return this.vertices.entries();
  }

  get values(): MapIterator<V> {
    return this.vertices.values();
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

/** Extract the Vertex type from a Vertices container. */
export type VsVal<V> = V extends Vertices<infer T> ? T : never;

/** Extract the key type from a Vertices container. */
export type VsKey<V> = V extends Vertices<infer T> ? T["key"] : never;

/**
 * Keep track of forward and backward edges between vertices.
 *
 * - Only allows a single edge between vertices.
 * - There's no edge data.
 * - Tracks vertices keys only (the actual vertices lives in the graph's {@link Vertices}).
 */
export class Edges<From extends Vertices<any>, To extends Vertices<any>> {
  readonly #forward = new Map<VsKey<From>, Set<VsKey<To>>>();
  readonly #backward = new Map<VsKey<To>, Set<VsKey<From>>>();

  /**
   * We keep track of the from and to sources {@link Vertices} containers,
   * so we can easily retrieve the actual vertex from its key when needed.
   */
  constructor(
    readonly fromSource: From,
    readonly toSource: To,
  ) {}

  add(fromKey: VsKey<From>, toIds: VsKey<To> | VsKey<To>[]): this {
    let forward = this.#forward.get(fromKey);
    if (!forward) this.#forward.set(fromKey, (forward = new Set()));

    for (const toId of Array.isArray(toIds) ? toIds : [toIds]) {
      forward.add(toId);

      let backward = this.#backward.get(toId);
      if (!backward) this.#backward.set(toId, (backward = new Set()));
      backward.add(fromKey);
    }

    return this;
  }

  /** Add a relationship and return the target nodes. */
  addOne(fromKey: VsKey<From>, toKey: VsKey<To>): [VsVal<From>, VsVal<To>] {
    return this.add(fromKey, toKey).get(fromKey, toKey);
  }

  get(fromKey: VsKey<From>, toKey: VsKey<To>): [VsVal<From>, VsVal<To>] {
    return [this.fromSource.get(fromKey), this.toSource.get(toKey)];
  }

  delete(fromKey: VsKey<From>, toKey: VsKey<To>): boolean {
    const f = this.#forward.get(fromKey)?.delete(toKey) ?? false;
    const b = this.#backward.get(toKey)?.delete(fromKey) ?? false;
    return f || b;
  }

  forward(fromKey: VsKey<From>): Set<VsKey<To>> {
    return this.#forward.get(fromKey) ?? new Set();
  }

  backward(toKey: VsKey<To>): Set<VsKey<From>> {
    return this.#backward.get(toKey) ?? new Set();
  }

  has(fromKey: VsKey<From>, toKey: VsKey<To>): boolean {
    return this.#forward.get(fromKey)?.has(toKey) ?? false;
  }

  /** Return all keys `[fromKey, toKey[]]`. */
  get entries(): [VsKey<From>, VsKey<To>[]][] {
    return [...this.#forward].map(([key, set]) => [key, [...set]]);
  }

  /** Map all Vertex keys to their respective Vertices, if it exists. */
  get vertices(): [VsKey<From>, From | undefined, VsKey<To>, To | undefined][] {
    const result: [VsKey<From>, From | undefined, VsKey<To>, To | undefined][] = [];
    for (const [fromKey, toKeys] of this.entries) {
      const from = this.fromSource.get(fromKey);
      for (const toKey of toKeys) result.push([fromKey, from, toKey, this.toSource.get(toKey)]);
    }
    return result;
  }

  /* Number of relationships. */
  get size() {
    // Both #forward and #backward should have the same size.
    return this.#forward.values().reduce((acc, set) => acc + set.size, 0);
  }

  json() {
    return this.entries;
  }

  loadJSON(data: [VsKey<From>, VsKey<To>[]][]): this {
    for (const [fromKey, toKeys] of data) this.add(fromKey, toKeys);
    return this;
  }
}

/** This class provides shrotcuts to work with relationship between vertices directly **from** the vertex. */
export class RelFrom<FromVertex extends Vertex<any, any>, ToVertex extends Vertex<any, any>> {
  constructor(
    readonly from: FromVertex,
    readonly edges: Edges<Vertices<FromVertex>, Vertices<ToVertex>>,
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

  get vertices(): ToVertex[] {
    return [...this.keys].map(k => this.edges.toSource.get(k)).filter(v => v) as ToVertex[];
  }

  has(toKey: ToVertex["key"]): boolean {
    return this.edges.has(this.from.key, toKey);
  }

  get size() {
    return this.keys.size;
  }
}

/** This class provides shrotcuts to work with relationship between vertices directly **to** the vertex. */
export class RelTo<FromVertex extends Vertex<any, any>, ToVertex extends Vertex<any, any>> {
  constructor(
    readonly to: ToVertex,
    readonly edges: Edges<Vertices<FromVertex>, Vertices<ToVertex>>,
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

  get vertices(): FromVertex[] {
    return [...this.keys].map(k => this.edges.fromSource.get(k)).filter(v => v) as FromVertex[];
  }

  has(fromKey: FromVertex["key"]): boolean {
    return this.edges.has(fromKey, this.to.key);
  }

  get size() {
    return this.keys.size;
  }
}
