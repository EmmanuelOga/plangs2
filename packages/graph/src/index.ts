/**
 * Simple single-edge directed graph data structure.
 */

// biome-ignore lint/suspicious/noExplicitAny: we use any for the generic types... sory biome.
type Any = any;

/** A type to express empty object. */
export type NO_DATA = Record<string, never>;

/** Graph Node. */
export abstract class Node<T_Key extends string, T_Data = NO_DATA> {
  readonly data: Partial<T_Data> = {};

  constructor(readonly key: T_Key) {}

  merge(data: Partial<T_Data>): this {
    Object.assign(this.data, data);
    return this;
  }
}

/** Graph Edge. */
export abstract class Edge<T_From extends Node<Any, Any>, T_To extends Node<Any, Any>, T_Data = NO_DATA> {
  readonly data: Partial<T_Data> = {};

  constructor(
    readonly from: T_From["key"],
    readonly to: T_To["key"],
  ) {}

  merge(data: Partial<T_Data>): this {
    Object.assign(this.data, data);
    return this;
  }
}

/** Graph Node (identity) Map. */
export class NodeMap<T_Node extends Node<Any, Any>> {
  readonly nodes: Record<T_Node["key"], T_Node> = {} as Record<T_Node["key"], T_Node>;

  constructor(private readonly factory: (key: T_Node["key"]) => T_Node) {}

  get(key: T_Node["key"]): T_Node {
    const n = this.nodes[key];
    if (n) return n;
    const newNode = this.factory(key);
    this.nodes[key] = newNode;
    return newNode;
  }

  has(key: T_Node["key"]): boolean {
    return !!this.nodes[key];
  }
}

/** Stores edges by the compound keys (from, to) and (to, from). */
export class EdgeMap<T_Edge extends Edge<Any, Any>> {
  readonly adjFrom = new Map2<T_Edge["from"], T_Edge["to"], T_Edge>();
  readonly adjTo = new Map2<T_Edge["to"], T_Edge["from"], T_Edge>();

  constructor(private readonly factory: (from: T_Edge["from"], to: T_Edge["to"]) => T_Edge) {}

  connect(from: T_Edge["from"], to: T_Edge["to"]): T_Edge {
    let edge = this.adjFrom.get(from, to);
    if (edge) return edge;
    edge = this.factory(from, to);
    this.adjFrom.set(from, to, edge);
    this.adjTo.set(to, from, edge);
    return edge;
  }
}

/** Base Graph class with the ability to de/serialize registered node and edge maps. */
export class BaseGraph {
  readonly vmap: Record<string, NodeMap<Any>> = {};
  readonly emap: Record<string, EdgeMap<Any>> = {};

  nodeMap<T_Node extends Node<Any, Any>>(name: string, factory: (key: T_Node["key"]) => T_Node): NodeMap<T_Node> {
    return (this.vmap[name] = new NodeMap(factory));
  }

  edgeMap<T_Edge extends Edge<Any, Any, Any>>(
    name: string,
    factory: (from: T_Edge["from"], to: T_Edge["to"]) => T_Edge,
  ): EdgeMap<T_Edge> {
    return (this.emap[name] = new EdgeMap(factory));
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

  /** Returns an iterator of the keys in the first dimension. */
  keys(): IterableIterator<K1> {
    return this.#map.keys();
  }

  values(): V[] {
    let values: V[] = [];
    for (const [_, map] of this.#map) {
      values = values.concat([...map.values()]);
    }
    return values;
  }

  has(k1: K1, k2: K2): boolean {
    const m2 = this.#map.get(k1);
    if (!m2) return false;
    return m2.has(k2);
  }
}
