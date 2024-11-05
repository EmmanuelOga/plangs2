/** Two dimensional Map. */
export class Map2<K1, K2, V> {
  #map = new Map<K1, Map<K2, V>>();

  has(k1: K1, k2: K2): boolean {
    return this.#map.get(k1)?.has(k2) ?? false;
  }

  set(k1: K1, k2: K2, v: V): this {
    let m2 = this.#map.get(k1);
    if (!m2) {
      m2 = new Map();
      this.#map.set(k1, m2);
    }
    m2.set(k2, v);
    return this;
  }

  getOrSet(k1: K1, k2: K2, whenMissing: () => V): V {
    let v = this.get(k1, k2);
    if (v === undefined) this.set(k1, k2, (v = whenMissing()));
    return v;
  }

  delete(k1: K1, k2: K2): boolean {
    return this.#map.get(k1)?.delete(k2) ?? false;
  }

  // Delete all keys [k1, *] from the map.
  delete1(k1: K1): boolean {
    const map = this.#map.get(k1);
    if (map) {
      this.#map.delete(k1);
      return map.size > 0;
    }
    return false;
  }

  clear() {
    this.#map.clear();
  }

  get(k1: K1, k2: K2): V | undefined {
    return this.#map.get(k1)?.get(k2);
  }

  getMap(k1: K1): Map<K2, V> | undefined {
    return this.#map.get(k1);
  }

  /** Get a consolidated map of all keys in the second dimension. */
  getMap2(): Map<K2, V> {
    const res = new Map<K2, V>();
    for (const [_k1, map2] of this.#map) {
      for (const [k2, v] of map2) res.set(k2, v);
    }
    return res;
  }

  get size(): number {
    let size = 0;
    for (const map of this.#map.values()) size += map.size;
    return size;
  }

  get isEmpty(): boolean {
    for (const map of this.#map.values()) if (map.size > 0) return false;
    return true;
  }

  /** Returns the size of the second dimension for a given key in the first dimension. */
  size2(k1: K1): number {
    return this.#map.get(k1)?.size ?? 0;
  }

  /** Returns an iterator of the keys in the first dimension. */
  keys(): IterableIterator<K1> {
    return this.#map.keys().filter(k1 => (this.#map.get(k1)?.size ?? 0) > 0);
  }

  entries(): IterableIterator<[K1, Map<K2, V>]> {
    return this.#map.entries().filter(([_k1, map2]) => map2.size > 0);
  }

  *flatEntries(): IterableIterator<[K1, K2, V]> {
    for (const [k1, map2] of this.#map) {
      for (const [k2, v] of map2) yield [k1, k2, v];
    }
  }

  values(): V[] {
    return [...this.#map.values()].flatMap(map => [...map.values()]);
  }

  /**
   * NOTE: This will work best if the keys are strings, symbols or numbers.
   * Otherwise JavaScript will convert them to strings, which may not be what you want.
   */
  toObject<T>(mapper: (val: V) => T): ToObject<T> {
    const object: ToObject<T> = {};
    for (const [k1, k2, v] of this.flatEntries() as IterableIterator<[AnyKey, AnyKey, V]>) {
      (object[k1] = object[k1] ?? {})[k2] = mapper(v);
    }
    return object;
  }

  toString(): string {
    const entries = [...this.flatEntries()].map(([k1, k2, v]) => `(${k1}, ${k2}) => ${v}`);
    return `Map2(size: ${this.size})${entries.length > 0 ? ` { ${entries.join(", ")} }` : ""}`;
  }
}

// biome-ignore lint/suspicious/noExplicitAny: Any object key is valid.
type AnyKey = keyof any;
type ToObject<Map2V> = Record<AnyKey, Record<AnyKey, Map2V>>;
