import { expect, test } from "bun:test";
import { Map2 } from "./map2";

test("empty Map2", () => {
  const m = new Map2<string, number, string>();

  expect(m.has("a", 1)).toBe(false);
  expect(m.delete("a", 1)).toBe(false);
  expect(m.get("b", 2)).toBeUndefined();
  expect(m.getMap("b")).toBeUndefined();
  expect(m.size).toBe(0);
  expect(m.size2("a")).toBe(0);
  expect([...m.keys()]).toEqual([]);
  expect([...m.entries()]).toEqual([]);
  expect([...m.flatEntries()]).toEqual([]);
  expect(m.values()).toEqual([]);
  expect(m.getMap2()).toEqual(new Map());
  expect(`${m}`).toEqual("Map2(size: 0)");
});

test("non empty Map2", () => {
  const m = new Map2<string, number, string>();

  expect(m.set("a", 1, "one")).toBe(m);
  expect(m.set("b", 2, "two")).toBe(m);

  expect(m.has("a", 1)).toBe(true);
  expect(m.has("b", 2)).toBe(true);
  expect(m.has("c", 3)).toBe(false);

  expect(m.delete("a", 1)).toBe(true);
  expect(m.delete("a", 1)).toBe(false);
  expect(m.delete("d", 4)).toBe(false);
  expect(m.has("a", 1)).toBe(false);
  expect(m.has("b", 2)).toBe(true);
  expect(m.has("c", 3)).toBe(false);

  expect(m.get("b", 2)).toBe("two");
  expect(m.getMap("b")).toEqual(new Map([[2, "two"]]));
  m.set("b", 2, "dos");
  expect(m.getMap("b")).toEqual(new Map([[2, "dos"]]));
  m.set("b", 3, "three");
  expect(m.getMap("b")).toEqual(
    new Map([
      [2, "dos"],
      [3, "three"],
    ]),
  );

  expect(m.size).toBe(2);
  expect(m.size2("a")).toBe(0);
  expect(m.size2("b")).toBe(2);

  expect([...m.keys()]).toEqual(["b"]);
  expect([...m.entries()]).toEqual([
    [
      "b",
      new Map([
        [2, "dos"],
        [3, "three"],
      ]),
    ],
  ]);
  expect([...m.flatEntries()]).toEqual([
    ["b", 2, "dos"],
    ["b", 3, "three"],
  ]);
  expect(m.values()).toEqual(["dos", "three"]);

  expect(m.getMap2()).toEqual(
    new Map([
      [2, "dos"],
      [3, "three"],
    ]),
  );

  expect(`${m}`).toEqual("Map2(size: 2) { (b, 2) => dos, (b, 3) => three }");
});

test("Map2 getOrSet", () => {
  const m = new Map2<string, number, string>();

  expect(m.getOrSet("a", 1, () => "one")).toBe("one");
  expect(m.getOrSet("a", 1, () => "uno")).toBe("one");

  expect(m.getOrSet("b", 2, () => "two")).toBe("two");
  expect(m.getOrSet("b", 2, () => "dos")).toBe("two");
  m.delete("b", 2);
  expect(m.getOrSet("b", 2, () => "dos")).toBe("dos");
});

test("Map2 to object", () => {
  const m = new Map2<string, number, string>();
  expect(m.toObject(id => id)).toEqual({});

  m.set("a", 1, "one");
  expect(m.toObject(id => id)).toEqual({ a: { 1: "one" } });

  m.set("b", 2, "two");
  expect(m.toObject(id => `${id} ${id}`)).toEqual({ a: { 1: "one one" }, b: { 2: "two two" } });
});
