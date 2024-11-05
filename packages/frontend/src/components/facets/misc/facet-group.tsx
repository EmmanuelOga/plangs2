import type { ComponentChildren } from "preact";
import { useContext } from "preact/hooks";

import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { DESELECT } from "@plangs/frontend/auxiliar/icons";
import { BAR, BORDER, HOVER_SVG_GROUP, tw } from "@plangs/frontend/auxiliar/styles";
import { FacetsMainContext } from "@plangs/frontend/components/facets/main/facets-main";
import type { AnyFacetsMainState } from "@plangs/frontend/components/facets/main/state";

export function FacetGroup<GroupKey extends string>({
  label,
  groupKey,
  active,
  children,
}: { label: string; groupKey: GroupKey; active: boolean; children: ComponentChildren }) {
  const main = useContext(FacetsMainContext) as AnyFacetsMainState; // It exists, since it spawned this component.
  const hasValues = main.groupHasValues(groupKey);
  return (
    <div class={tw("flex-1", "flex flex-col", "overflow-y-scroll", !active && "hidden")}>
      <header
        class={tw("shrink-0", "p-2", "flex flex-row", "items-center justify-between", "truncate", "text-primary", tw(BORDER, "border-b-1"), BAR)}>
        <span class="inline-block">{label}</span>

        <span
          // biome-ignore lint/a11y/noNoninteractiveTabindex: we make it interactive.
          tabIndex={0}
          class={tw("group", "cursor-pointer", hasValues ? "text-foreground" : "text-foreground/50")}
          {...onClickOnEnter(() => {
            main.doResetGroup(groupKey);
          })}>
          <div class="inline-flex flex-row">
            <span class={tw(hasValues && "group-hover:text-hiliteb")}>Reset</span>
            <span class={tw(hasValues && HOVER_SVG_GROUP, "scale-50")}>{DESELECT}</span>
          </div>
        </span>
      </header>

      <div class={tw("flex-1", "flex flex-col", "gap-4")}>{children}</div>
    </div>
  );
}
