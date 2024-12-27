import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";
import { Dispatchable, useDispatchable } from "../auxiliar/dispatchable";
import { INPUT, tw } from "../auxiliar/styles";

class EditorState extends Dispatchable<{ pg: PlangsGraph; currentKind: TPlangsVertexName; currentVertex?: TPlangsVertex }> {
  doSetCurrentKind(name: TPlangsVertexName) {
    this.data.currentKind = name;
    this.dispatch();
  }

  doSetCurrentVertex(v: TPlangsVertex) {
    this.data.currentVertex = v;
    this.dispatch();
  }

  get vertexName() {
    return Object.keys(this.data.pg.vertices) as TPlangsVertexName[];
  }

  get currentVertices() {
    return this.data.pg.vertices[this.data.currentKind];
  }

  get currentKind() {
    return this.data.currentKind;
  }

  get currentVertex() {
    return this.data.currentVertex;
  }
}

const BUTTON_CLASSES = tw("block", "mb-4 w-full px-2 py-1", "border-1 border-primary", "cursor-pointer", "hover:bg-hiliteb hover:text-hilitef");

export function PlangsEditor({ pg }: { pg: PlangsGraph }) {
  const state = useDispatchable(() => new EditorState({ pg, currentKind: "plang" }));

  return (
    <div class="flex flex-row gap-4">
      <div>
        {state.vertexName.map(vn => (
          <button
            key={vn}
            type="button"
            class={tw(BUTTON_CLASSES, vn === state.currentKind && "bg-primary/50")}
            onClick={() => state.doSetCurrentKind(vn)}>
            {vn}
          </button>
        ))}
      </div>
      <div>
        <input aria-label="Filter Key" placeholder="Filter" class={tw(INPUT, "mb-4 px-2 py-1")} />
        {Array.from(
          state.currentVertices.values.map(v => (
            <button
              key={v.key}
              type="button"
              class={tw(BUTTON_CLASSES, v.key === state.currentVertex?.key && "bg-primary/50")}
              onClick={() => state.doSetCurrentVertex(v)}>
              {v.key}
            </button>
          )),
        )}
      </div>
      <div class={tw("w-full", "border-1 border-primary p-4")}>
        <code>{JSON.stringify(state.currentVertex, null, 2)}</code>
      </div>
    </div>
  );
}
