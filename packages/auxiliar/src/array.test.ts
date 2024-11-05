import { expect, test } from "bun:test";
import { arrayMerge } from "./array";

test("arrayMerge", () => {
  const link = {
    href: "https://en.wikipedia.org/wiki/Zonnon",
    title: "Zonnon",
  };

  const dupe = () => ({ ...link });

  const cmp = (a: typeof link, b: typeof link) => a.href === b.href;

  expect(cmp(link, dupe())).toBeTrue();

  const target: (typeof link)[] = [];
  arrayMerge(target, [link, dupe(), dupe()], cmp);

  expect(target).toEqual([link]);
});
