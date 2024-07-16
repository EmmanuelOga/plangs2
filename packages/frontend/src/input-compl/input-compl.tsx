import type { Ref } from "preact";
import register from "preact-custom-element";
import { useEffect, useReducer, useRef } from "preact/hooks";

import { type Item, reducer } from "./reducer";

import "./input-compl.css";

/** {@link InputCompl} props. */
export type InputComplProps = {
  /** Name attribute for the input element. */
  name: string;
  /** Array of [data, label] elements. */
  completions?: Item[];
  tabIndex?: number;
};

/**
 * `<input-compl />` is an input element that can popup an autocomplete list.
 * Emits a custom event {@link ON_SELECT_EVENT} with the selected item when a selection is made.
 */
export function InputCompl({ name, completions, tabIndex }: InputComplProps) {
  const inputRef = useRef<HTMLInputElement>();
  const popupRef = useRef<HTMLDivElement>();
  const selRef = useRef<HTMLDivElement>();

  const [state, dispatch] = useReducer(reducer, {
    candidates: [],
    completions: completions ?? [],
    name: name,
    onSelect: (itemKey: Item[0]) => inputRef.current?.dispatchEvent(createEvent(itemKey)),
    query: "",
    selected: 0,
    showPopup: false,
  });

  useEffect(() => {
    dispatch({ kind: "update", state: { completions: completions ?? [], name: name } });
  }, [completions, name]);

  useEffect(() => {
    alignPopup(inputRef.current, popupRef.current);
    selRef.current?.scrollIntoView({ block: "nearest" });
  });

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = state.query;
  }, [state.query]);

  return (
    <>
      <input
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
        tabIndex={tabIndex}
        type="search"
      />
      <div
        class={`popup ${state.candidates.length > 0 && state.showPopup ? "" : "hidden"}`}
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
            {state.completions[value][1]}
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

/** The selected item will be emitted on a CustomEvent with this name. */
export const ON_SELECT_EVENT = "input-compl:select";

/** Creates a {@link ON_SELECT_EVENT} CustomEvent to inform an item has been selected. */
export function createEvent(itemKey: unknown): CustomEvent {
  return new CustomEvent(ON_SELECT_EVENT, { detail: itemKey, bubbles: true, composed: true });
}

register(InputCompl, "input-compl", ["name", "completions"]);
