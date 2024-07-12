import type { Ref } from "preact";
import register from "preact-custom-element";
import { useEffect, useReducer, useRef } from "preact/hooks";

import "./input_compl.css";

export type InputComplProps = {
  /** Name attribute for the input element. */
  name: string;

  /** Array of [data, label] elements. */
  complData?: [unknown, string][];

  /** Setting this forces a render, without having to replace other data. */
  version: number;

  onSelect?: (data: unknown) => void;
};

/*
 * Since the input data is fixed on props, we can work with indexes into complData.
 */
type State = {
  showPopup: boolean;
  selected: number;
  lastQuery?: string;
  /** Indexes of candidate from `complData` for the popup. */
  candidates: number[];
  /** Ref to prop data. */
  complData?: [unknown, string][];
};

type Actions =
  | { kind: "popup"; show: boolean }
  | { kind: "select" }
  | { kind: "selectIndex"; index: number }
  | { kind: "selectNext" }
  | { kind: "selectPrev" }
  | { kind: "updateList"; query: string };

function reducer(state: State, action: Actions): State {
  switch (action.kind) {
    case "selectIndex":
      return { ...state, selected: action.index };

    case "popup": {
      const popupShowable = state.candidates.length > 0;
      if (!popupShowable) {
        return state.showPopup ? { ...state, showPopup: false } : state;
      }
      return { ...state, showPopup: action.show };
    }

    case "selectPrev": {
      const candidates = state.candidates;
      if (!candidates) return { ...state, showPopup: false };
      const selected = state.showPopup ? (state.selected + candidates.length - 1) % candidates.length : 0;
      return { ...state, selected };
    }

    case "selectNext": {
      const candidates = state.candidates;
      if (!candidates) return { ...state, showPopup: false };
      const selected = state.showPopup ? (state.selected + 1) % candidates.length : 0;
      return { ...state, selected, showPopup: candidates.length > 0 };
    }

    case "updateList": {
      if (state.lastQuery === action.query && !state.showPopup) return state;
      const q = action.query.toLowerCase();
      const candidates: number[] = [];
      state.complData?.forEach(([key, val], idx) => {
        if (val.toLowerCase().includes(q)) candidates.push(idx);
      });
      return { ...state, selected: 0, candidates, lastQuery: q, showPopup: q.length > 0 };
    }
  }

  return state;
}

/** Cast the DOM element to this type to access the custom API. */
export type InputComplWebComponent = HTMLInputElement & InputComplProps;

export function InputCompl({ name, complData, onSelect }: InputComplProps) {
  const input = <input type="search" name={name} />;

  onSelect = (val) => {
    console.log("Selected:", val);
  };

  if (!complData) return input;

  const inputRef = useRef<HTMLInputElement>();
  const popupRef = useRef<HTMLDivElement>();

  const [state, dispatch] = useReducer(
    reducer,
    reducer(
      {
        showPopup: false,
        selected: 0,
        complData,
        candidates: [],
      },
      { kind: "updateList", query: "" },
    ),
  );

  function select() {
    if (!complData || !onSelect) return;

    if (!state.showPopup) {
      dispatch({ kind: "popup", show: true });
      return;
    }

    const elem = complData[state.candidates[state.selected]];
    if (!elem) return;
    onSelect(elem);

    if (inputRef.current) inputRef.current.value = "";
    dispatch({ kind: "updateList", query: "" });
  }

  function handleKey(e: KeyboardEvent) {
    if (e.key === "ArrowDown") {
      dispatch({ kind: "selectNext" });
    } else if (e.key === "ArrowUp") {
      dispatch({ kind: "selectPrev" });
    } else if (e.key === "Enter") {
      select();
    }
  }

  function handleFocus(ev: FocusEvent) {
    const show = ev.type !== "focusout" || ev.relatedTarget === popupRef.current;
    dispatch({ kind: "popup", show });
  }

  function handleInput(ev: InputEvent) {
    console.log(ev);
    const input = inputRef.current;
    if (!input || input.value === state.lastQuery) return;
    dispatch({ kind: "updateList", query: input.value });
  }

  useEffect(() => {
    const p = popupRef.current;
    if (!p || !inputRef.current) return;
    const inPos = inputRef.current.getBoundingClientRect();
    p.style.top = `calc(${inPos.bottom}px + .25rem)`;
    p.style.left = `calc(${inPos.left}px - .25rem)`;
    p.style.minWidth = `${inPos.width}px`;
  });

  return (
    <>
      <input
        ref={inputRef as Ref<HTMLInputElement>}
        type="search"
        name={name}
        onClick={() => dispatch({ kind: "popup", show: true })}
        onKeyDown={handleKey}
        onFocusIn={handleFocus}
        onFocusOut={handleFocus}
        onInput={handleInput}
      />
      <div
        tabindex={0}
        ref={popupRef as Ref<HTMLDivElement>}
        class={`popup ${state.candidates && state.showPopup ? "" : "hidden"}`}
        onKeyDown={handleKey}
        onWheel={(ev) => dispatch({ kind: ev.deltaY < 0 ? "selectNext" : "selectPrev" })}>
        {state.candidates.map((value, idx) => (
          <div
            key={complData[value][0]}
            class={`item ${idx === state.selected ? "selected" : ""}`}
            onClick={() => dispatch({ kind: "selectIndex", index: idx })}
            onDblClick={select}
            onKeyDown={handleKey}>
            {complData[value][1]}
          </div>
        ))}
      </div>
    </>
  );
}

register(InputCompl, "input-compl", ["name", "complData", "version"], { shadow: false });
