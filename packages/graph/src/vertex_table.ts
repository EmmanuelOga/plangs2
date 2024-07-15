import { type VData, vIDPattern } from "./vertex";

/**
 * Containers for vertices.
 */
export class VertexTable<T_VID extends string, T_VData extends VData<T_VID>> implements Iterable<[T_VID, T_VData]> {
  #vdata = new Map<T_VID, T_VData>();

  public readonly vidPattern: RegExp;

  constructor(readonly vtype: string) {
    this.vidPattern = vIDPattern(vtype);
  }

  set(vid: T_VID, value: T_VData): this {
    if (!this.validParams(vid)) throw new Error(`invalid vid: ${vid} (pattern: ${this.vidPattern})`);
    this.#vdata.set(vid, value);
    value.vid = vid;
    return this;
  }

  get(vid: T_VID): T_VData | undefined {
    if (!this.validParams(vid)) throw new Error(`invalid vid: ${vid}`);
    return this.#vdata.get(vid);
  }

  has(vid: T_VID): boolean {
    if (!this.validParams(vid)) throw new Error(`invalid vid: ${vid}`);
    return this.#vdata.has(vid);
  }

  delete(vid: T_VID): boolean {
    if (!this.validParams(vid)) throw new Error(`invalid vid: ${vid}`);
    return this.#vdata.delete(vid);
  }

  /**
   * Declares there's an entry for the vid:
   * - If the vid is already in store, it will be left unchanged.
   * - If the vid is not in store, it will be set to an empty object.
   * - Returns the data for the vid.
   */
  declare(vid: T_VID): Partial<T_VData> {
    if (!this.validParams(vid)) throw new Error(`invalid vid: ${vid}`);
    let v_data = this.#vdata.get(vid);
    if (v_data === undefined) {
      v_data = { vid } as unknown as T_VData;
      this.#vdata.set(vid, v_data);
    }
    return v_data as Partial<T_VData>;
  }

  merge(vid: T_VID, value: T_VData): Partial<T_VData> {
    if (!this.validParams(vid)) throw new Error(`invalid vid: ${vid}`);

    if (!this.#vdata.has(vid)) {
      this.#vdata.set(vid, { vid } as unknown as T_VData);
    }
    // biome-ignore lint/suspicious/noExplicitAny: we know the data exists and is of type T_VData.
    const vdata = Object.assign(this.#vdata.get(vid) as any, value);
    vdata.vid = vid;

    return vdata as Partial<T_VData>;
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
    for (const [vid, data] of Object.entries(vdata).sort()) {
      this.set(vid as T_VID, data);
    }
  }

  /** Number of vertices. */
  public get size(): number {
    return this.#vdata.size;
  }
}
