import { h } from "preact";

import { tw } from "@plangs/frontend/utils";
import { type E, type N, NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from "@plangs/plangs/index";

import { cl, id } from "../elements";

export function PlFilters({ class: cssClass }: { class?: string }) {
  return (
    <aside
      id={id("filters")}
      class={tw(
        "p-1",
        "flex flex-row gap-2 sm:flex-col",
        "overflow-hidden",

        cssClass,
      )}>
      <div class={tw("overflow-y-scroll", "pr-1 pl-3 sm:mb-4")}>
        {INPUT_GROUPS.map(({ title, key }) => (
          <div class={tw("py-1 pr-1", "sm:inline-block")} key={key}>
            <a class={tw("text-primary underline")} href={`javascript:window.focusFilter('${key}')`}>
              {title}
            </a>
          </div>
        ))}
      </div>

      {/* Generous padding right for easier scrolling. */}
      <div class={tw("overflow-y-scroll", "flex-1", "pr-8")}>
        {INPUT_GROUPS.map(({ title, key, keys }) => (
          <div key={key} id={key}>
            <header class="mb-1 px-4 py-2 text-foreground">{title}</header>
            <div class={tw("relative overflow-hidden", "mb-2 p-2", "bg-secondary")}>
              <span
                class={tw(
                  cl("filterAnim"),
                  "hidden",
                  "z-10",
                  "absolute block h-full w-full",
                  "animate-[ping_.2s_cubic-bezier(1,0,0,1)_infinite]",
                  "bg-foreground/75",
                )}
              />
              {keys.map(key => (
                <Input key={key} inputKey={key} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
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
  const inputTextColor = "text-slate-800 placeholder:text-slate-800";
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

type Group = { title: string; key: string; keys: (keyof typeof INPUT_PROPS)[] };

function group(title: string, keys: (keyof typeof INPUT_PROPS)[]): Group {
  return { title, key: title.replaceAll(/[\/\s]/g, "-").toLowerCase(), keys };
}

const INPUT_GROUPS = [
  group("Created Date", ["appearedAfter"]),
  group("Dialect Of", ["dialectOf"]),
  group("File Extensions", ["extensions"]),
  group("Implements", ["implements"]),
  group("Influenced By", ["influencedBy"]),
  group("Influenced", ["influenced"]),
  group("Licenses", ["licenses"]),
  group("Logo", ["hasLogo"]),
  group("Name", ["plangName"]),
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
