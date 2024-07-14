import register from "preact-custom-element";

import type { Ref } from "preact";
import { type Dispatch, useEffect, useReducer, useRef } from "preact/hooks";

export type InputSelProps = {};

export type State = {
  selected: [unknown, string][];
};

export type ActionAdd = { kind: "add"; item: [unknown, string] };
export type ActionRemove = { kind: "remove"; item: unknown };
export type Actions = ActionAdd | ActionRemove;

function reducer(state: State, action: Actions): State {
  const { selected } = state;

  if (action.kind === "add") {
    const existing = selected?.find(([key]) => key === action.item[0]);
    if (existing) return state;
    return { selected: [...(selected || []), action.item] };
  }

  if (action.kind === "remove") {
    return { selected: selected?.filter(([key]) => key !== action.item) };
  }

  return state;
}

/** Cast the DOM element to this type to access the custom API. */
export type InputSelWebComponent = HTMLInputElement & InputSelProps;

export function InputSel(props: InputSelProps) {
  const self = useRef<HTMLDivElement>();
  const [state, dispatch] = useReducer(reducer, { selected: [] });

  useEffect(() => {
    const wrapper = self.current;
    if (!wrapper) return;

    function eventHandler(ev: Event) {
      dispatch({ kind: "add", item: [Math.random(), "New item"] });
    }

    wrapper.addEventListener("click", eventHandler);
    return () => {
      console.log("Removing event listener");
      wrapper.removeEventListener("click", eventHandler);
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
              if (ev.key === "Enter") dispatch({ kind: "remove", item: key });
            }}
            onClick={() => dispatch({ kind: "remove", item: key })}>
            (X){" "}
          </span>
          {label}
        </div>
      ))}
    </div>
  );
}

register(InputSel, "input-sel", ["selected"], { shadow: false });
