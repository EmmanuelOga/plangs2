import { Dispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { RelFrom, RelTo } from "@plangs/graphgen/library";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";

export type AnyRel = RelFrom<TPlangsVertex, TPlangsVertex> | RelTo<TPlangsVertex, TPlangsVertex>;

export class VerticesEditorState extends Dispatchable<{
  pg: PlangsGraph;
  currentKind: TPlangsVertexName;
  currentVertex?: TPlangsVertex;
  currentRel?: [key: string, rel: AnyRel];
  tab: "form" | "relations" | "json";
}> {
  doSetCurrentKind(name: TPlangsVertexName) {
    this.data.currentKind = name;
    const v = this.data.pg[name].values.next().value as TPlangsVertex;
    return this.doSetCurrentVertex(v);
  }

  doSetCurrentVertex(v: TPlangsVertex) {
    this.data.currentVertex = v;
    // If the new vertex has a relation of the same name as the current relation, update the current relation.
    // Otherwise clear the current relation.
    if (this.currentRel?.[0]) {
      const [lastRelKey] = this.currentRel;
      const newRels = v.relations as Map<string, AnyRel>;
      if (newRels.has(lastRelKey)) {
        const newRel = newRels.get(lastRelKey) as AnyRel;
        this.data.currentRel = [lastRelKey, newRel];
      } else {
        this.data.currentRel = newRels.entries().next().value;
      }
    }
    this.dispatch();
  }

  doSetTab(tab: "form" | "relations" | "json"): void {
    this.data.tab = tab;
    this.dispatch();
  }

  doSetRel(rel: [string, AnyRel]): void {
    this.data.currentRel = rel;
    this.dispatch();
  }

  get currentKind() {
    return this.data.currentKind;
  }

  get currentVertices() {
    return [...this.data.pg.vertices[this.data.currentKind].values];
  }

  get currentVertex() {
    return this.data.currentVertex;
  }

  get currentRel() {
    return this.data.currentRel;
  }

  get filter() {
    return this.data.filter;
  }

  get tab() {
    return this.data.tab;
  }

  get vertexNames() {
    return Object.keys(this.data.pg.vertices).filter(vn => vn !== "post") as TPlangsVertexName[];
  }
}
