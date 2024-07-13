import type { Ref } from "preact";
import register from "preact-custom-element";
import { useEffect, useReducer, useRef } from "preact/hooks";

import { reducer } from "./reducer";

import "./input_compl.css";

/** {@link InputCompl} props. */
export type InputComplProps = {
  /** Name attribute for the input element. */
  name: string;
  /** Array of [data, label] elements. */
  complData?: [unknown, string][];
  /** Invoked when an item is selected. */
  onSelect?: (data: unknown) => void;
  /** Changing this forces a render, without having to replace other data. */
  version: number;
};

/** Cast the DOM element to this type to access the custom API. */
export type InputComplWebComponent = HTMLInputElement & InputComplProps;

/** `<input-compl />` is an input element that can popup an autocomplete list. */
export function InputCompl({ name, complData, onSelect }: InputComplProps) {
  const input = <input type="search" name={name} />;

  if (!complData) return input;

  const inputRef = useRef<HTMLInputElement>();
  const popupRef = useRef<HTMLDivElement>();
  const selRef = useRef<HTMLDivElement>();

  const [state, dispatch] = useReducer(
    reducer,
    reducer(
      {
        candidates: [],
        complData,
        onSelect,
        selected: 0,
        showPopup: false,
        query: "[PRE-INIT]",
      },
      { kind: "updateQuery", query: "" },
    ),
  );

  useEffect(() => {
    const p = popupRef.current;
    if (!p || !inputRef.current) return;
    const inPos = inputRef.current.getBoundingClientRect();
    p.style.minWidth = `${inPos.width}px`;
    p.style.left = `calc(${inPos.left}px - .25rem)`;
    p.style.top = `calc(${inPos.bottom}px + .25rem)`;
    selRef.current?.scrollIntoView();
  });

  return (
    <>
      <input
        value={state.query}
        name={name}
        onClick={() => dispatch({ kind: "popup", show: true })}
        onFocus={({ type, relatedTarget }) => {
          const show = type !== "focusout" || relatedTarget === popupRef.current;
          dispatch({ kind: "popup", show });
        }}
        onInput={() => dispatch({ kind: "updateQuery", query: inputRef.current?.value ?? "" })}
        onKeyDown={({ key }) => dispatch({ kind: "key", from: "input", key })}
        ref={inputRef as Ref<HTMLInputElement>}
        type="search"
      />
      <div
        class={`popup ${state.candidates && state.showPopup ? "" : "hidden"}`}
        onKeyDown={({ key }) => dispatch({ kind: "key", from: "list", key })}
        ref={popupRef as Ref<HTMLDivElement>}
        tabindex={0}>
        {state.candidates.map((value, idx) => (
          <div
            ref={(idx === state.selected ? selRef : undefined) as Ref<HTMLDivElement>}
            class={`item ${idx === state.selected ? "selected" : ""}`}
            key={complData[value][0]}
            onClick={() => dispatch({ kind: "selectIndex", index: idx })}
            onDblClick={() => dispatch({ kind: "key", from: "item", key: "Enter" })}
            onKeyDown={({ key }) => dispatch({ kind: "key", from: "item", key })}>
            {complData[value][1]}
          </div>
        ))}
      </div>
    </>
  );
}

register(InputCompl, "input-compl", ["name", "complData", "version", "onSelect"], { shadow: false });
