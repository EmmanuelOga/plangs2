/**
 * Same as a regular Set,
 * but keeps track of a version number that only changes when the set changes.
 */
export class VSet<T> extends Set<T> {
  #version = 0;

  get version(): number {
    return this.#version;
  }

  override add(item: T): this {
    if (this.has(item)) return this;
    super.add(item);
    this.#version++;
    return this;
  }

  override delete(item: T): boolean {
    if (!this.has(item)) return false;
    super.delete(item);
    this.#version++;
    return true;
  }

  override clear() {
    if (this.size === 0) return;
    super.clear();
    this.#version++;
  }

  toggle(item: T): this {
    this.has(item) ? this.delete(item) : this.add(item);
    return this;
  }
}
