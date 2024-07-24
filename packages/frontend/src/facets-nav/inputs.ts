import type { PlangFilters } from "@plangs/plangs/filters";

import type { InputSelElement } from "../input-sel";
import { $ } from "../utils";

const INPUTS = {
  dialectOf: $<InputSelElement>("input-sel[name=dialect-of]"),
  hasLogo: $<HTMLInputElement>("input[name=has-logo]"),
  hasReleases: $<HTMLInputElement>("input[name=has-releases]"),
  hasWebsite: $<HTMLInputElement>("input[name=has-website]"),
  hasWikipedia: $<HTMLInputElement>("input[name=has-wikipedia]"),
  implementedWith: $<InputSelElement>("input-sel[name=implemented-with]"),
  implements: $<InputSelElement>("input-sel[name=implements]"),
  influenced: $<InputSelElement>("input-sel[name=influenced]"),
  influencedBy: $<InputSelElement>("input-sel[name=influenced-by]"),
  license: $<InputSelElement>("input-sel[name=license]"),
  paradigm: $<InputSelElement>("input-sel[name=paradigm]"),
  person: $<InputSelElement>("input-sel[name=person]"),
  plangExt: $<InputSelElement>("input-sel[name=plang-ext]"),
  plangName: $<HTMLInputElement>("input[name=plang-name]"),
  platform: $<InputSelElement>("input-sel[name=platform]"),
  releaseMinDate: $<HTMLInputElement>("input[name=release-min-date]"),
  standardFor: $<InputSelElement>("input-sel[name=standard-for]"),
  transpiler: $<HTMLInputElement>("input[name=transpiler]"),
  typeSystem: $<InputSelElement>("input-sel[name=type-system]"),
};

/** Every input element must exist for the nav to work. */
export function checkInputs(): "valid" | "invalid" {
  for (const [key, value] of Object.keys(INPUTS)) {
    if (!value) {
      console.warn("Missing input for", key);
      return "invalid";
    }
  }
  return "valid";
}

type NonNull<T> = {
  [K in keyof T]: NonNullable<T[K]>;
};

export function getFilters(): PlangFilters {
  const inputs = INPUTS as NonNull<typeof INPUTS>;
  return {
    dialectOf: inputs.dialectOf.values(),
    hasLogo: inputs.hasLogo.checked,
    hasReleases: inputs.hasReleases.checked,
    hasWebsite: inputs.hasWebsite.checked,
    hasWikipedia: inputs.hasWikipedia.checked,
    implementedWith: inputs.implementedWith.values(),
    implements: inputs.implements.values(),
    influenced: inputs.influenced.values(),
    influencedBy: inputs.influencedBy.values(),
    licenses: inputs.license.values(),
    paradigm: inputs.paradigm.values(),
    people: inputs.person.values(),
    plangExt: inputs.plangExt.values(),
    plangName: inputs.plangName.value.trim().toLowerCase(),
    platform: inputs.platform.values(),
    releaseMinDate: inputs.releaseMinDate.value.trim(),
    standardFor: inputs.standardFor.values(),
    transpiler: inputs.transpiler.checked,
    typeSystems: inputs.typeSystem.values(),
  };
}
