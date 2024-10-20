import type { ComponentChildren, Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { InputToggle } from "@plangs/frontend/components/input-toggle/input-toggle";
import { setComponentState, useDispatchable } from "@plangs/frontend/dispatchable";
import { DESELECT } from "@plangs/frontend/icons";
import { BORDER, HOVER, HOVER_SVG_GROUP } from "@plangs/frontend/styles";
import { on, onClickOnEnter, send, tap, tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { isInputFacetElement } from ".";
import { InputFacetState } from "./state";

export type InputFacetProps = {
  pg?: PlangsGraph;
  /**
   * This needs to be JSON because the facet is configured from the server's static HTML.
   * An alternative would be to have manu unrelated props for each kind of facet, so we pick our poison :-).
   * The result of parsing this JSON should be of type InputFacetConfig.
   */
  jsonconf?: string;
};

export const TAG_NAME = "input-facet";
export const PROP_KEYS: (keyof InputFacetProps)[] = ["pg", "jsonconf"] as const;

export function InputFacet({ pg, jsonconf }: InputFacetProps) {
  const self = useRef<HTMLDivElement>();

  const allAnyDefault = "any";
  const state = useDispatchable(
    InputFacetState.initial({
      ...{ pg, jsonconf, mode: allAnyDefault },
      onChange() {
        send(self.current?.parentElement, new Event("input", { bubbles: true, composed: true }));
      },
    }),
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: only missing state, which is a dispatchable.
  useEffect(() => {
    state.generateEntries({ pg, jsonconf });
  }, [pg, jsonconf]);

  useEffect(() => {
    const wrapper = setComponentState(self, isInputFacetElement, state);
    if (!wrapper) return;

    return on(self?.current, "input-toggle", (ev: CustomEvent) => {
      ev.stopPropagation();
      state.doSetMode(ev.detail.mode === "all" ? "all" : "any");
    });
  });

  const SUBGRID = tw("col-span-3", "grid grid-cols-subgrid", "items-center");
  const ROW = tw(SUBGRID, tw("border-b-1", BORDER));
  const CENTER_ROW = tw("items-center justify-between");

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw("flex flex-col")}>
      <div class={tw("grid grid-cols-[1fr_auto_auto]", "overflow-y-auto")}>
        <div class={tw(ROW, "sticky top-0 cursor-pointer", tw(BORDER, "border-b-1"))}>
          <div class={tw("col-span-3", "py-1", "flex shrink-0 flex-row", "bg-background", CENTER_ROW, tw(BORDER, "border-t-1"))}>
            <span class={tw("pl-2", CENTER_ROW, state.values.size < 2 ? "text-foreground/50" : "text-foreground")}>
              <InputToggle
                action="allAny"
                disabled={state.values.size < 2}
                initial={allAnyDefault}
                class={tw((state.config.kind === "missing" || state.config.kind === "year") && "hidden")}
              />
            </span>
            <span
              // biome-ignore lint/a11y/noNoninteractiveTabindex: we make it interactive.
              tabIndex={0}
              {...onClickOnEnter(() => state.doResetSelection())}
              class={tw("group", "inline-flex", CENTER_ROW, state.hasSelection ? "text-foreground" : "text-foreground/50")}>
              <span class={tw(state.hasSelection && "group-hover:text-hiliteb")}>Reset</span>
              <span class={tw(state.hasSelection && HOVER_SVG_GROUP, "scale-50")}>{DESELECT}</span>
            </span>
          </div>

          <div class={tw(ROW, "col-span-3", "bg-primary text-background/80")}>
            <FacetButton class={tw("px-2 py-1", "text-left italic")} action={() => state.doToggleOrder("facet")}>
              {state.header("facet")}
            </FacetButton>

            <FacetButton class={tw("px-2 py-1", "text-center italic")} action={() => state.doToggleOrder("count")}>
              {state.header("count")}
            </FacetButton>

            <FacetButton class={tw("px-2 py-1", "text-right italic")} action={() => state.doToggleOrder("sel")}>
              {state.header("sel")}
            </FacetButton>
          </div>
        </div>

        {state.entries.map(entry =>
          tap(
            onClickOnEnter(() => state.doToggle(entry.value)),
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
    </div>
  );
}

function FacetButton({ action, class: cssClass, children }: { class?: string; action: () => void; children: ComponentChildren }) {
  return (
    <button type="button" class={tw("cursor-pointer", "underline decoration-1 decoration-dotted", HOVER, cssClass)} {...onClickOnEnter(action)}>
      {children}
    </button>
  );
}
