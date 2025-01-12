import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { RelFrom, RelTo } from "@plangs/graphgen/library";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";
import { VertexFormState } from "./form_state";

export type AnyRel = RelFrom<TPlangsVertex, TPlangsVertex> | RelTo<TPlangsVertex, TPlangsVertex>;

export class EditorMainState extends Dispatchable<{
  pg: PlangsGraph;
  currentKind: TPlangsVertexName;
  currentVertex?: TPlangsVertex;
  currentRel?: [key: string, rel: AnyRel];
  mainTab: "status" | "edit";
  tab: "form" | "relations" | "json";
  formState: VertexFormState | undefined;
  loading: boolean;
}> {
  doLoading(loading: boolean) {
    if (this.data.loading === loading) return;
    this.data.loading = loading;
    this.dispatch();
  }

  doSetCurrentKind(name: TPlangsVertexName): boolean {
    if (this.checkDirty() === "abort") return false;
    this.data.currentKind = name;
    const v = this.data.pg[name].values.next().value as TPlangsVertex;
    this.doSetCurrentVertex(v, false);
    return true;
  }

  doSetCurrentVertex(vref: TPlangsVertex | string, checkDirty = true): boolean {
    if (checkDirty && this.checkDirty() === "abort") return false;
    const v = typeof vref === "string" ? this.data.pg[this.data.currentKind].get(vref as any) : vref;
    if (!v) {
      console.error(`Vertex not found: ${vref}`);
      return false;
    }

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
    return true;
  }

  doSetTab(tab: "form" | "relations" | "json"): void {
    this.data.tab = tab;
    this.dispatch();
  }

  doSetRel(rel: [string, AnyRel]): void {
    this.data.currentRel = rel;
    this.dispatch();
  }

  doSetMainTab(tab: "status" | "edit"): void {
    this.data.mainTab = tab;
    this.dispatch();
  }

  checkDirty(): "abort" | "continue" {
    if (this.data.formState?.dirty && !confirm("Discard changes?")) return "abort";
    return "continue";
  }

  get loading() {
    return this.data.loading;
  }

  get mainTab() {
    return this.data.mainTab;
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

  get tab() {
    return this.data.tab;
  }

  // TODO: Nesting dispatchables may create hairy situations with the dispatching mechanism.
  // Perhaps it would be better to compose dispatchables in such way that we only call useDispatchable
  // on the top-level component.
  get formState(): VertexFormState | undefined {
    const vertex = this.currentVertex;
    if (!vertex) return (this.data.formState = undefined);
    if (this.data.formState?.vertex.key !== vertex.key) {
      this.data.formState = useDispatchable(() => VertexFormState.create(vertex));
    }
    return this.data.formState;
  }

  get vertexNames() {
    return Object.keys(this.data.pg.vertices).filter(vn => vn !== "post") as TPlangsVertexName[];
  }
}
