import { Dispatchable, useDispatchable } from "@plangs/frontend/dispatchable";
import { BOOLEAN, CLOSE, FILTER, FILTER_EDIT, FULLCIRCLE, MENU, MOON, SUN } from "@plangs/frontend/icons";
import { tw } from "@plangs/frontend/utils";
import { elem } from "@plangs/server/elements";

import type { InputToggleProps } from "./input-toggle";

export type InputToggleState = ToggleDummy | ToggleLights | ToggleHamburguer | ToggleFacets | ToggleFacetMode;

export function useToggleState({ action, disabled, initial }: InputToggleProps): InputToggleState {
  if (action === "lights") return useDispatchable(ToggleLights.initial(disabled));
  if (action === "hamburger") return useDispatchable(ToggleHamburguer.initial(disabled));
  if (action === "facets") return useDispatchable(ToggleFacets.initial(disabled));
  if (action === "allAny") return useDispatchable(ToggleFacetMode.initial(initial, disabled));
  console.error(`Unknown action: ${action}`);
  return useDispatchable(ToggleDummy.initial(disabled));
}

/** Dummy state for when the action is missing. */
export class ToggleDummy extends Dispatchable<Record<string, never>> {
  static initial(disabled: boolean | undefined) {
    return new ToggleDummy({});
  }
  get icon() {
    return FULLCIRCLE;
  }
  toggleMode() {}
  runEffects() {}
}

export class ToggleLights extends Dispatchable<{ mode: "dark" | "light"; disabled: boolean }> {
  static initial(disabled = false) {
    return new ToggleLights({ mode: localStorage.getItem("lightMode") === "dark" ? "dark" : "light", disabled });
  }

  get isDark(): boolean {
    return this.data.mode === "dark";
  }

  get icon() {
    return this.isDark ? SUN : MOON;
  }

  toggleMode() {
    this.data.mode = this.isDark ? "light" : "dark";
  }

  runEffects() {
    document.body.classList.toggle("dark", this.isDark);
    localStorage.setItem("lightMode", this.data.mode);
  }
}

export class ToggleHamburguer extends Dispatchable<{ mode: "show" | "hide"; disabled: boolean }> {
  static initial(disabled = false) {
    return new ToggleHamburguer({ mode: localStorage.getItem("hamburguer") === "show" ? "show" : "hide", disabled });
  }

  get hide(): boolean {
    return this.data.mode === "hide";
  }

  get icon() {
    return this.hide ? MENU : CLOSE;
  }

  toggleMode() {
    this.data.mode = this.hide ? "show" : "hide";
  }

  runEffects() {
    elem("mainNav")?.classList.toggle("hidden", this.hide);
    localStorage.setItem("hamburguer", this.data.mode);
  }
}

export class ToggleFacets extends Dispatchable<{ mode: "show" | "hide"; disabled: boolean }> {
  static initial(disabled = false) {
    return new ToggleFacets({ mode: localStorage.getItem("facets") === "show" ? "show" : "hide", disabled });
  }

  get show(): boolean {
    return this.data.mode === "show";
  }

  get icon() {
    return <span class={tw("inline-block", "mt-[1px] scale-85", this.show ? "text-hiliteb" : "text-primary")}>{FILTER_EDIT}</span>;
  }

  toggleMode() {
    this.data.mode = this.show ? "hide" : "show";
  }

  runEffects() {
    elem("facets")?.classList.toggle("hidden", !this.show);
    localStorage.setItem("facets", this.data.mode);
  }
}

export class ToggleFacetMode extends Dispatchable<{ mode: "all" | "any"; disabled: boolean }> {
  static initial(initial: string | undefined, disabled = false) {
    return new ToggleFacetMode({ mode: initial === "all" ? "all" : "any", disabled });
  }

  get mode(): "all" | "any" {
    return this.data.mode;
  }

  get icon() {
    const disabled = this.data.disabled;

    const shadeAll = disabled || this.mode === "any";
    const shadeAny = disabled || this.mode === "all";

    return (
      <span class={tw("flex flex-row gap-1", "items-center")}>
        <span class={tw(shadeAll && "opacity-50", !disabled && "group-hover:text-hiliteb")}>All</span>
        <span class={tw("inline-block", "mt-[1px]", "scale-85", this.mode === "all" && "rotate-180")}>{BOOLEAN}</span>
        <span class={tw(shadeAny && "opacity-50", !disabled && "group-hover:text-hiliteb")}>Any</span>
      </span>
    );
  }

  toggleMode() {
    this.data.mode = this.mode === "all" ? "any" : "all";
  }

  runEffects() {
    // Nothing for now.
  }
}
