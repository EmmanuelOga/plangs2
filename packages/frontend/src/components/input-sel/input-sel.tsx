import type { Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { InputToggle } from "@plangs/frontend/components/input-toggle/input-toggle";
import { setComponentState, useDispatchable } from "@plangs/frontend/dispatchable";
import { HOVER, INPUT } from "@plangs/frontend/styles";
import { onClickOnEnter, send, tw, withinContainer } from "@plangs/frontend/utils";
import { cl } from "@plangs/server/elements";

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

  const state = useDispatchable(
    InputSelState.initial({
      onChange() {
        const dom = self.current;
        if (!dom) return;
        const li = dom.querySelector("ul :last-child");
        const facet = dom.closest(`.${cl("facet")}`);
        if (li && facet && !withinContainer(li, facet)) li.scrollIntoView({ behavior: "smooth", block: "nearest" });
        send(dom.parentElement, new Event("input", { bubbles: true, composed: true }));
        // TODO: better focus handling.
        if (state.values.size > 0) dom.querySelector("li")?.focus();
      },
    }),
  );

  useEffect(() => {
    setComponentState(self, isInputSelElement, state);
  });

  const nthButton = (n: number) => self.current?.querySelector<HTMLButtonElement>(`li:nth-child(${n})>button`);
  const inp = () => self.current?.querySelector<HTMLInputElement>("input");

  /** Convert the entries set to enumerated entries, which returns an iterator, map with the given function, then return an array.  */
  function mapEntries<T>(cbk: (entry: [number, string]) => T): T[] {
    return Array.from([...state.values].entries().map(cbk));
  }

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw(cssClass)}>
      <input
        type="search"
        name={inputName}
        placeholder={placeholder}
        class={tw(INPUT, "w-full")}
        onKeyDown={(ev: KeyboardEvent) => {
          ev.stopPropagation();
          if (ev.key !== "Enter") return;
          const input = ev.target as HTMLInputElement;
          if (state.doAdd([input.value])) input.value = "";
        }}
      />

      <span class={tw("inline-flex", "items-center justify-between", state.values.size < 2 ? "text-foreground/50" : "text-foreground", "pl-2")}>
        <InputToggle action="allAny" disabled={state.values.size < 2} initial={"any"} />
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
                  setTimeout(() => {
                    (nthButton(idx + 1) ?? nthButton(idx) ?? inp())?.focus();
                  }, 50);
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
