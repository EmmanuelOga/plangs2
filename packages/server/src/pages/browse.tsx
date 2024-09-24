import { type ComponentChildren, h } from "preact";

import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import { style, tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { cssId } from "./dom";

export function Browse({ pg }: { pg: PlangsGraph }) {
  return (
    <>
      <aside
        id={cssId("filters")}
        class={tw(
          "max-h-[33dvh] shrink-0 grow-1",
          "z-10",
          "grid grid-cols-2",
          "gap-3 px-3 pt-2",
          "border-background border-b-4",
          "overflow-hidden overflow-y-auto",
          "shadow-background/75 shadow-md",
        )}>
        {Object.entries(INPUT_GROUPS).map(([key, group]) => (
          <div key={key}>
            {group.map(({ title, keys }) => (
              <InputGroup key={title} title={title} children={keys.map(renderInput)} />
            ))}
          </div>
        ))}
      </aside>
      <article
        id={cssId("plGrid")}
        class={tw("flex-initial", "grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-3", "px-2 pt-1.5 pb-2", "overflow-hidden overflow-y-auto")}>
        {pg.nodes.pl.batch().map(([key, pl]) => (
          <PlThumb key={key} pl={pl} />
        ))}
      </article>

      {/* Filler */}
      <div class="flex-auto" />

      <aside class="hidden">{h("pl-info", {})}</aside>
    </>
  );
}

function InputGroup({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <details
      class={tw(
        "group",
        "mb-3 p-1 last:mb-1",
        "-skew-y-5 rotate-5",
        "open:-skew-y-1 open:rotate-1",
        "ring-1 ring-secondary",
        "bg-gradient-to-br from-white/95 to-white text-slate-800",
      )}>
      <summary class={tw("p-0.5", "text-sm", "group-open:mb-2", "bg-secondary text-foreground")}>{title}</summary>
      {children}
    </details>
  );
}

function renderInput(key: keyof typeof INPUT_PROPS) {
  const { label, input } = INPUT_PROPS[key];

  const inputTextColor = "text-slate-800 placeholder:text-slate-800/50";
  const inputProps = {
    name: key,
    id: cssId(key),
    class: tw(inputTextColor, input.kind === "checkbox" ? "-mt-1" : "w-full"),
  };

  let inputElem = <input {...inputProps} type={input.kind} />;
  if (input.kind === "checkbox") inputElem = <input {...inputProps} type="checkbox" />;
  if (input.kind === "compl") inputElem = h("input-compl", { ...inputProps, "data-kind": input.nodeMap } as Record<string, string>);

  const showSel = input.kind === "compl" || (input.kind === "search" && "inputSel" in input && input.inputSel);
  return (
    <div class={tw("[&_select]:text-center")}>
      <label for={inputProps.id} class={tw("block h-full pb-1.5")}>
        {input.kind === "checkbox" ? (
          <>
            {inputElem}
            {label}
          </>
        ) : (
          <>
            <div>{label}</div>
            {inputElem}
          </>
        )}
      </label>
      {showSel &&
        h("input-sel", {
          name: key,
          class: tw("w-full text-center", inputTextColor, "[&_.item]:text-left"),
        })}
    </div>
  );
}

/** Configure for every kind of input: its label, its kind, etc. */
export const INPUT_PROPS = {
  plangName: { label: "Lang Name", input: { kind: "search" } },
  extensions: { label: "File Extension", input: { kind: "search", inputSel: true } },

  appearedAfter: { label: "Appeared After", input: { kind: "month" } },
  releasedAfter: { label: "Released After", input: { kind: "month" } },

  hasLogo: { label: "Has Logo", input: { kind: "checkbox" } },
  hasReleases: { label: "Known Releases", input: { kind: "checkbox" } },
  hasWikipedia: { label: "Has Wikipedia", input: { kind: "checkbox" } },
  isMainstream: { label: "Is Mainstream", input: { kind: "checkbox" } },
  isTranspiler: { label: "Is Transpiler", input: { kind: "checkbox" } },

  dialectOf: { label: "Dialect Of", input: { kind: "compl", nodeMap: "pl" } },
  implements: { label: "Implements", input: { kind: "compl", nodeMap: "pl" } },
  influenced: { label: "Influenced", input: { kind: "compl", nodeMap: "pl" } },
  influencedBy: { label: "Influenced By", input: { kind: "compl", nodeMap: "pl" } },
  licenses: { label: "Licenses", input: { kind: "compl", nodeMap: "license" } },
  paradigms: { label: "Paradigms", input: { kind: "compl", nodeMap: "paradigm" } },
  platforms: { label: "Platforms", input: { kind: "compl", nodeMap: "plat" } },
  tags: { label: "Tags", input: { kind: "compl", nodeMap: "tag" } },
  typeSystems: { label: "Type System", input: { kind: "compl", nodeMap: "tsys" } },
  writtenIn: { label: "Written In", input: { kind: "compl", nodeMap: "pl" } },
} as const;

const INPUT_GROUPS = {
  column1: [
    { title: "Name/File Ext.", keys: ["plangName", "extensions"] },
    { title: "Releases/Dates", keys: ["hasReleases", "releasedAfter", "appearedAfter"] },
    { title: "License", keys: ["licenses"] },
    { title: "Logo/Wikipedia", keys: ["hasLogo", "hasWikipedia"] },
  ],
  column2: [
    { title: "Popular/Transp", keys: ["isMainstream", "isTranspiler"] },
    { title: "Features", keys: ["typeSystems", "paradigms", "platforms", "tags"] },
    { title: "Influences", keys: ["influenced", "influencedBy"] },
    { title: "Lineage", keys: ["dialectOf", "implements", "writtenIn"] },
  ],
} as const;
