import type { Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { setComponentState } from "@plangs/frontend/dispatchable";
import { HOVER_SVG } from "@plangs/frontend/styles";
import { customEvent, onClickOnEnter, send, tw } from "@plangs/frontend/utils";

import { isInputToggleElement } from ".";
import { useToggleState } from "./state";

export type InputToggleProps = {
  action: "facets" | "hamburger" | "lights" | "allAny";
  disabled?: boolean;
  /** An initial value for the toggle button. */
  initial?: string;
  class?: string;
};

export const TAG_NAME = "input-toggle";
export const PROP_KEYS: (keyof InputToggleProps)[] = ["action", "disabled"];

export function InputToggle({ action, disabled, initial, class: cssClass }: InputToggleProps) {
  const self = useRef<HTMLDivElement>();
  const state = useToggleState({ action, disabled, initial });

  useEffect(() => {
    setComponentState(self, isInputToggleElement, state);
  });

  // biome-ignore lint/correctness/useExhaustiveDependencies: state is not a dependency since it is a dispatchable.
  useEffect(() => {
    const newval = disabled === undefined ? false : disabled;
    if (newval !== state.disabled) {
      state.disabled = newval;
      state.dispatch();
    }
  }, [disabled]);

  const toggle = () => {
    if (disabled) return;

    state.toggleMode();
    state.runEffects();
    state.dispatch();

    send(self.current, customEvent(TAG_NAME, state.value));
  };

  return (
    <div
      ref={self as Ref<HTMLDivElement>}
      tabIndex={disabled ? undefined : 0}
      {...onClickOnEnter(toggle)}
      class={tw("group", "cursor-pointer", !disabled && HOVER_SVG, cssClass)}>
      {state.icon}
    </div>
  );
}
