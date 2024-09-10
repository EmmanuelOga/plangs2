import type { SERVER_INPUTS } from "@plangs/server/pages/browse";
import { PlangFilters } from "@plangs/plangs/filter";
import type { Filter, NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys, StrDate } from "@plangs/plangs";

import type { InputSelElement } from "../input-sel";
import { $ } from "../utils";

const input = (kind: "input" | "input-sel", name: keyof typeof SERVER_INPUTS) => $(`${kind}[name=${name}]`);

const INPUTS: { [K in keyof typeof SERVER_INPUTS]: Element | null } = {
  plangName: input("input", "plangName"),

  appearedAfter: input("input", "appearedAfter"),
  releasedAfter: input("input", "releasedAfter"),

  hasLogo: input("input", "hasLogo"),
  hasReleases: input("input", "hasReleases"),
  hasWikipedia: input("input", "hasWikipedia"),
  isMainstream: input("input", "isMainstream"),
  isTranspiler: input("input", "isTranspiler"),

  dialectOf: input("input-sel", "dialectOf"),
  extensions: input("input-sel", "extensions"),
  implements: input("input-sel", "implements"),
  influenced: input("input-sel", "influenced"),
  influencedBy: input("input-sel", "influencedBy"),
  licenses: input("input-sel", "licenses"),
  paradigms: input("input-sel", "paradigms"),
  platforms: input("input-sel", "platforms"),
  tags: input("input-sel", "tags"),
  typeSystems: input("input-sel", "typeSystems"),
  writtenIn: input("input-sel", "writtenIn"),
} as const;

function map<I, V>(input: I | null, getValue: (input: I) => V, callback: (value: V) => void) {
  if (!input) return;
  const value = getValue(input);
  if (value) callback(value);
}

export function getFilters(): PlangFilters {
  const filters = new PlangFilters();
  const flt = filters.values;

  const trimVal = (input: Element) => (input as HTMLInputElement).value.trim();

  map(INPUTS.plangName, trimVal, (val) => (flt.plangName = new RegExp(val, "i")));

  map(INPUTS.appearedAfter, trimVal, (val) => (flt.appearedAfter = val as StrDate));
  map(INPUTS.releasedAfter, trimVal, (val) => (flt.releasedAfter = val as StrDate));

  const getChecked = (input: Element) => (input as HTMLInputElement).checked;

  map(INPUTS.hasLogo, getChecked, (val) => (flt.hasLogo = val));
  map(INPUTS.hasReleases, getChecked, (val) => (flt.hasReleases = val));
  map(INPUTS.hasWikipedia, getChecked, (val) => (flt.hasWikipedia = val));
  map(INPUTS.isTranspiler, getChecked, (val) => (flt.isTranspiler = val));
  map(INPUTS.isMainstream, getChecked, (val) => (flt.isMainstream = val));

  const getSelection = (input: Element) => (input as InputSelElement).values();

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
  map(INPUTS.typeSystems, getSelection, (val) => (flt.typeSystems = val as F<NTsys>));
  map(INPUTS.writtenIn, getSelection, (val) => (flt.writtenIn = val as F<NPlang>));

  return filters;
}
