import { V_Plang } from "../schemas";
import { caller, type UW_Partial } from "../util";
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

    set(key: T_VId, value: T_VData): this {
        if (!this.validParams(key)) throw new Error(`invalid key: ${key} (pattern: ${this.vidPattern})`);
        this._vdata.set(key, value);
        return this;
    }

    get(key: T_VId): T_VData | undefined {
        if (!this.validParams(key)) throw new Error(`invalid key: ${key}`);
        return this._vdata.get(key);
    }

    has(key: T_VId): boolean {
        if (!this.validParams(key)) throw new Error(`invalid key: ${key}`);
        return this._vdata.has(key);
    }

    delete(key: T_VId): boolean {
        if (!this.validParams(key)) throw new Error(`invalid key: ${key}`);
        return this._vdata.delete(key);
    }

    /**
     * Declares there's an entry for the key:
     * - If the key is already in store, it will be left unchanged.
     * - If the key is not in store, it will be set to an empty object.
     * - Returns the data for the key.
     */
    declare(key: T_VId): UW_Partial<T_VData> {
        if (!this.validParams(key)) throw new Error(`invalid key: ${key}`);
        let v_data = this._vdata.get(key);
        if (v_data === undefined) {
            v_data = {} as T_VData;
            this._vdata.set(key, v_data);
        }
        return v_data as UW_Partial<T_VData>;
    }

    merge(key: T_VId, value: T_VData): UW_Partial<T_VData> {
        if (!this.validParams(key)) throw new Error(`invalid key: ${key}`);

        if (!this._vdata.has(key)) { this._vdata.set(key, {} as T_VData); }
        // biome-ignore lint/suspicious/noExplicitAny: it is ok.
        const vdata = Object.assign(this._vdata.get(key) as any, value);

        return vdata as UW_Partial<T_VData>;
    }

    validParams(vid: string): boolean {
        return this.vidPattern.test(vid);
    }

    keys(): IterableIterator<T_VId> {
        return this._vdata.keys();
    }

    [Symbol.iterator](): IterableIterator<[T_VId, T_VData]> {
        return this._vdata.entries();
    }

    /** Number of vertices. */
    public get size(): number {
        return this._vdata.size;
    }
}