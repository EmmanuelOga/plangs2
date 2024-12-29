import { expect, test } from "bun:test";
import { parseDate, parseMonth, parseYear, strDateCompare } from "./str_date";

test("parseDate", () => {
  expect(parseDate("1234-99-99")).toBeUndefined();
  expect(parseDate("1800/1/1")).toBeUndefined();
  expect(parseDate("1900/1/1")).toBeUndefined(); // Too old for our purposes.
  expect(parseDate("2000/-1/1")).toBe("2000");
  expect(parseDate("2000/0/1")).toBe("2000");
  expect(parseDate("2000/1/0")).toBe("2000-01");
  expect(parseDate("2000/1/1")).toBe("2000-01-01");
  expect(parseDate("2000/1/31")).toBe("2000-01-31");
  expect(parseDate("2000/1/32")).toBe("2000-01");
  expect(parseDate("2000/12/1")).toBe("2000-12-01");
  expect(parseDate("2000/12/31")).toBe("2000-12-31");
  expect(parseDate("2000/13/1")).toBe("2000");
  expect(parseDate("2021-11-01")).toBe("2021-11-01");
  expect(parseDate("2021.07.3")).toBe("2021-07-03");
  expect(parseDate("2021/01_01")).toBe("2021-01-01");
  expect(parseDate("2021_07_03")).toBe("2021-07-03");
  expect(parseDate("2021_7_03")).toBe("2021-07-03");
  expect(parseDate("2101/1/1")).toBeUndefined();
});

test("parseYear", () => {
  expect(parseYear("1234-99-99")).toBeUndefined();
  expect(parseYear("2021-11-01")).toBe(2021);
  expect(parseYear(parseDate("1800/1/1"))).toBeUndefined();
  expect(parseYear(parseDate("1900/1/1"))).toBeUndefined(); // Too old for our purposes.
  expect(parseYear(parseDate("2000/-1/1"))).toBe(2000);
  expect(parseYear(parseDate("2000/0/1"))).toBe(2000);
  expect(parseYear(parseDate("2000/1/0"))).toBe(2000);
  expect(parseYear(parseDate("2000/1/1"))).toBe(2000);
  expect(parseYear(parseDate("2000/1/31"))).toBe(2000);
  expect(parseYear(parseDate("2000/1/32"))).toBe(2000);
  expect(parseYear(parseDate("2000/12/1"))).toBe(2000);
  expect(parseYear(parseDate("2000/12/31"))).toBe(2000);
  expect(parseYear(parseDate("2000/13/1"))).toBe(2000);
  expect(parseYear(parseDate("2021.07.3"))).toBe(2021);
  expect(parseYear(parseDate("2021/01_01"))).toBe(2021);
  expect(parseYear(parseDate("2021_07_03"))).toBe(2021);
  expect(parseYear(parseDate("2021_7_03"))).toBe(2021);
  expect(parseYear(parseDate("2101/1/1"))).toBeUndefined();
});

test("parseMonth", () => {
  expect(parseMonth("2021")).toBeUndefined();
  expect(parseMonth("2021-01")).toBe(1);
  expect(parseMonth("2021-06")).toBe(6);
  expect(parseMonth("2021-1")).toBe(1);
  expect(parseMonth("2021-11")).toBe(11);
  expect(parseMonth("2021-12")).toBe(12);
  expect(parseMonth("2021-99-99")).toBeUndefined();
});

test("strDateCompare", () => {
  expect(strDateCompare("2021", "2021-01")).toBe(-1);
  expect(strDateCompare("2021", "2021-01-02")).toBe(-1);
  expect(strDateCompare("2021", "2021-01-02")).toBe(-1);
  expect(strDateCompare("2021-01", "2021")).toBe(1);
  expect(strDateCompare("2021-01", "2021-01-01")).toBe(-1);
  expect(strDateCompare("2021-01", "2021-01-01")).toBe(-1);
  expect(strDateCompare("2021-01-01", "2021-01-01")).toBe(0);
  expect(strDateCompare("2021-01-01", "2021-01-02")).toBe(-1);
  expect(strDateCompare("2021-01-01", undefined)).toBe(1);
  expect(strDateCompare("2021-01-02", "2021")).toBe(1);
  expect(strDateCompare("2021-01-02", "2021-01-01")).toBe(1);
  expect(strDateCompare("2021-01-03", "2021-01-01")).toBe(1);
  expect(strDateCompare("2021-01-04", "2021-01-07")).toBe(-1);
  expect(strDateCompare(undefined, "2021-01-01")).toBe(-1);
  expect(strDateCompare(undefined, undefined)).toBe(0);
});
