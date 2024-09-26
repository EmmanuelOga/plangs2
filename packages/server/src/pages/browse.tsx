import { type ComponentChildren, h } from "preact";

import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

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
  if (input.kind === "compl") inputElem = h("input-compl", { ...inputProps, "data-kind": input.nodeMap } as Record<string, string>);

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

/** Configure for every kind of input: its label, its kind, etc. */
export const INPUT_PROPS = {
  plangName: { label: "Lang Name", input: { kind: "search" } },
  extensions: { label: "File Extension", input: { kind: "search", inputSel: true } },

  appearedAfter: { label: "Appeared After", input: { kind: "month" } },
  releasedAfter: { label: "Released After", input: { kind: "month" } },

  hasLogo: { label: "Has Logo", input: { kind: "checkbox", value: "1" } },
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

const group = (title: string, keys: (keyof typeof INPUT_PROPS)[]) => ({ title, keys });

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
