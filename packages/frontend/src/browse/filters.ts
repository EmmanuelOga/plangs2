import type { Filter, NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys, StrDate } from "@plangs/plangs";
import { PlangFilters } from "@plangs/plangs/filter";
import { matchingInputSelByName, type InputSelElement } from "../input-sel";
import type { INPUT } from "@plangs/server/pages/browse_dom";
import { InputComplElement } from "../input-compl";

/** Create a plan filter from the inputs values. */
export function getFilters(inputs: Record<INPUT, HTMLElement | null>): PlangFilters {
  const filters = new PlangFilters();
  const flt = filters.values;

  function collect<I, V>(name: INPUT, getValue: (input: I) => V, callback: (value: V) => void) {
    const input = inputs[name];
    if (!input) {
      console.warn("Input not found");
      return;
    }
    const value = getValue(input as I);
    if (value) callback(value);
  }

  const trimVal = (input: HTMLElement) => (input as HTMLInputElement).value.trim();

  collect("plangName", trimVal, (val) => (flt.plangName = new RegExp(val, "i")));

  collect("appearedAfter", trimVal, (val) => (flt.appearedAfter = val as StrDate));
  collect("releasedAfter", trimVal, (val) => (flt.releasedAfter = val as StrDate));

  const getChecked = (input: HTMLElement) => (input as HTMLInputElement).checked;

  collect("hasLogo", getChecked, (val) => (flt.hasLogo = val));
  collect("hasReleases", getChecked, (val) => (flt.hasReleases = val));
  collect("hasWikipedia", getChecked, (val) => (flt.hasWikipedia = val));
  collect("isTranspiler", getChecked, (val) => (flt.isTranspiler = val));
  collect("isMainstream", getChecked, (val) => (flt.isMainstream = val));

  const getSelection = (input: HTMLElement) => matchingInputSelByName(input)?.values();

  type F<T extends { key: string }> = Filter<T["key"]>;

  collect("dialectOf", getSelection, (val) => (flt.dialectOf = val as F<NPlang>));
  collect("extensions", getSelection, (val) => (flt.extensions = val as F<NPlang>));
  collect("implements", getSelection, (val) => (flt.implements = val as F<NPlang>));
  collect("influenced", getSelection, (val) => (flt.influenced = val as F<NPlang>));
  collect("influencedBy", getSelection, (val) => (flt.influencedBy = val as F<NPlang>));
  collect("licenses", getSelection, (val) => (flt.licenses = val as F<NLicense>));
  collect("paradigms", getSelection, (val) => (flt.paradigms = val as F<NParadigm>));
  collect("platforms", getSelection, (val) => (flt.platforms = val as F<NPlatform>));
  collect("tags", getSelection, (val) => (flt.tags = val as F<NTag>));
  collect("typeSystems", getSelection, (val) => (flt.typeSystems = val as F<NTsys>));
  collect("writtenIn", getSelection, (val) => (flt.writtenIn = val as F<NPlang>));

  return filters;
}
