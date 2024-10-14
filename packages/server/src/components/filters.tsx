import { type ComponentChildren, h } from "preact";

import { BORDER, NOWRAP_TEXT } from "@plangs/frontend/styles";
import { script, tw } from "@plangs/frontend/utils";

import { type E, type N, NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from "@plangs/plangs";

import { cl, id } from "../elements";

export function PlFilters({ class: cssClass }: { class?: string }) {
  const facetLinks = INPUT_GROUPS.map(({ title, key }) => (
    <a
      key={key}
      data-facet={key}
      href={`javascript:window.focusFilter('${key}')`}
      class={tw(cl("facetLink"), "block", NOWRAP_TEXT, "px-1 py-1 ", "text-foreground/85", "underline decoration-1 decoration-dotted")}>
      {title}
    </a>
  ));

  const facets = INPUT_GROUPS.map(({ title, key, keys }) => (
    <InputGroup key={key} id={key} title={title}>
      {keys.map(key => (
        <Input key={key} inputKey={key} />
      ))}
    </InputGroup>
  ));

  return (
    <aside id={id("filters")} class={tw("hidden", "flex flex-row", "overflow-hidden", tw(BORDER, "border-b-1"), cssClass)}>
      {script("window.restoreFilters();")}

      <div class={tw("overflow-y-scroll", "px-2")}>{facetLinks}</div>
      <div class={tw("overflow-hidden", "flex-1", "flex flex-col")}>{facets}</div>

      {script(`setTimeout(() => window.focusFilter('type-systems'), 100);`)}
    </aside>
  );
}

function InputGroup({ id, class: cssClass, title, children }: { id: string; class?: string; title: string; children: ComponentChildren }) {
  return (
    <div id={id} class={tw(cl("facet"), "hidden", "flex-1", "flex flex-col gap-4", "max-h-full overflow-hidden", "p-2", cssClass)}>
      <header class="hidden">{title}</header>
      {children}
    </div>
  );
}

function Input({ inputKey: key }: { inputKey: keyof typeof INPUT_PROPS }) {
  const baseProps = { id: id(key), name: key };

  const { label, input } = INPUT_PROPS[key];

  if (input.kind === "facet") {
    return (
      // Relative positioning so the input-facet can absolutely fill the container.
      <div class="relative flex-1">
        {h("input-facet", {
          ...baseProps,
          name: input.edge,
          "data-edge": input.edge,
          "data-node": input.node,
          "data-dir": input.dir,
        } as Record<string, string>)}
      </div>
    );
  }

  const withInputSel = input.kind === "search" && "inputSel" in input && input.inputSel;
  const inputTextColor = "bg-background text-foreground placeholder:text-foreground/50";
  const inputElem = (
    <input
      {...baseProps}
      class={tw(cl("facetInput"), inputTextColor, input.kind === "checkbox" ? "-mt-1" : "w-full")}
      value={"value" in input ? input.value : undefined}
      placeholder={label}
      type={input.kind}
    />
  );

  return (
    <>
      {input.kind === "checkbox" ? (
        <label for={baseProps.id} class={tw("block", "px-2")}>
          {inputElem}
          <span class="ml-2">{label}</span>
        </label>
      ) : (
        inputElem
      )}
      {withInputSel && h("input-sel", { name: key, class: tw("w-full", inputTextColor) })}
    </>
  );
}

const search = (label: string, sel?: "trackSelection") => ({ label, input: { kind: "search", inputSel: sel === "trackSelection" } }) as const;
const month = (label: string) => ({ label, input: { kind: "month" } }) as const;
const checkbox = (label: string, value?: string) => ({ label, input: { kind: "checkbox", value } }) as const;
const facet = (label: string, edge: E, node: N, dir: "direct" | "inverse" = "direct") =>
  ({ label, input: { kind: "facet", edge, dir, node } }) as const;

export const INPUT_PROPS = {
  plangName: search("Lang Name"),
  extensions: search("File Extension", "trackSelection"),

  appearedAfter: month("Appeared After"),
  releasedAfter: month("Released After"),

  hasLogo: checkbox("Has Logo", "1"),
  hasReleases: checkbox("Any Known Release"),
  hasWikipedia: checkbox("Has Wikipedia"),
  isMainstream: checkbox("Is Mainstream"),
  isTranspiler: checkbox("Is Transpiler"),

  compilesTo: facet("Compiles To", "compilesTo", NPlang.kind),
  dialectOf: facet("Dialect Of", "dialect", NPlang.kind),
  implements: facet("Implements", "impl", NPlang.kind),
  influenced: facet("Influenced", "influence", NPlang.kind, "inverse"),
  influencedBy: facet("Influenced By", "influence", NPlang.kind),
  licenses: facet("Licenses", "license", NLicense.kind),
  paradigms: facet("Paradigms", "paradigm", NParadigm.kind),
  platforms: facet("Platforms", "plat", NPlatform.kind),
  tags: facet("Tags", "tag", NTag.kind),
  typeSystems: facet("Type System", "tsys", NTsys.kind),
  writtenIn: facet("Written In", "writtenIn", NPlang.kind),
} as const;

type Group = { title: string; key: string; keys: (keyof typeof INPUT_PROPS)[] };

function group(title: string, keys: (keyof typeof INPUT_PROPS)[]): Group {
  return { title, key: title.replaceAll(/[\/\s]/g, "-").toLowerCase(), keys };
}

const INPUT_GROUPS = [
  group("Name", ["plangName"]),
  group("Created Date", ["appearedAfter"]),
  group("Dialect Of", ["dialectOf"]),
  group("File Extensions", ["extensions"]),
  group("Implements", ["implements"]),
  group("Influenced By", ["influencedBy"]),
  group("Influenced", ["influenced"]),
  group("Licenses", ["licenses"]),
  group("Logo", ["hasLogo"]),
  group("Paradigms", ["paradigms"]),
  group("Platforms", ["platforms"]),
  group("Popular", ["isMainstream"]),
  group("Release Date", ["releasedAfter", "hasReleases"]),
  group("Tags", ["tags"]),
  group("Transpiler", ["isTranspiler", "compilesTo"]),
  group("Type Systems", ["typeSystems"]),
  group("Wikipedia", ["hasWikipedia"]),
  group("Written In", ["writtenIn"]),
] as Group[];
