import { transpileModule } from "typescript";
import type { AnyValue, Value } from "./value";

export type Predicate<T> = (v: T) => boolean;

export type EncodedFilter<T> = { mode: "all" | "any"; values: T[] };

/**
 * A filter that can match any or all of the elements against a predicate.
 */
export class Filter<T> implements Value<Filter<T>> {
  constructor(
    public mode: "all" | "any" = "all",
    public readonly values: Set<T> = new Set(),
  ) {}

  get isEmpty(): boolean {
    return this.values.size === 0;
  }

  add(value: T): this {
    this.values.add(value);
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
    if (this.values.size === 0) return true;
    for (const v of this.values) if (!predicate(v)) return false;
    return true;
  }

  any(predicate: Predicate<T>): boolean {
    if (this.values.size === 0) return true;
    for (const v of this.values) if (predicate(v)) return true;
    return false;
  }

  toJSON(): EncodedFilter<T> {
    return { mode: this.mode, values: [...this.values] };
  }

  serializable() {
    return this.isEmpty ? undefined : this.toJSON();
  }

  get value() {
    return this;
  }

  get isPresent(): boolean {
    return !this.isEmpty;
  }

  get isAbsent(): boolean {
    return !this.isPresent;
  }

  equalTo(other?: Filter<T>): boolean {
    if (!other) return false;

    if (!(other.value instanceof Filter)) return false;
    if (this.mode !== other.value.mode) return false;
    if (this.values.size !== other.value.values.size) return false;
    for (const v of this.values) if (!other.value.values.has(v)) return false;
    return true;
  }
}

// biome-ignore lint/suspicious/noExplicitAny: there's no _precise_ way to know the type of the values here.
export function isEncodedFilter(value: unknown): value is EncodedFilter<any> {
  return typeof value === "object" && value !== null && "mode" in value && "values" in value && Array.isArray(value.values);
}
