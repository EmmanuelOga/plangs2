import type { InputSelElement } from "../input-sel";
import { $, $$ } from "../utils";

const INPUTS = {
  // General
  plangName: $<HTMLInputElement>("input[name=plang-name]"),
  hasReleases: $<HTMLInputElement>("input[name=has-releases]"),
  releaseMinDate: $<HTMLInputElement>("input[name=release-min-date]"),

  // Type System
  typeSystem: $$<HTMLInputElement>("input[name=type-system]"),

  // Paradigm
  paradigm: $$<HTMLInputElement>("input[name=paradigm]"),

  // Platform
  platform: $$<HTMLInputElement>("input[name=platform]"),

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
  license: $$<HTMLInputElement>("input[name=license]"),

  // Misc
  transpiler: $<HTMLInputElement>("input[name=transpiler]"),
  hasLogo: $<HTMLInputElement>("input[name=has-logo]"),
  hasWebsite: $<HTMLInputElement>("input[name=has-website]"),
  hasWikipedia: $<HTMLInputElement>("input[name=has-wikipedia]"),

  plangExt: $<InputSelElement>("input-sel[name=plang-ext]"),
};

/** State of the Nav Browser / Facets. */
export type NavState = {
  plangName: string;
  hasReleases: boolean;
  releaseMinDate: string;
  typeSystems: string[];
  paradigm: string[];
  platform: string[];
  influencedBy: string[];
  dialectOf: string[];
  implements: string[];
  influenced: string[];
  standardFor: string[];
  implementedWith: string[];
  people: string[];
  licenses: string[];
  transpiler: boolean;
  hasLogo: boolean;
  hasWebsite: boolean;
  hasWikipedia: boolean;
  plangExt: string[];
}

export function getNavState(): NavState  {
  return {
    plangName: INPUTS.plangName.value,
    hasReleases: INPUTS.hasReleases.checked,
    releaseMinDate: INPUTS.releaseMinDate.value,

    typeSystems: INPUTS.typeSystem.filter((el) => el.checked).map((el) => el.value),
    paradigm: INPUTS.paradigm.filter((el) => el.checked).map((el) => el.value),
    platform: INPUTS.platform.filter((el) => el.checked).map((el) => el.value),

    influencedBy: INPUTS.influencedBy.values(),
    dialectOf: INPUTS.dialectOf.values(),
    implements: INPUTS.implements.values(),

    influenced: INPUTS.influenced.values(),
    standardFor: INPUTS.standardFor.values(),
    implementedWith: INPUTS.implementedWith.values(),

    people: INPUTS.person.values(),

    licenses: INPUTS.license.filter((el) => el.checked).map((el) => el.value),

    transpiler: INPUTS.transpiler.checked,
    hasLogo: INPUTS.hasLogo.checked,
    hasWebsite: INPUTS.hasWebsite.checked,
    hasWikipedia: INPUTS.hasWikipedia.checked,

    plangExt: INPUTS.plangExt.values(),
  };
}
