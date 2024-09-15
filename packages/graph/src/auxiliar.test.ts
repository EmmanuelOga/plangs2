import { expect, test } from "bun:test";
import { arrayMerge } from "./auxiliar";

test("arrayMerge", () => {
  const elem1 = {
    href: "https://en.wikipedia.org/wiki/Zonnon",
    title: "Zonnon",
  };

  const elem2 = {
    href: "https://en.wikipedia.org/wiki/Zonnon",
    title: "Zonnon",
  };

  const elem3 = {
    href: "https://en.wikipedia.org/wiki/Zonnon",
    title: "Zonnon",
  };

  const cmp = (a: typeof elem1, b: typeof elem1) => a.href === b.href;

  expect(cmp(elem1, elem2)).toBe(true);

  const target: (typeof elem1)[] = [];
  arrayMerge(target, [elem1, elem2, elem3], cmp);

  expect(target).toEqual([elem1]);
});
