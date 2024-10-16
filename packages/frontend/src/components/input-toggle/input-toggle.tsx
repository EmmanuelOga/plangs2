import { useDispatchable } from "@plangs/frontend/dispatchable";

import { HOVER_SVG } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import { ToggleFacetMode, ToggleFacets, ToggleHamburguer, ToggleLights } from "./state";

export const TAG_NAME = "input-toggle";

export type InputToggleProps = {
  action: "facets" | "hamburger" | "lights" | "allAny";
};

const ACTION_STATE = {
  lights: () => useDispatchable(ToggleLights.initial()),
  hamburger: () => useDispatchable(ToggleHamburguer.initial()),
  facets: () => useDispatchable(ToggleFacets.initial()),
  allAny: () => useDispatchable(ToggleFacetMode.initial()),
} as const;

export function InputToggle({ action }: InputToggleProps) {
  const state = ACTION_STATE[action]();

  const toggle = (key?: string) => {
    if (key !== undefined && key !== "Enter") return;
    state.toggleMode();
    state.runEffects();
    state.dispatch();
  };

  return (
    <div onClick={() => toggle()} onKeyDown={({ key }) => toggle(key)} class={tw("group", "cursor-pointer", HOVER_SVG)}>
      {state.icon}
    </div>
  );
}

export const EVENTS = {} as const;
