import { expect, test } from "bun:test";
import { Filter } from "./filters";
import type { AnyValue, Value } from "./value";
import { ValBool, ValNil, ValNumber, ValRegExp, ValSet, ValString, deserializeValue } from "./value";

test("ValNil null", () => {
  const nil = new ValNil(null);

  expect(nil.value).toBeNull();
  expect(nil.isPresent).toBeFalse();
  expect(nil.isNil).toBeTrue();

  const val = nil as AnyValue;

  expect(val.equalTo()).toBeFalse();
  expect(val.equalTo(null as any)).toBeFalse();
  expect(val.equalTo(undefined)).toBeFalse();
  expect(val.equalTo(1 as any)).toBeFalse();
  expect(val.equalTo(new ValNil(null))).toBeTrue();
  expect(val.equalTo(new ValNil(undefined))).toBeTrue();
  expect(val.serializable()).toBe(undefined);
});

test("ValNil undefined", () => {
  const nil = new ValNil(undefined);

  expect(nil.value).toBeUndefined();
  expect(nil.isPresent).toBeFalse();
  expect(nil.isNil).toBeTrue();

  const val = nil as AnyValue;

  expect(val.equalTo()).toBeFalse();
  expect(val.equalTo(null as any)).toBeFalse();
  expect(val.equalTo(undefined)).toBeFalse();
  expect(val.equalTo(1 as any)).toBeFalse();
  expect(val.equalTo(new ValNil(null))).toBeTrue();
  expect(val.equalTo(new ValNil(undefined))).toBeTrue();
  expect(val.serializable()).toBe(undefined);
});

test("ValNumber", () => {
  const num = new ValNumber(0);

  expect(num.value).toBe(0);
  expect(num.isPresent).toBeTrue();
  expect(num.isNil).toBeFalse();

  const val = num as AnyValue;

  expect(val.equalTo()).toBeFalse();
  expect(val.equalTo(null as any)).toBeFalse();
  expect(val.equalTo(undefined)).toBeFalse();
  expect(val.equalTo(0 as any)).toBeFalse();
  expect(val.equalTo(1 as any)).toBeFalse();
  expect(val.equalTo(new ValNumber(0))).toBeTrue();
  expect(val.equalTo(new ValNumber(1))).toBeFalse();
  expect(val.serializable()).toBe(0);
});

test("ValBool of false", () => {
  const bool = new ValBool(false);

  expect(bool.value).toBeFalse();
  expect(bool.isPresent).toBeFalse();
  expect(bool.isNil).toBeFalse();

  const val = bool as AnyValue;

  expect(val.equalTo()).toBeFalse();
  expect(val.equalTo(null as any)).toBeFalse();
  expect(val.equalTo(undefined)).toBeFalse();
  expect(val.equalTo(0 as any)).toBeFalse();
  expect(val.equalTo(1 as any)).toBeFalse();
  expect(val.equalTo(new ValBool(true))).toBeFalse();
  expect(val.equalTo(new ValBool(false))).toBeTrue();
  expect(val.serializable()).toBeUndefined();
});

test("ValBool of true", () => {
  const bool = new ValBool(true);

  expect(bool.value).toBeTrue();
  expect(bool.isPresent).toBeTrue();
  expect(bool.isNil).toBeFalse();

  const val = bool as AnyValue;

  expect(val.equalTo()).toBeFalse();
  expect(val.equalTo(null as any)).toBeFalse();
  expect(val.equalTo(undefined)).toBeFalse();
  expect(val.equalTo(0 as any)).toBeFalse();
  expect(val.equalTo(1 as any)).toBeFalse();
  expect(val.equalTo(new ValBool(true))).toBeTrue();
  expect(val.equalTo(new ValBool(false))).toBeFalse();
  expect(val.serializable()).toBeTrue();
});

test("ValString of ''", () => {
  const bool = new ValString("");

  expect(bool.value).toBe("");
  expect(bool.isPresent).toBeFalse();
  expect(bool.isNil).toBeFalse();

  const val = bool as AnyValue;

  expect(val.equalTo()).toBeFalse();
  expect(val.equalTo(null as any)).toBeFalse();
  expect(val.equalTo(undefined)).toBeFalse();
  expect(val.equalTo(0 as any)).toBeFalse();
  expect(val.equalTo(1 as any)).toBeFalse();
  expect(val.equalTo(new ValString(""))).toBeTrue();
  expect(val.equalTo(new ValString("x"))).toBeFalse();
  expect(val.serializable()).toBeUndefined();
});

test("ValString of non empty string", () => {
  const bool = new ValString("x");

  expect(bool.value).toBe("x");
  expect(bool.isPresent).toBeTrue();
  expect(bool.isNil).toBeFalse();

  const val = bool as AnyValue;

  expect(val.equalTo()).toBeFalse();
  expect(val.equalTo(null as any)).toBeFalse();
  expect(val.equalTo(undefined)).toBeFalse();
  expect(val.equalTo(0 as any)).toBeFalse();
  expect(val.equalTo(1 as any)).toBeFalse();
  expect(val.equalTo(new ValString(""))).toBeFalse();
  expect(val.equalTo(new ValString("x"))).toBeTrue();
  expect(val.serializable()).toBe("x");
});

test("ValSet of empty set", () => {
  const bool = new ValSet<any>(new Set());

  expect(bool.value).toEqual(new Set());
  expect(bool.isPresent).toBeFalse();
  expect(bool.isNil).toBeFalse();

  const val = bool as AnyValue;

  expect(val.equalTo()).toBeFalse();
  expect(val.equalTo(null as any)).toBeFalse();
  expect(val.equalTo(undefined)).toBeFalse();
  expect(val.equalTo(0 as any)).toBeFalse();
  expect(val.equalTo(1 as any)).toBeFalse();
  expect(val.equalTo(new ValSet(new Set()))).toBeTrue();
  expect(val.equalTo(new ValSet(new Set(["x"])))).toBeFalse();
  expect(val.serializable()).toBeUndefined();
});

test("ValSet of non empty set", () => {
  const bool = new ValSet(new Set(["x"]));

  expect(bool.value).toEqual(new Set(["x"]));
  expect(bool.isPresent).toBeTrue();
  expect(bool.isNil).toBeFalse();

  const val = bool as AnyValue;

  expect(val.equalTo()).toBeFalse();
  expect(val.equalTo(null as any)).toBeFalse();
  expect(val.equalTo(undefined)).toBeFalse();
  expect(val.equalTo(0 as any)).toBeFalse();
  expect(val.equalTo(1 as any)).toBeFalse();
  expect(val.equalTo(new ValSet(new Set()))).toBeFalse();
  expect(val.equalTo(new ValSet(new Set(["x"])))).toBeTrue();
  expect(val.serializable()).toEqual(["Set", ["x"]]);
});

test("ValRegExp empty regexp", () => {
  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  const num = new ValRegExp(new RegExp(""));

  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  expect(num.value.source).toBe(new RegExp("").source);
  expect(num.isPresent).toBeFalse();
  expect(num.isNil).toBeFalse();

  const val = num as AnyValue;

  expect(val.equalTo()).toBeFalse();
  expect(val.equalTo(null as any)).toBeFalse();
  expect(val.equalTo(undefined)).toBeFalse();
  expect(val.equalTo(0 as any)).toBeFalse();
  expect(val.equalTo(1 as any)).toBeFalse();
  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  expect(val.equalTo(new ValRegExp(new RegExp("")))).toBeTrue();
  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  expect(val.equalTo(new ValRegExp(new RegExp("x")))).toBeFalse();
  expect(val.serializable()).toBeUndefined();
});

test("ValRegExp non empty regexp", () => {
  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  const num = new ValRegExp(new RegExp("x"));

  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  expect(num.value.source).toBe(new RegExp("x").source);
  expect(num.isPresent).toBeTrue();
  expect(num.isNil).toBeFalse();

  const val = num as AnyValue;

  expect(val.equalTo()).toBeFalse();
  expect(val.equalTo(null as any)).toBeFalse();
  expect(val.equalTo(undefined)).toBeFalse();
  expect(val.equalTo(0 as any)).toBeFalse();
  expect(val.equalTo(1 as any)).toBeFalse();
  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  expect(val.equalTo(new ValRegExp(new RegExp("")))).toBeFalse();
  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  expect(val.equalTo(new ValRegExp(new RegExp("x")))).toBeTrue();
  expect(val.serializable()).toEqual(["RegExp", "x"]);
});

test("Serialization / deserialization", () => {
  const roundtrip = (val: AnyValue) => {
    const data = val.serializable();
    const rtrip = data !== undefined && data !== null ? JSON.parse(JSON.stringify(data)) : data; // JSON can't encode undefined.
    return deserializeValue(rtrip);
  };

  expect(roundtrip(new ValNumber(42))?.value).toBe(42);

  expect(roundtrip(new ValBool(false))).toBeInstanceOf(ValNil);
  expect(roundtrip(new ValBool(true))?.value).toBeTrue();

  expect(roundtrip(new ValString(""))).toBeInstanceOf(ValNil);
  expect(roundtrip(new ValString("Hello"))?.value).toBe("Hello");

  expect(roundtrip(new ValRegExp(/(?:)/))?.value).toBeUndefined();
  expect(roundtrip(new ValRegExp(/hello/))?.value).toEqual(/hello/);
  expect(roundtrip(new ValRegExp(/World/i))?.value).toEqual(/World/i);

  expect(roundtrip(new Filter())).toBeInstanceOf(ValNil);
  expect(roundtrip(new Filter("any", new Set(["1"])))?.equalTo(new Filter("any", new Set(["1"])))).toBeTrue();
  expect(roundtrip(new Filter("all", new Set(["1", "2"])))?.equalTo(new Filter("all", new Set(["1", "2"])))).toBeTrue();
});
