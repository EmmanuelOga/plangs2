import { validChars } from "./vertex";
import type { VertexTable } from "./vertex_table";

/** Key:      from      to */
export type KFT = `${string}~${string}`;

/** Key:          type   ~  from   ~  to     ~  dir.      ~ suffix */
export type EdgeKey = `${string}~${string}~${string}~${'d' | 'u'}~${string}`;

// biome-ignore lint/suspicious/noExplicitAny: We don't care what kind of data the vertices have.
type _T_Any_V_Data = any;

type _TableData<T_EdgeData> = {
    edge: Map<string, T_EdgeData>,
    adjacency: Map<string, Set<string>>,
}

/**
 * Stores edges between vertices.
 */
export class EdgeTable<
    T_Id_V_From extends string,
    T_Id_V_To extends string,
    T_EdgeData,
> implements Iterable<[EdgeKey, T_EdgeData]> {
    constructor(
        public readonly type: string,
        public readonly from_t: VertexTable<T_Id_V_From, _T_Any_V_Data>,
        public readonly to_t: VertexTable<T_Id_V_To, _T_Any_V_Data>,
        public readonly directed: boolean,
    ) {
        if (!validChars(type)) throw new Error(`'${type}' is not valid as an edge type.`);
    }

    /**
     * This key should be unique in a single graphs,
     * so that we can join all edges in a single graph without edge id conflicts.
     */
    get tableKey(): string {
        const t = this.type
        const from = this.from_t.vtype;
        const to = this.to_t.vtype;
        const d = this.directed ? 'd' : 'u';
        return `${t}~${from}~${to}~${d}`;
    }

    set(from: T_Id_V_From, to: T_Id_V_To, value: T_EdgeData, suffix?: string): this {
        const [kft, data] = this.declare(from, to, suffix);

        data.edge.set(kft, value);
        // biome-ignore lint/style/noNonNullAssertion: declare ensures ajacent sets exist.
        data.adjacency.get(from)!.add(to); if (!this.directed) data.adjacency.get(to)!.add(from);

        return this;
    }

    get(from: T_Id_V_From, to: T_Id_V_To, suffix?: string): T_EdgeData | undefined {
        const [kft, data] = this.declare(from, to, suffix);
        return data.edge.get(kft);
    }

    delete(from: T_Id_V_From, to: T_Id_V_To, suffix?: string): boolean {
        const [kft, data] = this.declare(from, to, suffix);
        return data.edge.has(kft);
    }

    /** Like set, stablishes a connection, but without setting any edge data (also won't overwrite any existing edge data). */
    connect(from: T_Id_V_From, to: T_Id_V_To, suffix?: string): this {
        const [kft, data] = this.declare(from, to, suffix);

        if (!data.edge.has(kft)) data.edge.set(kft, {} as T_EdgeData);
        // biome-ignore lint/style/noNonNullAssertion: declare ensures ajacent sets exist.
        data.adjacency.get(from)!.add(to); if (!this.directed) data.adjacency.get(to)!.add(from);

        return this;
    }

    private declare(from: T_Id_V_From, to: T_Id_V_To, suffix?: string): [KFT, _TableData<T_EdgeData>] {
        const s = suffix ?? '';
        if (!this.validParams(from, to, s)) throw new Error(`Invalid id(s) in edge: ${from} -> ${to}${s ? ` ${s}` : ''}.`);

        // Initialize containers for the given vertices, but don't stablish any data or connections.
        let d = this._perSuffix.get(s);
        if (d === undefined) {
            d = { edge: new Map<string, T_EdgeData>(), adjacency: new Map<string, Set<string>>() };
            this._perSuffix.set(s, d);
        }
        this.from_t.declare(from);
        this.to_t.declare(to);
        if (!d.adjacency.has(from)) d.adjacency.set(from, new Set());
        if (!d.adjacency.has(to)) d.adjacency.set(to, new Set());

        return [this.keyFromTo(from, to), d];
    }

    // Each suffix uses its own edge and adjacency map.
    // If we ever find ourselves with a lot of suffix usage, we may need to change this.
    private readonly _perSuffix: Map<string, _TableData<T_EdgeData>> = new Map();

    validParams(from: T_Id_V_From, to: T_Id_V_To, suffix?: string): boolean {
        return this.from_t.validVid(from) && this.to_t.validVid(to) && (!suffix || validChars(suffix));
    }

    keyFromTo(from: T_Id_V_From, to: T_Id_V_To): KFT {
        // When not directed, we want the same key for both directions,
        // this way the same data is stored in the edge map for both directions.
        let from_ = from as string; let to_ = to as string;
        if (!this.directed && to_ > from_) {
            const t_from_ = from_; from_ = to_; to_ = t_from_;
        }
        return `${from_}~${to_}`;
    }

    *[Symbol.iterator](): IterableIterator<[EdgeKey, T_EdgeData]> {
        for (const [suffix, data] of this._perSuffix) {
            for (const [kft, edge] of data.edge) {
                const [from, to] = kft.split('~');
                // type ~  from ~ to ~ dir ~ suffix
                const edgeKey: EdgeKey = `${this.type}~${from}~${to}~${this.directed ? 'd' : 'u'}~${suffix}`;
                yield [edgeKey, edge];
            }
        }
    }
}