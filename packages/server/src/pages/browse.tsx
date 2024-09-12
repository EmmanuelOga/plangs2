import { type ComponentChildren, type JSX, h } from "preact";
import { useContext } from "preact/hooks";

import type { N, NPlang } from "@plangs/plangs";

import { domClass, domId, domInputId, type INPUT, type INPUT_ID } from "./browse_dom";
import { PlangsData } from "../context";

export function Browse() {
  const pg = useContext(PlangsData);
  if (!pg) throw new Error("PlangsGraph should be in the context already.");

  return (
    <>
      <nav id={domId("nav")}>
        <div id={domId("facets")}>
          <Facet title="General">
            {input("plangName")}
            {input("appearedAfter")}
            {input("releasedAfter")}
            {input("hasLogo")}
            {input("hasReleases")}
            {input("hasWikipedia")}
            {input("isMainstream")}
            {input("isTranspiler")}
            {input("extensions")}
          </Facet>
          <Facet title="Type System">{input("typeSystems")}</Facet>
          <Facet title="Paradigm">{input("paradigms")}</Facet>
          <Facet title="Platform">{input("platforms")}</Facet>
          <Facet title="Tags">{input("tags")}</Facet>
          <Facet title="Lineage">
            {input("influenced")}
            {input("influencedBy")}
            {input("dialectOf")}
            {input("implements")}
            {input("writtenIn")}
          </Facet>
          <Facet title="License">{input("licenses")}</Facet>
        </div>
      </nav>
      <article id={domId("plangs")}>
        {[...pg.nodes.pl].map(([nid, pl]) => (
          <div key={nid} data-key={nid} class={domClass("plThumb")}>
            <span class="name">{pl.name}</span>
            <PlangLogo pl={pl} />
          </div>
        ))}
      </article>
      <nav id={domId("side")}>{h("plang-info", { id: domId("plangInfo") })}</nav>
    </>
  );
}

function Facet({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <div class={domClass("facet")} title={title}>
      <div class="controls">{children}</div>
    </div>
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
        <span class="inner-label-checkbox">{label.val}</span>
      </>
    );
  } else if (config.kind === "compl") {
    inner = (
      <>
        <span class="inner-label">{label.val}</span>
        {/* biome-ignore lint/suspicious/noExplicitAny: TODO preact h chokes on data attributes here. */}
        {h("input-compl", { id: domInputId(input), name: input, "data-kind": config.nodeMap } as any)}
      </>
    );
  } else {
    inner = (
      <>
        <span class="inner-label">{label.val}</span>
        <input id={domInputId(input)} name={input} type={config.kind} />
      </>
    );
  }

  const useInputSel = config.kind === "compl" || (config.kind === "search" && config.inputSel);
  return (
    <>
      <label class={label.hide ? "hide" : ""} for={domInputId(input)}>
        {inner}
      </label>
      {useInputSel ? h("input-sel", { name: input }) : null}
    </>
  );
}

export const INPUT_PROPS = {
  plangName: partialInput("Language Name", { kind: "search" }),
  extensions: partialInput("File Extension", { kind: "search", inputSel: true }),

  appearedAfter: partialInput("First Appeared", { kind: "date" }, "hidden"),
  releasedAfter: partialInput("Released After", { kind: "date" }, "hidden"),

  hasLogo: partialInput("Has Logo", { kind: "checkbox" }),
  hasReleases: partialInput("Known Releases", { kind: "checkbox" }),
  hasWikipedia: partialInput("Has Wikipedia", { kind: "checkbox" }),
  isMainstream: partialInput("Is Mainstream", { kind: "checkbox" }),
  isTranspiler: partialInput("Is Transpiler", { kind: "checkbox" }),

  dialectOf: partialInput("Dialect Of", { kind: "compl", nodeMap: "pl" }),
  implements: partialInput("Implements", { kind: "compl", nodeMap: "pl" }),
  influenced: partialInput("Influenced", { kind: "compl", nodeMap: "pl" }),
  influencedBy: partialInput("Influenced By", { kind: "compl", nodeMap: "pl" }),
  licenses: partialInput("Licenses", { kind: "compl", nodeMap: "license" }),
  paradigms: partialInput("Paradigms", { kind: "compl", nodeMap: "paradigm" }),
  platforms: partialInput("Platforms", { kind: "compl", nodeMap: "plat" }),
  tags: partialInput("Tags", { kind: "compl", nodeMap: "tag" }),
  typeSystems: partialInput("Type System", { kind: "compl", nodeMap: "tsys" }),
  writtenIn: partialInput("Written In", { kind: "compl", nodeMap: "pl" }),
} as const;

function partialInput(label: string, config: FacetInputProps["config"], hidden?: "hidden"): Pick<FacetInputProps, "label" | "config"> {
  return { label: { val: label, hide: hidden === "hidden" }, config };
}

function input(key: INPUT) {
  return <FacetInput {...INPUT_PROPS[key]} input={key} />;
}

function PlangLogo({ pl }: { pl: NPlang }) {
  const logo = pl.logoOrImage;
  const content = logo ? <img class="logo" src={logo.url} alt="Logo" /> : <div class="placeholder">{pl.name ?? "No Logo"}</div>;
  return <div class="logo">{content}</div>;
}
