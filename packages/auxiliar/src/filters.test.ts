import { expect, test } from "bun:test";
import { Filter, isEncodedFilter } from "./filters";

test("general", () => {
  const f = new Filter<number>("all");
  expect(f.isEmpty).toBeTrue();

  f.add(1);
  expect(f.isEmpty).toBeFalse();
  expect(f.has(1)).toBeTrue();

  f.delete(1);
  expect(f.isEmpty).toBeTrue();
  expect(f.has(1)).toBeFalse();

  f.add(1).add(2).add(3);
  expect(f.size).toBe(3);
  expect(f.isEmpty).toBeFalse();
  f.clear();
  expect(f.isEmpty).toBeTrue();
  expect(f.size).toBe(0);
});

test("matches all or any", () => {
  const f = new Filter<number>("all");

  expect(f.matches(v => v % 2 === 0)).toBeTrue();
  f.mode = "any";
  expect(f.matches(v => v % 2 === 0)).toBeFalse();

  f.add(2).add(4).add(6);
  f.mode = "all";
  expect(f.matches(v => v % 2 === 0)).toBeTrue();
  f.add(7);
  expect(f.matches(v => v % 2 === 0)).toBeFalse();

  f.mode = "any";
  expect(f.matches(v => v % 2 === 0)).toBeTrue();
});

test("as `Value`", () => {
  const f = new Filter<number>("all");
  expect(f.value).toBe(f);
  expect(f.isPresent).toBeFalse();

  f.add(1);
  expect(f.isPresent).toBeTrue();

  const g = f.clone();
  expect(f.equalTo(g)).toBeTrue();
  g.mode = "any";
  expect(f.equalTo(g)).toBeFalse();
  g.mode = "all";
  expect(f.equalTo(g)).toBeTrue();
  g.delete(1);
  expect(f.equalTo(g)).toBeFalse();
  g.add(1);
  expect(f.equalTo(g)).toBeTrue();
  g.add(1);
  expect(f.equalTo(g)).toBeTrue();
  g.add(2);
  expect(f.equalTo(g)).toBeFalse();
  f.add(2);
  expect(f.equalTo(g)).toBeTrue();
  expect(g.equalTo(f)).toBeTrue();
});

test("serializable", () => {
  const f = new Filter<number>("all");
  expect(f.serializable()).toBeUndefined();
  expect(f.toJSON()).toEqual({ mode: "all", values: [] });

  f.add(1);
  expect(f.serializable()).toEqual({ mode: "all", values: [1] });
  expect(f.toJSON()).toEqual({ mode: "all", values: [1] });
  expect(isEncodedFilter(f.toJSON())).toBeTrue();

  f.mode = "any";
  f.add(2).add(3);
  expect(f.toJSON()).toEqual({ mode: "any", values: [1, 2, 3] });
  expect(f.serializable()).toEqual({ mode: "any", values: [1, 2, 3] });
  expect(isEncodedFilter(f.toJSON())).toBeTrue();
});
