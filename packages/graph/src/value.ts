/**
 * The objective of this interface is to simplify checking if a value is present (aka "non blank").
 * This avoids the need to sprinkle runtime type checks all over the place.
 *
 * This is useful in places were we don't want to serialize empty values,
 * if we want to check there are any present values on a form, etc.
 */
export interface Value<T> {
  readonly value: T;

  /**
   * "Presence" implies that the value is not blank or empty:
   * * null, undefined or empty string are considered "blank", and hence not present.
   * * 0 is present, even though JavaScript considers it falsy.
   * * Containers of any kind (Set, Map, Array) are present if they have at least one element.
   */
  get isPresent(): boolean;

  /** Compare values. */
  equalTo(other?: AnyValue): boolean;

  /**
   * This is meant to return something that can be easilty serialized.
   * For instance if the value is a Set, it should return an array (since JSON doesn't support Sets).
   * * The result should contain enough information to reconstruct the value.
   * * Blank / non present values should be omitted.
   */
  // biome-ignore lint/suspicious/noExplicitAny: we want to be flexible here.
  serializable(): any;
}

// biome-ignore lint/suspicious/noExplicitAny: Allow for flexibility in the type of the value.
export type AnyValue = Value<any>;

// biome-ignore lint/suspicious/noExplicitAny: we don't care about the type of set, only if it is empty or not.
type ValWrapped = number | boolean | string | Set<any> | RegExp | undefined | null;

/** Wrapper for a few common types. */
export class Val implements Value<ValWrapped> {
  /** Be explicit about what we are doing here: just wrapping a value. */
  static wrap(val: ValWrapped): Val {
    return new Val(val);
  }

  constructor(readonly value: ValWrapped) {}

  serializable() {
    if (!this.isPresent) return undefined;

    const { value } = this;

    if (value instanceof Set) return ["set", [...value]];
    if (value instanceof RegExp) return ["regexp", value.source];
    if (typeof value === "number" || typeof value === "boolean" || typeof value === "string") return value;

    console.warn("Unknown value type attempting to return an encodable:", value);
  }

  equalTo(other?: AnyValue): boolean {
    if (!other) return false;

    const { value } = this;

    if (value === other.value) return true;

    if (typeof value !== typeof other.value) return false;
    if (typeof value === "number") return value === other.value;
    if (typeof value === "string") return value === other.value;
    if (typeof value === "boolean") return value === other.value;

    if (value instanceof RegExp && other.value instanceof RegExp) return value.source === other.value.source;
    if (value instanceof Set && other.value instanceof Set) {
      if (value.size !== other.value.size) return false;
      for (const v of value) if (!other.value.has(v)) return false;
      return true;
    }

    console.warn("Unknown value type comparing a value", this, other);

    return false;
  }

  get isPresent(): boolean {
    if (this.value === undefined || this.value === null) return false;
    if (this.value instanceof Set) return this.value.size > 0;
    if (this.value instanceof RegExp) return true;

    // Zero (0) is considered to be present / non-blank
    if (typeof this.value === "number") return true;
    return !!this.value;
  }
}
