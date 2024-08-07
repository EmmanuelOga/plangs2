/* Example vertex data interfaces: model a blog. */
import { expect, test } from "bun:test";
import { Node, Edge, BaseGraph, type NO_DATA } from ".";

class NPerson extends Node<{ name: string }> {}
class NPost extends Node<{ title: string; content: string }> {}
class NTag extends Node<NO_DATA> {}

class EPersonPost extends Edge<NPerson, NPost, { role: "author" | "editor" }> {}
class EPostTag extends Edge<NPost, NTag, NO_DATA> {}

class Graph extends BaseGraph {
  v_person = this.nodeMap("person", (key) => new NPerson(key));
  v_post = this.nodeMap("post", (key) => new NPost(key));
  v_tag = this.nodeMap("tag", (key) => new NTag(key));

  e_person_post = this.edgeMap<EPersonPost>("person-post", (source, target) => new EPersonPost(source, target));
  e_post_tag = this.edgeMap<EPostTag>("post-tag", (source, target) => new EPostTag(source, target));
}

test("connecting adjacent vertices", () => {
  const g = new Graph();

  const person1 = g.v_person.get("person+1");
  const person2 = g.v_person.get("person+2");

  const post1 = g.v_post.get("post+1");
  const post2 = g.v_post.get("post+2");
  const post3 = g.v_post.get("post+3");

  const tag = g.v_tag.get("tag+1");

  const e1 = g.e_person_post.connect(person1, post1).merge({ role: "author" });
  const e2 = g.e_person_post.connect(person2, post2).merge({ role: "author" });
  const e3 = g.e_person_post.connect(person2, post3).merge({ role: "author" });
  const e4 = g.e_post_tag.connect(post2, tag);

  expect(g.e_person_post.adjTo.getMap(post1)).toEqual(new Map([[person1, e1]]));
  expect(g.e_person_post.adjTo.getMap(post2)).toEqual(new Map([[person2, e2]]));
  expect(g.e_person_post.adjTo.getMap(post3)).toEqual(new Map([[person2, e3]]));

  expect(g.e_person_post.adjFrom.getMap(person1)).toEqual(new Map([[post1, e1]]));
  expect(g.e_person_post.adjFrom.getMap(person2)).toEqual(
    new Map([
      [post2, e2],
      [post3, e3],
    ]),
  );

  expect(g.e_post_tag.adjFrom.getMap(post1)).toBeEmpty();
  expect(g.e_post_tag.adjFrom.getMap(post2)).toEqual(new Map([[tag, e4]]));
  expect(g.e_post_tag.adjFrom.getMap(post3)).toBeEmpty();

  expect(g.e_post_tag.adjTo.getMap(tag)).toEqual(new Map([[post2, e4]]));
});

test("de/serializing a vertex", () => {
  const g = new Graph();

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
  const g = new Graph();

  const person = g.v_person.get("person+1");
  const post = g.v_post.get("post+1");
  const tag = g.v_tag.get("tag+1");

  const e1 = g.e_person_post.connect(person, post).merge({ role: "author" });
  const e2 = g.e_post_tag.connect(post, tag);

  const rt = (e: any) => JSON.parse(JSON.stringify(e));

  expect(rt(e1)).toEqual({ source: person, target: post, data: { role: "author" } });
  expect(rt(e2)).toEqual({ source: post, target: tag, data: {} });
});

test("de/serializing a graph", () => {
  const g = new Graph();

  const person1 = g.v_person.get("person+1");
  const person2 = g.v_person.get("person+2");

  const post1 = g.v_post.get("post+1");
  const post2 = g.v_post.get("post+2");
  const post3 = g.v_post.get("post+3");

  const tag = g.v_tag.get("tag+1");

  g.e_person_post.connect(person1, post1).merge({ role: "author" });
  g.e_person_post.connect(person2, post2).merge({ role: "author" });
  g.e_person_post.connect(person2, post3).merge({ role: "author" });
  g.e_post_tag.connect(post2, tag);
});
