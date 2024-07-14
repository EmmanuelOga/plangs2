import register from "preact-custom-element";

import type { Ref } from "preact";
import { type Dispatch, useEffect, useReducer, useRef } from "preact/hooks";

export type Item = [unknown, string];

export type State = {
  selected: Item[];
};

export type ActionAdd = { kind: "add"; item: Item };
export type ActionRemove = { kind: "remove"; key: Item[0] };
export type Actions = ActionAdd | ActionRemove;

function reducer(state: State, action: Actions): State {
  const { selected } = state;

  if (action.kind === "add") {
    const existing = selected?.find(([key]) => key === action.item[0]);
    if (existing) return state;
    return { selected: [...(selected || []), action.item] };
  }

  if (action.kind === "remove") {
    return { selected: selected?.filter(([key]) => key !== action.key) };
  }

  return state;
}

export const ADD_EVENT_NAME = "input-sel:add";

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

    function eventHandler(ev: Event) {
      const {detail} = ev as CustomEvent;
      if (Array.isArray(detail) && detail[0] !== undefined && detail[1] !== undefined) {
        dispatch({ kind: "add", item: detail as Item });
      } else {
        console.warn("Invalid event detail", detail);
      }
    }

    root.addEventListener(ADD_EVENT_NAME, eventHandler);
    return () => {
      root.removeEventListener(ADD_EVENT_NAME, eventHandler);
    };
  });

  return (
    <div ref={self as Ref<HTMLDivElement>}>
      {state.selected.length === 0 && <div>No items selected</div>}
      {state.selected.map(([key, label], index) => (
        <div key={key}>
          <span
            style="cursor: pointer; color: red;"
            tabIndex={index + 1}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") dispatch({ kind: "remove", key });
            }}
            onClick={() => dispatch({ kind: "remove", key })}>
            (X){" "}
          </span>
          {label}
        </div>
      ))}
    </div>
  );
}

register(InputSel, "input-sel", ["selected"], { shadow: false });
