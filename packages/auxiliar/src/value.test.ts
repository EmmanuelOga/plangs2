import { expect, test } from "bun:test";
import type { AnyValue, Value } from "./value";
import { ValBool, ValNil, ValNumber, ValRegExp, ValSet, ValString } from "./value";

test("ValNil null", () => {
  const nil = new ValNil(null);

  expect(nil.value).toBeNull();
  expect(nil.isPresent).toBe(false);
  expect(nil.isNil).toBe(true);

  const val = nil as AnyValue;

  expect(val.equalTo()).toBe(false);
  expect(val.equalTo(null as any)).toBe(false);
  expect(val.equalTo(undefined)).toBe(false);
  expect(val.equalTo(1 as any)).toBe(false);
  expect(val.equalTo(new ValNil(null))).toBe(true);
  expect(val.equalTo(new ValNil(undefined))).toBe(true);
  expect(val.serializable()).toBe(undefined);
});

test("ValNil undefined", () => {
  const nil = new ValNil(undefined);

  expect(nil.value).toBeUndefined();
  expect(nil.isPresent).toBe(false);
  expect(nil.isNil).toBe(true);

  const val = nil as AnyValue;

  expect(val.equalTo()).toBe(false);
  expect(val.equalTo(null as any)).toBe(false);
  expect(val.equalTo(undefined)).toBe(false);
  expect(val.equalTo(1 as any)).toBe(false);
  expect(val.equalTo(new ValNil(null))).toBe(true);
  expect(val.equalTo(new ValNil(undefined))).toBe(true);
  expect(val.serializable()).toBe(undefined);
});

test("ValNumber", () => {
  const num = new ValNumber(0);

  expect(num.value).toBe(0);
  expect(num.isPresent).toBe(true);
  expect(num.isNil).toBe(false);

  const val = num as AnyValue;

  expect(val.equalTo()).toBe(false);
  expect(val.equalTo(null as any)).toBe(false);
  expect(val.equalTo(undefined)).toBe(false);
  expect(val.equalTo(0 as any)).toBe(false);
  expect(val.equalTo(1 as any)).toBe(false);
  expect(val.equalTo(new ValNumber(0))).toBe(true);
  expect(val.equalTo(new ValNumber(1))).toBe(false);
  expect(val.serializable()).toBe(0);
});

test("ValBool of false", () => {
  const bool = new ValBool(false);

  expect(bool.value).toBe(false);
  expect(bool.isPresent).toBe(false);
  expect(bool.isNil).toBe(false);

  const val = bool as AnyValue;

  expect(val.equalTo()).toBe(false);
  expect(val.equalTo(null as any)).toBe(false);
  expect(val.equalTo(undefined)).toBe(false);
  expect(val.equalTo(0 as any)).toBe(false);
  expect(val.equalTo(1 as any)).toBe(false);
  expect(val.equalTo(new ValBool(true))).toBe(false);
  expect(val.equalTo(new ValBool(false))).toBe(true);
  expect(val.serializable()).toBeUndefined();
});

test("ValBool of true", () => {
  const bool = new ValBool(true);

  expect(bool.value).toBe(true);
  expect(bool.isPresent).toBe(true);
  expect(bool.isNil).toBe(false);

  const val = bool as AnyValue;

  expect(val.equalTo()).toBe(false);
  expect(val.equalTo(null as any)).toBe(false);
  expect(val.equalTo(undefined)).toBe(false);
  expect(val.equalTo(0 as any)).toBe(false);
  expect(val.equalTo(1 as any)).toBe(false);
  expect(val.equalTo(new ValBool(true))).toBe(true);
  expect(val.equalTo(new ValBool(false))).toBe(false);
  expect(val.serializable()).toBe(true);
});

test("ValString of ''", () => {
  const bool = new ValString("");

  expect(bool.value).toBe("");
  expect(bool.isPresent).toBe(false);
  expect(bool.isNil).toBe(false);

  const val = bool as AnyValue;

  expect(val.equalTo()).toBe(false);
  expect(val.equalTo(null as any)).toBe(false);
  expect(val.equalTo(undefined)).toBe(false);
  expect(val.equalTo(0 as any)).toBe(false);
  expect(val.equalTo(1 as any)).toBe(false);
  expect(val.equalTo(new ValString(""))).toBe(true);
  expect(val.equalTo(new ValString("x"))).toBe(false);
  expect(val.serializable()).toBeUndefined();
});

test("ValString of non empty string", () => {
  const bool = new ValString("x");

  expect(bool.value).toBe("x");
  expect(bool.isPresent).toBe(true);
  expect(bool.isNil).toBe(false);

  const val = bool as AnyValue;

  expect(val.equalTo()).toBe(false);
  expect(val.equalTo(null as any)).toBe(false);
  expect(val.equalTo(undefined)).toBe(false);
  expect(val.equalTo(0 as any)).toBe(false);
  expect(val.equalTo(1 as any)).toBe(false);
  expect(val.equalTo(new ValString(""))).toBe(false);
  expect(val.equalTo(new ValString("x"))).toBe(true);
  expect(val.serializable()).toBe("x");
});

test("ValSet of empty set", () => {
  const bool = new ValSet<any>(new Set());

  expect(bool.value).toEqual(new Set());
  expect(bool.isPresent).toBe(false);
  expect(bool.isNil).toBe(false);

  const val = bool as AnyValue;

  expect(val.equalTo()).toBe(false);
  expect(val.equalTo(null as any)).toBe(false);
  expect(val.equalTo(undefined)).toBe(false);
  expect(val.equalTo(0 as any)).toBe(false);
  expect(val.equalTo(1 as any)).toBe(false);
  expect(val.equalTo(new ValSet(new Set()))).toBe(true);
  expect(val.equalTo(new ValSet(new Set(["x"])))).toBe(false);
  expect(val.serializable()).toBeUndefined();
});

test("ValSet of non empty set", () => {
  const bool = new ValSet(new Set(["x"]));

  expect(bool.value).toEqual(new Set(["x"]));
  expect(bool.isPresent).toBe(true);
  expect(bool.isNil).toBe(false);

  const val = bool as AnyValue;

  expect(val.equalTo()).toBe(false);
  expect(val.equalTo(null as any)).toBe(false);
  expect(val.equalTo(undefined)).toBe(false);
  expect(val.equalTo(0 as any)).toBe(false);
  expect(val.equalTo(1 as any)).toBe(false);
  expect(val.equalTo(new ValSet(new Set()))).toBe(false);
  expect(val.equalTo(new ValSet(new Set(["x"])))).toBe(true);
  expect(val.serializable()).toEqual(["Set", ["x"]]);
});

test("ValRegExp empty regexp", () => {
  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  const num = new ValRegExp(new RegExp(""));

  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  expect(num.value.source).toBe(new RegExp("").source);
  expect(num.isPresent).toBe(false);
  expect(num.isNil).toBe(false);

  const val = num as AnyValue;

  expect(val.equalTo()).toBe(false);
  expect(val.equalTo(null as any)).toBe(false);
  expect(val.equalTo(undefined)).toBe(false);
  expect(val.equalTo(0 as any)).toBe(false);
  expect(val.equalTo(1 as any)).toBe(false);
  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  expect(val.equalTo(new ValRegExp(new RegExp("")))).toBe(true);
  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  expect(val.equalTo(new ValRegExp(new RegExp("x")))).toBe(false);
  expect(val.serializable()).toBeUndefined();
});

test("ValRegExp non empty regexp", () => {
  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  const num = new ValRegExp(new RegExp("x"));

  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  expect(num.value.source).toBe(new RegExp("x").source);
  expect(num.isPresent).toBe(true);
  expect(num.isNil).toBe(false);

  const val = num as AnyValue;

  expect(val.equalTo()).toBe(false);
  expect(val.equalTo(null as any)).toBe(false);
  expect(val.equalTo(undefined)).toBe(false);
  expect(val.equalTo(0 as any)).toBe(false);
  expect(val.equalTo(1 as any)).toBe(false);
  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  expect(val.equalTo(new ValRegExp(new RegExp("")))).toBe(false);
  // biome-ignore lint/complexity/useRegexLiterals: I want to instantiate an empty regexp.
  expect(val.equalTo(new ValRegExp(new RegExp("x")))).toBe(true);
  expect(val.serializable()).toEqual(["RegExp", "x"]);
});
