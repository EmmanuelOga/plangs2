import type { ComponentChildren } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { CLOSE } from "@plangs/frontend/auxiliar/icons";
import { HOVER_ICON, INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import { Pill } from "@plangs/frontend/components/misc/pill";
import { type PlangsGraph, VLicense, VPlang } from "@plangs/plangs/graph";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";

class EditorState extends Dispatchable<{
  pg: PlangsGraph;
  currentKind: TPlangsVertexName;
  currentVertex?: TPlangsVertex;
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

  get tab() {
    return this.data.tab;
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

export function PlangsEditor({ pg }: { pg: PlangsGraph }) {
  const self = useRef<HTMLDivElement>(null);
  const state = useDispatchable(
    () => new EditorState({ pg, currentKind: "plang", filter: "", currentVertex: pg.plang.get("pl+python"), tab: "relations" }),
  );

  useEffect(() => {
    self.current?.querySelectorAll("button.current")[1]?.scrollIntoView({ block: "nearest" });
  });

  return (
    <div ref={self} class="flex flex-1 flex-row gap-4 overflow-hidden p-4">
      <div>
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
        <div class="flex-1 overflow-y-scroll pr-4">
          {state.currentVertices.map(v =>
            button({ label: v.key, isCurrent: () => state.currentVertex?.key === v.key, onClick: () => state.doSetCurrentVertex(v) }),
          )}
        </div>
      </div>
      <div class={tw("w-full", "p-1")}>{state.currentVertex ? tabs(state, state.currentVertex) : "Select a vertex to edit."}</div>
    </div>
  );
}

function button({ label, isCurrent, onClick }: { label: string; isCurrent: () => boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      class={tw(
        "block",
        "mb-4 w-full px-4 py-1",
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
    <div class="bg-secondary/10 p-4">
      <div class="flex flex-row gap-4">
        <div class="w-32">{button({ label: "FORM", isCurrent: () => state.tab === "form", onClick: () => state.doSetTab("form") })}</div>
        <div class="w-32">
          {button({ label: "RELATIONS", isCurrent: () => state.tab === "relations", onClick: () => state.doSetTab("relations") })}
        </div>
        <div class="w-32">{button({ label: "JSON", isCurrent: () => state.tab === "json", onClick: () => state.doSetTab("json") })}</div>
      </div>
      <div>
        <div>
          <header class="border-1 border-primary bg-primary/20 p-4 text-center text-xl">
            {vertex.vertexName}: {vertex.key}: {vertex.name}
          </header>

          <div class="grid grid-cols-[auto_1fr] items-start gap-4 p-4">
            {state.tab === "form"
              ? form(vertex)
              : state.tab === "relations"
                ? relations(vertex)
                : textArea("Raw JSON Data", JSON.stringify(vertex.data, null, 2), 80)}
          </div>
        </div>
      </div>
    </div>
  );
}

function relations(vertex: TPlangsVertex): ComponentChildren {
  return (
    <div>
      {[...vertex.relations.values()]
        .entries()
        .map(([i, vertices]) => (
          <div class={tw(i % 2 === 0 && "bg-hiliteb/10", "p-2")} key={vertices.edgeDesc}>
            <header class={tw("mb-2 p-2", "text-primary text-sm uppercase")}>{vertices.edgeDesc}</header>
            <label class={tw("inline-flex items-center gap-4", "mb-2 p-2", "text-foreground")}>
              <span>Add {vertices.targetDesc}:</span>
              <input type="text" class={INPUT} />
            </label>
            <div class="ml-2 flex flex-row flex-wrap">
              {vertices.size > 0 ? (
                vertices.values.map(vertex => (
                  <Pill key={vertex.name}>
                    <span class="inline-flex items-center gap-2">
                      {vertex.name}
                      <div class={tw("inline-block", HOVER_ICON)}>{CLOSE}</div>
                    </span>
                  </Pill>
                ))
              ) : (
                <div class="m-1 border-1 px-2 py-1">No Related Vertices.</div>
              )}
            </div>
          </div>
        ))
        .toArray()}
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
    <>
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
    </>
  );
}
