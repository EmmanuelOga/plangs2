/** Two dimensional Map. */
export class Map2<K1, K2, V> {
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

  delete(k1: K1, k2: K2): boolean {
    return this.#map.get(k1)?.delete(k2) ?? false;
  }

  get(k1: K1, k2: K2): V | undefined {
    return this.#map.get(k1)?.get(k2);
  }

  getMap(k1: K1): Map<K2, V> | undefined {
    return this.#map.get(k1);
  }

  get size(): number {
    let size = 0;
    for (const map of this.#map.values()) size += map.size;
    return size;
  }

  /** Returns the size of the second dimension for a given key in the first dimension. */
  size2(k1: K1): number {
    return this.#map.get(k1)?.size ?? 0;
  }

  /** Returns an iterator of the keys in the first dimension. */
  keys(): IterableIterator<K1> {
    return this.#map.keys();
  }

  entries(): IterableIterator<[K1, Map<K2, V>]> {
    return this.#map.entries();
  }

  values(): V[] {
    return [...this.#map.values()].flatMap(map => [...map.values()]);
  }

  has(k1: K1, k2: K2): boolean {
    return this.#map.get(k1)?.has(k2) ?? false;
  }
}
