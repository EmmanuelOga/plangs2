import type { Ref } from "preact";
import register from "preact-custom-element";
import { useReducer, useRef } from "preact/hooks";

import "./input_compl.css";

export type InputComplProps = {
  /** Name attribute for the input element. */
  name: string;

  /** Array of [data, label] elements. */
  complData?: [unknown, string][];

  /** Setting this forces a render, without having to replace other data. */
  version: number;
};

/*
 * Since the input data is fixed on props, we can work with indexes into complData.
 */
type State = {
  showPopup: boolean;
  selected: number;
  /** Indexes of candidate from `complData` for the popup. */
  candidates: number[];
};

type Actions =
  | { kind: "popup"; show: boolean }
  | { kind: "select" }
  | { kind: "reset" }
  | { kind: "selectNext" }
  | { kind: "selectPrev" }
  | { kind: "updateList"; indexes: number[] };

function reducer(state: State, action: Actions): State {
  const { selected, candidates } = state;

  switch (action.kind) {
    case "select":
      break;

    case "popup":
      return { ...state, showPopup: action.show };

    case "reset":
      return { ...state, selected: 0 };

    case "selectPrev":
      return { ...state, selected: (selected + candidates.length - 1) % candidates.length };

    case "selectNext":
      return { ...state, selected: (selected + 1) % candidates.length };

    case "updateList":
      break;
  }

  return state;
}

/** Cast the DOM element to this type to access the custom API. */
export type InputComplWebComponent = HTMLInputElement & InputComplProps;

export function InputCompl({ name, complData }: InputComplProps) {
  const input = <input type="search" name={name} />;

  if (!complData) return input;

  const inputRef = useRef<HTMLInputElement>();
  const popupRef = useRef<HTMLDivElement>();

  const [state, dispatch] = useReducer(reducer, {
    showPopup: false,
    candidates: Array.from({ length: complData.length }, (_, i) => i),
    selected: 0,
  });

  function handleKey(e: KeyboardEvent) {
    if (e.key === "ArrowDown") {
      dispatch({ kind: "selectNext" });
    } else if (e.key === "ArrowUp") {
      dispatch({ kind: "selectPrev" });
    } else if (e.key === "Enter") {
      dispatch({ kind: "reset" });
    }
  }

  function handleFocus(ev: FocusEvent) {
    const show = ev.type !== "focusout" || ev.relatedTarget === popupRef.current;
    dispatch({ kind: "popup", show });
  }

  return (
    <>
      <input
        ref={inputRef as Ref<HTMLInputElement>}
        type="search"
        name={name}
        onKeyDown={handleKey}
        onFocusIn={handleFocus}
        onFocusOut={handleFocus}
        onInput={(ev) => console.log(ev.target.value)}
      />
      <div
        tabindex={0}
        ref={popupRef as Ref<HTMLDivElement>}
        class={`popup ${state.candidates && state.showPopup ? "" : "hidden"}`}>
        {state.candidates.map((idx) => (
          <div class={`item ${idx === state.selected ? "selected" : ""}`} key={complData[idx][0]}>
            {complData[idx][1]}
          </div>
        ))}
      </div>
    </>
  );
}

register(InputCompl, "input-compl", ["name", "complData", "version"], { shadow: false });
