import type { Value } from "./value";

export type Predicate<T> = (v: T) => boolean;

export type EncodedFilter<T> = { mode: "all" | "any"; values: T[] };

/**
 * A filter that can match any or all of the elements against a predicate.
 */
export class Filter<T> implements Value<Filter<T>> {
  constructor(
    public mode: "all" | "any" = "any",
    public readonly values: Set<T> = new Set(),
  ) {}

  get isEmpty(): boolean {
    return this.values.size === 0;
  }

  add(...values: T[]): this {
    for (const val of values) this.values.add(val);
    return this;
  }

  delete(value: T): boolean {
    return this.values.delete(value);
  }

  has(value: T): boolean {
    return this.values.has(value);
  }

  clear() {
    this.values.clear();
  }

  get size(): number {
    return this.values.size;
  }

  matches(predicate: Predicate<T>): boolean {
    return this.mode === "all" ? this.all(predicate) : this.any(predicate);
  }

  all(predicate: Predicate<T>): boolean {
    for (const v of this.values) if (!predicate(v)) return false;
    return true;
  }

  any(predicate: Predicate<T>): boolean {
    for (const v of this.values) if (predicate(v)) return true;
    return false;
  }

  get value() {
    return this;
  }

  get isPresent(): boolean {
    return !this.isEmpty;
  }

  equalTo(other?: Filter<T>): boolean {
    if (!other) return false;

    if (!(other instanceof Filter)) return false;
    if (this.mode !== other.mode) return false;
    if (this.values.size !== other.values.size) return false;
    for (const v of this.values) if (!other.values.has(v)) return false;
    return true;
  }

  clone(): this {
    return new Filter(this.mode, new Set(this.values)) as this;
  }

  toJSON(): EncodedFilter<T> {
    return { mode: this.mode, values: [...this.values] };
  }

  serializable() {
    return this.isEmpty ? undefined : this.toJSON();
  }

  // biome-ignore lint/suspicious/noExplicitAny: we can't know for sure the type of the values here.
  static isSerialized(val: unknown): val is { mode: "all" | "any"; values: any[] } {
    return (
      !!val && typeof val === "object" && "mode" in val && (val.mode === "all" || val.mode === "any") && "values" in val && Array.isArray(val.values)
    );
  }

  toString() {
    return `Filter(${this.mode}: ${JSON.stringify([...this.values]).slice(1, -1)})`;
  }
}

// biome-ignore lint/suspicious/noExplicitAny: there's no _precise_ way to know the type of the values here.
export function isEncodedFilter(value: unknown): value is EncodedFilter<any> {
  return typeof value === "object" && value !== null && value !== undefined && "mode" in value && "values" in value && Array.isArray(value.values);
}
