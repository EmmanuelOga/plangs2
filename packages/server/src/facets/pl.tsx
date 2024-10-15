import { BAR, BORDER } from "@plangs/frontend/styles";
import { script, tw } from "@plangs/frontend/utils";

import { cl, id } from "../elements";
import { loremIpsum } from "../utils/lorem";
import { FacetInput } from "./facet-input";
import { PL_FACET_GROUPS } from "./pl_config";

export function PlFacets({ class: cssClass }: { class?: string }) {
  const groups = PL_FACET_GROUPS;

  return (
    <aside
      id={id("facets")}
      class={tw("hidden", "flex flex-row", "overflow-hidden", tw(BORDER, "border-b-1", "border-t-1", "sm:border-r-1"), cssClass)}>
      {script("window.restoreFilters();")}

      {/* Wrapper to avoid streteching the links to the bottom of the screen. */}
      <div class={tw(tw(BORDER, "border-r-1"), "overflow-y-scroll", "flex-grow-0", "flex-shrink-0")}>
        <div class={tw("grid grid-cols-[auto_auto]", "gap-2", "pt-1")}>
          {groups.flatMap(groups => (
            // Subgrid respects the alignment of indicators while allowing to group the links and add a border.
            <div key={groups} class={tw("col-span-2", "grid grid-cols-subgrid", "pb-2", tw(BORDER, "border-b-1"))}>
              {groups.map(({ title, key }) => (
                <FacetLink key={key} facetKey={key} title={title} href={`javascript:window.focusFilter('${key}')`} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div class={tw("max-w-full", "flex-grow-1", "bg-linear-to-b to-secondary/50", "flex flex-col")}>
        {groups.flat(1).map(({ key, title, keys }) => (
          <div key={key} id={key} class={tw(cl("facet"), "hidden", "flex-1", "flex flex-col")}>
            <header class={tw(BAR, "p-2", "flex flex-row", "gap-2", "text-primary", "truncate", tw(BORDER, "border-b-1"))}>
              <span>{title}</span>
              <span>X Y Z {loremIpsum(100)}</span>
            </header>
            <div class={tw("flex-1", "flex flex-col", "gap-4")}>
              {keys.map(key => (
                <FacetInput key={key} inputKey={key} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {script(`setTimeout(() => window.focusFilter('tags'), 100);`)}
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
