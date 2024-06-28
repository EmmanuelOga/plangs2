import type { NN_Partial } from "../util";
import { vIDPattern } from "./vertex";

/**
 * Containers for vertices.
 */
export class VertexTable<T_VID extends string, T_VData> implements Iterable<[T_VID, T_VData]> {
  #vdata = new Map<T_VID, T_VData>();

  public readonly vidPattern: RegExp;

  constructor(readonly vtype: string) {
    this.vidPattern = vIDPattern(vtype);
  }

  set(key: T_VID, value: T_VData): this {
    if (!this.validParams(key)) throw new Error(`invalid key: ${key} (pattern: ${this.vidPattern})`);
    this.#vdata.set(key, value);
    return this;
  }

  get(key: T_VID): T_VData | undefined {
    if (!this.validParams(key)) throw new Error(`invalid key: ${key}`);
    return this.#vdata.get(key);
  }

  has(key: T_VID): boolean {
    if (!this.validParams(key)) throw new Error(`invalid key: ${key}`);
    return this.#vdata.has(key);
  }

  delete(key: T_VID): boolean {
    if (!this.validParams(key)) throw new Error(`invalid key: ${key}`);
    return this.#vdata.delete(key);
  }

  /**
   * Declares there's an entry for the key:
   * - If the key is already in store, it will be left unchanged.
   * - If the key is not in store, it will be set to an empty object.
   * - Returns the data for the key.
   */
  declare(key: T_VID): NN_Partial<T_VData> {
    if (!this.validParams(key)) throw new Error(`invalid key: ${key}`);
    let v_data = this.#vdata.get(key);
    if (v_data === undefined) {
      v_data = {} as T_VData;
      this.#vdata.set(key, v_data);
    }
    return v_data as NN_Partial<T_VData>;
  }

  merge(key: T_VID, value: T_VData): NN_Partial<T_VData> {
    if (!this.validParams(key)) throw new Error(`invalid key: ${key}`);

    if (!this.#vdata.has(key)) {
      this.#vdata.set(key, {} as T_VData);
    }
    // biome-ignore lint/suspicious/noExplicitAny: it is ok.
    const vdata = Object.assign(this.#vdata.get(key) as any, value);

    return vdata as NN_Partial<T_VData>;
  }

  validParams(vid: string): boolean {
    return this.vidPattern.test(vid);
  }

  keys(): IterableIterator<T_VID> {
    return this.#vdata.keys();
  }

  [Symbol.iterator](): IterableIterator<[T_VID, T_VData]> {
    return this.#vdata.entries();
  }

  toJSON(): Record<string, T_VData> {
    const vdata: Record<string, T_VData> = {};
    for (const [vid, data] of this.#vdata) {
      vdata[vid] = data;
    }
    return vdata;
  }

  loadJSON(vdata: Record<string, T_VData>) {
    for (const [vid, data] of Object.entries(vdata)) {
      this.set(vid as T_VID, data);
    }
  }

  /** Number of vertices. */
  public get size(): number {
    return this.#vdata.size;
  }
}
