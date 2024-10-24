import type { Ref } from "preact";
import { useContext, useRef } from "preact/hooks";

import { FacetsMainContext } from "@plangs/frontend/components/facets/main/facets-main";
import { IconButton } from "@plangs/frontend/components/icon-button/icon-button";
import { useDispatchable } from "@plangs/frontend/dispatchable";
import { HOVER, INPUT } from "@plangs/frontend/styles";
import { debounce, handler, onClickOnEnter, send, tw } from "@plangs/frontend/utils";

import { Val } from "@plangs/graph/value";
import { getGroupKey } from "../misc/facet-group";
import { FacetMultiState } from "./state";

export type FacetMultiProps<T extends string> = {
  label: string;
  facetKey: T;
};

export function FacetMulti<T extends string>({ label, facetKey }: FacetMultiProps<T>) {
  const self = useRef<HTMLDivElement>();
  const state = useDispatchable(FacetMultiState.initial());
  const input = useRef<HTMLInputElement>();

  const main = useContext(FacetsMainContext);
  const notifyMain = () => {
    const groupKey = getGroupKey(self.current);
    if (main && groupKey) main.doSetValue(groupKey, facetKey, Val.wrap(state.value));
  };

  /** Scroll the selection so we can see what's been added. */
  const maybeScroll = (value: string) =>
    self.current?.querySelector(`button[data-value="${value}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });

  const add = handler((input: HTMLInputElement, ev: KeyboardEvent) => {
    ev.stopPropagation();
    if (ev.key !== "Enter") return;

    // NOTE: if we use facet-multi for anything other than extensions, we should make value transform configurable.
    const val = input.value.startsWith(".") ? input.value : `.${input.value}`;

    if (state.doAdd([val])) {
      notifyMain();
      setTimeout(() => maybeScroll(val), 100);
    }

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
      if (state.doRemove([b.dataset.value])) {
        notifyMain();
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

  // Helper to enumerate the entries, map them, then return the array (instead of an iterator).
  function mapEntries<T>(mapper: (entry: [number, string]) => T): T[] {
    return Array.from([...state.value].entries().map(mapper));
  }

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw("flex flex-col")}>
      <input
        type="search"
        name={facetKey as string}
        ref={input as Ref<HTMLInputElement>}
        placeholder={label}
        class={tw(INPUT, "w-full")}
        onKeyDown={add}
      />

      <span class={tw("inline-flex", "items-center justify-between", state.value.size < 2 ? "text-foreground/50" : "text-foreground", "pl-2")}>
        <IconButton action="allAny" disabled={state.value.size < 2} initial={"any"} />
      </span>

      <ul>
        {mapEntries(([idx, value]) => (
          <li key={value} class={tw("cursor-pointer p-2", HOVER)}>
            <button data-value={value} type="button" class="cursor-pointer" {...onClickOnEnter(remover(idx))}>
              ❌ {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
