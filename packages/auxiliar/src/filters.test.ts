import { expect, test } from "bun:test";
import { Filter, isEncodedFilter } from "./filters";

test("general", () => {
  const f = new Filter<number>("all");
  expect(f.isEmpty).toBe(true);

  f.add(1);
  expect(f.isEmpty).toBe(false);
  expect(f.has(1)).toBe(true);

  f.delete(1);
  expect(f.isEmpty).toBe(true);
  expect(f.has(1)).toBe(false);

  f.add(1).add(2).add(3);
  expect(f.size).toBe(3);
  expect(f.isEmpty).toBe(false);
  f.clear();
  expect(f.isEmpty).toBe(true);
  expect(f.size).toBe(0);
});

test("matches all or any", () => {
  const f = new Filter<number>("all");

  expect(f.matches(v => v % 2 === 0)).toBe(true);
  f.mode = "any";
  expect(f.matches(v => v % 2 === 0)).toBe(false);

  f.add(2).add(4).add(6);
  f.mode = "all";
  expect(f.matches(v => v % 2 === 0)).toBe(true);
  f.add(7);
  expect(f.matches(v => v % 2 === 0)).toBe(false);

  f.mode = "any";
  expect(f.matches(v => v % 2 === 0)).toBe(true);
});

test("as `Value`", () => {
  const f = new Filter<number>("all");
  expect(f.value).toBe(f);
  expect(f.isPresent).toBe(false);

  f.add(1);
  expect(f.isPresent).toBe(true);

  const g = f.clone();
  expect(f.equalTo(g)).toBe(true);
  g.mode = "any";
  expect(f.equalTo(g)).toBe(false);
  g.mode = "all";
  expect(f.equalTo(g)).toBe(true);
  g.delete(1);
  expect(f.equalTo(g)).toBe(false);
  g.add(1);
  expect(f.equalTo(g)).toBe(true);
  g.add(1);
  expect(f.equalTo(g)).toBe(true);
  g.add(2);
  expect(f.equalTo(g)).toBe(false);
  f.add(2);
  expect(f.equalTo(g)).toBe(true);
  expect(g.equalTo(f)).toBe(true);
});

test("serializable", () => {
  const f = new Filter<number>("all");
  expect(f.serializable()).toBeUndefined();
  expect(f.toJSON()).toEqual({ mode: "all", values: [] });

  f.add(1);
  expect(f.serializable()).toEqual({ mode: "all", values: [1] });
  expect(f.toJSON()).toEqual({ mode: "all", values: [1] });
  expect(isEncodedFilter(f.toJSON())).toBe(true);

  f.mode = "any";
  f.add(2).add(3);
  expect(f.toJSON()).toEqual({ mode: "any", values: [1, 2, 3] });
  expect(f.serializable()).toEqual({ mode: "any", values: [1, 2, 3] });
  expect(isEncodedFilter(f.toJSON())).toBe(true);
});
