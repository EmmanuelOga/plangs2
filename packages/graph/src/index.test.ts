/* Example vertex data interfaces: model a blog. */
import { expect, test } from "bun:test";
import { Edge, Vertex, VertexMap } from ".";

/** Example: define a graph as a set of vertex and edge maps. */
class Graph {
  v_person = new VertexMap<VPerson>((id) => new VPerson(this, id));
  v_post = new VertexMap<VPost>((id) => new VPost(this, id));
  v_tag = new VertexMap<VTag>((id) => new VTag(this, id));
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
}> {
}

test("serializes a vertex", () => {
  const g = new Graph();

  const postData: Partial<VPost["data"]> = { title: "Hello", content: "World" };

  const person = g.v_person.get("person+1").merge({ name: "Alice" });
  const post = g.v_post.get("post+1").merge(postData);
  const tag = g.v_tag.get("tag+1");

  const rt = (o: Vertex<any>) => JSON.parse(JSON.stringify(o.data));

  expect(rt(person)).toEqual({ id: "person+1", name: "Alice" });
  expect(rt(post)).toEqual({ id: "post+1", title: "Hello", content: "World" });
  expect(rt(tag)).toEqual({ id: "tag+1" });
});

const e = new EPersonPost("person-post", "person+1", "post+1");

console.log(e);
