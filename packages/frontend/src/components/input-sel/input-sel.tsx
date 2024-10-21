import type { Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { IconButton } from "@plangs/frontend/components/icon-button/icon-button";
import { setComponentState, useDispatchable } from "@plangs/frontend/dispatchable";
import { HOVER, INPUT } from "@plangs/frontend/styles";
import { debounce, onClickOnEnter, send, tw } from "@plangs/frontend/utils";

import { isInputSelElement } from ".";
import { InputSelState } from "./state";

export type InputSelProps = {
  name: string;
  class?: string;
  placeholder?: string;
};

export const TAG_NAME = "input-sel";
export const PROP_KEYS: (keyof InputSelProps)[] = ["name", "class"] as const;

export function InputSel({ name: inputName, placeholder, class: cssClass }: InputSelProps) {
  const self = useRef<HTMLDivElement>();
  const state = useDispatchable(InputSelState.initial());

  useEffect(() => {
    setComponentState(self, isInputSelElement, state);
  });

  const nthButton = (n: number) => self.current?.querySelector<HTMLButtonElement>(`li:nth-child(${n})>button`);
  const inp = () => self.current?.querySelector<HTMLInputElement>("input");

  /** Convert the entries set to enumerated entries, which returns an iterator, map with the given function, then return an array.  */
  function mapEntries<T>(cbk: (entry: [number, string]) => T): T[] {
    return Array.from([...state.values].entries().map(cbk));
  }

  /** Scroll the selection so we can see what's been added. */
  const maybeScroll = (value: string) =>
    self.current?.querySelector(`button[data-value="${value}"]`)?.scrollIntoView({ behavior: "smooth", block: "nearest" });

  /** Remove all instances of the pulse animation. */
  const removePulse = debounce(() => {
    for (const li of self.current?.querySelectorAll(".quick-pulse") ?? []) li.classList.remove("quick-pulse");
  }, 150);

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw(cssClass, "flex flex-col")}>
      <input
        type="search"
        name={inputName}
        placeholder={placeholder}
        class={tw(INPUT, "w-full")}
        // An input becomes an input on enter key, so don't bubbla these intermediate events up.
        onInput={(ev: InputEvent) => ev.stopImmediatePropagation()}
        onKeyDown={(ev: KeyboardEvent) => {
          ev.stopPropagation();
          if (ev.key !== "Enter") return;
          const input = ev.target as HTMLInputElement;
          // NOTE: this is ok because input-sel is only used for extensions right now,
          // but for general usage we should always add a dot as prefix.
          const val = input.value.startsWith(".") ? input.value : `.${input.value}`;
          if (state.doAdd([val])) {
            send(self.current, new Event("input", { bubbles: true, composed: true }));
            setTimeout(() => maybeScroll(val), 100);
          }
          input.value = "";
        }}
      />

      <span class={tw("inline-flex", "items-center justify-between", state.values.size < 2 ? "text-foreground/50" : "text-foreground", "pl-2")}>
        <IconButton action="allAny" disabled={state.values.size < 2} initial={"any"} />
      </span>

      <ul>
        {mapEntries(([idx, value]) => (
          <li key={value} class={tw("cursor-pointer p-2", HOVER)}>
            <button
              data-value={value}
              type="button"
              {...onClickOnEnter(ev => {
                ev.stopPropagation();
                console.log("INP", inp());
                const key = "key" in ev;
                const b = ev.target as HTMLButtonElement;
                if (state.doRemove([b.dataset.value])) {
                  // Timeout: wait till next render.
                  setTimeout(() => {
                    const nb = nthButton(idx + 1) ?? nthButton(idx);
                    (nb ?? inp())?.focus();
                    send(self.current, new Event("input", { bubbles: true, composed: true }));
                    if (!nb) return;
                    nb.classList.add("quick-pulse"); // Add a pulsing animation to show what's being focused next.
                    setTimeout(() => removePulse(), 150);
                  }, 10);
                }
              })}>
              ❌ {value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
