import type { ComponentChild } from "preact";

import { Dispatchable, useDispatchable } from "@plangs/frontend/dispatchable";
import { BOOLEAN, CLOSE, FILTER_EDIT, FULLCIRCLE, MENU, MOON, SUN } from "@plangs/frontend/icons";
import { tw } from "@plangs/frontend/utils";
import { elem } from "@plangs/server/elements";

import type { InputToggleProps } from "./input-toggle";

export type InputToggleState = ToggleLights | ToggleHamburguer | ToggleFacets | ToggleFacetMode | ToggleDummy;

export function useToggleState({ action, disabled, initial }: InputToggleProps): InputToggleState {
  if (action === "lights") return useDispatchable(ToggleLights.initial(disabled));
  if (action === "hamburger") return useDispatchable(ToggleHamburguer.initial(disabled));
  if (action === "facets") return useDispatchable(ToggleFacets.initial(disabled));
  if (action === "allAny") return useDispatchable(ToggleFacetMode.initial(initial, disabled));
  console.error(`Unknown action: ${action}`);
  return useDispatchable(ToggleDummy.initial(disabled));
}

abstract class ToggleState<T> extends Dispatchable<T & { disabled: boolean }> {
  abstract toggleMode(): void;

  /** Side effects handler, if any. */
  abstract runEffects(): void;

  abstract get icon(): ComponentChild;

  get disabled(): boolean {
    return this.data.disabled;
  }

  set disabled(value: boolean) {
    this.data.disabled = value;
  }

  get value() {
    const { disabled, ...data } = this.data;
    return data;
  }
}

/** Dummy state for when the action is missing. */
// biome-ignore lint/complexity/noBannedTypes: Empty type here is OK, we don't need additional data for the dummy state.
export class ToggleDummy extends ToggleState<{}> {
  static initial(disabled: boolean | undefined) {
    return new ToggleDummy({ disabled: disabled ?? false });
  }

  override toggleMode() {}
  override runEffects() {}

  override get icon() {
    return FULLCIRCLE;
  }
}

export class ToggleLights extends ToggleState<{ mode: "dark" | "light" }> {
  static initial(disabled = false) {
    return new ToggleLights({ mode: localStorage.getItem("lightMode") === "dark" ? "dark" : "light", disabled });
  }

  get isDark(): boolean {
    return this.data.mode === "dark";
  }

  override get icon() {
    return this.isDark ? SUN : MOON;
  }

  override toggleMode() {
    this.data.mode = this.isDark ? "light" : "dark";
  }

  override runEffects() {
    document.body.classList.toggle("dark", this.isDark);
    localStorage.setItem("lightMode", this.data.mode);
  }
}

export class ToggleHamburguer extends ToggleState<{ mode: "show" | "hide" }> {
  static initial(disabled = false) {
    return new ToggleHamburguer({ mode: localStorage.getItem("hamburguer") === "show" ? "show" : "hide", disabled });
  }

  get hide(): boolean {
    return this.data.mode === "hide";
  }

  override get icon() {
    return this.hide ? MENU : CLOSE;
  }

  override toggleMode() {
    this.data.mode = this.hide ? "show" : "hide";
  }

  override runEffects() {
    elem("mainNav")?.classList.toggle("hidden", this.hide);
    localStorage.setItem("hamburguer", this.data.mode);
  }
}

export class ToggleFacets extends ToggleState<{ mode: "show" | "hide" }> {
  static initial(disabled = false) {
    return new ToggleFacets({ mode: localStorage.getItem("facets") === "show" ? "show" : "hide", disabled });
  }

  get show(): boolean {
    return this.data.mode === "show";
  }

  override get icon() {
    return <span class={tw("inline-block", "mt-[1px] scale-85", this.show ? "text-hiliteb" : "text-primary")}>{FILTER_EDIT}</span>;
  }

  override toggleMode() {
    this.data.mode = this.show ? "hide" : "show";
  }

  override runEffects() {
    elem("facets")?.classList.toggle("hidden", !this.show);
    localStorage.setItem("facets", this.data.mode);
  }
}

export class ToggleFacetMode extends ToggleState<{ mode: "all" | "any" }> {
  static initial(initial: string | undefined, disabled = false) {
    return new ToggleFacetMode({ mode: initial === "all" ? "all" : "any", disabled });
  }

  get mode(): "all" | "any" {
    return this.data.mode;
  }

  override get icon() {
    const disabled = this.data.disabled;

    const shadeAll = disabled || this.mode === "any";
    const shadeAny = disabled || this.mode === "all";

    return (
      <span class={tw("flex flex-row gap-1", "items-center")}>
        <span class={tw(shadeAll && "opacity-50", !disabled && "group-hover:text-hiliteb")}>All of</span>
        <span class={tw("inline-block", "mt-[1px]", "scale-85", this.mode === "all" && "rotate-180")}>{BOOLEAN}</span>
        <span class={tw(shadeAny && "opacity-50", !disabled && "group-hover:text-hiliteb")}>Any of</span>
      </span>
    );
  }

  override toggleMode() {
    this.data.mode = this.mode === "all" ? "any" : "all";
  }

  override runEffects() {
    // nada.
  }
}
