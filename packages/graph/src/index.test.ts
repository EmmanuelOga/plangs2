import { expect, test } from "bun:test";

import { BaseGraph, Edge, EdgeMap as Edges, type NO_DATA, Node, NodeMap as Nodes } from ".";

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
