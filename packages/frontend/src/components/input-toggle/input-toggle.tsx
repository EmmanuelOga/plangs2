import { useDispatchable } from "@plangs/frontend/dispatchable";

import { ToggleFilters, ToggleHamburguer, ToggleLights } from "./state";

export const TAG_NAME = "input-toggle";

export type InputToggleProps = {
  action: "filters" | "hamburger" | "lights";
};

const ACTION_STATE = {
  lights: () => useDispatchable(ToggleLights.initial()),
  hamburger: () => useDispatchable(ToggleHamburguer.initial()),
  filters: () => useDispatchable(ToggleFilters.initial()),
} as const;

/** Display a PL information, if the key is known. */
export function InputToggle({ action }: InputToggleProps) {
  const state = ACTION_STATE[action]();
  return (
    <div class="text-primary" onClick={() => state.toggle()} onKeyDown={({ key }) => state.toggle(key)}>
      {state.icon}
    </div>
  );
}

export const EVENTS = {} as const;
