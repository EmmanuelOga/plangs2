import { fromStr, toStr, type EdgeKey } from "./edge";
import type { V } from "./vertex";

/**
 * We'll use tables to store Edges and Vertices.
 * 
 * A Table is just a {@link Map} but also accetps a key mapper
 * function to convert the keys to strings.
 */
// biome-ignore lint/suspicious/noExplicitAny: we don't know what kind of data TData/TData will be.
export class Table<TKey = any, TData = any> {
    private _map = new Map<string, TData>();

    /**
     * @param mapper is used to convert the key to a string, so it can be used to index the Map.
     * @param validator rejects invalid keys.
     */
    constructor(
        readonly mapper: (key: TKey) => string,
        readonly validator: (key: TKey) => boolean,
    ) { }

    get v(): (key: TKey) => boolean { return this.validator; }

    set(key: TKey, value: TData): this {
        if (!this.validator(key)) throw new Error(`invalid key: ${key}`);
        this._map.set(this.mapper(key), value);
        return this;
    }

    get(key: TKey): TData | undefined {
        if (!this.validator(key)) throw new Error(`invalid key: ${key}`);
        return this._map.get(this.mapper(key));
    }

    has(key: TKey): boolean {
        if (!this.validator(key)) throw new Error(`invalid key: ${key}`);
        return this._map.has(this.mapper(key));
    }

    delete(key: TKey): boolean {
        if (!this.validator(key)) throw new Error(`invalid key: ${key}`);
        return this._map.delete(this.mapper(key));
    }

    /**
     * Ensures there's an entry for the key:
     * - If the key is not in the table, it will be added with an empty object.
     * - If the key is already in the table, it will be left unchanged.
     */
    connect(key: TKey): this {
        if (!this.validator(key)) throw new Error(`invalid key: ${JSON.stringify(key)}`);
        if (!this._map.has(this.mapper(key))) this._map.set(this.mapper(key), {} as TData);
        return this;
    }

    /**
     * Merges new data into the table, keeping the old data if any.
     * - `undefined` values of `newData` are ignored.
     * - The default comparator is **shallow equality**.
     * @param onConflict can be 'skip', 'keepOld', or 'mergeNew'.
     * - If `'skipIfExists'`, the whole merge op is skipped if the key already exists.
     */
    merge(
        key: TKey,
        newData: Partial<TData>,
        onConflict: 'skipIfExists' | 'keepOld' | 'mergeNew' = 'keepOld',
        // biome-ignore lint/suspicious/noExplicitAny: we don't know what kind of data TData is.
        areEqual: (key: string, oldVal: any, newVal: any) => boolean = (k, o, n) => o === n,
        // biome-ignore lint/suspicious/noExplicitAny: we don't know what kind of data TData is.
    ): 'skipped' | { conflicts: { key: string; oldVal: any; newVal: any; }[]; } {
        if (!this.validator(key)) throw new Error(`invalid key: ${key}`);

        // biome-ignore lint/suspicious/noExplicitAny: we don't know what kind of data TData is.
        const conflicts: { key: string, oldVal: any, newVal: any }[] = [];
        const sk = this.mapper(key);

        // Easy case: no conflict, just set the new data.
        if (!this._map.has(sk)) {
            this._map.set(sk, newData as TData);
            return { conflicts };
        }
        if (onConflict === 'skipIfExists') return 'skipped';

        const data = this._map.get(sk) as Partial<TData>;
        for (const [key, newVal] of Object.entries(newData)) {
            if (newVal === undefined) continue;
            const oldVal = data[key];
            if (oldVal === undefined) {
                data[key] = newVal;
            } else if (!areEqual(key, oldVal, newVal)) {
                conflicts.push({ key, oldVal, newVal });
                if (onConflict === 'mergeNew') data[key] = newVal;
            }
        }

        if (conflicts.length > 0) {
            console.log(`Warning, conflicting definition for ${key}: ${JSON.stringify(conflicts)}.`)
        }

        return { conflicts };
    }

    /**
     * @returns The entries with the string-mapped id.
     */
    entries(): IterableIterator<[string, TData]> {
        return this._map.entries();
    }

    public get size(): number {
        return this._map.size;
    }
}

/**
 * Very simple aggregate type for Graphs.
 */
type SimpleGraph = {
    vertices: Map<string, V>;
    edges: Map<string, unknown>;
    adjacency: Map<string, string[]>;
}

/**
 * Since a Graph consists of Vertices and Edges,
 * we can use a GraphManager to manage both.
 */
export class GraphManager {
    readonly vtables: Table[] = [];
    readonly etables: Table[] = [];

    /**
     * Define a vertex table.
     * @param idPrefix is used to validate the keys.
     */
    protected v_table<TVData, TVId extends string>(idPrefix: string): Table<TVId, TVData> {
        const mapper = (key: TVId) => key; // No need to map the key.
        const idPattern = new RegExp(`^${idPrefix}+`);
        const validator = (key: TVId) => idPattern.test(key);
        const table = new Table<TVId, TVData>(mapper, validator);
        this.vtables.push(table);
        return table;
    }

    /**
     * Define an edge table, where the edges are expected to match the keys of the vertex tables.
     * @param edgeKeyDef can be used to provide edge key defaults.
     */
    protected e_table<TEData, ID_V_From extends string, ID_V_To extends string, EK = EdgeKey<ID_V_From, ID_V_To>>
        (validFrom: (s: ID_V_From) => boolean, validTo: (s: ID_V_To) => boolean, edgeKeyDef?: Partial<EK>)
        : Table<EK, TEData> {
        const mapper = (ek: any) => toStr(ek, edgeKeyDef);
        const validator = (key: EK) => validFrom((key as any).from) && validTo((key as any).to);
        const table = new Table<EK, TEData>(mapper, validator);
        this.etables.push(table);
        return table;
    }

    /**
     * Iterate over all pairs `[vid: string, data: unknown]`.
     */
    *vertices(): Iterable<[string, unknown]> {
        for (const table of this.vtables.values()) yield* table.entries();
    }

    /**
     * Iterate over all pairs `[eid: string, data: unknown]`.
     * The edge id is a string but can be parsed into an {@link EdgeKey} with {@link fromStr}.
     */
    *edges(): Iterable<[string, unknown]> {
        for (const table of this.etables.values()) yield* table.entries();
    }

    /**
     * Merge all nodes and vertices into a single simple graph.
     * @returns a simple graph with all vertices and edges merged, and an adjacency list.
     */
    merge(): SimpleGraph | never {
        const g: SimpleGraph = {
            vertices: new Map(),
            edges: new Map(),
            adjacency: new Map(),
        };

        for (const [vid, vdata] of this.vertices()) {
            g.vertices.set(vid, vdata as V);
            g.adjacency.set(vid, []);
        }

        const errors: string[] = [];

        for (const [eid, data] of this.edges()) {
            g.edges.set(eid, data);

            const edge = fromStr(eid);

            if ('errors' in edge) {
                errors.push(`Invalid edge key ${eid}: ${edge.errors.join(', ')}`);
                continue;
            }

            if (!g.adjacency.has(edge.from)) g.adjacency.set(edge.from, []);
            if (!g.adjacency.has(edge.to)) g.adjacency.set(edge.to, []);

            // Add missing vertices if needed. Since the name is missing, default it to the id.
            if (!g.vertices.has(edge.from)) g.vertices.set(edge.from, { name: edge.from });
            if (!g.vertices.has(edge.to)) g.vertices.set(edge.to, { name: edge.to });

            g.adjacency.get(edge.from)?.push(edge.to);

            if (!edge.d) {
                g.adjacency.get(edge.to)?.push(edge.from);
            }
        }

        if (errors.length > 0) {
            throw new Error(errors.join("\n"));
        }

        return g;
    }

}