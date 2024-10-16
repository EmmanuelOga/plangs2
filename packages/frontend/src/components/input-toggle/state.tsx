import { Dispatchable } from "@plangs/frontend/dispatchable";
import { elem } from "@plangs/server/elements";

import { tw } from "@plangs/frontend/utils";
import { BOOLEAN, CLOSE, FILTER, FILTER_EDIT, MENU, MOON, SUN } from "../../icons";

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

export class ToggleFacets extends Dispatchable<{ mode: "show" | "hide" }> {
  static initial() {
    return new ToggleFacets({ mode: localStorage.getItem("facets") === "show" ? "show" : "hide" });
  }

  get show(): boolean {
    return this.data.mode === "show";
  }

  get icon() {
    return this.show ? FILTER : FILTER_EDIT;
  }

  toggleMode() {
    this.data.mode = this.show ? "hide" : "show";
  }

  runEffects() {
    elem("facets")?.classList.toggle("hidden", !this.show);
    localStorage.setItem("facets", this.data.mode);
  }
}

export class ToggleFacetMode extends Dispatchable<{ mode: "all" | "any" }> {
  static initial() {
    return new ToggleFacetMode({ mode: "any" });
  }

  get mode(): "all" | "any" {
    return this.data.mode;
  }

  get icon() {
    return (
      <span class={tw("flex flex-row gap-1", "items-center")}>
        <span class="group-hover:text-hiliteb">All</span>
        <span class={tw("inline-block", "mt-[1px]", "scale-85", this.mode === "any" && "rotate-180")}>{BOOLEAN}</span>
        <span class="group-hover:text-hiliteb">Any</span>
      </span>
    );
  }

  toggleMode() {
    this.data.mode = this.mode === "all" ? "any" : "all";
  }

  runEffects() {
    console.log("TODO");
  }
}
