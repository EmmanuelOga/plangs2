/**
 * At minimal, a vertex has a name.
 */
export interface V {
    name: string;
}

/**
 * Edges many not need additional data.
 */
export type E_Empty = {};

/**
 * A vertext id format is a string with format: `type+id`.
 * Examples: `pl+python`, `person+guido`, `plts+oop`, etc.
 * See {@link AnyVidP} for the matching pattern.
 */
export type VID<Type extends string> = `${Type}+${string}`

/**
 * An alias such that we can say: VID<Any> to match any vertex id.
 */
export type Any = string;

/**
 * RegExp Pattern for string literals matching any valid {@link VID }.
 */
export const AnyVidP = /^[^\+]+\+[a-z-A-Z0-9\-_]+$/;

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
 * We'll use this to store Edges and Vertices.
 * 
 * Similar to a Map but also:
 * - Accepts a key validator function.
 * - Accetps a key mapper function to convert the keys to strings.
 */
export class Table<TKey, TData> {
    private _map = new Map<string, TData>();

    /**
     * @param key is useful when storing a table on a Map, for identifying the table.
     * @param mapper is used to convert the key to a string, so it can be used to index the Map.
     * @param validator rejects invalid keys.
     */
    constructor(
        readonly key: string,
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
 * Key to uniquely identify an edge of a graph.
 */
export interface EdgeKey<
    TVIdFrom extends string = VID<Any>,
    TVIdTo extends string = VID<Any>
> {
    from: TVIdFrom;
    to: TVIdTo;

    /**
     * If true, the edge is directed from `from` to `to`.
     * If false or undefined, the edge is undirected.
     */
    directed?: boolean;

    /**
     * A suffix can be used to distinguish between parallel edges.
     */
    suffix?: string;
}

/**
 * @returns true only if both from and to keys match the respective patterns.
 */
export function validateEdgeKey(ek: EdgeKey, fromPattern: RegExp, toPattern: RegExp): boolean {
    return fromPattern.test(ek.from) && toPattern.test(ek.to);
}

/**
 * Convert an edge key to a string, for use as a key in a Map.
 */
export function edge(ek: EdgeKey): string {
    return `${ek.directed ? 'd' : 'u'}~${ek.from}~${ek.to}~${ek.suffix ?? ''}`;
}

/**
 * Reverse a string key back to an EdgeKey.
 * Note that the Edge key from/to types cannot be inferred.
 */
export function toKey(ek: string): EdgeKey | { errors: string[] } {
    const [directed, from, to, suffix] = ek.split('~');

    const errors: string[] = [];
    if (directed !== 'd' && directed !== 'u') errors.push(`invalid direction '${directed}' in '${ek}'`);
    if (!AnyVidP.test(from)) errors.push(`invalid from id '${from}' in '${ek}'`);
    if (!AnyVidP.test(to)) errors.push(`invalid to id '${to}' in '${ek}'`);
    if (errors.length) return { errors };

    return { from, to, directed: directed === 'd', suffix: suffix || undefined } as EdgeKey;
}

interface SimpleGraph {
    vertices: Map<string, V>;
    edges: Map<string, unknown>;
    adjacency: Map<string, string[]>;
}

/**
 * Helper Table-of-Tables class to simplify collecting entries from many tables.
 */
export class GraphManager {
    // We'll store all tables in maps by their id prefix.
    readonly vtables: Map<string, Table<any, unknown>> = new Map();

    // Edge tables are stored in a separate map, keyed by the prefixes of both from and to vertex ids.
    readonly etables: Map<string, Table<any, unknown>> = new Map();

    protected define<TVData, TVId extends string>(idPrefix: string): Table<TVId, TVData> {
        if (!AnyVidP.test(`${idPrefix}+dummy-id`)) throw new Error(`Invalid id prefix: ${idPrefix}.`);
        if (this.vtables.has(idPrefix)) throw new Error(`Table with prefix '${idPrefix}' already exists.`);

        const mapper = (key: TVId) => key; // No need to map the key.
        const idPattern = new RegExp(`^${idPrefix}+`);
        const validator = (key: TVId) => idPattern.test(key);
        const table = new Table<TVId, TVData>(idPrefix, mapper, validator);

        this.vtables.set(idPrefix, table);
        return table;
    }

    // TODO: why can't the type of the from/to parameters be inferred?
    protected connect<
        TEData,
        TFromVId extends string,
        TToVId extends string
    >(from: Table<TFromVId, unknown>, to: Table<TToVId, unknown>)
        : Table<EdgeKey<TFromVId, TToVId>, TEData> {
        if (!this.vtables.has(from.key)) throw new Error(`Table ${from.key} does not exist.`);
        if (!this.vtables.has(to.key)) throw new Error(`Table ${to.key} does not exist.`);
        const tkey = `${from.key}~${to.key}`;
        if (this.etables.has(tkey)) throw new Error(`Table ${tkey} already exists.`);

        const mapper = (key: EdgeKey<TFromVId, TToVId>) => edge(key as EdgeKey);
        const validator = (key: EdgeKey<TFromVId, TToVId>) =>
            validateEdgeKey(key as EdgeKey, new RegExp(`^${from.key}`), new RegExp(`^${to.key}`));
        const table = new Table<EdgeKey<TFromVId, TToVId>, TEData>(tkey, mapper, validator);

        this.etables.set(tkey, table);
        return table;
    }

    protected connectToAny<
        TEData,
        TFromVId extends string
    >(from: Table<TFromVId, unknown>)
        : Table<EdgeKey<TFromVId, VID<Any>>, TEData> {
        if (!this.vtables.has(from.key)) throw new Error(`Table ${from.key} does not exist.`);
        const tkey = `${from.key}~*`;
        if (this.etables.has(tkey)) throw new Error(`Table ${tkey} already exists.`);

        const mapper = (key: EdgeKey<TFromVId, VID<Any>>) => edge(key as EdgeKey);
        const validator = (key: EdgeKey<TFromVId, VID<Any>>) =>
            validateEdgeKey(key as EdgeKey, new RegExp(`^${from.key}`), AnyVidP);
        const table = new Table<EdgeKey<TFromVId, VID<Any>>, TEData>(tkey, mapper, validator);

        this.etables.set(tkey, table);
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
     * The edge id is a string but can be parsed into an {@link EdgeKey} with {@link toKey}.
     */
    *edges(): Iterable<[string, unknown]> {
        for (const table of this.etables.values()) yield* table.entries();
    }

    /**
     * Merge all nodes and vertices into a single graph.
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

            const edge = toKey(eid);

            if ('errors' in edge) {
                errors.push(`Invalid edge key ${eid}: ${edge.errors.join(', ')}`);
                continue;
            }

            if (!g.adjacency.has(edge.from)) g.adjacency.set(edge.from, []);
            if (!g.adjacency.has(edge.to)) g.adjacency.set(edge.to, []);

            g.adjacency.get(edge.from)!.push(edge.to);

            if (!edge.directed) {
                g.adjacency.get(edge.to)!.push(edge.from);
            }
        }

        if (errors.length > 0) {
            throw new Error(errors.join("\n"));
        }

        return g;
    }

}