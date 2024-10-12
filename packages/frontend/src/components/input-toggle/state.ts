import { Dispatchable } from "@plangs/frontend/dispatchable";
import { elem } from "@plangs/server/elements";

import { CLOSE, FILTER_CLOSE, FILTER_EDIT, MENU, MOON, SUN } from "../../icons";

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

  runEffects() {
    document.body.classList.toggle("dark", this.isDark);
    localStorage.setItem("lightMode", this.data.mode);
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

  runEffects() {
    elem("mainNav")?.classList.toggle("hidden", this.hide);
    localStorage.setItem("hamburguer", this.data.mode);
  }
}

export class ToggleFilters extends Dispatchable<{ mode: "show" | "hide" }> {
  static initial() {
    return new ToggleFilters({ mode: localStorage.getItem("filters") === "show" ? "show" : "hide" });
  }

  get show(): boolean {
    return this.data.mode === "show";
  }

  get icon() {
    return this.show ? FILTER_CLOSE : FILTER_EDIT;
  }

  toggleMode() {
    this.data.mode = this.show ? "hide" : "show";
  }

  runEffects() {
    elem("filters")?.classList.toggle("hidden", !this.show);
    localStorage.setItem("filters", this.data.mode);
  }
}
