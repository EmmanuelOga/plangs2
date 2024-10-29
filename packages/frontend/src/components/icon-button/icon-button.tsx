import type { Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { HOVER_SVG } from "@plangs/frontend/auxiliar/styles";
import { customEvent, onClickOnEnter, send, tw } from "@plangs/frontend/auxiliar/utils";

import { useIconButtonState } from "./state";

export type IconButtonProps = {
  action: "facets" | "hamburger" | "lights" | "allAny";
  class?: string;
  disabled?: boolean;
  initial?: string;
};

export function IconButton({ action, disabled, initial, class: cssClass }: IconButtonProps) {
  const self = useRef<HTMLDivElement>();
  const state = useIconButtonState({ action, disabled, initial });

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
      {state.icon}
    </div>
  );
}
