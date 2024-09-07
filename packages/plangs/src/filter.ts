/**
 * Used to filter programming languages.
 */
export type Filter = {
  mode: "all" | "any";
  values: Set<string>;
};

type Filters = {
  // String filters are used if the string is non-empty.
  plangName: string;
  releaseMinDate: string;

  // Boolean filters are used if true.

  hasLogo: boolean;
  hasReleases: boolean;
  hasWebsite: boolean;
  hasWikipedia: boolean;
  transpiler: boolean;

  // Value filters are used if the set is non-empty.

  dialectOf: Filter;
  implementedWith: Filter;
  influenced: Filter;

  licenses: Filter;
  paradigm: Filter;
  plangExt: Filter;
  platform: Filter;
  standardFor: Filter;
  typeSystems: Filter;
};

/**
 * Criteria to filter programming languages.
 */
export class PlangFilters {
  values: Filters;

  /**
   * Return a set of programming languages that match the given filters.
   */
  filterPlangs(filters: PlangFilters): Set<NPlang["key"]> {
    const result = new Set<NPlang["key"]>();
    for (const [nid, pl] of this.n_plang) {
      if (
        (filters.plangName.length > 0 && !pl.matchesName(filters.plangName)) ||
        (filters.transpiler && !pl.data.isTranspiler) ||
        (filters.hasLogo && !pl.hasLogo()) ||
        (filters.hasReleases && !pl.hasReleases(filters.releaseMinDate)) ||
        (filters.hasWebsite && !pl.hasWebsites()) ||
        (filters.hasWikipedia && !pl.hasWikipedia()) ||
        (filters.plangExt.values.size > 0 && !pl.hasExt(filters.plangExt)) ||
        (filters.dialectOf.values.size > 0 && !relMatchesFilter(filters.dialectOf, pl.relDialects)) ||
        (filters.implementedWith.values.size > 0 && !relMatchesFilter(filters.implementedWith, pl.relImplementedWith)) ||
        (filters.influenced.values.size > 0 && !relMatchesFilter(filters.influenced, pl.relInfluenced)) ||
        (filters.licenses.values.size > 0 && !relMatchesFilter(filters.licenses, pl.relLicenses)) ||
        (filters.paradigm.values.size > 0 && !relMatchesFilter(filters.paradigm, pl.relParadigms)) ||
        (filters.platform.values.size > 0 && !relMatchesFilter(filters.platform, pl.relPlatforms)) ||
        (filters.typeSystems.values.size > 0 && !relMatchesFilter(filters.typeSystems, pl.relTypeSystems))
      ) {
        continue;
      }
      result.add(nid);
    }

    return result;
  }
}

function relValues<F, T>(rel: Map<string, F> | undefined, getter: (e: F) => T | undefined): T[] {
  return Array.from(rel?.values() ?? [])
    .map(getter)
    .filter(Boolean) as T[];
}

function relMatchesFilter({ values, mode }: Filter, relationship: { has: (key: any) => boolean } | undefined): boolean {
  if (!relationship) return false;
  return verify(values, mode, (v) => relationship.has(v));
}
