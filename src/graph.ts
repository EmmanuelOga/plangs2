/**
 * We'll use this to store Edges and Vertices.
 * 
 * Similar to a Map but also:
 * - Accepts a key validator function.
 * - Accetps a key mapper function to convert the keys to strings.
 */
export class Table<TKey, TData> {
    private _map = new Map<string, TData>();

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

/**
 * Factory function for creating a new Vertex Table.
 */
export function createVTable<TVId extends string, TVData>(idPrefix: string | RegExp): Table<TVId, TVData> {
    const mapper = (key: TVId) => key;
    const idPattern = isRegExp(idPrefix) ? idPrefix : new RegExp(`^${idPrefix}`);
    const validator = (key: TVId) => idPattern.test(key);
    return new Table(mapper, validator);
}

export function isRegExp(val: unknown): val is RegExp {
    return Object.prototype.toString.call(val) === '[object RegExp]';
}


/**
 * Factory function for creating a new Vertex Table.
 * Returns a builder {@link ETableBuilder} to configure the table.
 */
export function createETable<TEData>(): ETableBuilder<TEData> {
    return new ETableBuilder<TEData>();
}

/**
 * A builder to configure an Edge Table.
 * This is more complicated than using a single factory function,
 * but it allows for an equally type-safe configuration but more readable on the call-site.
 */
class ETableBuilder<
    __TEData,
    __TVIdFrom extends string = T_ANY_VERTEX_ID,
    __TVIdTo extends string = T_ANY_VERTEX_ID
> {
    private pt: string | RegExp = P_ANY_VERTEX_ID;
    private pf: string | RegExp = P_ANY_VERTEX_ID;

    from<TVIdFrom extends string>(fromPattern: string | RegExp)
        : ETableBuilder<__TEData, TVIdFrom, __TVIdTo> {
        const b = new ETableBuilder<__TEData, TVIdFrom, __TVIdTo>();
        b.pf = fromPattern;
        return b;
    }

    fromAny()
        : ETableBuilder<__TEData, T_ANY_VERTEX_ID, __TVIdTo> {
        const b = new ETableBuilder<__TEData, T_ANY_VERTEX_ID, __TVIdTo>();
        b.pf = P_ANY_VERTEX_ID;
        return b;
    }

    to<TVIdTo extends string>(toPattern: string | RegExp)
        : ETableBuilder<__TEData, __TVIdFrom, TVIdTo> {
        const b = new ETableBuilder<__TEData, __TVIdFrom, TVIdTo>();
        b.pt = toPattern;
        return b;
    }

    toAny()
        : ETableBuilder<__TEData, __TVIdTo, T_ANY_VERTEX_ID> {
        const b = new ETableBuilder<__TEData, __TVIdTo, T_ANY_VERTEX_ID>();
        b.pt = P_ANY_VERTEX_ID;
        return b;
    }

    build()
        : Table<EdgeKey<__TVIdFrom, __TVIdTo>, __TEData> {
        const mapper = (ek: EdgeKey<__TVIdFrom, __TVIdTo>) => edge(ek as EdgeKey);
        const pf = isRegExp(this.pf) ? this.pf : new RegExp(`^${this.pf}`);
        const pt = isRegExp(this.pt) ? this.pt : new RegExp(`^${this.pt}`);
        const validator = (key: EdgeKey<__TVIdFrom, __TVIdTo>) => validateEdgeKey(key as EdgeKey, pf, pt);
        return new Table<EdgeKey<__TVIdFrom, __TVIdTo>, __TEData>(mapper, validator);
    }
}

interface SimpleGraph {
    vertices: Map<string, unknown>;
    edges: Map<string, unknown>;
    adjacency: Map<string, string[]>;
}

/**
 * Convert a list of edges and vertices into graph.
 */
export function toGraph(
    vertices: Iterable<[string, unknown]>,
    edges: Iterable<[string, unknown]>,
): SimpleGraph {
    const g: SimpleGraph = {
        vertices: new Map(),
        edges: new Map(),
        adjacency: new Map(),
    };

    for (const [vid, vdata] of vertices) {
        g.vertices.set(vid, vdata);
        g.adjacency.set(vid, []);
    }

    for (const [eid, data] of edges) {
        g.edges.set(eid, data);

        const edge = toKey(eid);

        if ('errors' in edge) {
            console.error(`Invalid edge key ${eid}: ${edge.errors.join(', ')}`);
            continue;
        }

        if (!g.adjacency.has(edge.from)) g.adjacency.set(edge.from, []);
        if (!g.adjacency.has(edge.to)) g.adjacency.set(edge.to, []);

        g.adjacency.get(edge.from)!.push(edge.to);

        if (!edge.directed) {
            g.adjacency.get(edge.to)!.push(edge.from);
        }
    }

    return g;
}