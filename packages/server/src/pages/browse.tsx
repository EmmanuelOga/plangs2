import { type ComponentChildren, h } from "preact";

import type { N, PlangsGraph } from "@plangs/plangs";

import { PlThumb } from "../../../frontend/src/components/misc/pl-thumb";

import { tw } from "@plangs/frontend/utils";
import { type INPUT, domInputId } from "./dom";

export function Browse({ pg }: { pg: PlangsGraph }) {
  return (
    <>
      <aside class="-my-4 -mx-4 mb-1 grid hidden h-[50dvh] grid-cols-2 gap-4 overflow-x-hidden overflow-y-scroll border-secondary border-b-4 shadow-lg shadow-secondary ring-1 ring-secondary">
        <section title="General">
          {facet("plangName")}
          {facet("releasedAfter")}
          {facet("appearedAfter")}
          {facet("extensions")}
        </section>
        <section title="Toggles">
          {facet("hasLogo")}
          {facet("hasWikipedia")}
          {facet("isMainstream")}
          {facet("isTranspiler")}
          {facet("hasReleases")}
        </section>
        <section title="Features">
          {facet("typeSystems")}
          {facet("paradigms")}
          {facet("platforms")}
          {facet("tags")}
        </section>
        <section title="Influences">
          {facet("influenced")}
          {facet("influencedBy")}
        </section>
        <section title="Lineage">
          {facet("dialectOf")}
          {facet("implements")}
          {facet("writtenIn")}
        </section>
        <section title="License">{facet("licenses")}</section>
      </aside>

      <article
        class={tw(
          "flex-1",
          "grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))] gap-2.5",
          "px-2 pt-1 pb-2",
        )}>
        {[...pg.nodes.pl].map(([key, pl]) => (
          <PlThumb key={key} pl={pl} />
        ))}
      </article>

      <aside class="hidden">{h("plang-info", {})}</aside>
    </>
  );

  function facet(key: INPUT) {
    const { label, input } = INPUT_PROPS[key];
    const showSel =
      input.kind === "compl" || (input.kind === "search" && "inputSel" in input && input.inputSel);
    return (
      <div class="min-h-20 [&_select]:text-center">
        <label for={domInputId(key)} class="block pb-2">
          <div>{label}</div>
          <FacetInput key={key} input={input} />
        </label>
        {showSel &&
          h("input-sel", {
            name: key,
            class: "w-full text-center [&_.item]:text-left  text-slate-800",
          })}
      </div>
    );
  }
}

type FacetInputProps = {
  key: keyof typeof INPUT_PROPS;
  input:
    | { kind: "checkbox"; val?: string }
    | { kind: "compl"; nodeMap: N }
    | { kind: "search"; inputSel?: boolean }
    | { kind: "date" };
};

function FacetInput({ key, input }: FacetInputProps) {
  const props = {
    id: domInputId(key),
    class: input.kind === "checkbox" ? "mt-[0.75rem]" : "w-full",
    name: key,
  };
  if (input.kind === "checkbox") return <input {...props} type="checkbox" value={input.val} />;
  if (input.kind === "compl")
    return h("input-compl", { ...props, "data-kind": input.nodeMap } as Record<string, string>);
  return <input {...props} type={input.kind} />;
}

export const INPUT_PROPS = {
  plangName: { label: "Lang Name", input: { kind: "search" } },
  extensions: { label: "File Extension", input: { kind: "search", inputSel: true } },

  appearedAfter: { label: "Appeared After", input: { kind: "date" } },
  releasedAfter: { label: "Released After", input: { kind: "date" } },

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
