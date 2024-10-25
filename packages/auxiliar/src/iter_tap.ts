/**
 * Wrapper to work with potentially empty or undefined iterables.
 */
export class IterTap<T> implements Iterable<T> {
  readonly array: T[] | undefined;

  constructor(iterable: Iterable<T> | undefined) {
    this.array = Array.isArray(iterable) ? iterable : iterable ? [...iterable] : undefined;
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

  includes(val: T): boolean {
    return this.array ? this.array.includes(val) : false;
  }

  some(predicate: (value: T, index: number, array: T[]) => boolean): boolean {
    return this.array ? this.array.some(predicate) : false;
  }

  find(predicate: (value: T, index?: number, obj?: T[]) => boolean): T | undefined {
    return this.array?.find(predicate);
  }

  tap<R>(callback: (array: T[]) => R): R | undefined {
    if (this.array && this.array.length > 0) return callback(this.array);
  }

  get isEmpty(): boolean {
    return this.array ? this.array.length === 0 : true;
  }

  get size(): number {
    return this.array ? this.array.length : 0;
  }

  get existing(): NonNullable<T>[] {
    return this.filter(v => !!v) as NonNullable<T>[];
  }

  get reverse(): IterTap<T> {
    return new IterTap(this.array ? [...this.array].reverse() : undefined);
  }

  get first(): T | undefined {
    return this.array && this.array.length > 0 ? this.array[0] : undefined;
  }

  get last(): T | undefined {
    return this.array && this.array.length > 0 ? this.array[this.array.length - 1] : undefined;
  }

  [Symbol.iterator](): Iterator<T> {
    return this.array ? this.array[Symbol.iterator]() : [].values();
  }
}
