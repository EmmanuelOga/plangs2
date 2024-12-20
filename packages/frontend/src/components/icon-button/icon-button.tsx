import type { Ref } from "preact";
import { useEffect } from "preact/hooks";

import { useRootState } from "@plangs/frontend/auxiliar/dispatchable";
import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { customEvent, send } from "@plangs/frontend/auxiliar/events";
import { HOVER_ICON, tw } from "@plangs/frontend/auxiliar/styles";

import { useIconButtonState } from "./state";

export type IconButtonProps = {
  action: "facets" | "clearFacets" | "hamburger" | "lights" | "allAny" | "gridOrder";
  disabled?: boolean;
  initial?: string;
};

export function IconButton({ action, disabled, initial }: IconButtonProps) {
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
      class={tw("group", disabled ? "opacity-50" : "cursor-pointer", state?.hilight && "ring-1 ring-primary", action !== "allAny" && HOVER_ICON)}>
      {state?.icon}
    </div>
  );
}
