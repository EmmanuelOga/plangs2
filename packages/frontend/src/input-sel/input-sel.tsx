import type { Ref } from "preact";
import { useEffect, useReducer, useRef } from "preact/hooks";

import type { Item } from "../input-compl";
import { type ItemRemoved, reducer } from "./reducer";

import "./input-sel.css";
import { on, send, customEvent } from "../utils";

export const TAG_NAME = "input-sel";

export function InputSel() {
  const self = useRef<HTMLDivElement>();
  const lastRemoved = useRef<ItemRemoved>();

  // Dispatch an input event to notify parent of changes.
  function dispatchInput() {
    const ev = new Event("input", { bubbles: true, composed: true });
    send(self.current?.parentElement, ev);
  }

  function onRemove(data: ItemRemoved) {
    lastRemoved.current = data;
    send(self.current?.parentElement, EVENTS.outRemove.create(data));
    dispatchInput();
  }

  function onAdd(item: Item) {
    dispatchInput();
  }

  const [state, dispatch] = useReducer(reducer, { selected: [], onAdd, onRemove });

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
      {state.selected.map(([key, { name }]) => (
        <div
          data-value={key}
          class="item remove-item"
          key={key}
          onClick={() => dispatch({ kind: "remove", key, by: "click" })}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") dispatch({ kind: "remove", key, by: "enterKey" });
          }}
          tabindex={0}>
          <span class="icon" aria-label="remove">
            ❌
          </span>
          {name ?? key}
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
    valid: ({ detail }: CustomEvent) =>
      Array.isArray(detail) && typeof detail[0] === "string" && detail[0].trim().length > 0,
  },

  /** Outgoing event: an item has been removed. */
  outRemove: {
    type: `${TAG_NAME}:out-item-removed"`,
    create: (detail: ItemRemoved) => customEvent(EVENTS.outRemove.type, detail),
  },
};
