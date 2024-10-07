import type { Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { customEvent, elem, on, send, tw, withinContainer } from "../../utils";

import { useDispatchable } from "@plangs/frontend/dispatchable";
import { InputSelState, type Item, type ItemRemoved, isItem } from "./state";

export const TAG_NAME = "input-sel";

export type InputSelProps = {
  name: string;
  class?: string;
};

export function InputSel({ name, class: cssClass }: InputSelProps) {
  const self = useRef<HTMLDivElement>();
  const lastRemoved = useRef<ItemRemoved>();

  const state = useDispatchable(
    new InputSelState({
      inputName: name,
      selected: [],
      onAdd() {
        send(self.current?.parentElement, EVENTS.outInput.create());
        // Ensure the last added item is visible.
        setTimeout(() => {
          const [li, filters] = [self.current?.querySelector("ul :last-child"), elem("filters")];
          if (li && filters && !withinContainer(li, filters)) li.parentElement?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 30);
      },
      onRemove(data: ItemRemoved) {
        lastRemoved.current = data;
        send(self.current?.parentElement, EVENTS.outRemove.create(data));
        send(self.current?.parentElement, EVENTS.outInput.create());
      },
    }),
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: state is a dispatchable.
  useEffect(() => state.update(name), [name]);

  // Setup event listener to add items.
  useEffect(() =>
    on(self.current?.parentElement, EVENTS.inAdd.type, (ev: CustomEvent) => {
      if (!EVENTS.inAdd.valid(ev)) return console.warn("Invalid event data on:", ev);
      state.add(ev.detail as Item[]);
    }),
  );

  // Handle focus after removing an item.
  useEffect(() => {
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
        <select title="Match all or any of the elements" class="mb-2">
          <option value="any">Any of</option>
          <option value="all">All of</option>
        </select>
      )}
      <ul>
        {state.selected.map(({ value, label }) => (
          <li
            key={value}
            data-value={value}
            class="p-2"
            aria-label="remove"
            tabindex={0}
            onClick={() => state.remove(value, "click")}
            onKeyDown={ev => {
              if (ev.key === "Enter") state.remove(value, "enterKey");
            }}>
            ❌ {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Catalog of incoming and outgoing events, and factory functions for those events. */
export const EVENTS = {
  /** Incoming event: request to add an item. */
  inAdd: {
    type: `${TAG_NAME}:in-add"`,
    create: (items: Item[]) => customEvent(EVENTS.inAdd.type, items),
    /** Validate data extracted from a CustomEvent detail field. */
    valid: ({ detail }: CustomEvent) => Array.isArray(detail) && detail.every(isItem),
  },

  /** Outgoing event: an item has been removed. */
  outRemove: {
    type: `${TAG_NAME}:out-item-removed"`,
    create: (detail: ItemRemoved) => customEvent(EVENTS.outRemove.type, detail),
  },

  outInput: {
    /** Emits an standard "input" event on input change. */
    type: "input",
    create: () => new Event(EVENTS.outInput.type, { bubbles: true, composed: true }),
  },
} as const;
