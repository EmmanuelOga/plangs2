import type { ComponentChildren, Ref } from "preact";
import { useContext, useEffect, useRef } from "preact/hooks";

import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { DESELECT } from "@plangs/frontend/auxiliar/icons";
import { BORDER, HOVER, HOVER_SVG_GROUP } from "@plangs/frontend/auxiliar/styles";
import { on, onClickOnEnter, tap, tw } from "@plangs/frontend/auxiliar/utils";
import { FacetsMainContext } from "@plangs/frontend/components/facets/main/facets-main";
import { getGroupKey } from "@plangs/frontend/components/facets/misc/facet-group";
import { IconButton } from "@plangs/frontend/components/icon-button/icon-button";
import type { E, N } from "@plangs/plangs";

import { Filter } from "packages/auxiliar/src/filters";
import { FacetTableState } from "./state";

export type FacetTableConfig = { kind: "noderel"; node: N; edge: E; dir: "direct" | "inverse" } | { kind: "year"; node: N } | { kind: "missing" };

export type FacetTableProps<FacetKey extends string> = {
  facetKey: FacetKey;
  config: FacetTableConfig;
  active: boolean;
};

export function FacetTable<FacetKey extends string>({ facetKey, config, active }: FacetTableProps<FacetKey>) {
  const self = useRef<HTMLDivElement>();
  const main = useContext(FacetsMainContext);
  const state = useDispatchable(() => FacetTableState.initial({ pg: main?.pg, facetKey, config, active, value: new Filter("any") }));

  // biome-ignore lint/correctness/useExhaustiveDependencies: only missing state, which is a dispatchable.
  useEffect(() => {
    state.generateEntries({ pg: main?.pg, facetKey, config, active });
  }, [main, facetKey, config]);

  const notifyMain = () => {
    const groupKey = getGroupKey(self.current);
    // biome-ignore lint/suspicious/noExplicitAny: this facetKey could be any: a plang key, a tool key, etc.
    if (main && groupKey) main.doSetValue(groupKey, facetKey as any, state.value.clone());
  };

  useEffect(() => {
    return on(self?.current, "icon-button", (ev: CustomEvent) => {
      ev.stopPropagation();
      state.doSetMode(ev.detail.mode === "all" ? "all" : "any");
      notifyMain();
    });
  });

  const SUBGRID = tw("col-span-3", "grid grid-cols-subgrid", "items-center");
  const ROW = tw(SUBGRID, tw("border-b-1", BORDER));
  const CENTER_ROW = tw("items-center justify-between");

  const body = () => (
    <div class={tw("grid grid-cols-[1fr_auto_auto]", "overflow-y-auto")}>
      <div class={tw(ROW, "sticky top-0 cursor-pointer", tw(BORDER, "border-b-1"))}>
        <div class={tw("col-span-3", "py-1", "flex shrink-0 flex-row", "bg-background", CENTER_ROW, tw(BORDER, "border-t-1"))}>
          <span class={tw("pl-2", CENTER_ROW, state.value.size < 2 ? "text-foreground/50" : "text-foreground")}>
            <IconButton
              action="allAny"
              disabled={state.value.size < 2}
              initial={"any"}
              class={tw((state.config.kind === "missing" || state.config.kind === "year") && "hidden")}
            />
          </span>
          <span
            // biome-ignore lint/a11y/noNoninteractiveTabindex: we make it interactive.
            tabIndex={0}
            {...onClickOnEnter(() => {
              state.doResetSelection();
              notifyMain();
            })}
            class={tw("group", "inline-flex", CENTER_ROW, state.value.isEmpty ? "text-foreground/50" : "text-foreground")}>
            <span class={tw(!state.value.isEmpty && "group-hover:text-hiliteb")}>Reset</span>
            <span class={tw(!state.value.isEmpty && HOVER_SVG_GROUP, "scale-50")}>{DESELECT}</span>
          </span>
        </div>

        <div class={tw(ROW, "col-span-3", "bg-primary text-background/80")}>
          <HeaderButton class={"text-left"} action={() => state.doToggleOrder("facet")} children={state.header("facet")} />
          <HeaderButton class={"text-center"} action={() => state.doToggleOrder("count")} children={state.header("count")} />
          <HeaderButton class={"text-right"} action={() => state.doToggleOrder("sel")} children={state.header("sel")} />
        </div>
      </div>

      {state.entries.map(entry =>
        tap(
          onClickOnEnter(() => {
            state.doToggle(entry.value);
            notifyMain();
          }),
          clickOrEnter => (
            <div key={entry.value} class={tw(ROW, state.isSelected(entry.value) && "bg-primary/20", HOVER)} {...clickOrEnter}>
              <div class={tw("p-2", "text-left", "overflow-hidden text-ellipsis", "line-clamp-3")}>{entry.label}</div>
              <div class={tw("p-2", "text-center")}>{entry.count}</div>
              <div class={tw("p-2", "text-right")}>
                <input type="checkbox" checked={state.isSelected(entry.value)} {...clickOrEnter} />
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

function HeaderButton({ action, class: cssClass, children }: { class?: string; action: () => void; children: ComponentChildren }) {
  return (
    <button
      type="button"
      class={tw("px-2 py-1", "italic", "underline decoration-1 decoration-dotted", "cursor-pointer", HOVER, cssClass)}
      {...onClickOnEnter(action)}>
      {children}
    </button>
  );
}
