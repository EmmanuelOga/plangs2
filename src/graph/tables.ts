import { EdgeKey, toEdge, toStr, validateEdgeKey } from "./edge";
import { Any, AnyVidP, V, VID } from "./vertex";

/**
 * When a {@link Table} is used to store vertices,
 * its key type should be a vertex type.
 * 
 * Example:
 * 
 * ```ts
 * const table = new Table<VID<'person'>, PersonData>();
 * type T = TK<typeof table> // => VID<'person'>
 * ```
 */
export type TK<T> = T extends Table<infer TVId, any> ? TVId : never;

/**
 * We'll use tables to store Edges and Vertices.
 * 
 * A Table is similar to a {@link Map} but also:
 * - Accetps a key mapper function to convert the keys to strings.
 * - Accepts a key validator function.
 */
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
        if (!this.validator(key)) throw new Error(`invalid key: ${key}`);
        if (!this._map.has(this.mapper(key))) this._map.set(this.mapper(key), {} as TData);
        return this;
    }

    /**
     * Merges new data into the table, keeping the old data if any.
     * - `undefined` values of `newData` are ignored.
     * - The default comparator is **shallow equality**.
     */
    merge(
        key: TKey,
        newData: Partial<TData>,
        areEqual: (key: string, oldVal: any, newVal: any) => boolean = (k, o, n) => o === n,
        onConflict: 'keepOld' | 'mergeNew' = 'keepOld'
    ) {
        if (!this.validator(key)) throw new Error(`invalid key: ${key}`);

        const conflicts: { key: string, oldVal: any, newVal: any }[] = [];
        const sk = this.mapper(key);

        // Easy case: no conflict, just set the new data.
        if (!this._map.has(sk)) {
            this._map.set(sk, newData as TData);
            return { conflicts };
        }

        const data = this._map.get(sk)! as Partial<TData>;
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
    readonly meta: Map<Table, { prefix: string }> = new Map();

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
        this.meta.set(table, { prefix: idPrefix });

        return table;
    }

    /**
     * Define an edge table, where the edges are expected to match the keys of the vertex tables.
     * @param edgeKeyDef can be used to provide edge key defaults.
     */
    protected e_tableFromTo<TEData, TFromVId extends string, TToVId extends string, EK = EdgeKey<TFromVId, TToVId>>
        (from: Table<TFromVId, unknown>, to: Table<TToVId, unknown>, edgeKeyDef?: Partial<EK>)
        : Table<EK, TEData> {
        const fromP = this.meta.get(from)?.prefix;
        const toP = this.meta.get(to)?.prefix;
        if (!fromP) throw new Error(`Please use .define on Table ${from} before connecting it.`);
        if (!toP) throw new Error(`Please use .define on Table ${to} before connecting it.`);

        const mapper = (ek: any) => toStr(ek, edgeKeyDef);
        const validator = (key: EK) => validateEdgeKey(key as EdgeKey, new RegExp(`^${fromP}`), new RegExp(`^${toP}`));
        const table = new Table<EK, TEData>(mapper, validator);
        this.etables.push(table);
        return table;
    }

    /**
     * Define an edge table, where the ++source++ vertices are expected to match the keys of the source vertex table.
     * @param edgeKeyDef can be used to provide edge key defaults.
     */
    protected e_tableTo<TEData, TFromVId extends string, EK = EdgeKey<TFromVId, VID<Any>>>
        (from: Table<TFromVId, unknown>, edgeKeyDef?: Partial<EK>)
        : Table<EK, TEData> {
        const fromP = this.meta.get(from)?.prefix;
        if (!fromP) throw new Error(`Please use .define on Table ${from} before connecting it.`);

        const mapper = (ek: any) => toStr(ek, edgeKeyDef);
        const validator = (key: EK) => validateEdgeKey(key as EdgeKey, new RegExp(`^${fromP}`), AnyVidP);
        const table = new Table<EK, TEData>(mapper, validator);
        this.etables.push(table);
        return table;
    }

    /**
     * Define an edge table, where the source and destination vertices can be any valid vertex id.
     * @param edgeKeyDef can be used to provide edge key defaults.
     */
    protected e_table<TEData>
        (edgeKeyDef?: Partial<EdgeKey>)
        : Table<EdgeKey, TEData> {
        const mapper = (ek: any) => toStr(ek, edgeKeyDef);
        const validator = (key: EdgeKey) => validateEdgeKey(key as EdgeKey, AnyVidP, AnyVidP);
        const table = new Table<EdgeKey, TEData>(mapper, validator);
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
     * The edge id is a string but can be parsed into an {@link EdgeKey} with {@link toEdge}.
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

            const edge = toEdge(eid);

            if ('errors' in edge) {
                errors.push(`Invalid edge key ${eid}: ${edge.errors.join(', ')}`);
                continue;
            }

            if (!g.adjacency.has(edge.from)) g.adjacency.set(edge.from, []);
            if (!g.adjacency.has(edge.to)) g.adjacency.set(edge.to, []);

            g.adjacency.get(edge.from)!.push(edge.to);

            if (!edge.d) {
                g.adjacency.get(edge.to)!.push(edge.from);
            }
        }

        if (errors.length > 0) {
            throw new Error(errors.join("\n"));
        }

        return g;
    }

}