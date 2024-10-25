/**
 * The objective of this interface is to simplify checking if a value is present (aka "non blank").
 * This avoids the need to sprinkle runtime type checks all over the place.
 *
 * This is useful in places were we don't want to serialize empty values,
 * if we want to check there are any present values on a form, etc.
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

  get isAbsent(): boolean;

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
    return this.value !== undefined && this.value !== null;
  }

  get isPresent(): boolean {
    return !this.isNil;
  }

  get isAbsent(): boolean {
    return !this.isPresent;
  }

  abstract equalTo(other?: AnyValue): boolean;

  // biome-ignore lint/suspicious/noExplicitAny: We can't be more specific here.
  serializable(): any {
    return this.isPresent ? this.value : undefined;
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
    return this.isPresent ? ["RegExp", this.value.source] : undefined;
  }
}
