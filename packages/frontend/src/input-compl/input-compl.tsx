import type { Ref } from "preact";
import { useEffect, useReducer, useRef } from "preact/hooks";

import { customEvent, send } from "../utils";
import { type Item, type ItemSelected, reducer } from "./reducer";

import "./input-compl.css";

/** HTML tag name for the CustomElement */
export const TAG_NAME = "input-compl";

export type InputComplProps = {
  /** Name attribute for the input element. */
  name: string;
  /** Array of [data, label] elements. */
  completions?: Item[];
};

export function InputCompl({ name, completions }: InputComplProps) {
  const inputRef = useRef<HTMLInputElement>();
  const popupRef = useRef<HTMLDivElement>();
  const selRef = useRef<HTMLDivElement>();

  const [state, dispatch] = useReducer(reducer, {
    candidates: [],
    completions: completions ?? [],
    name: name,
    query: "",
    selected: 0,
    showPopup: false,
    onSelect: (data: ItemSelected) => send(inputRef.current, EVENTS.outSelect.create(data)),
  });

  useEffect(() => {
    dispatch({ kind: "update", state: { completions: completions ?? [], name: name } });
  }, [completions, name]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = state.query;
  }, [state.query]);

  useEffect(() => {
    alignPopup(inputRef.current, popupRef.current);
    selRef.current?.scrollIntoView({ block: "nearest" });
  });

  const showPopup = state.candidates.length > 0 && state.showPopup;

  return (
    <>
      <input
        class={`${showPopup ? "focused" : ""}`}
        autocomplete="off"
        name={name}
        onBlur={({ relatedTarget }) => {
          if (relatedTarget === popupRef.current) return;
          dispatch({ kind: "popup", show: false });
        }}
        onClick={() => dispatch({ kind: "popup", show: true })}
        onInput={() => dispatch({ kind: "updateQuery", query: inputRef.current?.value ?? "" })}
        onKeyDown={({ key }) => dispatch({ kind: "keypress", from: "input", key })}
        ref={inputRef as Ref<HTMLInputElement>}
        tabIndex={0}
        type="search"
      />
      <div
        class={`popup ${showPopup ? "" : "hidden"}`}
        onBlur={({ relatedTarget }) => {
          if (relatedTarget === inputRef.current) return;
          dispatch({ kind: "popup", show: false });
        }}
        onKeyDown={({ key }) => dispatch({ kind: "keypress", from: "list", key })}
        ref={popupRef as Ref<HTMLDivElement>}
        tabindex={0}>
        {state.candidates.map((value, idx) => (
          <div
            class={`item ${idx === state.selected ? "selected" : ""}`}
            key={state.completions[value][0]}
            onClick={() => dispatch({ kind: "selectIndex", index: idx })}
            onDblClick={() => dispatch({ kind: "keypress", from: "item", key: "Enter" })}
            onKeyDown={({ key }) => dispatch({ kind: "keypress", from: "item", key })}
            ref={(idx === state.selected ? selRef : undefined) as Ref<HTMLDivElement>}>
            {state.completions[value][1]?.name ?? state.completions[value][0]}
          </div>
        ))}
      </div>
    </>
  );
}

function alignPopup(input?: HTMLInputElement, popup?: HTMLDivElement): void {
  if (!popup || !input) return;
  const inPos = input.getBoundingClientRect();
  popup.style.width = `${inPos.width}px`;
  popup.style.left = `calc(${inPos.left + window.scrollX}px - .25rem)`;
  popup.style.top = `calc(${inPos.bottom + window.scrollY}px + .25rem)`;
}

/** Catalog of incoming and outgoing events, and factory functions for those events. */
export const EVENTS = {
  /** Outgoing event: an item has been selected. */
  outSelect: {
    type: `${TAG_NAME}:select`,
    create: (detail: ItemSelected) => customEvent(EVENTS.outSelect.type, detail),
  },
};
