/* Example vertex data interfaces: model a blog. */
import { expect, test } from "bun:test";
import { Edge, EdgeMap, Vertex, VertexMap } from ".";

/** Example: define a graph as a set of vertex and edge maps. */
class Graph {
  v_person = new VertexMap<VPerson>((id) => new VPerson(this, id));
  v_post = new VertexMap<VPost>((id) => new VPost(this, id));
  v_tag = new VertexMap<VTag>((id) => new VTag(this, id));

  e_person_post = new EdgeMap<EPersonPost>((from, to) => new EPersonPost("person-post", from, to));
  e_post_tag = new EdgeMap<EPostTag>((from, to) => new EPostTag("post-tag", from, to));
}

/** Example: allow access to other graph elements from every vertex wrapper. */
class VBase<T_Data extends { id: T }, T = T_Data["id"]> extends Vertex<T_Data> {
  constructor(
    public readonly g: Graph,
    id: T,
  ) {
    super(id);
  }
}

class VPerson extends VBase<{
  id: `person+${string}`;
  name: string;
}> {}

class VPost extends VBase<{
  id: `post+${string}`;
  title: string;
  content: string;
}> {}

class VTag extends VBase<{
  id: `tag+${string}`;
}> {}

class EPersonPost extends Edge<{
  type: "person-post";
  from: VPerson["id"];
  to: VPost["id"];
  role: "author" | "editor";
}> {}

class EPostTag extends Edge<{
  type: "post-tag";
  from: VPost["id"];
  to: VTag["id"];
}> {}

test("adjacent vertices", () => {
  const g = new Graph();

  const person1 = g.v_person.get("person+1");
  const person2 = g.v_person.get("person+2");

  const post1 = g.v_post.get("post+1");
  const post2 = g.v_post.get("post+2");
  const post3 = g.v_post.get("post+3");

  const tag = g.v_tag.get("tag+1");

  const e1 = g.e_person_post.connect(person1.id, post1.id).merge({ role: "author" });
  const e2 = g.e_person_post.connect(person2.id, post2.id).merge({ role: "author" });
  const e3 = g.e_person_post.connect(person2.id, post3.id).merge({ role: "author" });
  const e4 = g.e_post_tag.connect(post2.id, tag.id);

  expect(g.e_post_tag.adjFrom(post1.id)).toBeEmpty();
  expect(g.e_post_tag.adjFrom(post2.id)).toEqual(new Map([[tag.id, e4]]));
  expect(g.e_post_tag.adjFrom(post3.id)).toBeEmpty();

  expect(g.e_post_tag.adjTo(tag.id)).toEqual(new Map([[post2.id, e4]]));
});

test("serializing a vertex", () => {
  const g = new Graph();

  const postData: VPost["data"] = { title: "Hello", content: "World" };

  const person = g.v_person.get("person+1").merge({ name: "Alice" });
  const post = g.v_post.get("post+1").merge(postData);
  const tag = g.v_tag.get("tag+1");

  const rt = (o: Vertex<any>) => JSON.parse(JSON.stringify(o.data));

  expect(rt(person)).toEqual({ id: "person+1", name: "Alice" });
  expect(rt(post)).toEqual({ id: "post+1", title: "Hello", content: "World" });
  expect(rt(tag)).toEqual({ id: "tag+1" });
});

test("serializing an edge", () => {
  const g = new Graph();

  const person = g.v_person.get("person+1");
  const post = g.v_post.get("post+1");
  const tag = g.v_tag.get("tag+1");

  const e1 = g.e_person_post.connect(person.id, post.id).merge({ role: "author" });
  const e2 = g.e_post_tag.connect(post.id, tag.id);

  const rt = (o: Edge<any>) => JSON.parse(JSON.stringify(o.data));

  expect(rt(e1)).toEqual({ type: "person-post", from: "person+1", to: "post+1", role: "author" });
  expect(rt(e2)).toEqual({ type: "post-tag", from: "post+1", to: "tag+1" });
});
