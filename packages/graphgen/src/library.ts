export type VKey<Prefix extends string> = `${Prefix}+${string}`;

/**
 * Vertex object:
 *
 * The string keys use a prefix go help differentiate vertices:
 * "key+1", "another+2", etc.
 *
 * Serializes to the plain data object without the key.
 */
export abstract class Vertex<KeyPrefix extends string, Data> {
  /** Serializable data. */
  data: Partial<Data> = {};

  constructor(readonly key: VKey<KeyPrefix>) {}

  /** Shallow merge data. */
  merge(data: Partial<Data>): this {
    Object.assign(this.data, data);
    return this;
  }

  /** Clear all keys, without replacing the object. */
  clearData(): this {
    const data = this.data as Record<string, any>;
    for (const key in Object.keys(data)) delete data[key];
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

  /** {@link merge} can be used to load serialized data into an instance. */
  toJSON() {
    return this.data;
  }

  toString() {
    return this.key;
  }
}

/** Type of a Vertex with any key and data, useful for generic containers. */
// biome-ignore lint/suspicious/noExplicitAny: we want to keep track of vertices with any key and data.
export type AnyVertex = Vertex<any, any>;

/* Used to classify vertices whose plain key don't start with a letter. */
export const NON_AZ = "-";

/**
 * A container for vertices and identity map:
 *
 * - Maintains a map of Vertices by Vertex key.
 * - Creates Vertices as needed using the factory function.
 */
export class Vertices<V extends AnyVertex> {
  readonly map = new Map<V["key"], V>();

  constructor(
    /** Name of the kind of Vertices. */
    readonly name: string,
    /** Kind of Vertices, used as prefix of the Key. */
    readonly kind: string,
    private factory: (key: V["key"]) => V,
  ) {}

  set(key: V["key"], data: V["data"] = {}): V {
    const vertex = this.factory(key).merge(data);
    this.map.set(key, vertex);
    return vertex;
  }

  get(key: V["key"]): V | undefined {
    return this.map.get(key);
  }

  has(key: V["key"]): boolean {
    return this.map.has(key);
  }

  delete(key: V["key"]): boolean {
    return this.map.delete(key);
  }

  clear(): void {
    this.map.clear();
  }

  get keys() {
    return this.map.keys();
  }

  get values() {
    return this.map.values();
  }

  get entries() {
    return this.map.entries();
  }

  toJSON(): Record<V["key"], V["data"]> {
    return Object.fromEntries([...this.map].map(([key, vertex]) => [key, vertex.toJSON()])) as Record<V["key"], V["data"]>;
  }
}

/**
 * Keep track of forward and backward edges between vertices.
 *
 * - Only allows a single edge between vertices.
 * - Tracks vertices keys only. The actual vertices live in the {@link Vertices} containers.
 * - Doesn't keep track of any edge data for now.
 */
export class Edges<From extends AnyVertex, To extends AnyVertex> {
  readonly #forward = new Map<From["key"], Set<To["key"]>>();
  readonly #backward = new Map<To["key"], Set<From["key"]>>();

  /**
   * We keep track of the from and to sources {@link Vertices} containers,
   * so we can easily retrieve the actual vertex from its key when needed.
   */
  constructor(
    readonly fromSource: Vertices<From>,
    readonly toSource: Vertices<To>,
    /** Description of the direct relationship from -> to. */
    readonly descDirect: string,
    /** Description of the inverse relationship to -> from. */
    readonly descInverse: string,
  ) {}

  /**
   * Track a relationship between two vertices.
   * **Note**: the user is responsible of ensuring the vertices exist.
   */
  add(fromKey: From["key"], ...toKeys: To["key"][]): this {
    let forward = this.#forward.get(fromKey);
    if (!forward) this.#forward.set(fromKey, (forward = new Set()));

    for (const toKey of toKeys) {
      forward.add(toKey);

      let backward = this.#backward.get(toKey);
      if (!backward) this.#backward.set(toKey, (backward = new Set()));

      backward.add(fromKey);
    }

    return this;
  }

  /** Get the vertices from the keys. */
  get(fromKey: From["key"], toKey: To["key"]): [From | undefined, To | undefined] {
    return [this.fromSource.get(fromKey), this.toSource.get(toKey)];
  }

  /** Shortcut: add a relationship and return the target vertices. */
  addGet(fromKey: From["key"], toKey: To["key"]): [From | undefined, To | undefined] {
    return this.add(fromKey, toKey).get(fromKey, toKey);
  }

  delete(fromKey: From["key"], toKey: To["key"]): boolean {
    const f = this.#forward.get(fromKey)?.delete(toKey) ?? false;
    const b = this.#backward.get(toKey)?.delete(fromKey) ?? false;
    return f || b;
  }

  forward(fromKey: From["key"]): Set<To["key"]> {
    return this.#forward.get(fromKey) ?? new Set();
  }

  backward(toKey: To["key"]): Set<From["key"]> {
    return this.#backward.get(toKey) ?? new Set();
  }

  has(fromKey: From["key"], toKey: To["key"]): boolean {
    return this.#forward.get(fromKey)?.has(toKey) ?? false;
  }

  /** Return all keys `[fromKey, Set<toKey>]`. */
  get entriesForward(): [From["key"], Set<To["key"]>][] {
    return [...this.#forward].map(([key, set]) => [key, set]);
  }

  /** Return all keys `[toKey, Set<fromKey>]`. */
  get entriesBackward(): [From["key"], Set<To["key"]>][] {
    return [...this.#backward].map(([key, set]) => [key, set]);
  }

  /** Map all Vertex keys to their respective Vertices or undefined if missing. */
  get vertices(): [From["key"], From | undefined, To["key"], To | undefined][] {
    const result: [From["key"], From | undefined, To["key"], To | undefined][] = [];
    for (const [fromKey, toKeys] of this.entriesForward) {
      const from = this.fromSource.get(fromKey);
      for (const toKey of toKeys) result.push([fromKey, from, toKey, this.toSource.get(toKey)]);
    }
    return result;
  }

  /* Number of relationships. */
  get size() {
    let size = 0; // Both #forward and #backward should have the same size.
    for (const set of this.#forward.values()) size += set.size;
    return size;
  }

  /* {@link addMany} can be used to load back the result of the serialization. */
  toJSON(): Record<From["key"], To["key"][]> {
    return Object.fromEntries(this.entriesForward.map(([fromKey, setToKeys]) => [fromKey, [...setToKeys]])) as Record<From["key"], To["key"][]>;
  }
}

export type SerializedGraph = {
  vertices: Record<string, Record<string, AnyVertex["data"]>>;
  edges: Record<string, Record<string, string[]>>;
};

/** This class provides shrotcuts to work with relationship between vertices directly **from** the vertex. */
export class RelFrom<FromVertex extends AnyVertex, ToVertex extends AnyVertex> {
  constructor(
    readonly from: FromVertex,
    readonly edges: Edges<FromVertex, ToVertex>,
  ) {}

  get edgeDesc(): string {
    return this.edges.descDirect;
  }

  get targetVertices() {
    return this.edges.toSource;
  }

  add(...toKeys: ToVertex["key"][]): FromVertex {
    this.edges.add(this.from.key, ...toKeys);
    return this.from;
  }

  /** Add keys if they match existing vertices only. */
  maybeAdd(toKeys: string[]): FromVertex {
    const existing = (toKeys as ToVertex["key"][]).filter(k => this.edges.toSource.has(k));
    return this.add(...existing);
  }

  remove(...toKeys: ToVertex["key"][]): FromVertex {
    for (const toKey of toKeys) this.edges.delete(this.from.key, toKey);
    return this.from;
  }

  has(toKey: ToVertex["key"]): boolean {
    return this.edges.has(this.from.key, toKey);
  }

  get keys(): Set<ToVertex["key"]> {
    return this.edges.forward(this.from.key);
  }

  get values(): ToVertex[] {
    return [...this.keys].map(k => this.edges.toSource.get(k)).filter(v => v) as ToVertex[];
  }

  get size() {
    return this.keys.size;
  }

  toString() {
    return `RelFrom(${this.from}, ${this.edgeDesc})`;
  }
}

/** This class provides shrotcuts to work with relationship between vertices directly **to** the vertex. */
export class RelTo<FromVertex extends AnyVertex, ToVertex extends AnyVertex> {
  constructor(
    readonly to: ToVertex,
    readonly edges: Edges<FromVertex, ToVertex>,
  ) {}

  get edgeDesc(): string {
    return this.edges.descInverse;
  }

  get targetVertices() {
    return this.edges.fromSource;
  }

  add(...fromKeys: FromVertex["key"][]): ToVertex {
    for (const fromKey of fromKeys) this.edges.add(fromKey, this.to.key);
    return this.to;
  }

  /** Add keys if they match existing vertices only. */
  maybeAdd(fromKeys: string[]): ToVertex {
    const existing = (fromKeys as FromVertex["key"][]).filter(k => this.edges.fromSource.has(k));
    return this.add(...existing);
  }

  remove(...fromKeys: FromVertex["key"][]): ToVertex {
    for (const fromKey of fromKeys) this.edges.delete(fromKey, this.to.key);
    return this.to;
  }

  has(fromKey: FromVertex["key"]): boolean {
    return this.edges.has(fromKey, this.to.key);
  }

  get keys(): Set<FromVertex["key"]> {
    return this.edges.backward(this.to.key);
  }

  get values(): FromVertex[] {
    return [...this.keys].map(k => this.edges.fromSource.get(k)).filter(v => v) as FromVertex[];
  }

  get size() {
    return this.keys.size;
  }

  toString() {
    return `RelTo(${this.to}, ${this.edgeDesc})`;
  }
}
