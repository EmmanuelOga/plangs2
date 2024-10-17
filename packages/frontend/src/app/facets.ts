import { RISON } from "rison2";

import type { Filter } from "@plangs/graph/auxiliar";
import type { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from "@plangs/plangs";
import { PlangFacets } from "@plangs/plangs/facets";
import type { EncodedPlangFilters } from "@plangs/plangs/facets";
import type { StrDate } from "@plangs/plangs/schema";
import type { IDKey } from "@plangs/server/elements";

import { isInputFacetElement } from "../components/input-facet";
import { elem } from "../utils";

/** Create a plan filter from the inputs values. */
export function getFacets(): PlangFacets {
  const filters = new PlangFacets();
  const flt = filters.facets;

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

  function getFacet<T>(input: HTMLElement): Filter<T> | undefined {
    if (isInputFacetElement(input)) {
      if (input.state?.hasSelection) {
        console.log(input.id, input.state?.selected, input.state.mode);
      }
    }
    // TODO: use the new input-facet component.
    // const filter = matchingInputSelByName(dir ? `${name}-${dir}` : name)?.values();
    // return filter ? new Filter<T>(filter.mode, filter.values as Set<T>) : undefined;
    return undefined;
  }

  collect("dialectOf", getFacet<NPlang["key"]>, val => (flt.dialectOf.value = val));
  collect("compilesTo", getFacet<NPlang["key"]>, val => (flt.compilesTo.value = val));
  collect("extensions", getFacet<string>, val => (flt.extensions.value = val));
  collect("implements", getFacet<NPlang["key"]>, val => (flt.implements.value = val));
  collect("influenced", getFacet<NPlang["key"]>, val => (flt.influenced.value = val));
  collect("influencedBy", getFacet<NPlang["key"]>, val => (flt.influencedBy.value = val));
  collect("licenses", getFacet<NLicense["key"]>, val => (flt.licenses.value = val));
  collect("paradigms", getFacet<NParadigm["key"]>, val => (flt.paradigms.value = val));
  collect("platforms", getFacet<NPlatform["key"]>, val => (flt.platforms.value = val));
  collect("tags", getFacet<NTag["key"]>, val => (flt.tags.value = val));
  collect("typeSystems", getFacet<NTsys["key"]>, val => (flt.typeSystems.value = val));
  collect("writtenIn", getFacet<NPlang["key"]>, val => (flt.writtenIn.value = val));

  return filters;
}

export function facetsFromFragment(): EncodedPlangFilters | undefined {
  try {
    const data = window.location.hash.slice(1).trim();
    if (data.length > 2 && data.startsWith("(") && data.endsWith(")")) {
      const filters = RISON.parse(data) as EncodedPlangFilters;
      return filters;
    }
  } catch (e) {
    console.warn("Failed to parse URL fragment.");
    window.location.hash = "";
  }
}

export function facetsFromLocalStorage(): EncodedPlangFilters | undefined {
  const stored = localStorage.getItem("plangs-filters");
  if (stored) {
    try {
      const filters = JSON.parse(stored) as EncodedPlangFilters;
      return filters;
    } catch (e) {
      console.warn("Failed to parse localStorage filters.", stored);
      localStorage.removeItem("plangs-filters");
    }
  }
}
