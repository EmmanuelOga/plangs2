import { expect, test } from "bun:test";
import { Map2 } from "./map2";

test("empty Map2", () => {
  const m = new Map2<string, number, string>();

  expect(m.isEmpty).toBeTrue();
  expect(m.has("a", 1)).toBeFalse();
  expect(m.delete("a", 1)).toBeFalse();
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
  expect(m.delete1("a")).toBeFalse();
});

test("non empty Map2", () => {
  const m = new Map2<string, number, string>();
  expect(m.isEmpty).toBeTrue();
  expect(m.set("a", 1, "one")).toBe(m);
  expect(m.isEmpty).toBeFalse();
  expect(m.set("b", 2, "two")).toBe(m);

  expect(m.has("a", 1)).toBeTrue();
  expect(m.has("b", 2)).toBeTrue();
  expect(m.has("c", 3)).toBeFalse();

  expect(m.delete("a", 1)).toBeTrue();
  expect(m.delete("a", 1)).toBeFalse();
  expect(m.delete("d", 4)).toBeFalse();
  expect(m.has("a", 1)).toBeFalse();
  expect(m.has("b", 2)).toBeTrue();
  expect(m.has("c", 3)).toBeFalse();

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
  expect(m.delete1("a")).toBeFalse();
  expect(m.delete1("b")).toBeTrue();
});

test("Map2 getOrSet", () => {
  const m = new Map2<string, number, string>();

  expect(m.getOrSet("a", 1, () => "one")).toBe("one");
  expect(m.getOrSet("a", 1, () => "uno")).toBe("one");

  expect(m.getOrSet("b", 2, () => "two")).toBe("two");
  expect(m.getOrSet("b", 2, () => "dos")).toBe("two");
  m.delete("b", 2);
  expect(m.getOrSet("b", 2, () => "dos")).toBe("dos");
  expect(m.delete1("a")).toBeTrue();
  expect(m.delete1("b")).toBeTrue();
});

test("Map2 clear", () => {
  const m = new Map2<string, number, string>();

  expect(m.isEmpty).toBeTrue();

  m.set("a", 1, "one");
  expect(m.isEmpty).toBeFalse();

  m.set("b", 2, "two");
  expect(m.isEmpty).toBeFalse();

  m.set("c", 3, "three");
  expect(m.isEmpty).toBeFalse();
  expect(m.size).toBe(3);

  m.clear();
  expect(m.isEmpty).toBeTrue();
  expect(m.size).toBe(0);
});
