import { type PlangsGraph, VLicense, VPlang } from "@plangs/plangs/graph";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";
import type { ComponentChildren } from "preact";
import { Dispatchable, useDispatchable } from "../auxiliar/dispatchable";
import { INPUT, tw } from "../auxiliar/styles";

class EditorState extends Dispatchable<{ pg: PlangsGraph; currentKind: TPlangsVertexName; currentVertex?: TPlangsVertex; filter: string }> {
  doSetCurrentKind(name: TPlangsVertexName) {
    this.data.currentKind = name;
    this.dispatch();
  }

  doSetCurrentVertex(v: TPlangsVertex) {
    this.data.currentVertex = v;
    this.dispatch();
  }

  doSetFilter(filter: string) {
    this.data.filter = filter;
    this.dispatch();
  }

  get filter() {
    return this.data.filter;
  }

  get vertexName() {
    return Object.keys(this.data.pg.vertices).filter(vn => vn !== "post") as TPlangsVertexName[];
  }

  get currentVertices() {
    const vertices = [...this.data.pg.vertices[this.data.currentKind].values];
    return this.data.filter ? vertices.filter(v => v.key.includes(this.data.filter)) : vertices;
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
  const state = useDispatchable(() => new EditorState({ pg, currentKind: "plang", filter: "", currentVertex: pg.plang.get("pl+python") }));

  return (
    <div class="flex flex-row gap-4">
      <div>
        {state.vertexName.map(vn => (
          <button
            key={vn}
            type="button"
            class={tw(BUTTON_CLASSES, vn === state.currentKind && "bg-primary/25")}
            onClick={() => state.doSetCurrentKind(vn)}>
            {vn}
          </button>
        ))}
      </div>
      <div>
        <input
          aria-label="Filter Key"
          placeholder="Filter"
          value={state.filter}
          onInput={ev => state.doSetFilter((ev.target as HTMLInputElement).value)}
          class={tw(INPUT, "mb-4 px-2 py-1")}
        />
        <div class="max-h-[80dvh] overflow-y-auto">
          {state.currentVertices.map(v => (
            <button
              key={v.key}
              type="button"
              class={tw(BUTTON_CLASSES, v.key === state.currentVertex?.key && "bg-primary/25")}
              onClick={() => state.doSetCurrentVertex(v)}>
              {v.key}
            </button>
          ))}
        </div>
      </div>
      <div class={tw("w-full", "p-1")}>{state.currentVertex ? form(state.currentVertex) : "Select a vertex to edit."}</div>
    </div>
  );
}

function inputField(label: string, value?: string | boolean | number, kind: "text" | "checkbox" = "text") {
  const cssid = `field-${label}`;
  return (
    <>
      <label for={cssid}>{label}</label>
      <div>
        {kind === "checkbox" && <input id={cssid} type="checkbox" checked={value as boolean} />}
        {kind === "text" && <input id={cssid} class={tw(INPUT, "w-full")} type="text" value={(value as string) ?? ""} />}
      </div>
    </>
  );
}

function textArea(label: string, value?: string, rows = 8) {
  const cssid = `field-${label}`;
  return (
    <>
      <label for={cssid}>{label}</label>
      <textarea id={cssid} value={value ?? ""} class={tw(INPUT)} style={`min-height: ${rows}rem; font-family: monospace;`} />
    </>
  );
}

function form(vertex: TPlangsVertex): ComponentChildren {
  return (
    <div>
      <header class="border-1 border-primary bg-primary/25 p-4 text-center text-xl">
        {vertex.vertexName}: {vertex.key}: {vertex.name}
      </header>

      <div class="grid grid-cols-[auto_1fr] items-start gap-4 p-4">
        {inputField("Name", vertex.name)}
        {textArea("Description", vertex.description)}
        {textArea("Short Description", vertex.data.shortDesc)}
        {inputField("Created", vertex.created.value)}
        {inputField("Keywords", vertex.keywords.join(","))}
        {inputField("Home URL", vertex.urlHome)}
        {inputField("Reddit Path", vertex.data.extRedditPath)}
        {inputField("Wikipedia Path", vertex.data.extWikipediaPath)}
        {"github" in vertex && inputField("Github Path", vertex.data.extGithubPath)}
        {"github" in vertex && inputField("Github Stars", vertex.data.githubStars)}
        {inputField("StackOverflow Tags", vertex.data.stackovTags?.join(","))}
        {vertex instanceof VPlang && (
          <>
            {inputField("Extensions", vertex.extensions.join(","))}
            {inputField("Filenames", vertex.filenames.join(","))}
            {inputField("Is Transpiler", vertex.data.stackovTags?.join(","), "checkbox")}
          </>
        )}
        {vertex instanceof VLicense && (
          <>
            {inputField("SPDX", vertex.spdx)}
            {inputField("FSF Libre?", vertex.isFSFLibre, "checkbox")}
            {inputField("OSI Approved?", vertex.isOSIApproved, "checkbox")}
          </>
        )}
        {textArea("Raw JSON Data", JSON.stringify(vertex.data, null, 2), 20)}
      </div>
    </div>
  );
}
