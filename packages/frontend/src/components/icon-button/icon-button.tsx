import type { Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { customEvent, send } from "@plangs/frontend/auxiliar/events";
import { HOVER_SVG, tw } from "@plangs/frontend/auxiliar/styles";

import { useRootState } from "@plangs/frontend/auxiliar/dispatchable";
import { useIconButtonState } from "./state";

export type IconButtonProps = {
  action: "facets" | "clearFacets" | "hamburger" | "lights" | "allAny";
  class?: string;
  disabled?: boolean;
  initial?: string;
};

export function IconButton({ action, disabled, initial, class: cssClass }: IconButtonProps) {
  const state = useIconButtonState({ action, disabled, initial });
  const self = useRootState(state);

  // biome-ignore lint/correctness/useExhaustiveDependencies: state is not a dependency since it is a dispatchable.
  useEffect(() => {
    if (!state) return;

    const newval = disabled === undefined ? false : disabled;
    if (newval !== state.disabled) {
      state.disabled = newval;
      state.dispatch();
    }
  }, [disabled]);

  const toggle = () => {
    if (!state) return;

    state.doAction();
    state.runEffects();
    state.dispatch();

    send(self.current, customEvent("icon-button", state.value));
  };

  return (
    <div
      ref={self as Ref<HTMLDivElement>}
      tabIndex={disabled ? undefined : 0}
      {...onClickOnEnter(toggle)}
      class={tw("group", "cursor-pointer", !disabled && HOVER_SVG, cssClass)}>
      {state?.icon}
    </div>
  );
}
