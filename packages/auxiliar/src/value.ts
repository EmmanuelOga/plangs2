import { Filter } from "./filters";

/**
 * The objective of this interface is to simplify checking if a value is present (aka "non blank").
 * This avoids the need to sprinkle runtime type checks all over the place.
 *
 * This is useful in places were we don't want to serialize empty values,
 * if we want to check there are any present values on a form, etc.
 *
 * Also we want to avoid serializing values that are not "present".
 * This is because for things like URL encoding, we don't want to have a lot of keys pointing to blank values.
 */
export interface Value<T> {
  // biome-ignore lint/suspicious/noExplicitAny: without a generic value type the wrappers are useless.
  readonly value: any;

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

export abstract class ValBase<T> implements Value<T> {
  constructor(readonly value: T) {}

  get isNil(): boolean {
    return this.value === undefined || this.value === null;
  }

  get isPresent(): boolean {
    return !this.isNil;
  }

  abstract equalTo(other?: AnyValue): boolean;

  // biome-ignore lint/suspicious/noExplicitAny: We can't be more specific here.
  serializable(): any {
    return this.isPresent ? this.value : undefined;
  }
}

export class ValNil extends ValBase<null | undefined> {
  constructor(value: null | undefined = undefined) {
    super(value);
  }

  equalTo(other?: AnyValue): boolean {
    return other instanceof ValNil;
  }
}

export class ValNumber extends ValBase<number> {
  equalTo(other?: AnyValue): boolean {
    return other instanceof ValNumber && this.value === other.value;
  }
}

export class ValBool extends ValBase<boolean> {
  override get isPresent(): boolean {
    return !this.isNil && this.value === true;
  }

  equalTo(other?: AnyValue): boolean {
    return other instanceof ValBool && this.value === other.value;
  }
}

export class ValString extends ValBase<string> {
  override get isPresent(): boolean {
    return !this.isNil && this.value.length > 0 && !/^\s*$/.test(this.value);
  }

  equalTo(other?: AnyValue): boolean {
    return other instanceof ValString && this.value === other.value;
  }
}

export class ValSet<T> extends ValBase<Set<T>> {
  override get isPresent(): boolean {
    return !this.isNil && this.value.size > 0;
  }

  equalTo(other?: AnyValue): boolean {
    if (!(other instanceof ValSet)) return false;
    if (this.value === other.value) return true;
    if (this.value.size !== other.value.size) return false;
    for (const v of this.value) if (!other.value.has(v)) return false;
    return true;
  }

  override serializable() {
    return this.isPresent ? ["Set", [...this.value]] : undefined;
  }

  // biome-ignore lint/suspicious/noExplicitAny: we cannot know for sure the type of the values.
  static isSerialized(val: unknown): val is [string, any[]] {
    return Array.isArray(val) && val[0] === "Set" && Array.isArray(val[1]);
  }
}

const EMPTY_REGEX = /(?:)/;

export class ValRegExp extends ValBase<RegExp> {
  override get isPresent(): boolean {
    return !this.isNil && this.value.source !== EMPTY_REGEX.source;
  }

  equalTo(other?: AnyValue): boolean {
    return other instanceof ValRegExp && this.value.source === other.value.source;
  }

  override serializable() {
    const { value } = this;
    return this.isPresent ? (value.flags ? ["RegExp", value.source, value.flags] : ["RegExp", value.source]) : undefined;
  }

  static isSerialized(val: unknown): val is [string, string, string?] {
    return Array.isArray(val) && val[0] === "RegExp" && typeof val[1] === "string" && (val[2] === undefined || typeof val[2] === "string");
  }
}

/** Matches the serialized "shape" and returns a deserialized value, or undefined if it can't recognize the shape. */
export function deserializeValue(val: unknown): AnyValue | undefined {
  if (val === undefined || val === null) return new ValNil(val);

  switch (typeof val) {
    case "number":
      return new ValNumber(val);
    case "boolean":
      return new ValBool(val);
    case "string":
      return new ValString(val);
  }

  if (ValRegExp.isSerialized(val)) return new ValRegExp(new RegExp(val[1], val[2]));
  if (ValSet.isSerialized(val)) return new ValSet(new Set(val[1]));
  if (Filter.isSerialized(val)) return new Filter(val.mode, new Set(val.values));

  console.log("Attempt to deserialize an unrecognized value shape:", val);
}
