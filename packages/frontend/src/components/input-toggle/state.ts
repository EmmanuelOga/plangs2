import { Dispatchable } from "@plangs/frontend/dispatchable";
import { elem } from "@plangs/server/elements";

import { CLOSE, FILTER, MENU, MOON, SUN } from "./icons";

export class ToggleLights extends Dispatchable<{ mode: "dark" | "light" }> {
  static initial() {
    return new ToggleLights({ mode: localStorage.getItem("lightMode") === "dark" ? "dark" : "light" });
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

  sideEffects() {
    document.body.classList.toggle("dark", this.isDark);
    localStorage.setItem("lightMode", this.data.mode);
  }

  toggle(key?: string) {
    if (key !== undefined && key !== "Enter") return;
    this.toggleMode();
    this.sideEffects();
    this.dispatch();
  }
}

export class ToggleHamburguer extends Dispatchable<{ mode: "show" | "hide" }> {
  static initial() {
    return new ToggleHamburguer({ mode: localStorage.getItem("hamburguer") === "show" ? "show" : "hide" });
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

  sideEffects() {
    elem("mainNav")?.classList.toggle("hidden", this.hide);
    localStorage.setItem("hamburguer", this.data.mode);
  }

  toggle(key?: string) {
    if (key !== undefined && key !== "Enter") return;
    this.toggleMode();
    this.sideEffects();
    this.dispatch();
  }
}

export class ToggleFilters extends Dispatchable<{ mode: "show" | "hide" }> {
  static initial() {
    return new ToggleFilters({ mode: localStorage.getItem("filters") === "show" ? "show" : "hide" });
  }

  get icon() {
    return FILTER;
  }

  toggle(key?: string) {
    if (key !== undefined && key !== "Enter") return;
    console.log("TODO");
  }
}
