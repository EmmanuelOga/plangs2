import { type ComponentChildren, h } from "preact";

import { tw } from "@plangs/frontend/utils";
import { type E, type N, NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from "@plangs/plangs/index";

import { cl, id } from "../elements";

export function PlFilters({ class: cssClass }: { class: string }) {
  const inputs = (group: Group[], cssClass: string) => (
    <div class={tw("m-1 flex flex-col gap-4", cssClass)}>
      {group.map(({ title, keys }) => (
        <InputGroup key={title} title={title}>
          {keys.map(key => (
            <Input key={key} inputKey={key} />
          ))}
        </InputGroup>
      ))}
    </div>
  );

  const [group1, group2, group3, group4] = INPUT_GROUPS.map((group, i) => inputs(group, `pl-bg-${i}`));

  return (
    <aside id={id("filters")} class={tw("grid grid-cols-2 gap-2 md:grid-cols-4", cssClass)}>
      {group1}
      {group2}
      {group3}
      {group4}
    </aside>
  );
}

function InputGroup({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <details
      open={true}
      class={tw(
        "group",
        "cursor-pointer select-none",

        "shadow-md shadow-secondary hover:shadow-primary",
        "bg-white/95 text-slate-950",
      )}>
      <summary
        class={tw(
          "px-1.5 py-1",
          "overflow-hidden text-ellipsis whitespace-nowrap",
          "text-xs sm:text-lg",

          "bg-secondary text-foreground/90",
          "border-1 border-foreground/50 group-hover:border-background/50",

          "group-has-[.pl-filters-active]:bg-primary/75",
          "group-has-[.pl-filters-active]:text-background",
        )}>
        {title}
      </summary>
      <div class="flex flex-col gap-3 p-1.5">{children}</div>
    </details>
  );
}

function Input({ inputKey: key }: { inputKey: keyof typeof INPUT_PROPS }) {
  const baseProps = { id: id(key), name: key };

  const { label, input } = INPUT_PROPS[key];

  if (input.kind === "facet") {
    return h("input-facet", {
      ...baseProps,
      name: input.edge,
      "data-edge": input.edge,
      "data-node": input.node,
      "data-dir": input.dir,
    } as Record<string, string>);
  }

  const withInputSel = input.kind === "search" && "inputSel" in input && input.inputSel;
  const inputTextColor = "placeholder:text-background/50";
  const inputElem = (
    <input
      {...baseProps}
      class={tw(inputTextColor, input.kind === "checkbox" ? "-mt-1" : "w-full", !withInputSel && cl("inputFilter"))}
      value={"value" in input ? input.value : undefined}
      placeholder={label}
      type={input.kind}
    />
  );

  return (
    <>
      {input.kind !== "checkbox" ? (
        inputElem
      ) : (
        <label for={baseProps.id} class={tw("block", "p-0")}>
          {inputElem}
          {label}
        </label>
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

type Group = { title: string; keys: (keyof typeof INPUT_PROPS)[] };
const group = (title: string, keys: (keyof typeof INPUT_PROPS)[]) => ({ title, keys }) as const;

const INPUT_GROUPS = [
  [
    group("Name", ["plangName"]),
    group("Created Date", ["appearedAfter"]),
    group("Release Date", ["releasedAfter", "hasReleases"]),
    group("Logo/Wikipedia/Popular", ["hasLogo", "hasWikipedia", "isMainstream"]),
  ],
  [group("Tags", ["tags"]), group("Paradigms", ["paradigms"]), group("Platforms", ["platforms"]), group("Type Systems", ["typeSystems"])],
  [
    group("Dialect Of", ["dialectOf"]),
    group("Implements", ["implements"]),
    group("Written In", ["writtenIn"]),
    group("Transpiler", ["isTranspiler", "compilesTo"]),
  ],
  [
    group("Influenced By", ["influencedBy"]),
    group("Influenced", ["influenced"]),
    group("File Extensions", ["extensions"]),
    group("Licenses", ["licenses"]),
  ],
] as Group[][];
