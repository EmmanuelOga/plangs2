import type { ComponentChild } from "preact";

import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { elem, elems } from "@plangs/frontend/auxiliar/dom";
import { BOOLEAN, CLOSE, DESELECT, FILTER_CLOSE, FILTER_EDIT, FULLCIRCLE, MENU, MOON, SUN } from "@plangs/frontend/auxiliar/icons";
import { tw } from "@plangs/frontend/auxiliar/styles";

import type { FacetsMainElement } from "../facets/main";
import type { IconButtonProps } from "./icon-button";

export type IconButtonState = ToggleLights | ToggleHamburguer | ToggleFacetsMenu | ToggleAllAny | ToggleClearFacets | undefined;

export function useIconButtonState({ action, disabled, initial }: IconButtonProps): IconButtonState {
  if (action === "lights") return useDispatchable(() => ToggleLights.initial(disabled));
  if (action === "hamburger") return useDispatchable(() => ToggleHamburguer.initial(disabled));
  if (action === "facets") return useDispatchable(() => ToggleFacetsMenu.initial(disabled));
  if (action === "allAny") return useDispatchable(() => ToggleAllAny.initial(initial, disabled));
  if (action === "clearFacets") return useDispatchable(() => ToggleClearFacets.initial(disabled));
  console.error(`Unknown action: ${action}`);
}

abstract class IconButtonBaseState<T> extends Dispatchable<T & { disabled: boolean }> {
  abstract doAction(): void;

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

/** State for a dark/ligh mode button */
export class ToggleLights extends IconButtonBaseState<{ mode: "dark" | "light" }> {
  static initial(disabled = false) {
    return new ToggleLights({ mode: localStorage.getItem("lightMode") === "dark" ? "dark" : "light", disabled });
  }

  get isDark(): boolean {
    return this.data.mode === "dark";
  }

  override get icon() {
    return this.isDark ? SUN : MOON;
  }

  override doAction() {
    this.data.mode = this.isDark ? "light" : "dark";
  }

  override runEffects() {
    document.body.classList.toggle("dark", this.isDark);
    localStorage.setItem("lightMode", this.data.mode);
  }
}

/** State for a "hamburguer" menu. */
export class ToggleHamburguer extends IconButtonBaseState<{ mode: "show" | "hide" }> {
  static initial(disabled = false) {
    return new ToggleHamburguer({ mode: localStorage.getItem("hamburguer") === "show" ? "show" : "hide", disabled });
  }

  get hide(): boolean {
    return this.data.mode === "hide";
  }

  override get icon() {
    return this.hide ? MENU : CLOSE;
  }

  override doAction() {
    this.data.mode = this.hide ? "show" : "hide";
  }

  override runEffects() {
    elem("mainNav")?.classList.toggle("hidden", this.hide);
    localStorage.setItem("hamburguer", this.data.mode);
  }
}

/** State for the facets menu. */
export class ToggleFacetsMenu extends IconButtonBaseState<{ mode: "show" | "hide" }> {
  static initial(disabled = false) {
    return new ToggleFacetsMenu({ mode: localStorage.getItem("facets") === "show" ? "show" : "hide", disabled });
  }

  get show(): boolean {
    return this.data.mode === "show";
  }

  override get icon() {
    return (
      <span
        class={tw(
          "inline-block",
          "mt-[6px] scale-85",
          this.show && "stroke-[1px] stroke-foreground/50",
          this.show ? "text-hiliteb" : "text-primary",
          // fmt.
        )}>
        {FILTER_EDIT}
      </span>
    );
  }

  override doAction() {
    this.data.mode = this.show ? "hide" : "show";
  }

  override runEffects() {
    const fm = elems("facetsMain");
    if (fm.length > 0) fm[0].classList.toggle("hidden", !this.show);
    localStorage.setItem("facets", this.data.mode);
  }
}

/** State for toggling between "and" and "all" modes. */
export class ToggleAllAny extends IconButtonBaseState<{ mode: "all" | "any" }> {
  static initial(initial: string | undefined, disabled = false) {
    return new ToggleAllAny({ mode: initial === "all" ? "all" : "any", disabled });
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

  override doAction() {
    this.data.mode = this.mode === "all" ? "any" : "all";
  }

  override runEffects() {
    // nada.
  }
}

/** State for clearing any selection from the facets menu. */
export class ToggleClearFacets extends IconButtonBaseState<{ mode: "clearFacets" | "" }> {
  static initial(disabled = false) {
    return new ToggleClearFacets({ disabled, mode: "" });
  }

  override get icon() {
    return this.data.mode === "clearFacets" ? DESELECT : null;
  }

  override doAction() {
    this.data.mode = "";
  }

  doToggleMode(mode: "clearFacets" | "") {
    this.data.mode = mode;
    this.dispatch();
  }

  override runEffects() {
    for (const el of elems<FacetsMainElement>("facetsMain")) el.state?.doResetAll();
  }
}
