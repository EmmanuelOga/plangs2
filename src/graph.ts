/**
 * A typical graph vertex will look like this:
 * ```ts
 * { type: 'person', id: 'person+A', ... }
 * ```
 */
export interface Vertex<
    Type extends string = string,
    Id extends string = `${Type}+${string}`
> {
    type: Type;
    id: Id,
}

/**
 * A typical graph edge will look like this:
 * ```ts
 * {
 *   type: 'friend', from: 'person+A', to: 'person+B',
 *   id: 'friend~person+A~person+B',
 *   ...
 * }
 * ```
 */
export interface Edge<
    Type extends string = string,
    From extends string = Vertex['id'],
    To extends string = Vertex['id'],
    Id extends string = `${Type}~${From}~${To}`
> {
    type: Type;
    id: Id;
    from: From;
    to: To;
}

/** A helper function to generate the id of an edge. */
export function genId<E extends Edge>(e: Omit<E, 'id'>): E {
    return { ...e, id: `${e.type}~${e.from}~${e.to}` } as E;
}

/** Type of objects that contain an id attribute.  */
export type IDAble = { id: string };

/**
 * Append-only table of objects with an {id: string} key.
 * @remarks
 * Duplicate ids are not allowed.
 */
export class Table<V extends IDAble = IDAble> implements Iterable<V> {
    #elems: V[] = [];
    #elemIndex: Map<string, number> = new Map();

    add(elem: V): void | never {
        this._checkDup(elem);
        const newSize = this.#elems.push(elem);
        this.#elemIndex.set(elem.id, newSize - 1);
    }

    has(id: string): boolean {
        return this.#elemIndex.has(id);
    }

    get(id: string): V | undefined {
        const index = this.#elemIndex.get(id);
        return index === undefined ? undefined : this.#elems[index];
    }

    sort(comparable: (a: V, b: V) => number): void {
        this.#elems.sort(comparable);
        this.#elems.forEach((value: V, idx: number) => this.#elemIndex.set(value.id, idx));
    }

    entries(): IterableIterator<[number, V]> {
        return this.#elems.entries();
    }

    [Symbol.iterator](): IterableIterator<V> {
        return this.#elems[Symbol.iterator]();
    }

    toString(): string {
        const result: string[] = [];
        this.#elems.forEach((elem, i) => {
            result.push(`${i}: ${JSON.stringify(elem)}`);
        });
        return result.join("\n");
    }

    private _checkDup(elem: V): void | never {
        const existing = this.get(elem.id);
        if (existing !== undefined) {
            throw new Error(`Duplicate ID: ${elem.id}. ` +
                `Existing: ${JSON.stringify(existing)}, ` +
                `Given: ${JSON.stringify(elem)}.`);
        }
    }
}

/**
 * Aggregate all nodes and edges into a single graph.
 * @throws if either duplicated vertices or edges are found (by their id).
 */
export function toGraph(vertexTables: Table<Vertex>[], edgeTables: Table<Edge>[]): never | {
    vertices: Map<string, Vertex>;
    edges: Map<string, Edge>;
    adjacency: Map<string, Edge[]>;
} {
    const vertices = new Map<string, Vertex>();
    const edges = new Map<string, Edge>();
    const adjacency = new Map<string, Edge[]>();

    const dupV: [Vertex, Vertex][] = [];
    const dupE: [Edge, Edge][] = [];

    for (const table of vertexTables) {
        for (const vertex of table) {
            if (vertices.has(vertex.id)) dupV.push([vertices.get(vertex.id)!, vertex]);
            vertices.set(vertex.id, vertex);
        }
    }

    for (const table of edgeTables) {
        for (const edge of table) {
            if (edges.has(edge.id)) dupE.push([edges.get(edge.id)!, edge]);
            edges.set(edge.id, edge);

            if (!adjacency.has(edge.from)) adjacency.set(edge.from, []);
            if (!adjacency.has(edge.to)) adjacency.set(edge.to, []);
            adjacency.get(edge.from)!.push(edge);
        }
    }

    if (dupV.length > 0 || dupE.length > 0) {
        const errors = [''];
        for (const [a, b] of dupV) {
            errors.push(`Duplicate vertex id: ${JSON.stringify(a)}, ${JSON.stringify(b)}`);
        }
        for (const [a, b] of dupE) {
            errors.push(`Duplicate edge id: ${JSON.stringify(a)}, ${JSON.stringify(b)}`);
        }
        throw new Error(errors.join('\n'));
    }

    return { vertices, edges, adjacency };
}