import { BAR, BORDER } from "@plangs/frontend/styles";
import { script, tw } from "@plangs/frontend/utils";

import { cl, id } from "../elements";
import { FacetInput } from "./facet-input";
import { PL_FACET_GROUPS } from "./pl_config";

export function PlFacets({ class: cssClass }: { class?: string }) {
  const groups = PL_FACET_GROUPS;

  const facetLinks = (
    <div class={tw("mr-1", "grid grid-cols-[auto_auto]", "gap-2", tw(BORDER, "border-r-1"))}>
      {groups.flatMap(groups => (
        <div key={groups} class={tw("col-span-2", "grid grid-cols-subgrid", "pb-4", tw(BORDER, "border-b-1"))}>
          {groups.map(({ title, key }) => (
            <div key={key} class={tw("col-span-2", "grid grid-cols-subgrid")}>
              <div class={tw(cl("facetIndicator"), "mt-[.45rem] pl-2", "text-primary text-xs")}>⬤</div>
              <a
                data-facet={key}
                href={`javascript:window.focusFilter('${key}')`}
                class={tw(cl("facetLink"), "block", "truncate", "py-1 pr-2", "text-foreground/85", "underline decoration-1 decoration-dotted")}>
                {title}
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <aside
      id={id("filters")}
      class={tw(
        "hidden",
        "grid grid-cols-[auto_1fr] grid-rows-[auto_auto_1fr]",
        "overflow-hidden",
        tw(BORDER, "border-b-1", "sm:border-r-1"),
        cssClass,
      )}>
      {script("window.restoreFilters();")}

      <div class={tw("col-span-2", "grid grid-cols-subgrid", tw(BORDER, "border-b-1"), BAR)}>
        <header class="p-2">Links</header>
        <header class="p-2" id={id("currentFacet")}>
          Facet
        </header>
      </div>

      <div class={tw("flex flex-col", "overflow-y-scroll")}>{facetLinks}</div>
      <div class={tw("flex flex-col")}>
        {groups.flat(1).map(({ key, keys }) => (
          <div key={key} id={key} class={tw(cl("facet"), "hidden")}>
            {keys.map(key => (
              <FacetInput key={key} inputKey={key} />
            ))}
          </div>
        ))}
      </div>

      {script(`setTimeout(() => window.focusFilter('general'), 100);`)}
    </aside>
  );
}
