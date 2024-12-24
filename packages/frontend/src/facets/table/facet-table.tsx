import type { Ref } from "preact";
import { useContext, useEffect, useRef } from "preact/hooks";

import { ret } from "@plangs/auxiliar/misc";
import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { on } from "@plangs/frontend/auxiliar/events";
import { HOVER, HOVER_ICON_BG, INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import { IconButton } from "@plangs/frontend/components/icon-button/icon-button";
import { type AnyFacetsMainState, FacetsMainContext } from "@plangs/frontend/facets/main/use_state";

import { DESELECT } from "@plangs/frontend/auxiliar/icons";
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
    return new FacetTableState({ config, entries, facetKey, groupKey, main, order, filter: "" });
  });

  useEffect(() =>
    on(self?.current, "icon-button", (ev: CustomEvent) => {
      ev.stopPropagation();
      state.doSetMode(ev.detail.mode === "all" ? "all" : "any");
    }),
  );

  const SUBGRID = tw("col-span-3", "grid grid-cols-subgrid");
  const ROW = tw(SUBGRID, tw("border-b-1", "border-foreground/25 border-dotted"));

  const body = () => (
    <div class={tw("grid grid-cols-[1fr_auto_auto]", "overflow-hidden")}>
      <div class={tw(ROW, "bg-secondary text-foreground")}>
        <div class={tw("col-span-3", "flex flex-row", "items-center justify-between")}>
          <input
            class={tw(INPUT, "m-1 block h-8 w-[100%]")}
            placeholder="Filter..."
            value={state.filter}
            onInput={ev => state.doSetFilter(ev.currentTarget.value)}
          />
          <IconButton action="allAny" initial={state.value.mode} disabled={state.value.size < 2} />
          <div
            class={tw("scale-75 p-1", state.hasSelection ? tw("hover:text-hiliteb", HOVER_ICON_BG) : "opacity-25")}
            {...onClickOnEnter(() => state.doResetSelection())}>
            {DESELECT}
          </div>
        </div>

        <Header class={"text-left"} action={() => state.doToggleOrder("facet")} col="facet" config={config} order={state.order} />
        <Header class={"text-center"} action={() => state.doToggleOrder("count")} col="count" config={config} order={state.order} />
        <Header class={"text-right"} action={() => state.doToggleOrder("sel")} col="sel" config={config} order={state.order} />
      </div>

      <div class={tw(ROW, "overflow-hidden", "overflow-y-scroll")}>
        {state.filteredEntries.map(entry =>
          ret(
            onClickOnEnter(() => state.doToggle(entry.value)),
            clickOrEnter => (
              <div key={entry.value} class={tw(ROW, HOVER, state.value.has(entry.value) && "bg-secondary/20")} {...clickOrEnter}>
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
    </div>
  );

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw("flex flex-col", "size-full overflow-hidden")}>
      {active ? body() : null}
    </div>
  );
}
