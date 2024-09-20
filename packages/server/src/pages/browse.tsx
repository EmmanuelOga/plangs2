import { h } from "preact";

import type { N, PlangsGraph } from "@plangs/plangs";

import { PlThumb } from "../../../frontend/src/components/misc/pl-thumb";

import { type INPUT, domInputId } from "./dom";

export function Browse({ pg }: { pg: PlangsGraph }) {
  const input = (key: INPUT) => <FacetInput {...INPUT_PROPS[key]} input={key} />;
  return (
    <>
      <nav class="hidden md:block">
        <div title="General">
          {input("plangName")}
          {input("hasLogo")}
          {input("hasWikipedia")}
          {input("isMainstream")}
          {input("isTranspiler")}
          {input("hasReleases")}
          {input("releasedAfter")}
          {input("appearedAfter")}
          {input("extensions")}
        </div>
        <div title="Features">
          {input("typeSystems")}
          {input("paradigms")}
          {input("platforms")}
          {input("tags")}
        </div>
        <div title="Influences">
          {input("influenced")}
          {input("influencedBy")}
        </div>
        <div title="Lineage">
          {input("dialectOf")}
          {input("implements")}
          {input("writtenIn")}
        </div>
        <div title="License">{input("licenses")}</div>
      </nav>

      <article class="flex flex-wrap justify-center">
        {[...pg.nodes.pl].map(([nid, pl]) => (
          <PlThumb key={nid} pl={pl} />
        ))}
      </article>

      <nav>{h("plang-info", {})}</nav>
    </>
  );
}

type FacetInputProps = {
  input: keyof typeof INPUT_PROPS;
  label: { val: string; hidden?: boolean };
  config: { kind: "checkbox"; val?: string } | { kind: "compl"; nodeMap: N } | { kind: "search"; inputSel?: boolean } | { kind: "date" };
};

function FacetInput({ input, label, config }: FacetInputProps) {
  const useInputSel = config.kind === "compl" || (config.kind === "search" && config.inputSel);
  return (
    <>
      <label class={label.hidden ? "hidden" : ""} for={domInputId(input)}>
        {config.kind === "checkbox" ? (
          <>
            <input id={domInputId(input)} name={input} type="checkbox" value={config.val} />
            <div>{label.val}</div>
          </>
        ) : config.kind === "compl" ? (
          <>
            <div>{label.val}</div>
            {h("input-compl", { id: domInputId(input), name: input, "data-kind": config.nodeMap } as Record<string, string>)}
          </>
        ) : (
          <>
            {label.val}
            <input id={domInputId(input)} name={input} type={config.kind} />
          </>
        )}
      </label>
      {useInputSel ? h("input-sel", { name: input }) : undefined}
    </>
  );
}

export const INPUT_PROPS = (() => {
  function facet(label: string, config: FacetInputProps["config"], hidden?: "hidden"): Pick<FacetInputProps, "label" | "config"> {
    return { label: { val: label, hidden: hidden === "hidden" }, config };
  }
  return {
    plangName: facet("Language Name", { kind: "search" }),
    extensions: facet("File Extension", { kind: "search", inputSel: true }),

    appearedAfter: facet("First Appeared", { kind: "date" }),
    releasedAfter: facet("Released After", { kind: "date" }, "hidden"),

    hasLogo: facet("Has Logo", { kind: "checkbox" }),
    hasReleases: facet("Known Releases", { kind: "checkbox" }),
    hasWikipedia: facet("Has Wikipedia", { kind: "checkbox" }),
    isMainstream: facet("Is Mainstream", { kind: "checkbox" }),
    isTranspiler: facet("Is Transpiler", { kind: "checkbox" }),

    dialectOf: facet("Dialect Of", { kind: "compl", nodeMap: "pl" }),
    implements: facet("Implements", { kind: "compl", nodeMap: "pl" }),
    influenced: facet("Influenced", { kind: "compl", nodeMap: "pl" }),
    influencedBy: facet("Influenced By", { kind: "compl", nodeMap: "pl" }),
    licenses: facet("Licenses", { kind: "compl", nodeMap: "license" }),
    paradigms: facet("Paradigms", { kind: "compl", nodeMap: "paradigm" }),
    platforms: facet("Platforms", { kind: "compl", nodeMap: "plat" }),
    tags: facet("Tags", { kind: "compl", nodeMap: "tag" }),
    typeSystems: facet("Type System", { kind: "compl", nodeMap: "tsys" }),
    writtenIn: facet("Written In", { kind: "compl", nodeMap: "pl" }),
  } as const;
})();
