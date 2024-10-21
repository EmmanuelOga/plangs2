import { type EncodedFilter, Filter } from "@plangs/graph/auxiliar";

import type { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys } from ".";
import type { StrDate } from "./schema";

type Predicate<T> = (pl: NPlang, value: T) => boolean;

/** A facet requires a value and a predicte. Here we initialize the value to undefined. */
const facet = <T>(predicate: Predicate<T>) => ({ value: undefined as T | undefined, predicate });

export type EncodedPlangFilters = Record<string, string | string[] | boolean | EncodedFilter>;

export type PlangFiltersKey = keyof PlangFacets["facets"];

/**
 * Criteria to filter programming languages.
 */
export class PlangFacets {
  facets = {
    plangName: facet((pl, regexp: RegExp) => regexp.test(pl.name)),

    hasLogo: facet((pl, val: boolean) => val === pl.images.some(img => img.kind === "logo")),
    hasReleases: facet((pl, val: boolean) => val !== pl.releases.isEmpty),
    hasWikipedia: facet((pl, val: boolean) => val === pl.websites.some(site => site.kind === "wikipedia")),
    isMainstream: facet((pl, val: boolean) => val === pl.isMainstream),
    isTranspiler: facet((pl, val: boolean) => val === pl.isTranspiler),
    extensions: facet(({ extensions }, flt: Filter<string>) => flt.matches(key => extensions.includes(key))),

    creationDate: facet(({ createdDate: firstAppeared }, flt: Filter<string>) => flt.matches(val => firstAppeared?.startsWith(val) ?? false)),

    appearedAfter: facet((pl, date: StrDate) => pl.createdAfter(date)),
    releasedAfter: facet((pl, date: StrDate) => {
      const last = pl.lastRelease?.date;
      if (!last) return false;
      return last >= date;
    }),

    compilesTo: facet(({ relCompilesTo }, flt: Filter<NPlang["key"]>) => flt.matches(key => relCompilesTo.has(key))),
    dialectOf: facet(({ relDialectOf }, flt: Filter<NPlang["key"]>) => flt.matches(key => relDialectOf.has(key))),
    implements: facet(({ relImplements }, flt: Filter<NPlang["key"]>) => flt.matches(key => relImplements.has(key))),
    influenced: facet(({ relInfluenced }, flt: Filter<NPlang["key"]>) => flt.matches(key => relInfluenced.has(key))),
    influencedBy: facet(({ relInfluencedBy }, flt: Filter<NPlang["key"]>) => flt.matches(key => relInfluencedBy.has(key))),
    licenses: facet(({ relLicenses }, flt: Filter<NLicense["key"]>) => flt.matches(key => relLicenses.has(key))),
    paradigms: facet(({ relParadigms }, flt: Filter<NParadigm["key"]>) => flt.matches(key => relParadigms.has(key))),
    platforms: facet(({ relPlatforms }, flt: Filter<NPlatform["key"]>) => flt.matches(key => relPlatforms.has(key))),
    tags: facet(({ relTags }, flt: Filter<NTag["key"]>) => flt.matches(key => relTags.has(key))),
    typeSystems: facet(({ relTsys }, flt: Filter<NTsys["key"]>) => flt.matches(key => relTsys.has(key))),
    writtenIn: facet(({ relWrittenIn }, flt: Filter<NPlang["key"]>) => flt.matches(key => relWrittenIn.has(key))),
  } as const;

  matches(key: PlangFiltersKey, pl: NPlang): boolean {
    const { value, predicate } = this.facets[key];
    return value === undefined || (predicate as Predicate<typeof value>)(pl, value);
  }

  matchesAll(pl: NPlang): boolean {
    for (const key of Object.keys(this.facets)) {
      if (!this.matches(key as PlangFiltersKey, pl)) return false;
    }
    return true;
  }

  /**
   * This is similar to converting to something reaady to JSON serialization.
   * We are targetting RISON and trying to make the resulting encoding URL friendly.
   */
  encodable(): EncodedPlangFilters {
    return Object.fromEntries(
      Object.entries(this.facets)
        .map(([key, { value }]) => {
          if (!value) return [key, undefined];

          if (value instanceof Set) return [key, [...value]];
          if (value instanceof RegExp) return [key, value.source];
          if (typeof value === "boolean") return [key, value];
          if (typeof value === "string") return [key, value];
          if (value instanceof Filter) return [key, value.isEmpty ? undefined : value.encodable()];

          console.warn("Unknown filter value", value);
          return [key, undefined];
        })
        .filter(([, value]) => value !== undefined),
    );
  }
}
