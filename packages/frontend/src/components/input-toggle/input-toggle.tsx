import { useDispatchable } from "@plangs/frontend/dispatchable";

import { HOVER_SVG } from "@plangs/frontend/styles";
import { onClickOnEnter, tw } from "@plangs/frontend/utils";
import { useEffect } from "preact/hooks";
import { ToggleFacetMode, ToggleFacets, ToggleHamburguer, ToggleLights } from "./state";

export const TAG_NAME = "input-toggle";

export type InputToggleProps = {
  action: "facets" | "hamburger" | "lights" | "allAny";
  disabled?: boolean;
};

const ACTION_STATE = {
  lights: (disabled?: boolean) => useDispatchable(ToggleLights.initial(disabled)),
  hamburger: (disabled?: boolean) => useDispatchable(ToggleHamburguer.initial(disabled)),
  facets: (disabled?: boolean) => useDispatchable(ToggleFacets.initial(disabled)),
  allAny: (disabled?: boolean) => useDispatchable(ToggleFacetMode.initial(disabled)),
} as const;

export function InputToggle({ action, disabled }: InputToggleProps) {
  const state = ACTION_STATE[action](disabled === undefined ? false : disabled);

  const toggle = () => {
    if (disabled) return;
    state.toggleMode();
    state.runEffects();
    state.dispatch();
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: state is not a dependency since it is a dispatchable.
  useEffect(() => {
    const newval = disabled === undefined ? false : disabled;
    if (newval !== state.data.disabled) {
      state.data.disabled = newval;
      state.dispatch();
    }
  }, [disabled]);

  return (
    <div
      // biome-ignore lint/a11y/noNoninteractiveTabindex: we make it interactive.
      tabIndex={0}
      {...onClickOnEnter(toggle)}
      class={tw("group", "cursor-pointer", !disabled && HOVER_SVG)}>
      {state.icon}
    </div>
  );
}

export const EVENTS = {} as const;
