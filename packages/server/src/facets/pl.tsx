import { BORDER } from "@plangs/frontend/styles";
import { script, tw } from "@plangs/frontend/utils";

import { cl, id } from "../elements";
import { FacetInput } from "./facet-input";
import { PL_FACET_GROUPS } from "./pl_config";

export function PlFacets({ class: cssClass }: { class?: string }) {
  const groups = PL_FACET_GROUPS;

  const facetLinks = (
    <div class={tw("mr-1", "grid grid-cols-[auto_auto]", "gap-2", tw(BORDER, "border-r-1"))}>
      {groups.flatMap(groups => (
        <div key={"1"} class={tw("col-span-2", "grid grid-cols-subgrid", "pb-4", "first:mt-1", tw(BORDER, "border-b-1"))}>
          {groups.map(({ title, key }) => (
            <div key={key} class={tw("col-span-2", "grid grid-cols-subgrid")}>
              <a
                data-facet={key}
                href={`javascript:window.focusFilter('${key}')`}
                class={tw(cl("facetLink"), "block", "truncate", "mt-1 px-2 ", "text-foreground/85", "underline decoration-1 decoration-dotted")}>
                {title}
              </a>
              <div class={tw(cl("facetIndicator"), "mt-1 px-2 py-1", "text-foreground/50 text-xs")}>⬤</div>
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

      <div class={tw("col-span-2", "grid grid-cols-subgrid", tw(BORDER, "border-b-1"), "bg-linear-to-b from-secondary to-background")}>
        <header class="p-2">Links</header>
        <header class="p-2">Facet</header>
      </div>

      <div class={tw("flex flex-col", "overflow-y-scroll")}>{facetLinks}</div>
      <div class={tw("flex flex-col")}>
        {groups.flat(1).map(({ key, keys }) => (
          <div key={key} class={tw(cl("facet"))}>
            {keys.map(key => (
              <FacetInput key={key} inputKey={key} />
            ))}
          </div>
        ))}
      </div>

      {/* {script(`setTimeout(() => window.focusFilter('written-in'), 100);`)} */}
    </aside>
  );
}
