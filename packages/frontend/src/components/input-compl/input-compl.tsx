import type { Ref } from "preact";
import { useEffect, useReducer, useRef } from "preact/hooks";

import { $, customEvent, on, send, tw } from "../../utils";

import { elem, id } from "@plangs/server/elements";
import { type CompletionItem, type ItemSelected, reducer } from "./reducer";

/** HTML tag name for the CustomElement */
export const TAG_NAME = "input-compl";

export type InputComplProps = {
  name: string;
  class?: string;
  completions?: CompletionItem[];
};

export function InputCompl({ name, class: cssClass, completions }: InputComplProps) {
  const inputRef = useRef<HTMLInputElement>();
  const popupRef = useRef<HTMLDivElement>();
  const selectionRef = useRef<HTMLDivElement>();

  const [state, dispatch] = useReducer(reducer, {
    candidates: [],
    completions: [],
    name: name,
    cssClass: cssClass,
    query: "",
    selected: 0,
    showPopup: false,
    onSelect: (data: ItemSelected) => send(inputRef.current, EVENTS.outSelect.create(data)),
  });

  useEffect(() => {
    dispatch({ kind: "update", state: { completions: completions ?? [], name, cssClass } });
  }, [completions, cssClass, name]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = state.query;
  }, [state.query]);

  const makeSelVisible = () => selectionRef.current?.scrollIntoView({ block: "nearest" });
  const tweakPopupWidth = () => {
    if (popupRef.current && inputRef.current) {
      popupRef.current.style.width = `${inputRef.current.getBoundingClientRect().width}px`;
    }
  };

  useEffect(() => {
    makeSelVisible();
    tweakPopupWidth();

    // Adjust the popup position in relation to the filters container.
    const container = elem("filters");
    return on(container, "scroll", ev => {
      if (!popupRef.current || !inputRef.current || !container) return;
      popupRef.current.style.width = `${inputRef.current.getBoundingClientRect().width}px`;
      popupRef.current.style.top = `${inputRef.current.getBoundingClientRect().bottom}px`;
    });
  });

  const showPopup = state.candidates.length > 0 && state.showPopup;

  return (
    <>
      <input
        ref={inputRef as Ref<HTMLInputElement>}
        class={tw(showPopup && "focused", "relative block", state.cssClass)}
        autocomplete="off"
        name={name}
        onBlur={({ relatedTarget }) => {
          if (relatedTarget === popupRef.current) return;
          dispatch({ kind: "popup", show: false });
        }}
        onClick={() => dispatch({ kind: "popup", show: true })}
        onInput={() => dispatch({ kind: "updateQuery", query: inputRef.current?.value ?? "" })}
        onKeyDown={({ key }) => dispatch({ kind: "keypress", from: "input", key })}
        placeholder="Search"
        tabIndex={0}
        type="search"
      />
      <div
        ref={popupRef as Ref<HTMLDivElement>}
        class={tw(
          "absolute z-20",
          "mt-1 max-h-80 p-1",
          showPopup || "hidden",
          "overflow-y-auto overflow-x-hidden",
          "border-1 border-solid",
          "bg-[white] text-[#333]",
        )}
        onBlur={({ relatedTarget }) => {
          if (relatedTarget === inputRef.current) return;
          dispatch({ kind: "popup", show: false });
        }}
        onKeyDown={({ key }) => dispatch({ kind: "keypress", from: "list", key })}
        tabindex={0}>
        {state.candidates.map((complIdx, idx) => (
          <div
            ref={(idx === state.selected ? selectionRef : undefined) as Ref<HTMLDivElement>}
            class={tw("min-w-[8rem]", idx === state.selected && "bg-primary", "cursor-pointer")}
            key={state.completions[complIdx].value}
            onClick={() => dispatch({ kind: "selectIndex", index: idx })}
            onDblClick={() => dispatch({ kind: "keypress", from: "item", key: "Enter" })}
            onKeyDown={({ key }) => dispatch({ kind: "keypress", from: "item", key })}>
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
} as const;
