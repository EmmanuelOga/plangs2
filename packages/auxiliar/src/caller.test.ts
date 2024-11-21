import { expect, test } from "bun:test";
import { SIMPLIFY_PATH, caller } from "./caller";

test("caller", () => {
  let res: string[] = [];

  const c = () => (res = caller({ clean: SIMPLIFY_PATH }));
  const b = () => c();
  const a = () => b();

  a();
  expect(res.length).toBe(3);
  expect(res[0]).toMatch(/at caller \(src\/caller\.ts:\d+:\d+\)/);
  expect(res[1]).toMatch(/at c \(src\/caller\.test\.ts:\d+:\d+\)/);
  expect(res[2]).toMatch(/at <anonymous> \(src\/caller\.test\.ts:\d+:\d+\)/);
});

test("caller with matcher", () => {
  let res: string[] = [];

  const c = () => (res = caller({ clean: SIMPLIFY_PATH, match: /caller\.test\.ts/ }));
  const b = () => c();
  const a = () => b();

  a();
  expect(res.length).toBe(2);
  expect(res[0]).toMatch(/at c \(src\/caller\.test\.ts:\d+:\d+\)/);
  expect(res[1]).toMatch(/at <anonymous> \(src\/caller\.test\.ts:\d+:\d+\)/);
});

test("caller with un-matcher", () => {
  let res: string[] = [];

  const c = () => (res = caller({ clean: SIMPLIFY_PATH, dontMatch: /caller\.test\.ts/ }));
  const b = () => c();
  const a = () => b();

  a();
  expect(res.length).toBe(1);
  expect(res[0]).toMatch(/at caller \(src\/caller.ts:\d+:\d+\)\)/);
});
