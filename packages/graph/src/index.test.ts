/* Example vertex data interfaces: model a blog. */
import { expect, test } from "bun:test";
import { type AnyEdge, type AnyNode, BaseGraph, Edge, Node } from ".";

class NPerson extends Node<`person+${string}`, { name: string }> {}
class NPost extends Node<`post+${string}`, { title: string; content: string }> {}
class NTag extends Node<`tag+${string}`> {}
class EPersonPost extends Edge<"person-post", NPerson["key"], NPost["key"], { role: "author" | "editor" }> {}
class EPostTag extends Edge<"post-tag", NPost["key"], NTag["key"], Record<string, never>> {}

class Graph extends BaseGraph {
  v_person = this.nodeMap<NPerson>("person", (key) => new NPerson(key));
  v_post = this.nodeMap<NPost>("post", (key) => new NPost(key));
  v_tag = this.nodeMap<NTag>("tag", (key) => new NTag(key));

  e_person_post = this.edgeMap<EPersonPost>(
    "person-post",
    (type, source, target) => new EPersonPost(type, source, target),
  );
  e_post_tag = this.edgeMap<EPostTag>("post-tag", (type, source, target) => new EPostTag(type, source, target));
}

test("connecting adjacent vertices", () => {
  const g = new Graph();

  const person1 = g.v_person.get("person+1");
  const person2 = g.v_person.get("person+2");

  const post1 = g.v_post.get("post+1");
  const post2 = g.v_post.get("post+2");
  const post3 = g.v_post.get("post+3");

  const tag = g.v_tag.get("tag+1");

  const e1 = g.e_person_post.connect(person1.key, post1.key).merge({ role: "author" });
  const e2 = g.e_person_post.connect(person2.key, post2.key).merge({ role: "author" });
  const e3 = g.e_person_post.connect(person2.key, post3.key).merge({ role: "author" });
  const e4 = g.e_post_tag.connect(post2.key, tag.key);

  expect(g.e_person_post.adjTo(post1.key)).toEqual(new Map([[person1.key, e1]]));
  expect(g.e_person_post.adjTo(post2.key)).toEqual(new Map([[person2.key, e2]]));
  expect(g.e_person_post.adjTo(post3.key)).toEqual(new Map([[person2.key, e3]]));

  expect(g.e_person_post.adjFrom(person1.key)).toEqual(new Map([[post1.key, e1]]));
  expect(g.e_person_post.adjFrom(person2.key)).toEqual(
    new Map([
      [post2.key, e2],
      [post3.key, e3],
    ]),
  );

  expect(g.e_post_tag.adjFrom(post1.key)).toBeEmpty();
  expect(g.e_post_tag.adjFrom(post2.key)).toEqual(new Map([[tag.key, e4]]));
  expect(g.e_post_tag.adjFrom(post3.key)).toBeEmpty();

  expect(g.e_post_tag.adjTo(tag.key)).toEqual(new Map([[post2.key, e4]]));
});

test("serializing a vertex", () => {
  const g = new Graph();

  const postData: NPost["data"] = { title: "Hello", content: "World" };

  const person = g.v_person.get("person+1").merge({ name: "Alice" });
  const post = g.v_post.get("post+1").merge(postData);
  const tag = g.v_tag.get("tag+1");

  const rt = (n: AnyNode) => JSON.parse(JSON.stringify(n));

  expect(rt(person)).toEqual({ key: "person+1", data: { name: "Alice" } });
  expect(rt(post)).toEqual({ key: "post+1", data: { title: "Hello", content: "World" } });
  expect(rt(tag)).toEqual({ key: "tag+1", data: {} });
});

test("serializing an edge", () => {
  const g = new Graph();

  const person = g.v_person.get("person+1");
  const post = g.v_post.get("post+1");
  const tag = g.v_tag.get("tag+1");

  const e1 = g.e_person_post.connect(person.key, post.key).merge({ role: "author" });
  const e2 = g.e_post_tag.connect(post.key, tag.key);

  const rt = (e: AnyEdge) => JSON.parse(JSON.stringify(e));

  expect(rt(e1)).toEqual({ type: "person-post", source: "person+1", target: "post+1", data: { role: "author" } });
  expect(rt(e2)).toEqual({ type: "post-tag", source: "post+1", target: "tag+1", data: {} });
});

test("de/serializing a graph", () => {
  const g = new Graph();

  const person1 = g.v_person.get("person+1");
  const person2 = g.v_person.get("person+2");

  const post1 = g.v_post.get("post+1");
  const post2 = g.v_post.get("post+2");
  const post3 = g.v_post.get("post+3");

  const tag = g.v_tag.get("tag+1");

  g.e_person_post.connect(person1.key, post1.key).merge({ role: "author" });
  g.e_person_post.connect(person2.key, post2.key).merge({ role: "author" });
  g.e_person_post.connect(person2.key, post3.key).merge({ role: "author" });
  g.e_post_tag.connect(post2.key, tag.key);

  console.log(JSON.stringify(g.toJSON(), null, 2));
});