import type { ComponentChildren } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { ADD, CLOSE } from "@plangs/frontend/auxiliar/icons";
import { INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import { Pill } from "@plangs/frontend/components/misc/pill";
import type { RelFrom, RelTo } from "@plangs/graphgen/library";
import { parseDate } from "@plangs/plangs/auxiliar/str_date";
import { type PlangsGraph, VLicense, VPlang } from "@plangs/plangs/graph";
import type { TPlangsVertex, TPlangsVertexName } from "@plangs/plangs/graph/generated";

type AnyRel = RelFrom<TPlangsVertex, TPlangsVertex> | RelTo<TPlangsVertex, TPlangsVertex>;

class EditorState extends Dispatchable<{
  pg: PlangsGraph;
  currentKind: TPlangsVertexName;
  currentVertex?: TPlangsVertex;
  currentRel?: [key: string, rel: AnyRel];
  filter: string;
  form?: VertexForm;
  tab: "form" | "relations" | "json";
}> {
  doSetCurrentKind(name: TPlangsVertexName) {
    this.data.currentKind = name;
    this.dispatch();
  }

  doSetCurrentVertex(v: TPlangsVertex) {
    this.data.currentVertex = v;
    this.data.form = new VertexForm(v).reload();
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

  get form() {
    if (this.data.currentVertex) this.data.form ??= new VertexForm(this.data.currentVertex).reload();
    return this.data.form?.component();
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
        tab: "form",
      }),
  );

  useEffect(() => {
    self.current?.querySelectorAll("button.current")[1]?.scrollIntoView({ block: "nearest" });
  });

  return (
    <div ref={self} class="flex w-full flex-col gap-2">
      <header
        class={tw(
          "bg-secondary/25 text-primary",
          "border-secondary border-b-1",
          "flex flex-row justify-end",
          "shadow-secondary/25 shadow-sm",
          "p-2",
        )}>
        {button({ label: "SAVE", onClick: () => console.log("OK.") })}
      </header>
      <div class="flex flex-1 flex-row gap-8 overflow-hidden p-4">
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
    </div>
  );
}

function button({ label, isCurrent, onClick }: { label: string; isCurrent?: () => boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      class={tw(
        "block",
        "px-4 py-1",
        "border-1 border-primary",
        "cursor-pointer",
        "hover:bg-hiliteb hover:text-hilitef",
        isCurrent?.() && "current bg-secondary",
      )}
      onClick={onClick}>
      {label}
    </button>
  );
}

function tabs(state: EditorState, vertex: TPlangsVertex) {
  return (
    <div class={tw("flex flex-1 flex-col gap-4", "bg-secondary/10", "overflow-hidden")}>
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
      <div class="flex-1 overflow-hidden overflow-y-scroll">
        {state.tab === "form" ? state.form : state.tab === "relations" ? relations(state, vertex) : "TODO"}
      </div>
    </div>
  );
}
// <div class="grid grid-cols-[auto_1fr] items-start gap-4 pt-4">{textArea("Raw JSON Data", JSON.stringify(vertex.data, null, 2), 80)}</div>

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

class VertexForm {
  fields: Record<string, { kind: "bool" | "text" | "string"; label: string; desc?: string }> = {};
  data: Record<string, number | string | boolean | undefined> = {};
  errors: Record<string, string> = {};

  constructor(public readonly vertex: TPlangsVertex) {
    this.fields = {
      name: { kind: "string", label: "Name" },
      description: { kind: "text", label: "Description" },
      shortDesc: { kind: "text", label: "Short Description" },
      created: { kind: "string", label: "Created" },
      keywords: { kind: "string", label: "Keywords", desc: "Comma-separated list of keywords." },
      urlHome: { kind: "string", label: "Home URL", desc: "URL including protocol (http, https)." },
      extRedditPath: { kind: "string", label: "Reddit Path", desc: "Path to subreddit. Example: Python for https://www.reddit.com/r/Python/" },
      extWikipediaPath: {
        kind: "string",
        label: "Wikipedia Path",
        desc: "Path to wikipedia. Example: Python_(programming_language) for https://en.wikipedia.org/wiki/Python_(programming_language)",
      },
      stackovTags: { kind: "string", label: "Stack Overflow Tags", desc: "Comma-separated list of tags." },
    };

    if (vertex instanceof VPlang) {
      this.fields.extensions = { kind: "string", label: "Extensions", desc: "Comma-separated list of extensions. Example: .py,.pyc" };
      this.fields.filenames = { kind: "string", label: "Filenames", desc: "Comma-separated list of files associated. Example: Makefile" };
      this.fields.isTranspiler = { kind: "bool", label: "Is Transpiler", desc: "Compiles to any other language." };
    }

    if (vertex instanceof VLicense) {
      this.fields.spdx = { kind: "string", label: "SPDX" };
      this.fields.isFSFLibre = { kind: "bool", label: "FSF Libre?" };
      this.fields.isOSIApproved = { kind: "bool", label: "OSI Approved?" };
    }

    if ("github" in vertex) {
      this.fields.extGithubPath = { kind: "string", label: "Github Path", desc: "Example: EmmanuelOga/plangs2 for github.com/emmanueloga/plangs2" };
      this.fields.githubStars = { kind: "string", label: "Github Stars" };
    }

    this.validate();
  }

  reload(): this {
    const vertex = this.vertex;

    this.data = {
      description: vertex.description,
      name: vertex.name,
      shortDesc: vertex.data.shortDesc,
      created: vertex.created.value,
      keywords: vertex.keywords.join(","),
      urlHome: vertex.urlHome,
      extRedditPath: vertex.data.extRedditPath,
      extWikipediaPath: vertex.data.extWikipediaPath,
      stackovTags: vertex.data.stackovTags?.join(","),
    };

    if (vertex instanceof VPlang) {
      this.data.extensions = vertex.extensions.join(",");
      this.data.filenames = vertex.filenames.join(",");
      this.data.isTranspiler = vertex.isTranspiler;
    }

    if (vertex instanceof VLicense) {
      this.data.spdx = vertex.spdx;
      this.data.isFSFLibre = vertex.isFSFLibre;
      this.data.isOSIApproved = vertex.isOSIApproved;
    }

    if ("github" in vertex) {
      this.data.extGithubPath = vertex.data.extGithubPath;
      this.data.githubStars = vertex.data.githubStars;
    }

    return this.validate();
  }

  validate(): this {
    const data = this.data;
    const err: Record<string, string> = (this.errors = {});

    function isNonEmptyStr(attr: string) {
      const val = `${data[attr] ?? ""}`;
      if (!val) err[attr] = "Cannot be empty.";
    }

    function isStrDate(attr: string) {
      const val = parseDate(`${data[attr] ?? ""}`);
      if (!val) err[attr] = "Invalid date format. Use YYYY-MM-DD.";
    }

    function isCSV(attr: string, each: RegExp) {
      if (!data[attr]) return;
      const val = `${data[attr]}`.split(",");
      if (!val.every(v => each.test(v))) err[attr] = `Invalid format. Should match RegExp: ${each.source}`;
    }

    function isURL(attr: string) {
      let url: URL | undefined;
      try {
        url = new URL(`${data[attr] ?? ""}`);
      } catch {}
      if (!url || !url.hostname || !url.protocol) err[attr] = "Invalid URL format.";
    }

    function matchesRegex(attr: string, rx: RegExp) {
      if (!rx.test(`${data[attr] ?? ""}`)) err[attr] = `Invalid format. Should match RegExp: ${rx.source}`;
    }

    function isNumber(attr: string, valid: (n: number) => boolean) {
      const val = Number.parseInt(`${data[attr] ?? ""}`);
      if (Number.isNaN(val) || !valid(val)) err[attr] = "Invalid number.";
    }

    if ("description" in data) isNonEmptyStr("description");
    if ("name" in data) isNonEmptyStr("name");
    if ("shortDesc" in data) isNonEmptyStr("shortDesc");
    if ("created" in data) isStrDate("created");
    if ("keywords" in data) isCSV("keywords", /[a-zA-Z0-9\-\_]+/);
    if ("urlHome" in data) isURL("urlHome");
    if ("extRedditPath" in data) matchesRegex("extRedditPath", /[a-zA-Z0-9_]+$/);
    if ("extWikipediaPath" in data) matchesRegex("extRedditPath", /[a-zA-Z0-9\_\(\)\-]+$/);
    if ("stackovTags" in data) isCSV("stackovTags", /[a-zA-Z0-9\-\_]+/);
    if ("extensions" in data) isCSV("extensions", /^\.[a-zA-Z0-9\-\_]+/);
    if ("filenames" in data) isCSV("filenames", /[a-zA-Z0-9\-\_]+/);
    if ("spdx" in data) isNonEmptyStr("spdx");
    if ("extGithubPath" in data) matchesRegex("extGithubPath", /[a-zA-Z0-9\-\_]+\/[a-zA-Z0-9\-\_]+/);
    if ("githubStars" in data) isNumber("githubStars", n => n > 0);

    return this;
  }

  save() {}

  component() {
    return (
      <div class="flex min-w-[50%] max-w-[160ch] flex-col gap-4 justify-self-center pr-4">
        {Object.keys(this.fields).map(attr => this.formField(attr))}
      </div>
    );
  }

  formField(attr: string) {
    if (!(attr in this.fields)) return "Unknown field.";

    const { label, kind, desc } = this.fields[attr];
    const value = this.data[attr];

    const cssid = `field-${label}`;
    const error = this.errors[attr];
    return (
      <div class="px-4">
        <label class="block" for={cssid}>
          {label}
        </label>
        {desc && <div class="text-foreground/80 text-sm italic">{desc}</div>}
        {error && <div class="bg-linear-to-b from-red-200 to-red-300 p-1 text-gray-800">{error}</div>}
        <div class="py-2">
          {kind === "bool" && <input id={cssid} type="checkbox" checked={value as boolean} />}
          {kind === "string" && <input id={cssid} class={tw(INPUT, "w-full")} type="text" value={(value as string) ?? ""} />}
          {kind === "text" && (
            <textarea
              id={cssid}
              value={value ? `${value}` : ""}
              class={tw(INPUT, "text-xl", "w-full", "min-h-[10rem]")}
              style={"font-family: monospace;"}
            />
          )}
        </div>
      </div>
    );
  }
}
