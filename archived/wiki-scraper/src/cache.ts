import { Glob } from "bun";
import type { BunFile } from "bun";

import { mkdir, unlink } from "node:fs/promises";
import { join } from "node:path";

export const BASE_CACHE_PATH = join(import.meta.dir, "../../../.cache/");

export class Key {
  static raw(raw: string): Key {
    return new Key(raw);
  }

  static get(unescaped: string): Key {
    return new Key(encodeURIComponent(unescaped));
  }

  private constructor(public readonly value: string) {}

  get unescaped(): string {
    return decodeURIComponent(this.value);
  }

  get valid(): boolean {
    return this.value.length < 255;
  }
}

/** Caches key/values to memory and disk. */
export class Cache {
  readonly cachePath: string;

  memory = new Map<string, string>();

  constructor(subdir: string) {
    this.cachePath = join(BASE_CACHE_PATH, subdir);
  }

  path(key: Key): string {
    return join(this.cachePath, key.value);
  }

  file(key: Key): BunFile {
    return Bun.file(this.path(key));
  }

  async mkdir() {
    return mkdir(this.cachePath, { recursive: true }).catch((_) => {});
  }

  async has(key: Key): Promise<boolean> {
    return this.memory.has(key.value) || this.file(key).exists();
  }

  async read(key: Key): Promise<string | undefined> {
    if (this.memory.has(key.value)) return this.memory.get(key.value);

    const file = this.file(key);

    if (await file.exists()) {
      const data = await file.text();
      this.memory.set(key.value, data);
      return data;
    }
  }

  async write(key: Key, data: string): Promise<number> {
    return Bun.write(this.path(key), data);
  }

  async remove(key: Key) {
    this.memory.delete(key.value);
    return unlink(this.path(key));
  }

  async removeAll() {
    for (const key of await this.list()) await this.remove(key);
  }

  async list(): Promise<Key[]> {
    const keys: Key[] = [];
    for await (const path of new Glob("*").scan(this.cachePath)) keys.push(Key.raw(path));
    return keys;
  }
}
