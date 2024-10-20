import { BAR, BORDER } from "@plangs/frontend/styles";
import { script, tw } from "@plangs/frontend/utils";
import { cl, id } from "@plangs/server/elements";

import { FULLCIRCLE } from "@plangs/frontend/icons";
import { FacetInput } from "./facet-input";
import { PL_FACET_GROUPS } from "./pl_inputs";

export function PlFacets({ class: cssClass }: { class?: string }) {
  const groups = PL_FACET_GROUPS;

  return (
    <aside
      id={id("facets")}
      class={tw("hidden", "flex flex-row", "overflow-hidden", tw(BORDER, "border-b-1", "border-t-1", "sm:border-r-1"), cssClass)}>
      {script("window.restoreFilters();")}

      {/* Wrapper to avoid streteching the links to the bottom of the screen. */}
      <div class={tw(tw(BORDER, "border-r-1"), "overflow-y-scroll", "shrink-0 grow-0")}>
        <div class={tw("grid grid-cols-[auto_auto]", "gap-2", "pt-1")}>
          {groups.flatMap(groups => (
            // Subgrid respects the alignment of indicators while allowing to group the links and add a border.
            <div key={groups} class={tw("col-span-2", "grid grid-cols-subgrid", "pb-2", tw(BORDER, "border-b-1"))}>
              {groups.map(({ title, key }) => (
                <FacetLink key={key} facetKey={key} title={title} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div class={tw("grow-1", "overflow-hidden", "bg-linear-to-b to-secondary/50", "flex flex-col")}>
        {groups.flat(1).map(({ key: facetKey, title, keys }) => (
          <div key={facetKey} id={facetKey} class={tw(cl("facet"), "hidden", "flex-1", "flex flex-col", "overflow-y-scroll")}>
            <header class={tw("shrink-0", "p-2", "truncate", "text-primary", tw(BORDER, "border-b-1"), BAR)}>{title}</header>
            <div class={tw("flex-1", "flex flex-col", "gap-4")}>
              {keys.map(inputKey => (
                <FacetInput key={inputKey} inputKey={inputKey} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {script(`setTimeout(() => window.focusFilter('general'), 1);`)}
    </aside>
  );
}

function FacetLink({ facetKey, title }: { facetKey: string; title: string }) {
  return (
    <>
      <div data-facet={facetKey} class={tw(cl("facetIndicator"), "mt-[.45rem] pl-2", "text-foreground/20 text-xs")}>
        <div class="-mt-[2px] scale-75">{FULLCIRCLE}</div>
      </div>
      <a
        data-facet={facetKey}
        href={`javascript:window.focusFilter('${facetKey}')`}
        class={tw(cl("facetLink"), "block", "truncate", "py-1 pr-2", "text-foreground/85", "underline decoration-1 decoration-dotted")}>
        {title}
      </a>
    </>
  );
}
