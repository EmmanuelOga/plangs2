import type { INPUTS_MARKUP } from "@plangs/server/pages/browse";
import { PlangFilters } from "@plangs/plangs/filter";
import type { Filter, NLicense, NParadigm, NPlang, NPlatform, NTag, NTypeSystem, StrDate } from "@plangs/plangs";

import type { InputSelElement } from "../input-sel";
import { $ } from "../utils";

const INPUTS: { [K in keyof typeof INPUTS_MARKUP]: HTMLElement | null } = {
  plangName: $("input[name=plang-name]"),

  firstAppearedMinDate: $("input[name=first-appeared-min-date]"),
  releaseMinDate: $("input[name=release-min-date]"),

  hasLogo: $("input[name=has-logo]"),
  hasReleases: $("input[name=has-releases]"),
  hasWikipedia: $("input[name=has-wikipedia]"),
  isMainstream: $("input[name=is-mainstream]"),
  isTranspiler: $("input[name=is-transpiler]"),

  dialectOf: $("input-sel[name=dialect-of]"),
  extensions: $("input-sel[name=extensions]"),
  implements: $("input-sel[name=implements]"),
  influenced: $("input-sel[name=influenced]"),
  influencedBy: $("input-sel[name=influenced-by]"),
  licenses: $("input-sel[name=licenses]"),
  paradigms: $("input-sel[name=paradigms]"),
  platforms: $("input-sel[name=platforms]"),
  tags: $("input-sel[name=type-system]"),
  typeSystems: $("input-sel[name=type-systems]"),
  writtenIn: $("input-sel[name=type-system]"),
};

function map<I, V>(input: I | null, getValue: (input: I) => V, callback: (value: V) => void) {
  if (!input) return;
  const value = getValue(input);
  if (value) callback(value);
}

export function getFilters(): PlangFilters {
  const filters = new PlangFilters();
  const flt = filters.values;

  const trimVal = (input: HTMLInputElement) => input.value.trim();

  map(INPUTS.plangName, trimVal, (val) => (flt.plangName = new RegExp(val, "i")));

  map(INPUTS.firstAppearedMinDate, trimVal, (val) => (flt.firstAppearedMinDate = val as StrDate));
  map(INPUTS.releaseMinDate, trimVal, (val) => (flt.releaseMinDate = val as StrDate));

  const getChecked = (input: HTMLInputElement) => input.checked;

  map(INPUTS.hasLogo, getChecked, (val) => (flt.hasLogo = val));
  map(INPUTS.hasReleases, getChecked, (val) => (flt.hasReleases = val));
  map(INPUTS.hasWikipedia, getChecked, (val) => (flt.hasWikipedia = val));
  map(INPUTS.isTranspiler, getChecked, (val) => (flt.isTranspiler = val));
  map(INPUTS.isMainstream, getChecked, (val) => (flt.isMainstream = val));

  const getSelection = (input: InputSelElement) => input.values();

  type F<T extends { key: string }> = Filter<T["key"]>;

  map(INPUTS.dialectOf, getSelection, (val) => (flt.dialectOf = val as F<NPlang>));
  map(INPUTS.extensions, getSelection, (val) => (flt.extensions = val as F<NPlang>));
  map(INPUTS.implements, getSelection, (val) => (flt.implements = val as F<NPlang>));
  map(INPUTS.influenced, getSelection, (val) => (flt.influenced = val as F<NPlang>));
  map(INPUTS.influencedBy, getSelection, (val) => (flt.influencedBy = val as F<NPlang>));
  map(INPUTS.licenses, getSelection, (val) => (flt.licenses = val as F<NLicense>));
  map(INPUTS.paradigms, getSelection, (val) => (flt.paradigms = val as F<NParadigm>));
  map(INPUTS.platforms, getSelection, (val) => (flt.platforms = val as F<NPlatform>));
  map(INPUTS.tags, getSelection, (val) => (flt.tags = val as F<NTag>));
  map(INPUTS.typeSystems, getSelection, (val) => (flt.typeSystems = val as F<NTypeSystem>));
  map(INPUTS.writtenIn, getSelection, (val) => (flt.writtenIn = val as F<NPlang>));

  return filters;
}
