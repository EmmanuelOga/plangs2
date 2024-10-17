import type { Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { setComponentState } from "@plangs/frontend/dispatchable";
import { HOVER_SVG } from "@plangs/frontend/styles";
import { onClickOnEnter, tw } from "@plangs/frontend/utils";

import { isInputToggleElement } from ".";
import { useToggleState } from "./state";

export type InputToggleProps = {
  action: "facets" | "hamburger" | "lights" | "allAny";
  disabled?: boolean;
};

export const TAG_NAME = "input-toggle";
export const PROP_KEYS: (keyof InputToggleProps)[] = ["action", "disabled"];

export function InputToggle({ action, disabled }: InputToggleProps) {
  const self = useRef<HTMLDivElement>();
  const state = useToggleState({ action, disabled });

  useEffect(() => {
    setComponentState(self, isInputToggleElement, state);
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: state is not a dependency since it is a dispatchable.
  useEffect(() => {
    const newval = disabled === undefined ? false : disabled;
    if (newval !== state.data.disabled) {
      state.data.disabled = newval;
      state.dispatch();
    }
  }, [disabled]);

  const toggle = () => {
    if (disabled) return;
    state.toggleMode();
    state.runEffects();
    state.dispatch();
  };

  return (
    <div
      ref={self as Ref<HTMLDivElement>}
      // biome-ignore lint/a11y/noNoninteractiveTabindex: we make it interactive.
      tabIndex={0}
      {...onClickOnEnter(toggle)}
      class={tw("group", "cursor-pointer", !disabled && HOVER_SVG)}>
      {state.icon}
    </div>
  );
}
