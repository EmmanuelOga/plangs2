import { BAR, BORDER } from "@plangs/frontend/styles";
import { script, tw } from "@plangs/frontend/utils";

import { cl, id } from "../elements";
import { FacetInput } from "./facet-input";
import { PL_FACET_GROUPS } from "./pl_config";

export function PlFacets({ class: cssClass }: { class?: string }) {
  const groups = PL_FACET_GROUPS;

  const facetLinks = (
    <div class={tw("grid grid-cols-[auto_auto]", "gap-2")}>
      {groups.flatMap(groups => (
        <div key={groups} class={tw("col-span-2", "grid grid-cols-subgrid", "pb-4", tw(BORDER, "border-b-1"))}>
          {groups.map(({ title, key }) => (
            <FacetLink key={key} facetKey={key} title={title} href={`javascript:window.focusFilter('${key}')`} />
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <aside id={id("filters")} class={tw("hidden", "flex flex-row", "overflow-hidden", tw(BORDER, "border-b-1", "sm:border-r-1"), cssClass)}>
      {script("window.restoreFilters();")}

      <div class={tw("flex flex-col", "overflow-y-scroll")}>{facetLinks}</div>
      <div class={tw("flex flex-col", "flex-1")}>
        {groups.flat(1).map(({ key, title, keys }) => (
          <div key={key} id={key} class={tw(cl("facet"), "hidden")}>
            <header class={tw(BAR, "p-2", "text-primary")}>{title}</header>
            <div class="p-2 pt-4">
              {keys.map(key => (
                <FacetInput key={key} inputKey={key} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {script(`setTimeout(() => window.focusFilter('general'), 100);`)}
    </aside>
  );
}

function FacetLink({ facetKey, title, href }: { facetKey: string; title: string; href: string }) {
  return (
    <>
      <div class={tw(cl("facetIndicator"), "mt-[.45rem] pl-2", "text-foreground/50 text-xs")}>⬤</div>
      <a
        href={href}
        data-facet={facetKey}
        class={tw(cl("facetLink"), "block", "truncate", "py-1 pr-2", "text-foreground/85", "underline decoration-1 decoration-dotted")}>
        {title}
      </a>
    </>
  );
}
