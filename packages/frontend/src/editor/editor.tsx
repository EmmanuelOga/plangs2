import type { ComponentChildren } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { ADD, CLOSE } from "@plangs/frontend/auxiliar/icons";
import { INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import { Pill } from "@plangs/frontend/components/misc/pill";
import type { RelFrom, RelTo } from "@plangs/graphgen/library";
import { type PlangsGraph, VLicense, VPlang } from "@plangs/plangs/graph";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";

type AnyRel = RelFrom<TPlangsVertex, TPlangsVertex> | RelTo<TPlangsVertex, TPlangsVertex>;

class EditorState extends Dispatchable<{
  pg: PlangsGraph;
  currentKind: TPlangsVertexName;
  currentVertex?: TPlangsVertex;
  currentRel?: [key: string, rel: AnyRel];
  filter: string;
  tab: "form" | "relations" | "json";
}> {
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

  get currentRel() {
    return this.data.currentRel;
  }

  get currentVertex() {
    return this.data.currentVertex;
  }

  get currentVertices() {
    const vertices = [...this.data.pg.vertices[this.data.currentKind].values];
    return this.data.filter ? vertices.filter(v => v.key.includes(this.data.filter)) : vertices;
  }

  get filter() {
    return this.data.filter;
  }

  get tab() {
    return this.data.tab;
  }

  get vertexName() {
    return Object.keys(this.data.pg.vertices).filter(vn => vn !== "post") as TPlangsVertexName[];
  }
}

export function PlangsEditor({ pg }: { pg: PlangsGraph }) {
  const self = useRef<HTMLDivElement>(null);
  const py = pg.plang.get("pl+python") as VPlang;
  const state = useDispatchable(
    () =>
      new EditorState({
        pg,
        currentKind: "plang",
        filter: "",
        currentVertex: py,
        currentRel: ["relInfluenced", py.relations.get("relInfluenced") as AnyRel],
        tab: "relations",
      }),
  );

  useEffect(() => {
    self.current?.querySelectorAll("button.current")[1]?.scrollIntoView({ block: "nearest" });
  });

  return (
    <div ref={self} class="flex flex-1 flex-row gap-8 overflow-hidden p-4">
      <div class="flex flex-col gap-4">
        {state.vertexName.map(vn => button({ label: vn, isCurrent: () => state.currentKind === vn, onClick: () => state.doSetCurrentKind(vn) }))}
      </div>
      <div class="flex max-h-full flex-col overflow-hidden">
        <input
          aria-label="Filter Key"
          placeholder="Filter"
          value={state.filter}
          onInput={ev => state.doSetFilter((ev.target as HTMLInputElement).value)}
          class={tw(INPUT, "mb-4 px-2 py-1")}
        />
        <div class="flex flex-1 flex-col gap-4 overflow-y-scroll pr-4">
          {state.currentVertices.map(v =>
            button({ label: v.key, isCurrent: () => state.currentVertex?.key === v.key, onClick: () => state.doSetCurrentVertex(v) }),
          )}
        </div>
      </div>
      {state.currentVertex ? tabs(state, state.currentVertex) : <div class="flex-1 bg-secondary/25 p-2 text-2xl">Select a vertex to edit.</div>}
    </div>
  );
}

function button({ label, isCurrent, onClick }: { label: string; isCurrent: () => boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      class={tw(
        "block",
        "w-full px-4 py-1",
        "border-1 border-primary",
        "cursor-pointer",
        "hover:bg-hiliteb hover:text-hilitef",
        isCurrent() && "current bg-secondary",
      )}
      onClick={onClick}>
      {label}
    </button>
  );
}

function tabs(state: EditorState, vertex: TPlangsVertex) {
  return (
    <div class={tw("flex flex-1 flex-col gap-4", "bg-secondary/10")}>
      <div class="flex flex-row gap-4">
        <div class="w-32">{button({ label: "FORM", isCurrent: () => state.tab === "form", onClick: () => state.doSetTab("form") })}</div>
        <div class="w-32">
          {button({ label: "RELATIONS", isCurrent: () => state.tab === "relations", onClick: () => state.doSetTab("relations") })}
        </div>
        <div class="w-32">{button({ label: "JSON", isCurrent: () => state.tab === "json", onClick: () => state.doSetTab("json") })}</div>
      </div>
      <header class="border-1 border-primary bg-secondary/75 py-2 text-center text-xl">
        {vertex.vertexName}: {vertex.key}: {vertex.name}
      </header>
      {state.tab === "form" ? (
        form(vertex)
      ) : state.tab === "relations" ? (
        relations(state, vertex)
      ) : (
        <div class="grid grid-cols-[auto_1fr] items-start gap-4 pt-4">{textArea("Raw JSON Data", JSON.stringify(vertex.data, null, 2), 80)}</div>
      )}
    </div>
  );
}

function relations(state: EditorState, vertex: TPlangsVertex): ComponentChildren {
  return (
    <div class="flex flex-1 flex-row gap-4 overflow-hidden">
      <div class="flex flex-col gap-4 overflow-hidden overflow-y-scroll">
        {[...vertex.relations.entries()]
          .filter(([key]) => key !== "relPosts" && key !== "relAuthors")
          .map(([key, vertices]) =>
            button({
              label: vertices.edgeDesc,
              isCurrent: () => state.currentRel?.[0] === key,
              onClick: () => state.doSetRel([key, vertices as AnyRel]),
            }),
          )}
      </div>
      <div class="flex flex-1 flex-col gap-4">
        <header class="border-1 border-primary bg-secondary/75 p-2 text-center text-xl">Related {state.currentRel?.[1].edgeDesc}</header>
        <div class="flex flex-1 flex-col gap-4 bg-primary/10 p-4">{state.currentRel ? partition(state, state.currentRel) : "Select a Relation."}</div>
      </div>
    </div>
  );
}

/** Partition vertices from a relationship: those with an edge and those without. */
function partition(state: EditorState, [key, rel]: [string, AnyRel]) {
  const related: TPlangsVertex[] = [];
  const unrelated: TPlangsVertex[] = [];

  for (const vertex of rel.targetVertices.values) {
    if (rel.has(vertex.key)) {
      related.push(vertex);
    } else {
      unrelated.push(vertex);
    }
  }

  function disconnect(v: TPlangsVertex): void {
    rel.remove(v.key);
    state.dispatch();
  }

  function connect(v: TPlangsVertex): void {
    rel.add(v.key);
    state.dispatch();
  }

  return (
    <>
      <div class="flex flex-row flex-wrap gap-1">
        <h2 class="w-full pb-2">Connected</h2>
        {related.map(v => (
          <Pill key={v.key} class="group cursor-pointer hover:bg-primary/25">
            <button type="button" class="inline-flex items-center gap-1" onClick={() => disconnect(v)}>
              {v.name}
              <div class={tw("inline-block", "group-hover:text-hiliteb")}>{CLOSE}</div>
            </button>
          </Pill>
        ))}
      </div>
      <div class="flex flex-row flex-wrap gap-1">
        <h2 class="w-full pb-2">Unconnected</h2>
        {unrelated.map(v => (
          <Pill key={v.key} class="group hover:bg-primary/25">
            <button type="button" class="inline-flex cursor-pointer items-center gap-1" onClick={() => connect(v)}>
              {v.name}
              <div class={tw("inline-block", "group-hover:text-hiliteb")}>{ADD}</div>
            </button>
          </Pill>
        ))}
      </div>
    </>
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
    <div class="grid grid-cols-[auto_1fr] items-start gap-4">
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
    </div>
  );
}
