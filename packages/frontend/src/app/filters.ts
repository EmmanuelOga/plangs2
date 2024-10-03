import { Filter } from "@plangs/graph/auxiliar";
import type { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys, StrDate } from "@plangs/plangs";
import { PlangFilters } from "@plangs/plangs/filter";
import type { IDKey } from "@plangs/server/elements";

import { matchingInputSelByName } from "../components/input-sel";
import { elem } from "../utils";

/** Create a plan filter from the inputs values. */
export function getFilters(): PlangFilters {
  const filters = new PlangFilters();
  const flt = filters.filters;

  function collect<I, V>(key: IDKey, getValue: (input: I) => V, callback: (value: V) => void) {
    const input = elem(key);
    if (!input) console.warn("Missing input", key);
    const value = input && getValue(input as I);
    if (value) callback(value);
  }

  const trimVal = (input: HTMLElement) => (input as HTMLInputElement).value.trim();

  collect("plangName", trimVal, val => (flt.plangName.value = new RegExp(val, "i")));

  collect("appearedAfter", trimVal, val => (flt.appearedAfter.value = val as StrDate));
  collect("releasedAfter", trimVal, val => (flt.releasedAfter.value = val as StrDate));

  const getChecked = (input: HTMLElement) => (input as HTMLInputElement).checked;

  collect("hasLogo", getChecked, val => {
    return (flt.hasLogo.value = val);
  });

  collect("hasReleases", getChecked, val => (flt.hasReleases.value = val));
  collect("hasWikipedia", getChecked, val => (flt.hasWikipedia.value = val));
  collect("isTranspiler", getChecked, val => (flt.isTranspiler.value = val));
  collect("isMainstream", getChecked, val => (flt.isMainstream.value = val));

  function getFilter<T>(input: HTMLElement): Filter<T> | undefined {
    const filter = undefined as any; // matchingInputSelByName(input)?.values();
    return filter ? new Filter<T>(filter.mode, filter.values as Set<T>) : undefined;
  }

  collect("dialectOf", getFilter<NPlang["key"]>, val => (flt.dialectOf.value = val));
  collect("compilesTo", getFilter<NPlang["key"]>, val => (flt.compilesTo.value = val));
  collect("extensions", getFilter<string>, val => (flt.extensions.value = val));
  collect("implements", getFilter<NPlang["key"]>, val => (flt.implements.value = val));
  // collect("influenced", getFilter<NPlang["key"]>, val => (flt.influenced.value = val));
  // collect("influencedBy", getFilter<NPlang["key"]>, val => (flt.influencedBy.value = val));
  collect("licenses", getFilter<NLicense["key"]>, val => (flt.licenses.value = val));
  collect("paradigms", getFilter<NParadigm["key"]>, val => (flt.paradigms.value = val));
  collect("platforms", getFilter<NPlatform["key"]>, val => (flt.platforms.value = val));
  collect("tags", getFilter<NTag["key"]>, val => (flt.tags.value = val));
  collect("typeSystems", getFilter<NTsys["key"]>, val => (flt.typeSystems.value = val));
  collect("writtenIn", getFilter<NPlang["key"]>, val => (flt.writtenIn.value = val));

  return filters;
}
