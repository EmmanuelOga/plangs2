
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
     * Same as {@link set} but sets the value to an empty object.
     */
    connect(key: TKey): this {
        return this.set(key, {} as TData);
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
 * A vertext id type that can match any type of vertex.
 * We expect a vertex id to be a string with '+' in the middle:
 * Examples: `pl+python`, `person+guido`, `plts+oop`, etc.
 * See {@link P_ANY_VERTEX_ID} for the matching pattern.
 */
type T_ANY_VERTEX_ID = `${string}+${string}`;

/**
 * Matching id pattern for {@link T_ANY_VERTEX_ID}, matching any valid vertex id of any type.
 */
const P_ANY_VERTEX_ID = /^[^\+]+\+.+/;

/**
 * Key to uniquely identify an edge of a graph.
 */
export interface EdgeKey<
    TVIdFrom extends string = T_ANY_VERTEX_ID,
    TVIdTo extends string = T_ANY_VERTEX_ID,
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
    if (!P_ANY_VERTEX_ID.test(from)) errors.push(`invalid from id '${from}' in '${ek}'`);
    if (!P_ANY_VERTEX_ID.test(to)) errors.push(`invalid to id '${to}' in '${ek}'`);
    if (errors.length) return { errors };

    return { from, to, directed: directed === 'd', suffix: suffix || undefined } as EdgeKey;
}

interface SimpleGraph {
    vertices: Map<string, unknown>;
    edges: Map<string, unknown>;
    adjacency: Map<string, string[]>;
}

export type TK<T> = T extends Table<infer TVId, any> ? TVId : never;

/**
 * Helper Table-of-Tables class to simplify collecting entries from many tables.
 */
export class GraphManager {
    // We'll store all tables in maps by their id prefix.
    readonly vtables: Map<string, Table<any, unknown>> = new Map();

    // Edge tables are stored in a separate map, keyed by the prefixes of both from and to vertex ids.
    readonly etables: Map<string, Table<any, unknown>> = new Map();

    protected define<TVData, TVId extends string>(idPrefix: string): Table<TVId, TVData> {
        if (this.vtables.has(idPrefix)) throw new Error(`Table with prefix '${idPrefix}' already exists.`);

        const mapper = (key: TVId) => key; // No need to map the key.
        const idPattern = new RegExp(`^${idPrefix}`);
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
        : Table<EdgeKey<TFromVId, `${string}+${string}`>, TEData> {
        if (!this.vtables.has(from.key)) throw new Error(`Table ${from.key} does not exist.`);
        const tkey = `${from.key}~*`;
        if (this.etables.has(tkey)) throw new Error(`Table ${tkey} already exists.`);

        const mapper = (key: EdgeKey<TFromVId, T_ANY_VERTEX_ID>) => edge(key as EdgeKey);
        const validator = (key: EdgeKey<TFromVId, T_ANY_VERTEX_ID>) =>
            validateEdgeKey(key as EdgeKey, new RegExp(`^${from.key}`), P_ANY_VERTEX_ID);
        const table = new Table<EdgeKey<TFromVId, T_ANY_VERTEX_ID>, TEData>(tkey, mapper, validator);

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
            g.vertices.set(vid, vdata);
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