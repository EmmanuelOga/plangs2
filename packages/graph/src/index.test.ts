import { expect, test } from "bun:test";

import { Node, Edge, BaseGraph } from ".";

/* Example vertex data interfaces: model a blog. */
class NPerson extends Node<TestGraph, `person+${string}`, { name: string }> {}
class NPost extends Node<TestGraph, `post+${string}`, { title: string; content: string }> {}
class NTag extends Node<TestGraph, `tag+${string}`> {}

class EPersonPost extends Edge<TestGraph, NPerson, NPost, { role: "author" | "editor" }> {
  get key(): string {
    return `person-post~${this.from}~${this.to}`;
  }
}

class EPostTag extends Edge<TestGraph, NPost, NTag> {
  get key(): string {
    return `post-tag~${this.from}~${this.to}`;
  }
}

class TestGraph extends BaseGraph {
  v_person = this.nodeMap<NPerson>("person", (key) => new NPerson(this, key));
  v_post = this.nodeMap<NPost>("post", (key) => new NPost(this, key));
  v_tag = this.nodeMap<NTag>("tag", (key) => new NTag(this, key));

  e_person_post = this.edgeMap<EPersonPost>("person-post", (from, to) => new EPersonPost(this, from, to));
  e_post_tag = this.edgeMap<EPostTag>("post-tag", (from, to) => new EPostTag(this, from, to));
}

test("de/serializing a graph", () => {
  const g = new TestGraph();

  g.v_person.get("person+1").merge({ name: "Alice" });
  g.v_person.get("person+2").merge({ name: "Bob" });

  g.v_post.get("post+1").merge({ title: "Hello", content: "World" });
  g.v_post.get("post+2").merge({ title: "Hello 2", content: "World 2" });
  g.v_post.get("post+3").merge({ title: "Hello 3", content: "World 3" });

  g.v_tag.get("tag+1");

  g.e_person_post.connect("person+1", "post+1").merge({ role: "author" });
  g.e_person_post.connect("person+2", "post+2").merge({ role: "author" });
  g.e_person_post.connect("person+2", "post+3");
  g.e_post_tag.connect("post+2", "tag+1");

  const g2 = new TestGraph().loadJSON(JSON.parse(JSON.stringify(g)));

  expect(g2.v_person.get("person+1").data).toEqual({ name: "Alice" });
  expect(g2.v_person.get("person+2").data).toEqual({ name: "Bob" });

  expect(g2.v_post.get("post+1").data).toEqual({ title: "Hello", content: "World" });
  expect(g2.v_post.get("post+2").data).toEqual({ title: "Hello 2", content: "World 2" });
  expect(g2.v_post.get("post+3").data).toEqual({ title: "Hello 3", content: "World 3" });

  expect(g2.v_tag.get("tag+1").data).toEqual({});

  expect(g2.e_person_post.adjFrom.get("person+1", "post+1")?.data).toEqual({ role: "author" });
  expect(g2.e_person_post.adjFrom.get("person+2", "post+2")?.data).toEqual({ role: "author" });
  expect(g2.e_person_post.adjFrom.get("person+2", "post+3")?.data).toEqual({});

  expect(g2.e_post_tag.adjFrom.get("post+1", "tag+1")?.data).toBeUndefined();
  expect(g2.e_post_tag.adjFrom.get("post+2", "tag+1")?.data).toEqual({});
});
