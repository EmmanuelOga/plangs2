import type { ComponentChild } from "preact";

import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { data, elem, elems } from "@plangs/frontend/auxiliar/dom";
import { ABC, BOOLEAN, CLOSE, DESELECT, FILTER_EDIT, MENU, MOON, RANKING, SUN } from "@plangs/frontend/auxiliar/icons";
import { HOVER_ICON_BG, tw } from "@plangs/frontend/auxiliar/styles";
import type { FacetsMainElement } from "@plangs/frontend/facets/main";

import { getCurrentPageStore, getStore } from "@plangs/frontend/auxiliar/storage";
import type { IconButtonProps } from "./icon-button";

export type IconButtonState = ToggleLights | ToggleHamburguer | ToggleFacetsMenu | ToggleAllAny | ToggleClearFacets | ToggleGridOrder | undefined;

export function useIconButtonState({ action, disabled, initial }: IconButtonProps): IconButtonState {
  if (action === "lights") return useDispatchable(() => ToggleLights.initial(disabled));
  if (action === "hamburger") return useDispatchable(() => ToggleHamburguer.initial(disabled));
  if (action === "facets") return useDispatchable(() => ToggleFacetsMenu.initial(disabled));
  if (action === "allAny") return useDispatchable(() => ToggleAllAny.initial(initial, disabled));
  if (action === "clearFacets") return useDispatchable(() => ToggleClearFacets.initial(disabled));
  if (action === "gridOrder") return useDispatchable(() => ToggleGridOrder.initial(disabled));
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

  get hidden(): boolean {
    return false;
  }

  get hilight(): boolean {
    return false;
  }
}

const STORE = getStore("_any_page_");

/** State for a dark/ligh mode button */
export class ToggleLights extends IconButtonBaseState<{ mode: "dark" | "light" }> {
  static initial(disabled = false) {
    const theme = STORE.load("theme");
    return new ToggleLights({ mode: theme === "light" ? "light" : "dark", disabled });
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
    STORE.update("theme", this.data.mode);
  }
}

/** State for a "hamburguer" menu. */
export class ToggleHamburguer extends IconButtonBaseState<{ mode: "show" | "hide" }> {
  static initial(disabled = false) {
    const mode = STORE.load("hamburger-menu");
    return new ToggleHamburguer({ mode: mode === "show" ? "show" : "hide", disabled });
  }

  override get hilight(): boolean {
    return !this.hide;
  }

  get hide(): boolean {
    return this.data.mode === "hide";
  }

  override get icon() {
    return MENU;
  }

  override doAction() {
    this.data.mode = this.hide ? "show" : "hide";
  }

  override runEffects() {
    elem("mainNav")?.classList.toggle("hidden", this.hide);
    STORE.update("hamburger-menu", this.data.mode);
  }
}

/** State for the facets menu. */
export class ToggleFacetsMenu extends IconButtonBaseState<{ mode: "show" | "hide" }> {
  static initial(disabled = false) {
    const mode = getCurrentPageStore().load("facets-browser");
    return new ToggleFacetsMenu({ mode: mode === "show" ? "show" : "hide", disabled });
  }

  override get hilight(): boolean {
    return this.show;
  }

  get show(): boolean {
    return this.data.mode === "show";
  }

  override get icon() {
    return FILTER_EDIT;
  }

  override doAction() {
    this.data.mode = this.show ? "hide" : "show";
  }

  override runEffects() {
    const fm = elems("facetsMain");
    if (fm.length > 0) fm[0].classList.toggle("hidden", !this.show);
    getCurrentPageStore().update("facets-browser", this.data.mode);
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
      <span class={tw("px-1", "flex flex-row gap-1", "items-center", "align-middle")}>
        <span class={tw(shadeAll && "opacity-50", "whitespace-nowrap")}>All</span>
        <span class={tw("inline-block", "mt-[1px] px-1", "scale-85", this.mode === "all" && "rotate-180", !disabled && HOVER_ICON_BG)}>
          {BOOLEAN}
        </span>
        <span class={tw(shadeAny && "opacity-50", "whitespace-nowrap")}>Any</span>
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

  override doAction() {
    this.data.mode = "";
  }

  doToggleMode(mode: "clearFacets" | "") {
    this.data.mode = mode;
    this.dispatch();
  }

  override get icon() {
    return DESELECT;
  }

  get hidden(): boolean {
    return this.data.mode === "";
  }

  override runEffects() {
    for (const el of elems<FacetsMainElement>("facetsMain")) el.state?.doResetAll();
  }
}

/** State for toggling order of thumbnails between ranking and alphabetical. */
export class ToggleGridOrder extends IconButtonBaseState<{ mode: "alpha" | "ranking" }> {
  static initial(disabled = false) {
    return new ToggleGridOrder({ disabled, mode: "alpha" });
  }

  get mode(): "alpha" | "ranking" {
    return this.data.mode;
  }

  override get icon() {
    return this.mode === "alpha" ? ABC : RANKING;
  }

  override doAction() {
    this.data.mode = this.mode === "alpha" ? "ranking" : "alpha";
  }

  /** Reorder the grid on dispatch. */
  override runEffects() {
    const grid = elem("vertexGrid");
    if (!grid) return;
    const thumbns = [...elems("vertexThumbn")].sort(CMP[this.mode]);
    for (const thumb of thumbns) {
      grid.appendChild(thumb); // Re-appending without removing just reorders the element.
    }
  }
}

// Ensure languages without a ranking are placed last.
const RANKED_LAST = Number.MAX_SAFE_INTEGER;

const getRank = (el: HTMLElement) => {
  const ranking = data(el, "vertex-ranking");
  return ranking ? Number.parseInt(ranking) : RANKED_LAST;
};

const getKey = (el: HTMLElement) => el.dataset.vertexKey ?? "";

// Ordering criteria for the sort function.
const CMP = {
  ranking: (elA: HTMLElement, elB: HTMLElement) => getRank(elA) - getRank(elB),
  alpha: (elA: HTMLElement, elB: HTMLElement) => getKey(elA).localeCompare(getKey(elB)),
} as const;
