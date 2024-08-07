/**
 * @module graph
 *
 * Simple single-edge directed graph data structure.
 */

/** Graph Node. */
export abstract class Node<T_Data> {
  readonly data: Partial<T_Data> = {};

  constructor(readonly key: string) {}

  merge(data: Partial<T_Data>): this {
    Object.assign(this.data, data);
    return this;
  }
}

/** Graph Edge. */
export abstract class Edge<T_Source extends Node<Any>, T_Target extends Node<Any>, T_Data> {
  readonly data: Partial<T_Data> = {};

  constructor(
    readonly source: T_Source,
    readonly target: T_Target,
  ) {}

  merge(data: Partial<T_Data>): this {
    Object.assign(this.data, data);
    return this;
  }
}

/** Graph Node (identity) Map. */
export class NodeMap<T_Node> {
  readonly data: Record<string, T_Node> = {};

  constructor(private readonly factory: (key: string) => T_Node) {}

  get(key: string): T_Node {
    const n = this.data[key];
    if (n) return n;
    const newNode = this.factory(key);
    this.data[key] = newNode;
    return newNode;
  }

  has(key: string): boolean {
    return !!this.data[key];
  }
}

/** Stores edges by the compound keys (from, to) and (to, from). */
export class EdgeMap<T_Edge extends Edge<Any, Any, Any>> {
  readonly adjFrom = new Map2<T_Edge["source"], T_Edge["target"], T_Edge>();
  readonly adjTo = new Map2<T_Edge["target"], T_Edge["source"], T_Edge>();

  constructor(private readonly factory: (source: T_Edge["source"], target: T_Edge["target"]) => T_Edge) {}

  connect(source: T_Edge["source"], target: T_Edge["target"]): T_Edge {
    let edge = this.adjFrom.get(source, target);
    if (edge) return edge;
    edge = this.factory(source, target);
    this.adjFrom.set(source, target, edge);
    this.adjTo.set(target, source, edge);
    return edge;
  }
}

/** Base Graph class with the ability to de/serialize registered node and edge maps. */
export class BaseGraph {
  readonly vmap: Record<string, NodeMap<Any>> = {};
  readonly emap: Record<string, EdgeMap<Any>> = {};

  nodeMap<T_Node extends Node<Any>>(name: string, factory: (key: string) => T_Node): NodeMap<T_Node> {
    return (this.vmap[name] = new NodeMap(factory));
  }

  edgeMap<T_Edge extends Edge<T_Source, T_Target, Any>, T_Source = T_Edge["source"], T_Target = T_Edge["target"]>(
    name: string,
    factory: (source: T_Source, target: T_Target) => T_Edge,
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

// biome-ignore lint/suspicious/noExplicitAny: we use any for the generic types... sory biome.
type Any = any;

/** A type to express emoty object. */
export type NO_DATA = Record<string, never>;
