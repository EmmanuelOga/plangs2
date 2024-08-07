/**
 * @module graph
 *
 * Simple single-edge directed graph data structure.
 *
 * Follows some of the naming conventions of the Graphology library.
 *
 * A JSON export from this library can be imported into a new Graphology Graph.
 *
 * https://graphology.github.io
 */

/** Graph Node. */
export abstract class Node<T_Key, T_Data = NO_DATA> {
  data: Partial<T_Data> = {};

  constructor(public readonly key: T_Key) {}

  merge(attributes: Partial<T_Data>): this {
    Object.assign(this.data, attributes);
    return this;
  }

  /**
   * Output data ready for JSON serialization.
   */
  toJSON(): { key: T_Key; attributes?: Partial<T_Data> } {
    const data: { key: T_Key; attributes?: Partial<T_Data> } = { key: this.key };
    if (!isEmpty(this.data)) data.attributes = this.data;
    return data;
  }
}

/** Graph Node (identity) Map. */
export class NodeMap<T_Node extends Node<T_Key, T_Data>, T_Key = T_Node["key"], T_Data = T_Node["data"]> {
  readonly #map = new Map<T_Key, T_Node>();

  constructor(private readonly factory: (key: T_Key) => T_Node) {}

  get(key: T_Key): T_Node {
    const n = this.#map.get(key);
    if (n) return n;
    const newNode = this.factory(key);
    this.#map.set(key, newNode);
    return newNode;
  }

  has(key: T_Key): boolean {
    return this.#map.has(key);
  }
}

/** Graph Edge. */
export abstract class Edge<T_Type extends string, T_Source, T_Target, T_Data = NO_DATA> {
  readonly data: Partial<T_Data> = {};

  constructor(
    public readonly type: T_Type,
    public readonly source: T_Source,
    public readonly target: T_Target,
  ) {}

  merge(data: Partial<T_Data>): this {
    Object.assign(this.data, data);
    return this;
  }

  /**
   * Output data ready for JSON serialization.
   */
  toJSON(): { type: T_Type; source: T_Source; target: T_Target; attributes?: Partial<T_Data> } {
    const data: { type: T_Type; source: T_Source; target: T_Target; attributes?: Partial<T_Data> } = {
      type: this.type,
      source: this.source,
      target: this.target,
    };
    if (!isEmpty(this.data)) data.attributes = this.data;
    return data;
  }
}

/** Stores edges by the compound keys (from, to) and (to, from). */
export class EdgeMap<
  T_Edge extends Edge<T_Type, T_Source, T_Target, T_Data>,
  T_Type extends string = T_Edge["type"],
  T_Source = T_Edge["source"],
  T_Target = T_Edge["target"],
  T_Data = T_Edge["data"],
> {
  readonly #adjFrom = new Map2<T_Source, T_Target, T_Edge>();
  readonly #adjTo = new Map2<T_Target, T_Source, T_Edge>();

  constructor(
    public readonly type: T_Type,
    private readonly factory: (type: T_Type, source: T_Source, target: T_Target) => T_Edge,
  ) {}

  connect(source: T_Source, target: T_Target): T_Edge {
    let edge = this.#adjFrom.get(source, target);
    if (edge) return edge;
    edge = this.factory(this.type, source, target);
    this.#adjFrom.set(source, target, edge);
    this.#adjTo.set(target, source, edge);
    return edge;
  }

  adjFrom(source: T_Source): Map<T_Target, T_Edge> {
    return this.#adjFrom.getMap(source) ?? new Map();
  }

  adjTo(target: T_Target): Map<T_Source, T_Edge> {
    return this.#adjTo.getMap(target) ?? new Map();
  }
}

/** Base Graph class with the ability to de/serialize registered node and edge maps. */
export class BaseGraph {
  #vmap = new Map<string, NodeMap<_any>>();
  #emap = new Map<string, EdgeMap<_any>>();

  nodeMap<T_Node extends Node<T_Key, T_Data>, T_Key = T_Node["key"], T_Data = T_Node["data"]>(
    typeName: string,
    factory: (key: T_Key) => T_Node,
  ): NodeMap<T_Node> {
    const m = new NodeMap(factory);
    this.#vmap.set(typeName, m);
    return m;
  }

  edgeMap<
    T_Edge extends Edge<T_Type, T_Source, T_Target, T_Data>,
    T_Type extends string = T_Edge["type"],
    T_Source = T_Edge["source"],
    T_Target = T_Edge["target"],
    T_Data = T_Edge["data"],
  >(typeName: T_Type, factory: (type: T_Type, source: T_Source, target: T_Target) => T_Edge): EdgeMap<T_Edge> {
    const m = new EdgeMap(typeName, factory);
    this.#emap.set(typeName, m);
    return m;
  }
}

/** Two dimensional Map. */
export class Map2<K1, K2, V> {
  #map = new Map<K1, Map<K2, V>>();

  set(k1: K1, k2: K2, v: V): this {
    let m2 = this.#map.get(k1);
    if (!m2) {
      m2 = new Map();
      this.#map.set(k1, m2);
    }
    m2.set(k2, v);
    return this;
  }

  get(k1: K1, k2: K2): V | undefined {
    const m2 = this.#map.get(k1);
    if (!m2) return undefined;
    return m2.get(k2);
  }

  getMap(k1: K1): Map<K2, V> | undefined {
    return this.#map.get(k1);
  }

  has(k1: K1, k2: K2): boolean {
    const m2 = this.#map.get(k1);
    if (!m2) return false;
    return m2.has(k2);
  }
}

/** Returns true if the object given doesn't have keys. */
function isEmpty(obj: _any) {
  for (const key in obj) return false;
  return true;
}

// biome-ignore lint/suspicious/noExplicitAny: we use any for the generic types... sory biome.
type _any = any;

/** A type to express emoty object. */
export type NO_DATA = Record<string, never>;

/** Type alias matching `any` Node. */
export type AnyNode = Node<_any, _any>;

/** Type alias matching `any` Edge. */
export type AnyEdge = Edge<_any, _any, _any, _any>;
