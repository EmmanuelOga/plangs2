/**
 * Simple single-edge directed graph data structure.
 */

import { IterTap } from "./iter_tap";
import { Map2 } from "./map2";
import { MapTap } from "./map_tap";

// biome-ignore lint/suspicious/noExplicitAny: we use any for the generic types... sory biome.
type Any = any;

/** Graph Node. */
export abstract class Node<T_Graph, T_Key extends string, T_Data> {
  /** Sometimes it is useful to know the kind of node. */
  abstract readonly kind: string;

  readonly data: Partial<T_Data> = {};

  constructor(
    readonly graph: T_Graph,
    readonly key: T_Key,
  ) {}

  /** Shallow merge data. */
  merge(data: Partial<T_Data>): this {
    Object.assign(this.data, data);
    return this;
  }

  /** The key without the node kind prefix. */
  get plainKey(): string {
    return this.key.replace(/^[a-z]+\+/, "");
  }

  /** The first letter of the key, or "_" if it starts with a non-letter. */
  get keyPrefix(): string {
    const pk = this.plainKey;
    return /^[a-z]/i.test(pk) ? pk[0].toLowerCase() : "_";
  }

  toString(): string {
    return this.key;
  }
}

/** Graph Edge. */
export abstract class Edge<T_Graph, T_From extends Node<T_Graph, Any, Any>, T_To extends Node<T_Graph, Any, Any>, T_Data> {
  /** Used to construct a key for the edge. */
  abstract readonly kind: string;

  readonly data: Partial<T_Data> = {};

  constructor(
    readonly graph: T_Graph,
    readonly from: T_From["key"],
    readonly to: T_To["key"],
  ) {}

  /** Shallow merge data. */
  merge(data: Partial<T_Data>): this {
    Object.assign(this.data, data);
    return this;
  }

  get key(): string {
    return `${this.kind}~${this.from}~${this.to}`;
  }

  abstract get nodeFrom(): T_From | undefined;
  abstract get nodeTo(): T_To | undefined;

  toString(): string {
    return `${this.from} -[${this.kind}]-> ${this.to}`;
  }
}

/** Graph Node Map. */
export class NodeMap<T_Graph, T_Node extends Node<T_Graph, Any, Any>> {
  readonly #map = new Map<T_Node["key"], T_Node>();

  constructor(private readonly factory: (key: T_Node["key"]) => T_Node) {}

  entries(): MapIterator<[T_Node["key"], T_Node]> {
    return this.#map.entries();
  }

  get(key: T_Node["key"] | undefined): T_Node | undefined {
    return key ? this.#map.get(key) : undefined;
  }

  get size(): number {
    return this.#map.size;
  }

  keys(): T_Node["key"][] {
    return [...this.#map.keys()];
  }

  set(key: T_Node["key"], data: T_Node["data"] = {}): T_Node {
    let n = this.#map.get(key);
    if (n === undefined) {
      n = this.factory(key);
      this.#map.set(key, n);
    }
    return n.merge(data);
  }

  has(key: T_Node["key"]): boolean {
    return this.#map.has(key);
  }

  get values(): IterTap<T_Node> {
    return new IterTap(this.#map.values());
  }

  findAll(predicate: (node: T_Node) => boolean): T_Node[] {
    return [...this.#map.values()].filter(predicate);
  }

  batch(maxEntries?: number, start = 0): [T_Node["key"], T_Node][] {
    return Array.from(this.#map).slice(start, maxEntries);
  }

  toString(): string {
    return `NodeMap(size: ${this.size})`;
  }
}

/** Stores edges by the compound keys (from, to) and (to, from). */
export class EdgeMap<T_Graph, T_Edge extends Edge<T_Graph, Any, Any, Any>> {
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

  get(from: T_Edge["from"], to: T_Edge["to"]): T_Edge | undefined {
    return this.adjFrom.get(from, to);
  }

  set(from: T_Edge["from"], to: T_Edge["to"], data: T_Edge["data"]): T_Edge {
    return this.connect(from, to).merge(data);
  }

  delete(from: T_Edge["from"], to: T_Edge["to"]): boolean {
    const f = this.adjFrom.delete(from, to);
    const t = this.adjTo.delete(to, from);
    return f || t;
  }

  /** Return shortcuts to retrieve all edges *from* a node and to add more connections *from* that node. */
  relFrom(node: NonNullable<T_Edge["nodeFrom"]>) {
    const self = this;
    return {
      /** Connect this node to all the others, using the provided node keys. */
      add(other: T_Edge["to"][]) {
        for (const to of other) self.connect(node.key, to);
        return node;
      },
      /** Get all the edges connected *to* this node, by the key of the *to*-nodes. */
      edges: () => new MapTap(self.adjFrom.getMap(node.key)),
      /** Is there a connection to this *from* key? */
      has: (key: T_Edge["to"]) => self.adjFrom.has(node.key, key),
      /** Get all the keys of the *to*-nodes. */
      keys: () => self.adjFrom.keys2(node.key),
      /** Get all the *to* nodes. */
      nodes: () => self.adjFrom.values2Mapped(node.key, ({ nodeTo }) => nodeTo) as NonNullable<T_Edge["nodeTo"]>[],
      /** Number of nodes connected *from* this node. */
      size: () => self.adjFrom.size2(node.key),
    } as const;
  }

  /** Return shortcuts to retrieve all edges *to* a node and to add more connections *to* that node. */
  relTo(node: NonNullable<T_Edge["nodeTo"]>) {
    const self = this;
    return {
      /** Connect this node to all the others, using the provided node keys. */
      add(other: T_Edge["from"][]) {
        for (const from of other) self.connect(from, node.key);
        return node;
      },
      /** Get all the edges connected *from* this node, by the key of the *from*-nodes. */
      edges: () => new MapTap(self.adjTo.getMap(node.key)),
      /** Is there a connection to this *to* key? */
      has: (key: T_Edge["from"]) => self.adjTo.has(node.key, key),
      /** Get all the keys of the *from*-nodes. */
      keys: () => self.adjTo.keys2(node.key),
      /** Get all the *to* nodes. */
      nodes: () => self.adjTo.values2Mapped(node.key, ({ nodeFrom }) => nodeFrom) as NonNullable<T_Edge["nodeFrom"]>[],
      /** Number of nodes connected *to* this node. */
      size: () => self.adjTo.size2(node.key),
    } as const;
  }

  /** Get all edges. Uses the adjFrom map, but both maps should have the same values. */
  get values() {
    return this.adjFrom.values();
  }

  get size(): number {
    return this.adjFrom.size;
  }

  toString(): string {
    return `EdgeMap(size: ${this.size})`;
  }
}

type SerializedGraph<N extends string, E extends string> = {
  /**
   * Example: { "node-a" : { "node-a+1" : data1, "node-a+2" : data2, ... } }
   */
  nodes: Partial<Record<N, Record<`${N}+${string}`, Any>>>;

  /**
   * Example: { "edge-a" : { "node-a+1" : { "node-b+1" : data1, "node-b+2": data2 }, "node-a+2" : ... } }
   */
  edges: Partial<Record<E, Record<`${N}+${string}`, Record<`${N}+${string}`, Any>>>>;
};

/** Base Graph class with the ability to de/serialize registered node and edge maps. */
export abstract class BaseGraph<N extends string, E extends string, G> {
  abstract readonly nodes: Record<N, NodeMap<G, Any>>;
  abstract readonly edges: Record<E, EdgeMap<G, Any>>;

  get nodeEntries() {
    return Object.entries(this.nodes) as [N, NodeMap<G, Any>][];
  }

  get edgeEntries() {
    return Object.entries(this.edges) as [E, EdgeMap<G, Any>][];
  }

  get nodeCount(): number {
    return this.nodeEntries.reduce((acc, [_, map]) => acc + map.size, 0);
  }

  get edgeCount(): number {
    return this.edgeEntries.reduce((acc, [_, map]) => acc + map.adjFrom.size, 0);
  }

  toJSON(): SerializedGraph<N, E> {
    const data: SerializedGraph<N, E> = { nodes: {}, edges: {} };

    type NK = `${N}+${string}`;

    for (const [name, nodeMap] of this.nodeEntries) {
      const m = {} as Record<NK, Any>;
      for (const [key, { data }] of nodeMap.entries()) m[key as NK] = data;
      data.nodes[name] = m;
    }

    for (const [name, edgeMap] of this.edgeEntries) {
      const m = {} as Record<NK, Record<NK, Any>>;
      for (const edge of edgeMap.adjFrom.values()) {
        const fromMap = (m[edge.from as NK] ??= {} as Record<NK, Any>);
        fromMap[edge.to as NK] = edge.data;
      }
      data.edges[name] = m;
    }

    return data;
  }

  loadJSON(data: SerializedGraph<N, E>): this {
    for (const [name, nodes] of Object.entries(data.nodes)) {
      const nodeMap = this.nodes[name as N];

      if (!nodes) console.warn(`Data has no nodes for type "${name}"`);
      if (!nodeMap) console.warn(`Graph has no node map for type "${name}"`);
      if (!nodes || !nodeMap) continue;

      for (const [key, nodeData] of Object.entries(nodes)) {
        nodeMap.set(key).merge(nodeData);
      }
    }

    for (const [name, edges] of Object.entries(data.edges)) {
      const edgeMap = this.edges[name as E];

      if (!edges) console.warn(`Data has no edges for type "${name}"`);
      if (!edgeMap) console.warn(`Graph has no edge map for type "${name}"`);
      if (!edges || !edgeMap) continue;

      for (const [from, tos] of Object.entries(edges)) {
        for (const [to, edgeData] of Object.entries(tos)) {
          edgeMap.connect(from, to).merge(edgeData);
        }
      }
    }

    return this;
  }
}
