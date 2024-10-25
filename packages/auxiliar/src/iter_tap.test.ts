import { expect, test } from "bun:test";
import { IterTap } from "./iter_tap";

test("IterTap of undefined", () => {
  const t = new IterTap(undefined);

  expect(t.filter(() => true)).toEqual([]);
  expect(t.filter(() => false)).toEqual([]);
  expect(t.map(() => 1).size).toEqual(0);
  expect(t.sort()).toEqual([]);
  expect(t.join("")).toEqual("");
  expect(t.includes(1)).toEqual(false);
  expect(t.some(() => true)).toEqual(false);
  expect(t.find(() => true)).toEqual(undefined);
  expect(t.tap(() => 1)).toBeUndefined();
  expect(t.isEmpty).toBe(true);
  expect(t.size).toEqual(0);
  expect(t.existing).toEqual([]);
  expect(t.reverse.size).toEqual(0);
  expect(t.first).toBeUndefined();
  expect(t.last).toBeUndefined();

  for (const _ of t) {
    throw new Error("Unexpected iteration");
  }
});

test("IterTap of empty array", () => {
  const t = new IterTap([]);

  expect(t.filter(() => true)).toEqual([]);
  expect(t.filter(() => false)).toEqual([]);
  expect(t.map(() => 1).size).toEqual(0);
  expect(t.sort()).toEqual([]);
  expect(t.join("")).toEqual("");
  expect(t.includes(1)).toEqual(false);
  expect(t.some(() => true)).toEqual(false);
  expect(t.find(() => true)).toEqual(undefined);
  expect(t.tap(() => 1)).toBeUndefined();
  expect(t.isEmpty).toBe(true);
  expect(t.size).toEqual(0);
  expect(t.existing).toEqual([]);
  expect(t.reverse.size).toEqual(0);
  expect(t.first).toBeUndefined();
  expect(t.last).toBeUndefined();

  for (const _ of t) {
    throw new Error("Unexpected iteration");
  }
});

test("IterTap of a non empty array", () => {
  const t = new IterTap([1, 2, 3]);

  expect(t.filter(n => n % 2 === 0)).toEqual([2]);
  expect(t.filter(() => false)).toEqual([]);
  expect([...t.map(n => n * 10)]).toEqual([10, 20, 30]);

  t.array?.push(-1);
  expect(t.array).toEqual([1, 2, 3, -1]);
  expect(t.sort()).toEqual([-1, 1, 2, 3]);
  expect(t.sort((a, b) => b - a)).toEqual([-1, 1, 2, 3].reverse());
  expect(t.join("")).toEqual("123-1");

  expect(t.includes(1)).toEqual(true);
  expect(t.includes(42)).toEqual(false);
  expect(t.some(n => n % 3 === 0)).toEqual(true);
  expect(t.some(n => n % 4 === 0)).toEqual(false);

  expect(t.find(n => n === 1)).toEqual(1);
  expect(t.find(n => n === 17)).toBeUndefined();

  expect(t.tap(arr => arr.length)).toBe(4);
  expect(t.tap(_ => 42)).toBe(42);

  expect(t.isEmpty).toBe(false);
  expect(t.size).toEqual(4);

  t.array?.push(undefined as any);
  t.array?.push(null as any);
  expect(t.existing).toEqual([1, 2, 3, -1]);
  t.array?.pop();
  t.array?.pop();

  expect(t.reverse.array).toEqual([-1, 3, 2, 1]);
  expect(t.first).toBe(1);
  expect(t.last).toBe(-1);
  expect(t.reverse.first).toBe(-1);
  expect(t.reverse.last).toBe(1);

  let i = 0;
  for (const n of t) i += n * 11;
  expect(i).toEqual(1 * 11 + 2 * 11 + 3 * 11 + -1 * 11);

  i = 0;
  for (const n of t.map(n => n * 17)) i += n * 11;
  expect(i).toEqual(17 * 11 + 2 * 17 * 11 + 3 * 17 * 11 + -1 * 17 * 11);
});
