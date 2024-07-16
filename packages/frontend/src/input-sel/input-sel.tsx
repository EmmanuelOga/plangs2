import register from "preact-custom-element";

import type { Ref } from "preact";
import { type Dispatch, useEffect, useReducer, useRef } from "preact/hooks";

import { type Actions, type Item, type ItemRemoved, reducer } from "./reducer";

import "./input-sel.css";

/**
 * `<input-sel />` is a list of selected items.
 * Receives a CustomEvent {@link IN_EVENT_ADD} with the selected item when a selection is made.
 */
export function InputSel() {
  const self = useRef<HTMLDivElement>();
  const lastRemoved = useRef<ItemRemoved>();

  function onRemove(data: ItemRemoved) {
    lastRemoved.current = data;
    self.current?.parentElement?.dispatchEvent(creatRemoveEvent(data));
  }

  const [state, dispatch] = useReducer(reducer, { selected: [], onRemove });

  useEffect(() => {
    const root = self.current?.parentElement;
    if (!root) return;
    const handler = (ev: Event) => dispatchFrom(ev as CustomEvent, dispatch);
    root.addEventListener(IN_EVENT_ADD, handler);
    return () => {
      root.removeEventListener(IN_EVENT_ADD, handler);
    };
  });

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
      {state.selected.map(([key, label]) => (
        <div
          class="remove-item"
          key={key}
          onClick={() => dispatch({ kind: "remove", key, by: "click" })}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") dispatch({ kind: "remove", key, by: "enterKey" });
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

/** Incoming event: request to add an item. */
export const IN_EVENT_ADD = "input-sel:add";

/** Outgoing event: an item has been removed. */
export const OUT_EVENT_REMOVE = "input-sel:item-removed";

/** Creates a {@link ON_SELECT_EVENT} CustomEvent to inform an item has been selected. */
export function creatRemoveEvent(detail: ItemRemoved): CustomEvent {
  return new CustomEvent(OUT_EVENT_REMOVE, { detail, bubbles: true, composed: true });
}

/** Dispatch one of these to {@link InputSel} to add an item to the selections. */
export function createAddEvent(item: Item): CustomEvent {
  return new CustomEvent(IN_EVENT_ADD, { detail: item, bubbles: true, composed: true });
}

/**
 * Attempts to extract an item to add from a {@link IN_EVENT_ADD} CustomEvent.
 * @private used by {@link InputSel} to dispatch to the reducer when an add event is received.
 */
function dispatchFrom(ev: CustomEvent, dispatch: Dispatch<Actions>) {
  const validData = Array.isArray(ev.detail) && ev.detail[0] !== undefined && typeof ev.detail[1] === "string";
  if (!validData) {
    console.warn("Invalid event data on:", ev);
    return;
  }
  dispatch({ kind: "add", item: ev.detail as Item });
}

register(InputSel, "input-sel", ["selected"]);
