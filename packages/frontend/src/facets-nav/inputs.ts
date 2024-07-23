import type { PlangFilters } from "@plangs/plangs/filters";
import type { InputSelElement } from "../input-sel";
import { $ } from "../utils";

const INPUTS = {
  // General
  plangName: $<HTMLInputElement>("input[name=plang-name]"),
  hasReleases: $<HTMLInputElement>("input[name=has-releases]"),
  releaseMinDate: $<HTMLInputElement>("input[name=release-min-date]"),

  // Type System
  typeSystem: $<InputSelElement>("input-sel[name=type-system]"),

  // Paradigm
  paradigm: $<InputSelElement>("input-sel[name=paradigm]"),

  // Platform
  platform: $<InputSelElement>("input-sel[name=platform]"),

  // Lineage
  influencedBy: $<InputSelElement>("input-sel[name=influenced-by]"),
  dialectOf: $<InputSelElement>("input-sel[name=dialect-of]"),
  implements: $<InputSelElement>("input-sel[name=implements]"),

  influenced: $<InputSelElement>("input-sel[name=influenced]"),
  standardFor: $<InputSelElement>("input-sel[name=standard-for]"),
  implementedWith: $<InputSelElement>("input-sel[name=implemented-with]"),

  // People
  person: $<InputSelElement>("input-sel[name=person]"),

  // License
  license: $<InputSelElement>("input-sel[name=license]"),

  // Misc
  transpiler: $<HTMLInputElement>("input[name=transpiler]"),
  hasLogo: $<HTMLInputElement>("input[name=has-logo]"),
  hasWebsite: $<HTMLInputElement>("input[name=has-website]"),
  hasWikipedia: $<HTMLInputElement>("input[name=has-wikipedia]"),

  plangExt: $<InputSelElement>("input-sel[name=plang-ext]"),
};

export function getFilters(): PlangFilters {
  return {
    plangName: INPUTS.plangName.value.trim().toLowerCase(),
    hasReleases: INPUTS.hasReleases.checked,
    releaseMinDate: INPUTS.releaseMinDate.value.trim(),

    typeSystems: INPUTS.typeSystem.values(),
    paradigm: INPUTS.paradigm.values(),
    platform: INPUTS.platform.values(),

    influencedBy: INPUTS.influencedBy.values(),
    dialectOf: INPUTS.dialectOf.values(),
    implements: INPUTS.implements.values(),

    influenced: INPUTS.influenced.values(),
    standardFor: INPUTS.standardFor.values(),
    implementedWith: INPUTS.implementedWith.values(),

    people: INPUTS.person.values(),

    licenses: INPUTS.license.values(),

    transpiler: INPUTS.transpiler.checked,
    hasLogo: INPUTS.hasLogo.checked,
    hasWebsite: INPUTS.hasWebsite.checked,
    hasWikipedia: INPUTS.hasWikipedia.checked,

    plangExt: INPUTS.plangExt.values(),
  };
}
