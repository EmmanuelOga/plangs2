import { Filter } from "@plangs/graph/auxiliar";

import type { NLicense, NParadigm, NPlang, NPlatform, NTag, NTsys, StrDate } from ".";

type Predicate<T> = (pl: NPlang, value: T) => boolean;

const filter = <T>(predicate: Predicate<T>) => ({ value: undefined as T | undefined, predicate });

/**
 * Criteria to filter programming languages.
 */
export class PlangFilters {
  filters = {
    plangName: filter((pl, regexp: RegExp) => regexp.test(pl.name)),

    appearedAfter: filter((pl, date: StrDate) => pl.firstAppearedAfter(date)),
    releasedAfter: filter((pl, date: StrDate) => pl.releases.some(rel => !!rel.date && rel.date > date)),

    hasLogo: filter((pl, val: boolean) => val === pl.images.some(img => img.kind === "logo")),
    hasReleases: filter((pl, val: boolean) => val !== pl.releases.isEmpty),
    hasWikipedia: filter((pl, val: boolean) => val === pl.websites.some(site => site.kind === "wikipedia")),
    isMainstream: filter((pl, val: boolean) => val === pl.isMainstream),
    isTranspiler: filter((pl, val: boolean) => val === pl.isTranspiler),

    extensions: filter(({ extensions }, flt: Filter<string>) => flt.matches(key => extensions.includes(key))),

    compilesTo: filter(({ relCompilesTo }, flt: Filter<NPlang["key"]>) => flt.matches(key => relCompilesTo.has(key))),
    dialectOf: filter(({ relDialectOf }, flt: Filter<NPlang["key"]>) => flt.matches(key => relDialectOf.has(key))),
    implements: filter(({ relImplements }, flt: Filter<NPlang["key"]>) => flt.matches(key => relImplements.has(key))),
    influenced: filter(({ relInfluenced }, flt: Filter<NPlang["key"]>) => flt.matches(key => relInfluenced.has(key))),
    influencedBy: filter(({ relInfluencedBy }, flt: Filter<NPlang["key"]>) => flt.matches(key => relInfluencedBy.has(key))),
    licenses: filter(({ relLicenses }, flt: Filter<NLicense["key"]>) => flt.matches(key => relLicenses.has(key))),
    paradigms: filter(({ relParadigms }, flt: Filter<NParadigm["key"]>) => flt.matches(key => relParadigms.has(key))),
    platforms: filter(({ relPlatforms }, flt: Filter<NPlatform["key"]>) => flt.matches(key => relPlatforms.has(key))),
    tags: filter(({ relTags }, flt: Filter<NTag["key"]>) => flt.matches(key => relTags.has(key))),
    typeSystems: filter(({ relTsys }, flt: Filter<NTsys["key"]>) => flt.matches(key => relTsys.has(key))),
    writtenIn: filter(({ relWrittenIn }, flt: Filter<NPlang["key"]>) => flt.matches(key => relWrittenIn.has(key))),
  } as const;

  matches(key: PlangFiltersKey, pl: NPlang): boolean {
    const { value, predicate } = this.filters[key];
    return value === undefined || (predicate as Predicate<typeof value>)(pl, value);
  }

  matchesAll(pl: NPlang): boolean {
    for (const key of Object.keys(this.filters)) {
      if (!this.matches(key as PlangFiltersKey, pl)) return false;
    }
    return true;
  }

  toJSON() {
    return Object.fromEntries(
      Object.entries(this.filters)
        .map(([key, { value }]) => {
          if (!value) return [key, undefined];

          if (value instanceof Set) return [key, [...value]];
          if (value instanceof RegExp) return [key, value.source];
          if (typeof value === "boolean") return [key, value];
          if (typeof value === "string") return [key, value];
          if (value instanceof Filter) return [key, value.isEmpty ? undefined : value];

          console.warn("Unknown filter value", value);
          return [key, undefined];
        })
        .filter(([, value]) => value !== undefined),
    );
  }
}

export type PlangFiltersKey = keyof PlangFilters["filters"];
