import type { Ref } from "preact";
import { useEffect, useReducer, useRef } from "preact/hooks";

import { customEvent, send } from "../../utils";

import { type CompletionItem, type ItemSelected, reducer } from "./reducer";

/** HTML tag name for the CustomElement */
export const TAG_NAME = "input-compl";

export type InputComplProps = {
  name: string;
  completions?: CompletionItem[];
};

export function InputCompl({ name, completions }: InputComplProps) {
  const inputRef = useRef<HTMLInputElement>();
  const popupRef = useRef<HTMLDivElement>();
  const selRef = useRef<HTMLDivElement>();

  const [state, dispatch] = useReducer(reducer, {
    candidates: [],
    completions: [],
    name: name,
    query: "",
    selected: 0,
    showPopup: false,
    onSelect: (data: ItemSelected) => send(inputRef.current, EVENTS.outSelect.create(data)),
  });

  useEffect(() => {
    dispatch({ kind: "update", state: { completions: completions ?? [], name } });
  }, [completions, name]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = state.query;
  }, [state.query]);

  useEffect(() => {
    if (popupRef.current && inputRef.current) {
      popupRef.current.style.width = `${inputRef.current.offsetWidth}px`;
    }
    selRef.current?.scrollIntoView({ block: "nearest" });
  });

  const showPopup = state.candidates.length > 0 && state.showPopup;

  return (
    <>
      <input
        autocomplete="off"
        class={`${showPopup ? "focused" : ""} relative block`}
        name={name}
        onBlur={({ relatedTarget }) => {
          if (relatedTarget === popupRef.current) return;
          dispatch({ kind: "popup", show: false });
        }}
        onClick={() => dispatch({ kind: "popup", show: true })}
        onInput={() => dispatch({ kind: "updateQuery", query: inputRef.current?.value ?? "" })}
        onKeyDown={({ key }) => dispatch({ kind: "keypress", from: "input", key })}
        placeholder="Search"
        ref={inputRef as Ref<HTMLInputElement>}
        tabIndex={0}
        type="search"
      />
      <div
        class={`popup ${showPopup ? "" : "hidden"} absolute z-10 mt-1 max-h-80 max-w-[15rem] overflow-y-auto overflow-x-hidden border border-solid bg-[white] p-1 text-[#333]`}
        onBlur={({ relatedTarget }) => {
          if (relatedTarget === inputRef.current) return;
          dispatch({ kind: "popup", show: false });
        }}
        onKeyDown={({ key }) => dispatch({ kind: "keypress", from: "list", key })}
        ref={popupRef as Ref<HTMLDivElement>}
        tabindex={0}>
        {state.candidates.map((complIdx, idx) => (
          <div
            class={`item ${idx === state.selected ? "selected" : ""} min-w-[8rem]`}
            key={state.completions[complIdx].value}
            onClick={() => dispatch({ kind: "selectIndex", index: idx })}
            onDblClick={() => dispatch({ kind: "keypress", from: "item", key: "Enter" })}
            onKeyDown={({ key }) => dispatch({ kind: "keypress", from: "item", key })}
            ref={(idx === state.selected ? selRef : undefined) as Ref<HTMLDivElement>}>
            {state.completions[complIdx].label}
          </div>
        ))}
      </div>
    </>
  );
}

/** Catalog of incoming and outgoing events, and factory functions for those events. */
export const EVENTS = {
  /** Outgoing event: an item has been selected. */
  outSelect: {
    type: `${TAG_NAME}:select`,
    create: (detail: ItemSelected) => customEvent(EVENTS.outSelect.type, detail),
  },
};
