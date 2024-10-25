/**
 * Wrapper to work with potentially empty or undefined maps.
 */
export class MapTap<K, V> implements Iterable<[K, V]> {
  constructor(private readonly map?: Map<K, V>) {}

  get size(): number {
    return this.map ? this.map.size : 0;
  }

  has(val: K): boolean {
    return this.map ? this.map.has(val) : false;
  }

  tap<R>(callback: (tap: this) => R): R | undefined {
    if (this.map && this.map.size > 0) return callback(this);
  }

  get keys(): IterTap<K> {
    return new IterTap(this.map?.keys());
  }

  get values(): IterTap<V> {
    return new IterTap(this.map?.values());
  }

  get entries(): IterTap<[K, V]> {
    return new IterTap(this.map?.entries());
  }

  merge(other?: Iterable<[K, V]>): this {
    if (other && this.map) for (const [key, value] of other) this.map.set(key, value);
    return this;
  }

  /** Create a new map wrapped in MapTap from the entries of this one. */
  toMapTap<NewK, NewV>(callback: (tap: MapTap<NewK, NewV>, key: K, value: V) => void): MapTap<NewK, NewV> {
    const tap = new MapTap(new Map<NewK, NewV>());
    for (const [key, value] of this.entries) callback(tap, key, value);
    return tap;
  }

  [Symbol.iterator](): Iterator<[K, V]> {
    return this.map ? this.map[Symbol.iterator]() : [].values();
  }
}
