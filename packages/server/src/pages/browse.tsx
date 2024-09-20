import { type JSX, h } from "preact";

import type { N, PlangsGraph } from "@plangs/plangs";

import { type INPUT, domInputId } from "./dom";

export function Browse({ pg }: { pg: PlangsGraph }) {
  const input = (key: INPUT) => <FacetInput {...INPUT_PROPS[key]} input={key} />;
  return (
    <>
      <nav>
        <div>
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
        </div>
      </nav>

      <article>
        {[...pg.nodes.pl].map(([nid, pl]) => (
          <div key={nid} data-key={nid}>
            <span>{pl.name}</span>
            <PlLogo pl={pl} />
          </div>
        ))}
      </article>

      <nav>{h("plang-info", {})}</nav>
    </>
  );
}

type FacetInputProps = {
  input: keyof typeof INPUT_PROPS;
  label: { val: string; hide?: boolean };
  config: { kind: "checkbox"; val?: string } | { kind: "compl"; nodeMap: N } | { kind: "search"; inputSel?: boolean } | { kind: "date" };
};

function FacetInput({ input, label, config }: FacetInputProps) {
  let inner: JSX.Element;
  if (config.kind === "checkbox") {
    inner = (
      <>
        <input id={domInputId(input)} name={input} type="checkbox" value={config.val} />
        <div>{label.val}</div>
      </>
    );
  } else if (config.kind === "compl") {
    inner = (
      <>
        <div>{label.val}</div>
        {/* biome-ignore lint/suspicious/noExplicitAny: TODO preact h chokes on data attributes here. */}
        {h("input-compl", { id: domInputId(input), name: input, "data-kind": config.nodeMap } as any)}
      </>
    );
  } else {
    inner = (
      <>
        {label.val}
        <input id={domInputId(input)} name={input} type={config.kind} />
      </>
    );
  }

  const useInputSel = config.kind === "compl" || (config.kind === "search" && config.inputSel);
  return (
    <>
      <label class={`inline-block ${label.hide ? "hidden" : ""}`} for={domInputId(input)}>
        {inner}
      </label>
      {useInputSel ? h("input-sel", { name: input }) : null}
      <br />
    </>
  );
}

function defInput(label: string, config: FacetInputProps["config"], hidden?: "hidden"): Pick<FacetInputProps, "label" | "config"> {
  return { label: { val: label, hide: hidden === "hidden" }, config };
}

export const INPUT_PROPS = {
  plangName: defInput("Language Name", { kind: "search" }),
  extensions: defInput("File Extension", { kind: "search", inputSel: true }),

  appearedAfter: defInput("First Appeared", { kind: "date" }),
  releasedAfter: defInput("Released After", { kind: "date" }, "hidden"),

  hasLogo: defInput("Has Logo", { kind: "checkbox" }),
  hasReleases: defInput("Known Releases", { kind: "checkbox" }),
  hasWikipedia: defInput("Has Wikipedia", { kind: "checkbox" }),
  isMainstream: defInput("Is Mainstream", { kind: "checkbox" }),
  isTranspiler: defInput("Is Transpiler", { kind: "checkbox" }),

  dialectOf: defInput("Dialect Of", { kind: "compl", nodeMap: "pl" }),
  implements: defInput("Implements", { kind: "compl", nodeMap: "pl" }),
  influenced: defInput("Influenced", { kind: "compl", nodeMap: "pl" }),
  influencedBy: defInput("Influenced By", { kind: "compl", nodeMap: "pl" }),
  licenses: defInput("Licenses", { kind: "compl", nodeMap: "license" }),
  paradigms: defInput("Paradigms", { kind: "compl", nodeMap: "paradigm" }),
  platforms: defInput("Platforms", { kind: "compl", nodeMap: "plat" }),
  tags: defInput("Tags", { kind: "compl", nodeMap: "tag" }),
  typeSystems: defInput("Type System", { kind: "compl", nodeMap: "tsys" }),
  writtenIn: defInput("Written In", { kind: "compl", nodeMap: "pl" }),
} as const;
