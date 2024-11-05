import { expect, test } from "bun:test";
import { MapTap } from "./map_tap";

test("MapTap of undefined", () => {
  const t = new MapTap(undefined);
  expect(t.size).toEqual(0);
  expect(t.has(1)).toBeFalse();
  expect(t.tap(() => 1)).toBeUndefined();
  expect(t.keys.size).toEqual(0);
  expect(t.values.size).toEqual(0);
  expect(t.entries.size).toEqual(0);
  expect([...t]).toEqual([]);
});

test("MapTap of empty Map", () => {
  const t = new MapTap(new Map());
  expect(t.size).toEqual(0);
  expect(t.has(1)).toBeFalse();
  expect(t.tap(() => 1)).toBeUndefined();
  expect(t.keys.size).toEqual(0);
  expect(t.values.size).toEqual(0);
  expect(t.entries.size).toEqual(0);
  expect([...t]).toEqual([]);
});

test("MapTap of non empty Map", () => {
  const t = new MapTap(new Map([[1, 2]]));
  expect(t.size).toEqual(1);
  expect(t.has(1)).toBeTrue();
  expect(t.tap(() => undefined)).toBeUndefined();
  expect(t.tap(() => 42)).toBe(42);
  expect(t.tap(m => m)?.map).toEqual(new Map([[1, 2]]));
  expect(t.keys.array).toEqual([1]);
  expect(t.values.array).toEqual([2]);
  expect(t.entries.array).toEqual([[1, 2]]);
  expect([...t]).toEqual([[1, 2]]);
});
