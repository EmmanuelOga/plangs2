import type { ComponentChildren, Ref } from "preact";
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
    if (!state || state.disabled) return;

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
      class={tw(
        "group",
        disabled ? "cursor-auto opacity-50" : "cursor-pointer",
        "border-1 border-dotted",
        state?.hilight ? "border-primary" : "border-transparent",
        action !== "allAny" && HOVER_ICON,
        state?.hidden && "invisible",
      )}>
      {state?.icon}
    </div>
  );
}

/**
 * Simple wrapper to make any icon look like an icon button.
 * TODO: would be better to use the very same markup as IconButton.
 */
export function IconWrapper({ children }: { children: ComponentChildren }) {
  return <div class={tw("group", "cursor-pointer", "border-1 border-dotted", "border-transparent", HOVER_ICON)}>{children}</div>;
}
