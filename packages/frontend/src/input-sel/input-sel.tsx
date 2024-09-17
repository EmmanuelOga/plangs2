import type { Ref } from "preact";
import { useEffect, useReducer, useRef } from "preact/hooks";

import { type Item, type ItemRemoved, reducer } from "./reducer";

import "./input-sel.css";
import { customEvent, on, send } from "../utils";

export const TAG_NAME = "input-sel";

export type InputSelProps = {
  name: string;
};

export function InputSel({ name }: InputSelProps) {
  const self = useRef<HTMLDivElement>();
  const lastRemoved = useRef<ItemRemoved>();

  // Dispatch an input event to notify parent of changes.
  function dispatchInput() {}

  const [state, dispatch] = useReducer(reducer, {
    inputName: name,
    selected: [],
    onAdd() {
      send(self.current?.parentElement, EVENTS.outInput.create());
    },
    onRemove(data: ItemRemoved) {
      lastRemoved.current = data;
      send(self.current?.parentElement, EVENTS.outRemove.create(data));
      send(self.current?.parentElement, EVENTS.outInput.create());
    },
  });

  useEffect(() => {
    dispatch({ kind: "update", inputName: name });
  }, [name]);

  // Setup event listener to add items.
  useEffect(() => {
    const root = self.current?.parentElement;
    if (!root) return;
    const handler = (ev: CustomEvent) => {
      if (!EVENTS.inAdd.valid(ev)) return console.warn("Invalid event data on:", ev);
      dispatch({ kind: "add", item: ev.detail as Item });
    };
    return on(root, EVENTS.inAdd.type, handler);
  });

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
    <div ref={self as Ref<HTMLDivElement>}>
      {state.selected.length > 1 && (
        <select>
          <option value="any">Any of</option>
          <option value="all">All of</option>
        </select>
      )}
      {state.selected.map(({ value, label }) => (
        <div
          data-value={value}
          class="item remove-item"
          key={value}
          onClick={() => dispatch({ kind: "remove", value, by: "click" })}
          onKeyDown={ev => {
            if (ev.key === "Enter") dispatch({ kind: "remove", value, by: "enterKey" });
          }}
          tabindex={0}>
          <span class="icon" aria-label="remove">
            ❌
          </span>
          {label}
        </div>
      ))}
    </div>
  );
}

/** Catalog of incoming and outgoing events, and factory functions for those events. */
export const EVENTS = {
  /** Incoming event: request to add an item. */
  inAdd: {
    type: `${TAG_NAME}:in-add"`,
    create: (item: Item) => customEvent(EVENTS.inAdd.type, item),
    /** Validate data extracted from a CustomEvent detail field. */
    valid: ({ detail }: CustomEvent) => "value" in detail && typeof detail.label === "string",
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
};
