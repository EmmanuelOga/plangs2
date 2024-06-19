import { VIdPattern } from "./vertex";

/**
 * Containers for vertices.
 */
export class VertexTable<T_VId extends string, T_VData> implements Iterable<[T_VId, T_VData]> {
    private _vdata = new Map<T_VId, T_VData>();

    public readonly vidPattern: RegExp;

    constructor(readonly vtype: string) {
        this.vidPattern = VIdPattern(vtype);
     }

    validVid(vid: string): boolean {
        return this.vidPattern.test(vid);
    }

    [Symbol.iterator](): IterableIterator<[T_VId, T_VData]> {
        return this._vdata.entries();
    }

    set(key: T_VId, value: T_VData): this {
        if (!this.validVid(key)) throw new Error(`invalid key: ${key} (pattern: ${this.vidPattern})`);
        this._vdata.set(key, value);
        return this;
    }

    /** Shallow clone using spread operator: data = {...existing, ...value}. */
    merge(key: T_VId, value: T_VData): this {
        if (!this.validVid(key)) throw new Error(`invalid key: ${key}`);
        const existing = this._vdata.get(key);
        this._vdata.set(key, { ...existing, ...value });
        return this;
    }

    get(key: T_VId): T_VData | undefined {
        if (!this.validVid(key)) throw new Error(`invalid key: ${key}`);
        return this._vdata.get(key);
    }

    has(key: T_VId): boolean {
        if (!this.validVid(key)) throw new Error(`invalid key: ${key}`);
        return this._vdata.has(key);
    }

    delete(key: T_VId): boolean {
        if (!this.validVid(key)) throw new Error(`invalid key: ${key}`);
        return this._vdata.delete(key);
    }

    /**
     * Declares there's an entry for the key:
     * - If the key is already in store, it will be left unchanged.
     * - If the key is not in store, it will be set to an empty object.
     */
    declare(key: T_VId): this {
        if (!this.validVid(key)) throw new Error(`invalid key: ${key}`);
        if (!this._vdata.has(key)) this._vdata.set(key, {} as T_VData);
        return this;
    }

    /**
     * @returns The entries with the string-mapped id.
     */
    entries(): IterableIterator<[T_VId, T_VData]> {
        return this._vdata.entries();
    }

    public get size(): number {
        return this._vdata.size;
    }
}