import register from "preact-custom-element";

import type { Ref } from "preact";
import { type Dispatch, useEffect, useReducer, useRef } from "preact/hooks";

import { type Actions, type Item, reducer } from "./reducer";

import "./input_sel.css";

/**
 * `<input-sel />` is a list of selected items.
 * Receives a CustomEvent {@link ADD_EVENT_NAME} with the selected item when a selection is made.
 */
export function InputSel() {
  const self = useRef<HTMLDivElement>();
  const [state, dispatch] = useReducer(reducer, { selected: [] });

  useEffect(() => {
    const root = self.current?.parentElement;
    if (!root) return;
    const handler = (ev: Event) => dispatchFrom(ev as CustomEvent, dispatch);
    root.addEventListener(ADD_EVENT_NAME, handler);
    return () => {
      root.removeEventListener(ADD_EVENT_NAME, handler);
    };
  });

  return (
    <div ref={self as Ref<HTMLDivElement>}>
      {state.selected.map(([key, label], index) => (
        <div
          class="remove-item"
          key={key}
          onClick={() => dispatch({ kind: "remove", key })}
          onKeyDown={(ev) => { if (ev.key === "Enter") dispatch({ kind: "remove", key }); }}
          tabindex={index + 1}>
          <span class="icon" aria-label="remove">❌</span>
          {label}
        </div>
      ))}
    </div>
  );
}

export const ADD_EVENT_NAME = "input-sel:add";

/** Dispatch one of these to {@link InputSel} to add an item to the selections. */
export function addItemEvent(item: Item): CustomEvent {
  return new CustomEvent(ADD_EVENT_NAME, { detail: item, bubbles: true, composed: true });
}

/** Attempts to extract an item to add from a {@link ADD_EVENT_NAME} CustomEvent. */
function dispatchFrom(ev: CustomEvent, dispatch: Dispatch<Actions>) {
  const validData = Array.isArray(ev.detail) && ev.detail[0] !== undefined && typeof ev.detail[1] === "string";
  if (!validData) {
    console.warn("Invalid event data on:", ev);
    return;
  }
  dispatch({ kind: "add", item: ev.detail as Item });
}

register(InputSel, "input-sel", ["selected"]);
