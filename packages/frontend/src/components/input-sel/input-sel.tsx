import type { Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { setComponentState, useDispatchable } from "@plangs/frontend/dispatchable";
import { HOVER } from "@plangs/frontend/styles";
import { elem, send, tw, withinContainer } from "@plangs/frontend/utils";

import { isInputSelElement } from ".";
import { InputSelState, type ItemRemoved } from "./state";

export type InputSelProps = {
  name: string;
  class?: string;
};

export const TAG_NAME = "input-sel";
export const PROP_KEYS: (keyof InputSelProps)[] = ["name", "class"] as const;

export function InputSel({ name: inputName, class: cssClass }: InputSelProps) {
  const self = useRef<HTMLDivElement>();
  const lastRemoved = useRef<ItemRemoved>();

  const state = useDispatchable(
    InputSelState.initial({
      inputName,

      onAdd() {
        // Ensure the last added item is visible.
        setTimeout(() => {
          const [li, facets] = [self.current?.querySelector("ul :last-child"), elem("facets")];
          if (li && facets && !withinContainer(li, facets)) li.parentElement?.scrollIntoView({ behavior: "smooth", block: "nearest" });
          send(self.current?.parentElement, new Event("input", { bubbles: true, composed: true }));
        }, 30);
      },

      onRemove(data: ItemRemoved) {
        lastRemoved.current = data;
        send(self.current?.parentElement, new Event("input", { bubbles: true, composed: true }));
      },
    }),
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: state is a dispatchable.
  useEffect(() => state.propUpdate({ inputName }), [inputName]);

  useEffect(() => {
    setComponentState(self, isInputSelElement, state);

    // Handle focus after removing an item.
    if (!lastRemoved.current || !self.current) return;
    const { by, index, itemsLeft } = lastRemoved.current;
    if (by === "enterKey" && itemsLeft > 0) {
      const i = index < itemsLeft ? index : itemsLeft - 1;
      const div = self.current.querySelector(`.remove-item:nth-child(${i + 1})`) as HTMLDivElement;
      div?.focus();
    }
    lastRemoved.current = undefined;
  });

  return (
    <div ref={self as Ref<HTMLDivElement>} class={tw(cssClass, state.selected.length > 0 && "pl-filters-active")}>
      {state.selected.length > 1 && (
        <select title="Match all or any of the elements" class="my-2 text-slate-800">
          <option value="any">Any of</option>
          <option value="all">All of</option>
        </select>
      )}
      <ul>
        {state.selected.map(({ value, label }) => (
          <li
            class={tw("cursor-pointer p-2", HOVER)}
            key={value}
            data-value={value}
            aria-label="remove"
            tabindex={0}
            onClick={() => state.doRemove(value, "click")}
            onKeyDown={ev => {
              if (ev.key === "Enter") state.doRemove(value, "enterKey");
            }}>
            ❌ {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
