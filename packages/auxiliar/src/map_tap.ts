import { IterTap } from "./iter_tap";

/**
 * Wrapper to work with potentially empty or undefined maps.
 */
export class MapTap<K, V> implements Iterable<[K, V]> {
  constructor(readonly map?: Map<K, V>) {}

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

  [Symbol.iterator](): Iterator<[K, V]> {
    return (this.map ?? new Map())[Symbol.iterator]();
  }
}
