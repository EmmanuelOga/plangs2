import type { Ref } from "preact";
import { useContext, useEffect, useRef } from "preact/hooks";

import { ret } from "@plangs/auxiliar/misc";
import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { on } from "@plangs/frontend/auxiliar/events";
import { BORDER, HOVER, tw } from "@plangs/frontend/auxiliar/styles";
import { IconButton } from "@plangs/frontend/components/icon-button/icon-button";
import type { AnyFacetsMainState } from "@plangs/frontend/facets/main/main";
import { FacetsMainContext } from "@plangs/frontend/facets/main/main";

import { type FacetTableConfig, generateEntries, sortEntries } from "./entries";
import { Header } from "./header";
import { FacetTableState } from "./state";

export type FacetTableProps<GroupKey extends string, FacetKey extends string> = {
  groupKey: GroupKey;
  facetKey: FacetKey;
  config: FacetTableConfig;
  active: boolean;
};

export function FacetTable<GroupKey extends string, FacetKey extends string>({
  groupKey,
  facetKey,
  config,
  active,
}: FacetTableProps<GroupKey, FacetKey>) {
  const self = useRef<HTMLDivElement>();
  const main = useContext(FacetsMainContext) as AnyFacetsMainState; // It exists, since it spawned this component.

  const state = useDispatchable(() => {
    const order = config.kind === "prop" ? "facet-desc" : "facet-asc";
    const entries = sortEntries(generateEntries(main.pg, config), order);
    return new FacetTableState({ config, entries, facetKey, groupKey, main, order });
  });

  useEffect(() =>
    on(self?.current, "icon-button", (ev: CustomEvent) => {
      ev.stopPropagation();
      state.doSetMode(ev.detail.mode === "all" ? "all" : "any");
    }),
  );

  const SUBGRID = tw("col-span-3", "grid grid-cols-subgrid", "items-center");
  const ROW = tw(SUBGRID, tw("border-b-1", BORDER));
  const CENTER_ROW = tw("items-center justify-between");

  const body = () => (
    <div class={tw("grid grid-cols-[1fr_auto_auto]", "overflow-y-auto", "relative")}>
      <div class={tw(ROW, "sticky top-0 cursor-pointer", tw(BORDER, "border-b-1"))}>
        <div class={tw("col-span-3", "py-1", "flex shrink-0 flex-row", "bg-background", CENTER_ROW, tw(BORDER, "border-t-1"))}>
          <span class={tw("pl-2", CENTER_ROW, state.value.size < 2 ? "text-foreground/50" : "text-foreground")}>
            <IconButton action="allAny" disabled={state.value.size < 2} initial={state.value.mode} class={tw(config.kind === "prop" && "hidden")} />
          </span>
        </div>

        <div class={tw(ROW, "col-span-3", "bg-primary text-background/80")}>
          <Header class={"text-left"} action={() => state.doToggleOrder("facet")} col="facet" config={config} order={state.order} />
          <Header class={"text-center"} action={() => state.doToggleOrder("count")} col="count" config={config} order={state.order} />
          <Header class={"text-right"} action={() => state.doToggleOrder("sel")} col="sel" config={config} order={state.order} />
        </div>
      </div>

      {state.entries.map(entry =>
        ret(
          onClickOnEnter(() => state.doToggle(entry.value)),
          clickOrEnter => (
            <div key={entry.value} class={tw(ROW, HOVER, state.value.has(entry.value) && "bg-primary/20")} {...clickOrEnter}>
              <div class={tw("p-2", "text-left", "overflow-hidden text-ellipsis", "line-clamp-3")}>{entry.label}</div>
              <div class={tw("p-2", "text-center")}>{entry.count}</div>
              <div class={tw("p-2", "text-right")}>
                <input type="checkbox" checked={state.value.has(entry.value)} {...clickOrEnter} />
              </div>
            </div>
          ),
        ),
      )}
    </div>
  );

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw("flex flex-col")}>
      {active ? body() : null}
    </div>
  );
}
