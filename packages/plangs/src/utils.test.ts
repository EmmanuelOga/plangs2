import { expect, test } from "bun:test";
import { SIMPLIFY_PATH, caller, getStrDateYear, parseDate } from "./util";

test("caller", () => {
  let res: string[] = [];

  const c = () => (res = caller({ clean: SIMPLIFY_PATH }));
  const b = () => c();
  const a = () => b();

  a();
  expect(res.length).toBe(3);
  expect(res[0]).toMatch(/at caller \(src\/util\.ts:\d+:\d+\)/);
  expect(res[1]).toMatch(/at c \(src\/utils\.test\.ts:\d+:\d+\)/);
  expect(res[2]).toMatch(/at <anonymous> \(src\/utils\.test\.ts:\d+:\d+\)/);
});

test("caller with matcher", () => {
  let res: string[] = [];

  const c = () => (res = caller({ clean: SIMPLIFY_PATH, match: /utils\.test\.ts/ }));
  const b = () => c();
  const a = () => b();

  a();
  expect(res.length).toBe(2);
  expect(res[0]).toMatch(/at c \(src\/utils\.test\.ts:\d+:\d+\)/);
  expect(res[1]).toMatch(/at <anonymous> \(src\/utils\.test\.ts:\d+:\d+\)/);
});

test("caller with un-matcher", () => {
  let res: string[] = [];

  const c = () => (res = caller({ clean: SIMPLIFY_PATH, dontMatch: /utils\.test\.ts/ }));
  const b = () => c();
  const a = () => b();

  a();
  expect(res).toEqual(["at caller (src/util.ts:25:18))"]);
});

test("parseDate", () => {
  expect(parseDate("2021_07_03")).toEqual("2021-07-03");
  expect(parseDate("2021_7_03")).toEqual("2021-07-03");
  expect(parseDate("2021.07.3")).toEqual("2021-07-03");
  expect(parseDate("2021/01_01")).toEqual("2021-01-01");
  expect(parseDate("1900/1/1")).toEqual("1900-01-01");
  expect(parseDate("1800/1/1")).toBeUndefined();
  expect(parseDate("2101/1/1")).toBeUndefined();

  expect(parseDate("2000/1/1")).toBe("2000-01-01");
  expect(parseDate("2000/1/31")).toBe("2000-01-31");
  expect(parseDate("2000/12/1")).toBe("2000-12-01");
  expect(parseDate("2000/12/31")).toBe("2000-12-31");

  expect(parseDate("2000/13/1")).toBeUndefined();
  expect(parseDate("2000/0/1")).toBeUndefined();
  expect(parseDate("2000/-1/1")).toBeUndefined();
  expect(parseDate("2000/1/0")).toBeUndefined();
  expect(parseDate("2000/1/32")).toBeUndefined();
});

test("getStrDateYear", () => {
  expect(getStrDateYear(parseDate("2021_07_03"))).toEqual(2021);
  expect(getStrDateYear(parseDate("2021_7_03"))).toEqual(2021);
  expect(getStrDateYear(parseDate("2021.07.3"))).toEqual(2021);
  expect(getStrDateYear(parseDate("2021/01_01"))).toEqual(2021);
  expect(getStrDateYear(parseDate("1900/1/1"))).toEqual(1900);
  expect(getStrDateYear(parseDate("1800/1/1"))).toBeUndefined();
  expect(getStrDateYear(parseDate("2101/1/1"))).toBeUndefined();

  expect(getStrDateYear(parseDate("2000/1/1"))).toBe(2000);
  expect(getStrDateYear(parseDate("2000/1/31"))).toBe(2000);
  expect(getStrDateYear(parseDate("2000/12/1"))).toBe(2000);
  expect(getStrDateYear(parseDate("2000/12/31"))).toBe(2000);

  expect(getStrDateYear(parseDate("2000/13/1"))).toBeUndefined();
  expect(getStrDateYear(parseDate("2000/0/1"))).toBeUndefined();
  expect(getStrDateYear(parseDate("2000/-1/1"))).toBeUndefined();
  expect(getStrDateYear(parseDate("2000/1/0"))).toBeUndefined();
  expect(getStrDateYear(parseDate("2000/1/32"))).toBeUndefined();
});
