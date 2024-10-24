/**
 * Wrapper to work with potentially empty or undefined iterables.
 */
export class IterTap<T> implements Iterable<T> {
  readonly array: T[] | undefined;

  constructor(iterable: Iterable<T> | undefined) {
    this.array = Array.isArray(iterable) ? iterable : iterable ? [...iterable] : undefined;
  }

  get existing(): NonNullable<T>[] {
    return this.filter(v => !!v) as NonNullable<T>[];
  }

  get reverse(): IterTap<T> {
    return new IterTap(this.array?.reverse());
  }

  get first(): T | undefined {
    return this.array ? this.array[0] : undefined;
  }

  filter(callback: (value: T, index: number, array: T[]) => boolean) {
    return this.array ? this.array.filter(callback) : [];
  }

  map<R>(callback: (value: T, index: number, array: T[]) => R): IterTap<R> {
    return new IterTap(this.array ? this.array.map(callback) : []);
  }

  sort(cmp?: (a: T, b: T) => number): T[] {
    return this.array ? [...this.array].sort(cmp) : [];
  }

  join(str: string): string {
    return this.array ? this.array.join(str) : "";
  }

  get isEmpty(): boolean {
    return this.array ? this.array.length === 0 : true;
  }

  includes(val: T): boolean {
    return this.array ? this.array.includes(val) : false;
  }

  some(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
    return this.array ? this.array.some(predicate) : false;
  }

  find(predicate: (value: T, index?: number, obj?: T[]) => boolean): T | undefined {
    return this.array?.find(predicate);
  }

  get size(): number {
    return this.array ? this.array.length : 0;
  }

  tap<R>(callback: (array: T[]) => R): R | undefined {
    if (this.array && this.array.length > 0) return callback(this.array);
  }

  [Symbol.iterator](): Iterator<T> {
    return this.array ? this.array[Symbol.iterator]() : [].values();
  }
}

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

/**
 * Insert elements in the array if they are not already present.
 */
export function arrayMerge<T>(
  target: T[],
  newData: T[],
  similar: (l1: T, l2: T) => boolean = (l1, l2) => l1 === l2,
  onDuplicate?: (prevElem: T, newElem: T) => void,
) {
  for (const newElem of newData) {
    const prevElem = target.find((elem: T) => similar(elem, newElem));
    if (prevElem) {
      onDuplicate?.(prevElem, newElem);
    } else {
      target.push(newElem);
    }
  }
}
