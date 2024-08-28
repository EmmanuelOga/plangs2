/* Example vertex data interfaces: model a blog. */
import { expect, test } from "bun:test";
import { Node, Edge, BaseGraph } from ".";

class NPerson extends Node<`person+${string}`, { name: string }> {}
class NPost extends Node<`post+${string}`, { title: string; content: string }> {}
class NTag extends Node<`tag+${string}`> {}

class EPersonPost extends Edge<NPerson, NPost, { role: "author" | "editor" }> {}
class EPostTag extends Edge<NPost, NTag> {}

class TestGraph extends BaseGraph {
  v_person = this.nodeMap<NPerson>("person", (key) => new NPerson(key));
  v_post = this.nodeMap<NPost>("post", (key) => new NPost(key));
  v_tag = this.nodeMap<NTag>("tag", (key) => new NTag(key));

  e_person_post = this.edgeMap<EPersonPost>("person-post", (from, to) => new EPersonPost(from, to));
  e_post_tag = this.edgeMap<EPostTag>("post-tag", (from, to) => new EPostTag(from, to));
}

test("connecting adjacent vertices", () => {
  const g = new TestGraph();

  g.v_person.get("person+1");
  g.v_person.get("person+2");

  g.v_post.get("post+1");
  g.v_post.get("post+2");
  g.v_post.get("post+3");

  g.v_tag.get("tag+1");

  const e1 = g.e_person_post.connect("person+1", "post+1").merge({ role: "author" });
  const e2 = g.e_person_post.connect("person+2", "post+2").merge({ role: "author" });
  const e3 = g.e_person_post.connect("person+2", "post+3").merge({ role: "author" });
  const e4 = g.e_post_tag.connect("post+2", "tag+1");

  expect(g.e_person_post.adjTo.getMap("post+1")).toEqual(new Map([["person+1", e1]]));
  expect(g.e_person_post.adjTo.getMap("post+2")).toEqual(new Map([["person+2", e2]]));
  expect(g.e_person_post.adjTo.getMap("post+3")).toEqual(new Map([["person+2", e3]]));

  expect(g.e_person_post.adjFrom.getMap("person+1")).toEqual(new Map([["post+1", e1]]));
  expect(g.e_person_post.adjFrom.getMap("person+2")).toEqual(
    new Map([
      ["post+2", e2],
      ["post+3", e3],
    ]),
  );

  expect(g.e_post_tag.adjFrom.getMap("post+1")).toBeEmpty();
  expect(g.e_post_tag.adjFrom.getMap("post+2")).toEqual(new Map([["tag+1", e4]]));
  expect(g.e_post_tag.adjFrom.getMap("post+3")).toBeEmpty();

  expect(g.e_post_tag.adjTo.getMap("tag+1")).toEqual(new Map([["post+2", e4]]));
});

test("de/serializing a vertex", () => {
  const g = new TestGraph();

  const postData: NPost["data"] = { title: "Hello", content: "World" };

  const person = g.v_person.get("person+1").merge({ name: "Alice" });
  const post = g.v_post.get("post+1").merge(postData);
  const tag = g.v_tag.get("tag+1");

  const rt = (n: any) => JSON.parse(JSON.stringify(n));

  expect(rt(person)).toEqual({ key: "person+1", data: { name: "Alice" } });
  expect(rt(post)).toEqual({ key: "post+1", data: { title: "Hello", content: "World" } });
  expect(rt(tag)).toEqual({ key: "tag+1", data: {} });
});

test("de/serializing an edge", () => {
  const g = new TestGraph();

  g.v_person.get("person+1");
  g.v_post.get("post+1");
  g.v_tag.get("tag+1");

  const e1 = g.e_person_post.connect("person+1", "post+1").merge({ role: "author" });
  const e2 = g.e_post_tag.connect("post+1", "tag+1");

  const rt = (e: any) => JSON.parse(JSON.stringify(e));

  expect(rt(e1)).toEqual({ from: "person+1", to: "post+1", data: { role: "author" } });
  expect(rt(e2)).toEqual({ from: "post+1", to: "tag+1", data: {} });
});

test("de/serializing a graph", () => {
  const g = new TestGraph();

  g.v_person.get("person+1");
  g.v_person.get("person+2");

  g.v_post.get("post+1");
  g.v_post.get("post+2");
  g.v_post.get("post+3");

  g.v_tag.get("tag+1");

  g.e_person_post.connect("person+1", "post+1").merge({ role: "author" });
  g.e_person_post.connect("person+2", "post+2").merge({ role: "author" });
  g.e_person_post.connect("person+2", "post+3").merge({ role: "author" });
  g.e_post_tag.connect("post+2", "tag+1");
});
