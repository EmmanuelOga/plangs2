import { type JSX, h } from "preact";

import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import { tw } from "@plangs/frontend/utils";
import type { N, PlangsGraph } from "@plangs/plangs";

import { cssId } from "./dom";

export function Browse({ pg }: { pg: PlangsGraph }) {
  return (
    <div class={tw("flex flex-1 flex-col", "overflow-hidden")}>
      <Filters
        id={cssId("filters")}
        class={tw(
          // ---
          "hidden",
          "z-10",
          "h-[35dvh] p-3",
          "overflow-y-auto",
          "shadow-nav",
        )}
      />

      <article
        class={tw(
          // ---
          "flex-1",
          "px-2 pt-1.5 pb-2",
          "overflow-y-auto",
        )}>
        <div
          id={cssId("plGrid")}
          class={tw(
            // ---
            "grid gap-2.5",
            "grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]",
          )}>
          {[...pg.nodes.pl].map(([key, pl]) => (
            <PlThumb key={key} pl={pl} />
          ))}
        </div>
      </article>

      <aside class="hidden">{h("pl-info", {})}</aside>
    </div>
  );
}

function Filters({ class: cssClass, id }: { class?: string; id?: string }) {
  return (
    <aside id={id} class={cssClass ?? ""}>
      <div class="prose dark:prose-invert grid grid-cols-2 gap-4">
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
      </div>
    </aside>
  );

  function facet(key: keyof typeof INPUT_PROPS) {
    const { label, input } = INPUT_PROPS[key];

    const inputProps = {
      id: cssId(key),
      class: input.kind === "checkbox" ? "mt-[0.75rem]" : "w-full",
      name: key,
    };

    let inputElem: JSX.Element;
    if (input.kind === "checkbox") inputElem = <input {...inputProps} type="checkbox" value={input.val} />;
    if (input.kind === "compl") inputElem = h("input-compl", { ...inputProps, "data-kind": input.nodeMap } as Record<string, string>);
    inputElem ??= <input {...inputProps} type={input.kind} />;

    const showSel = input.kind === "compl" || (input.kind === "search" && "inputSel" in input && input.inputSel);

    return (
      <div class="min-h-20 [&_select]:text-center">
        <label for={cssId(key)} class="block pb-2">
          <div>{label}</div>
          {inputElem}
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
