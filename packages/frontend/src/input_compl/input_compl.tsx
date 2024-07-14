import type { Ref } from "preact";
import register from "preact-custom-element";
import { useEffect, useReducer, useRef } from "preact/hooks";

import { type Item, reducer } from "./reducer";

import "./input_compl.css";

/** {@link InputCompl} props. */
export type InputComplProps = {
  /** Name attribute for the input element. */
  name: string;
  /** Array of [data, label] elements. */
  completions?: [unknown, string][];
  /** Invoked when an item is selected. */
  onSelect?: (item: Item) => void;
  /** Changing this forces a render, without having to replace other data. */
  version: number;
};

/** Cast the DOM element to this type to access the custom API. */
export type InputComplWebComponent = HTMLInputElement & InputComplProps;

/** `<input-compl />` is an input element that can popup an autocomplete list. */
export function InputCompl(props: InputComplProps) {
  const inputRef = useRef<HTMLInputElement>();
  const popupRef = useRef<HTMLDivElement>();
  const selRef = useRef<HTMLDivElement>();

  const [state, dispatch] = useReducer(reducer, {
    candidates: [],
    completions: [],
    selected: 0,
    showPopup: false,
    query: "",
  });

  useEffect(() => {
    dispatch({ kind: "update", state: { completions: props.completions ?? [] } });
  }, [props.completions]);

  useEffect(() => {
    dispatch({ kind: "update", state: { onSelect: props.onSelect } });
  }, [props.onSelect]);

  useEffect(() => {
    const p = popupRef.current;
    if (!p || !inputRef.current) return;
    const inPos = inputRef.current.getBoundingClientRect();
    p.style.minWidth = `${inPos.width}px`;
    p.style.left = `calc(${inPos.left}px - .25rem)`;
    p.style.top = `calc(${inPos.bottom}px + .25rem)`;
    selRef.current?.scrollIntoView({ block: "nearest" });
  });

  return (
    <>
      <input
        value={state.query}
        name={props.name}
        onClick={() => dispatch({ kind: "popup", show: true })}
        onBlur={({ relatedTarget }) => {
          if (relatedTarget === popupRef.current) return;
          dispatch({ kind: "popup", show: false });
        }}
        onInput={() => dispatch({ kind: "updateQuery", query: inputRef.current?.value ?? "" })}
        onKeyDown={({ key }) => dispatch({ kind: "keypress", from: "input", key })}
        ref={inputRef as Ref<HTMLInputElement>}
        type="search"
      />
      <div
        class={`popup ${state.candidates.length > 0 && state.showPopup ? "" : "hidden"}`}
        onKeyDown={({ key }) => dispatch({ kind: "keypress", from: "list", key })}
        ref={popupRef as Ref<HTMLDivElement>}
        tabindex={0}>
        {state.candidates.map((value, idx) => (
          <div
            ref={(idx === state.selected ? selRef : undefined) as Ref<HTMLDivElement>}
            class={`item ${idx === state.selected ? "selected" : ""}`}
            key={state.completions[value][0]}
            onClick={() => dispatch({ kind: "selectIndex", index: idx })}
            onDblClick={() => dispatch({ kind: "keypress", from: "item", key: "Enter" })}
            onKeyDown={({ key }) => dispatch({ kind: "keypress", from: "item", key })}>
            {state.completions[value][1]}
          </div>
        ))}
      </div>
    </>
  );
}

register(InputCompl, "input-compl", ["name", "completions", "version", "onSelect"], { shadow: false });
