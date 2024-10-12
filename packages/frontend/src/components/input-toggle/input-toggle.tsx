import { useDispatchable } from "@plangs/frontend/dispatchable";

import { tw } from "@plangs/frontend/utils";
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

export function InputToggle({ action }: InputToggleProps) {
  const state = ACTION_STATE[action]();
  return (
    <div class="text-primary" onClick={() => state.toggle()} onKeyDown={({ key }) => state.toggle(key)}>
      <div class={tw("cursor-pointer", "hover:stroke-1 hover:stroke-foreground/75")}>{state.icon}</div>
    </div>
  );
}

export const EVENTS = {} as const;
