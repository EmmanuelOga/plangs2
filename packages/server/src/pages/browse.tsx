import { type ComponentChildren, h } from "preact";

import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import { tw } from "@plangs/frontend/utils";
import type { N, PlangsGraph } from "@plangs/plangs";

import { PlInfo } from "@plangs/frontend/src/components/pl-info/pl-info";

import { id } from "./dom";

export function Browse({ pg }: { pg: PlangsGraph }) {
  return (
    <div
      class={tw(
        "h-full w-full flex-1",
        // ---
        "overflow-hidden",
        "flex flex-col sm:flex-row",
      )}>
      <PlFilters
        class={tw(
          "db-r",
          // ---
          "overflow-y-auto",
        )}
      />
      <PlGrid
        pg={pg}
        class={tw(
          "db-g",
          // ---
          "flex-1",
          "overflow-y-auto",
        )}
      />
      <PlInfo
        pg={pg}
        pl={pg.nodes.pl.get("pl+python")}
        class={tw(
          "db-b",
          // ---
          "max-w-[30rem] p-2",
          "overflow-y-auto",
        )}
      />
    </div>
  );
}

// FILTERS
// "max-h-[33dvh] sm:max-h-[unset] sm:min-w-[35rem]",
// "text-sm sm:text-lg",
// "border-background border-b-4",
// "overflow-hidden overflow-y-auto",
// "shadow-background/75 shadow-md",

function PlFilters({ class: cssClass }: { class: string }) {
  return (
    <aside id={id("filters")} class={tw(cssClass, "grid grid-cols-2", "gap-4 p-2")}>
      {Object.entries(INPUT_GROUPS).map(([key, group]) => (
        <div class="flex flex-col gap-4" key={key}>
          {group.map(({ title, keys }) => (
            <InputGroup key={title} title={title} children={keys.map(renderInput)} />
          ))}
        </div>
      ))}
    </aside>
  );
}

function PlGrid({ pg, class: cssClass }: { pg: PlangsGraph; class: string }) {
  return (
    <div class={tw(cssClass)}>
      <div
        id={id("plGrid")}
        class={tw(
          // ---
          "grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]",
          "md:grid-cols-[repeat(auto-fit,minmax(10rem,1fr))]",
          "gap-4 p-2",
        )}>
        {pg.nodes.pl.batch().map(([key, pl]) => (
          <PlThumb key={key} pl={pl} />
        ))}
      </div>
      {/* Filler to avoid big gaps between rows. */}
      <div class="grow" />
    </div>
  );
}

function InputGroup({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <details
      open={true}
      class={tw(
        "p-0.5",
        "cursor-pointer select-none",
        "hover:outline-1 hover:outline-secondary",
        "shadow-lg shadow-secondary hover:shadow-primary/75",
        "bg-gradient-to-br from-white to-white/75 text-slate-800",
      )}>
      <summary
        class={tw(
          "px-1.5 py-1",
          "overflow-hidden text-ellipsis whitespace-nowrap",
          "text-xs sm:text-lg",
          "bg-secondary hover:bg-primary",
          "text-foreground hover:text-background",
          "border-1 hover:border-secondary",
        )}>
        {title}
      </summary>
      <div class="flex flex-col gap-3 p-1.5">{children}</div>
    </details>
  );
}

function renderInput(key: keyof typeof INPUT_PROPS) {
  const { label, input } = INPUT_PROPS[key];

  const inputTextColor = "placeholder:text-background/50";
  const inputProps = {
    name: key,
    id: id(key),
    class: tw(inputTextColor, input.kind === "checkbox" ? "-mt-1" : "w-full"),
    value: "value" in input ? input.value : undefined,
  };

  let inputElem = <input {...inputProps} type={input.kind} />;
  if (input.kind === "checkbox") inputElem = <input {...inputProps} type="checkbox" />;
  if (input.kind === "compl") inputElem = h("input-compl", { ...inputProps, "data-kind": input.node } as Record<string, string>);

  const showSel = input.kind === "compl" || (input.kind === "search" && "inputSel" in input && input.inputSel);
  return (
    <div class={tw("[&_select]:text-center")}>
      <label for={inputProps.id} class={tw("block", "p-0")}>
        {input.kind === "checkbox" ? inputElem : <div>{label}</div>}
        {input.kind === "checkbox" ? label : inputElem}
      </label>
      {showSel &&
        h("input-sel", {
          name: key,
          class: tw("w-full text-center", inputTextColor, "[&_.item]:text-left"),
        })}
    </div>
  );
}

const search = (label: string, sel?: "trackSelection") => ({ label, input: { kind: "search", inputSel: sel === "trackSelection" } }) as const;
const month = (label: string) => ({ label, input: { kind: "month" } }) as const;
const checkbox = (label: string, value?: string) => ({ label, input: { kind: "checkbox", value } }) as const;
const compl = (label: string, node: N) => ({ label, input: { kind: "compl", node } }) as const;

export const INPUT_PROPS = {
  plangName: search("Lang Name"),
  extensions: search("File Extension", "trackSelection"),

  appearedAfter: month("Appeared After"),
  releasedAfter: month("Released After"),

  hasLogo: checkbox("Has Logo", "1"),
  hasReleases: checkbox("Known Releases"),
  hasWikipedia: checkbox("Has Wikipedia"),
  isMainstream: checkbox("Is Mainstream"),
  isTranspiler: checkbox("Is Transpiler"),

  dialectOf: compl("Dialect Of", "pl"),
  implements: compl("Implements", "pl"),
  influenced: compl("Influenced", "pl"),
  influencedBy: compl("Influenced By", "pl"),
  licenses: compl("Licenses", "license"),
  paradigms: compl("Paradigms", "paradigm"),
  platforms: compl("Platforms", "plat"),
  tags: compl("Tags", "tag"),
  typeSystems: compl("Type System", "tsys"),
  writtenIn: compl("Written In", "pl"),
} as const;

const group = (title: string, keys: (keyof typeof INPUT_PROPS)[]) => ({ title, keys }) as const;

const INPUT_GROUPS = {
  column1: [
    group("Creation Date", ["appearedAfter"]),
    group("Dialect Of", ["dialectOf"]),
    group("Extensions", ["extensions"]),
    group("Implements", ["implements"]),
    group("Influenced By", ["influencedBy"]),
    group("Influenced", ["influenced"]),
    group("Licenses", ["licenses"]),
    group("Logo", ["hasLogo"]),
    group("Name", ["plangName"]),
  ],
  column2: [
    group("Paradigms", ["paradigms"]),
    group("Platforms", ["platforms"]),
    group("Popular", ["isMainstream"]),
    group("Releases", ["hasReleases", "releasedAfter"]),
    group("Tags", ["tags"]),
    group("Transpiler", ["isTranspiler"]),
    group("Type Systems", ["typeSystems"]),
    group("Wikipedia", ["hasWikipedia"]),
    group("Written In", ["writtenIn"]),
  ],
} as const;
