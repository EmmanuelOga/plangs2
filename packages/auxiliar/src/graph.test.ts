import { expect, test } from "bun:test";

import { BaseGraph, Edge, EdgeMap as Edges, type NO_DATA, Node, NodeMap as Nodes } from "./graph";

type N = "person" | "post" | "tag";
type E = "personPost" | "postTag";
type G = TestGraph;

type NK<T extends N> = `${T}+${string}`;

/* Example vertex data interfaces: model a blog. */
class NPerson extends Node<G, NK<"person">, { name: string }> {
  override kind: N = "person";
}
class NPost extends Node<G, NK<"post">, { title: string; content: string }> {
  override kind: N = "post";
}
class NTag extends Node<G, NK<"tag">, NO_DATA> {
  override kind: N = "tag";
}
class EPersonPost extends Edge<G, NPerson, NPost, { role: "author" | "editor" }> {
  override kind: E = "personPost";

  get nodeFrom(): NPerson | undefined {
    return this.graph.nodes.person.get(this.from);
  }
  get nodeTo(): NPost | undefined {
    return this.graph.nodes.post.get(this.to);
  }
}
class EPostTag extends Edge<G, NPost, NTag, NO_DATA> {
  override kind: E = "postTag";
  get nodeFrom(): NPost | undefined {
    return this.graph.nodes.post.get(this.from);
  }
  get nodeTo(): NTag | undefined {
    return this.graph.nodes.tag.get(this.to);
  }
}

class TestGraph extends BaseGraph<N, E, G> {
  nodes = {
    person: new Nodes<G, NPerson>(key => new NPerson(this, key)),
    post: new Nodes<G, NPost>(key => new NPost(this, key)),
    tag: new Nodes<G, NTag>(key => new NTag(this, key)),
  };

  edges = {
    personPost: new Edges<G, EPersonPost>((from, to) => new EPersonPost(this, from, to)),
    postTag: new Edges<G, EPostTag>((from, to) => new EPostTag(this, from, to)),
  };
}

test("accessing relationships forward and backward", () => {
  const g = new TestGraph();

  g.nodes.person.set("person+1").merge({ name: "Alice" });
  g.nodes.post.set("post+1").merge({ title: "Hello", content: "World" });
  g.nodes.post.set("post+2").merge({ title: "Hello", content: "World" });
  g.nodes.tag.set("tag+1");

  g.edges.personPost.connect("person+1", "post+1").merge({ role: "author" });
  g.edges.personPost.connect("person+1", "post+2").merge({ role: "editor" });
  g.edges.postTag.connect("post+1", "tag+1");

  // Forward
  expect(g.edges.personPost.adjFrom.has("person+1", "post+1")).toBeTrue();
  expect(g.edges.personPost.adjFrom.has("person+2", "post+1")).toBeFalse();
  expect(g.edges.personPost.adjFrom.has("person+1", "post+2")).toBeTrue();
  expect(g.edges.personPost.adjFrom.has("person+2", "post+2")).toBeFalse();

  expect(g.edges.postTag.adjFrom.has("post+1", "tag+1")).toBeTrue();
  expect(g.edges.postTag.adjFrom.has("post+1", "tag+2")).toBeFalse();

  expect(g.edges.postTag.adjFrom.has("post+2", "tag+1")).toBeFalse();
  expect(g.edges.postTag.adjFrom.has("post+2", "tag+2")).toBeFalse();

  // Backward
  expect(g.edges.personPost.adjTo.has("post+1", "person+1")).toBeTrue();
  expect(g.edges.personPost.adjTo.has("post+1", "person+2")).toBeFalse();
  expect(g.edges.personPost.adjTo.has("post+2", "person+1")).toBeTrue();
  expect(g.edges.personPost.adjTo.has("post+2", "person+2")).toBeFalse();

  expect(g.edges.postTag.adjTo.has("tag+1", "post+1")).toBeTrue();
  expect(g.edges.postTag.adjTo.has("tag+1", "post+2")).toBeFalse();

  expect(g.edges.postTag.adjTo.has("tag+2", "post+1")).toBeFalse();
  expect(g.edges.postTag.adjTo.has("tag+2", "post+2")).toBeFalse();
});

test("node apis", () => {
  const g = new TestGraph();
  const m = g.nodes.person;
  const p = m.set("person+1");
  expect(p.data).toEqual({});
  expect(p.merge({ name: "Alice" })).toBe(p);
  expect(p.data).toEqual({ name: "Alice" });
  expect(`${p}`).toEqual("person+1");
  expect(p.plainKey).toBe("1");

  expect(m.set("person+1").keyPrefix).toBe("_");
  expect(m.set("person+tony").keyPrefix).toBe("t");
  expect(m.set("person+.net").keyPrefix).toBe("_");
});

test("edge apis", () => {
  const g = new TestGraph();

  g.nodes.person.set("person+1").merge({ name: "Alice" });
  g.nodes.post.set("post+1").merge({ title: "Hello", content: "World" });

  const edge = g.edges.personPost.connect("person+1", "post+1");

  expect(edge.data).toEqual({});
  expect(edge.merge({ role: "author" })).toBe(edge);
  expect(edge.data).toEqual({ role: "author" });
  expect(edge.key).toBe("personPost~person+1~post+1");
  expect(`${edge}`).toEqual("person+1 -[personPost]-> post+1");
});

test("node map apis", () => {
  const g = new TestGraph();
  const map = g.nodes.person;

  const p1 = g.nodes.person.set("person+1");
  const p2 = g.nodes.person.set("person+2");
  const p3 = g.nodes.person.set("person+3");

  expect(map.get("person+1")).toBe(p1);
  expect(map.get("person+2")).toBe(p2);
  expect(map.get("person+3")).toBe(p3);
  expect(map.get("person+4")).toBeUndefined();

  expect([...map.keys()]).toEqual(["person+1", "person+2", "person+3"]);

  expect(map.has("person+1")).toBeTrue();
  expect(map.has("person+2")).toBeTrue();
  expect(map.has("person+3")).toBeTrue();
  expect(map.has("person+4")).toBeFalse();

  expect([...map.values]).toEqual([p1, p2, p3]);
  expect([...map.findAll(node => node.key.includes("+2"))]).toEqual([p2]);

  expect([...map.batch(0)]).toEqual([]);
  expect([...map.batch(1)]).toEqual([[p1.key, p1]]);
  expect([...map.batch(2)]).toEqual([
    [p1.key, p1],
    [p2.key, p2],
  ]);
  expect([...map.batch(2)]).toEqual([
    [p1.key, p1],
    [p2.key, p2],
  ]);
  expect([...map.batch(1000, 1)]).toEqual([
    [p2.key, p2],
    [p3.key, p3],
  ]);

  expect(`${map}`).toEqual("NodeMap(size: 3)");
});

test("edge map apis", () => {
  const g = new TestGraph();

  g.nodes.person.set("person+1").merge({ name: "Alice" });
  g.nodes.post.set("post+1").merge({ title: "Hello", content: "World" });

  const map = g.edges.personPost;
  const edge = map.connect("person+1", "post+1");

  expect(edge.data).toEqual({});
  expect(map.set("person+1", "post+1", { role: "author" })).toBe(edge);
  expect(edge.data).toEqual({ role: "author" });

  expect(`${map}`).toEqual("EdgeMap(size: 1)");
});

test("de/serializing a graph", () => {
  const g = new TestGraph();

  g.nodes.person.set("person+1").merge({ name: "Alice" });
  g.nodes.person.set("person+2").merge({ name: "Bob" });

  g.nodes.post.set("post+1").merge({ title: "Hello", content: "World" });
  g.nodes.post.set("post+2").merge({ title: "Hello 2", content: "World 2" });
  g.nodes.post.set("post+3").merge({ title: "Hello 3", content: "World 3" });

  g.nodes.tag.get("tag+1");

  g.edges.personPost.connect("person+1", "post+1").merge({ role: "author" });
  g.edges.personPost.connect("person+2", "post+2").merge({ role: "author" });
  g.edges.personPost.connect("person+2", "post+3");
  g.edges.postTag.connect("post+2", "tag+1");

  const g2 = new TestGraph().loadJSON(JSON.parse(JSON.stringify(g)));

  expect(g2.nodes.person.set("person+1").data).toEqual({ name: "Alice" });
  expect(g2.nodes.person.set("person+2").data).toEqual({ name: "Bob" });

  expect(g2.nodes.post.set("post+1").data).toEqual({ title: "Hello", content: "World" });
  expect(g2.nodes.post.set("post+2").data).toEqual({ title: "Hello 2", content: "World 2" });
  expect(g2.nodes.post.set("post+3").data).toEqual({ title: "Hello 3", content: "World 3" });

  expect(g2.nodes.tag.set("tag+1").data).toEqual({});

  expect(g2.edges.personPost.adjFrom.get("person+1", "post+1")?.data).toEqual({ role: "author" });
  expect(g2.edges.personPost.adjFrom.get("person+2", "post+2")?.data).toEqual({ role: "author" });
  expect(g2.edges.personPost.adjFrom.get("person+2", "post+3")?.data).toEqual({});

  expect(g2.edges.postTag.adjFrom.get("post+1", "tag+1")?.data).toBeUndefined();
  expect(g2.edges.postTag.adjFrom.get("post+2", "tag+1")?.data).toEqual({});
});

test("other graph apis", () => {
  const g = new TestGraph();

  g.nodes.person.set("person+1").merge({ name: "Alice" });
  g.nodes.post.set("post+1").merge({ title: "Hello", content: "World" });
  g.nodes.post.set("post+2").merge({ title: "Hello", content: "World" });
  g.nodes.tag.set("tag+1");

  g.edges.personPost.connect("person+1", "post+1").merge({ role: "author" });
  g.edges.personPost.connect("person+1", "post+2").merge({ role: "editor" });
  g.edges.postTag.connect("post+1", "tag+1");

  expect(g.nodeEntries).toEqual([
    ["person", g.nodes.person],
    ["post", g.nodes.post],
    ["tag", g.nodes.tag],
  ]);
  expect(g.edgeEntries).toEqual([
    ["personPost", g.edges.personPost],
    ["postTag", g.edges.postTag],
  ]);
  expect(g.nodeCount).toEqual(4);
  expect(g.edgeCount).toEqual(3);
});
