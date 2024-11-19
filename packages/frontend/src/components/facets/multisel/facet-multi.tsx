import type { Ref } from "preact";
import { useContext, useEffect, useRef } from "preact/hooks";

import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { handler, on } from "@plangs/frontend/auxiliar/events";
import { CLOSE } from "@plangs/frontend/auxiliar/icons";
import { HOVER, INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import { debounce } from "@plangs/frontend/auxiliar/utils";
import type { AnyFacetsMainState } from "@plangs/frontend/components/facets/main/facets-main";
import { FacetsMainContext } from "@plangs/frontend/components/facets/main/facets-main";
import { IconButton } from "@plangs/frontend/components/icon-button/icon-button";

import { FacetMultiState } from "./state";

export function FacetMulti<GroupKey extends string, FacetKey extends string>({
  active,
  facetKey,
  groupKey,
  label,
}: { active: boolean; facetKey: FacetKey; groupKey: GroupKey; label: string }) {
  const self = useRef<HTMLDivElement>(); // We perform various queries on the root element.
  const input = useRef<HTMLInputElement>(); // Used to focus on the input after adding a value.
  const main = useContext(FacetsMainContext) as AnyFacetsMainState; // It exists, since it spawned this component.
  const state = useDispatchable(() => new FacetMultiState<GroupKey, FacetKey>({ main, groupKey, facetKey }));

  useEffect(() => {
    return on(self?.current, "icon-button", (ev: CustomEvent) => {
      ev.stopPropagation();
      state.doSetMode(ev.detail.mode);
    });
  });

  /** Scroll the selection so we can see what's been added. */
  const maybeScroll = (value: string) =>
    self.current?.querySelector(`button[data-value="${value}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });

  const add = handler((input: HTMLInputElement, ev: KeyboardEvent) => {
    ev.stopPropagation();
    if (ev.key !== "Enter") return;

    // NOTE: if we use facet-multi for anything other than extensions, we should make value transform configurable.
    const val = input.value.startsWith(".") ? input.value : `.${input.value}`;
    if (state.doAdd(val)) setTimeout(() => maybeScroll(val), 100);
    input.value = "";
  });

  /** Remove all instances of the pulse animation. */
  const removePulse = debounce(() => {
    for (const li of self.current?.querySelectorAll(".quick-pulse") ?? []) li.classList.remove("quick-pulse");
  }, 150);

  const nthButton = (n: number) => self.current?.querySelector<HTMLButtonElement>(`li:nth-child(${n})>button`);

  const remover = (idx: number) =>
    handler((b: HTMLButtonElement, ev) => {
      ev.stopPropagation();
      if (state.doRemove(b.dataset.value)) {
        // Determine next focus an add a lil animation. Timeout: wait till next render.
        setTimeout(() => {
          const nb = nthButton(idx + 1) ?? nthButton(idx);
          (nb ?? input.current)?.focus();
          if (!nb) return;
          nb.classList.add("quick-pulse"); // Add a pulsing animation to show what's being focused next.
          setTimeout(() => removePulse(), 150);
        }, 10);
      }
    });

  // Helper to enumerate the entries, map them, then return an array (instead of an iterator).
  function mapEntries<T>(mapper: (entry: [number, string | number | boolean]) => T): T[] {
    return Array.from([...state.value.values].entries()).map(mapper);
  }

  const body = () => (
    <>
      <input
        type="search"
        name={facetKey as string}
        ref={input as Ref<HTMLInputElement>}
        placeholder={label}
        class={tw(INPUT, "w-full")}
        onKeyDown={add}
      />

      <span class={tw(state.value.size === 0 && "hidden", state.value.size < 2 ? "text-foreground/50" : "text-foreground", "pl-2")}>
        <IconButton action="allAny" disabled={state.value.size < 2} initial={"any"} />
      </span>

      <ul>
        {mapEntries(([idx, value]) => (
          <li key={value}>
            <button
              type="button"
              data-value={value}
              class={tw("inline-flex flex-row", "p-2", "w-full text-left", "cursor-pointer", HOVER)}
              {...onClickOnEnter(remover(idx))}>
              <div class="-mt-[2px] inline-block scale-75 text-red-500">{CLOSE}</div>
              {value}
            </button>
          </li>
        ))}
      </ul>
    </>
  );

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw("flex flex-col")}>
      {active ? body() : null}
    </div>
  );
}
