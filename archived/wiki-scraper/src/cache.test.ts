import { expect, test, beforeAll } from "bun:test";

import { Cache, Key } from "./cache";

const cache = new Cache("test");

beforeAll(async () => {
  await cache.mkdir();
  await cache.removeAll();
});

test("key values can be escaped and unescaped", () => {
  const key = Key.get("https://example.com");
  expect(key.value).toBe("https%3A%2F%2Fexample.com");
  expect(key.unescaped).toBe("https://example.com");
});

test("cached keys can be read and written", async () => {
  const key = Key.get("https://example.com");

  expect(await cache.file(key).exists()).toBe(false);
  expect(await cache.list()).toEqual([]);

  expect(await cache.has(key)).toBeFalse();
  expect(await cache.read(key)).toBeUndefined();
  expect(await cache.file(key).exists()).toBeFalse();

  await cache.write(key, "hello world");

  expect(await cache.file(key).exists()).toBe(true);
  expect(await cache.list()).toEqual([key]);

  expect(await cache.has(key)).toBe(true);
  expect(await cache.read(key)).toBe("hello world");
  expect(await cache.file(key).exists()).toBeTrue();

  await cache.remove(key);

  expect(await cache.file(key).exists()).toBe(false);
  expect(await cache.list()).toEqual([]);

  expect(await cache.has(key)).toBeFalse();
  expect(await cache.read(key)).toBeUndefined();
  expect(await cache.file(key).exists()).toBeFalse();
});
