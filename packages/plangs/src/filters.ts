import type { V_Plang, VID_Plang } from "./schema";
import type { PlangsGraph } from "./graph";

type Filter = {
  mode: "all" | "any";
  values: Set<string>;
};

/** All possible filters in one. */
export type PlangFilters = {
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
  implements: Filter;
  influenced: Filter;
  influencedBy: Filter;
  licenses: Filter;
  paradigm: Filter;
  people: Filter;
  plangExt: Filter;
  platform: Filter;
  standardFor: Filter;
  typeSystems: Filter;
};

export function filter(pg: PlangsGraph, filters: PlangFilters): Set<VID_Plang> {
  const result = new Set<VID_Plang>();

  for (const [vid, pl] of pg.v_plang) {
    if (
      (filters.plangName.length > 0 && !plangNameMatches(pl, filters.plangName)) ||
      (filters.hasLogo && !plangHasLogo(pl)) ||
      (filters.hasReleases && !plangHasReleases(pl, filters.releaseMinDate)) ||
      (filters.hasWebsite && !plangHasWebsites(pl)) ||
      (filters.hasWikipedia && !plangHasWikipedia(pl)) ||
      (filters.transpiler && !pl.isTranspiler) ||
      (filters.plangExt.values.size > 0 && !plangHasExt(pl, filters.plangExt)) ||
      (filters.dialectOf.values.size > 0 && !plangMatchesDialect(pg, pl, filters.dialectOf)) ||
      (filters.implementedWith.values.size > 0 && !plangMatchesImplementedWith(pg, pl, filters.implementedWith)) ||
      (filters.implements.values.size > 0 && !plangMatchesImplementedWith(pg, pl, filters.implements)) ||
      (filters.influenced.values.size > 0 && !plangMatchesInfluenced(pg, pl, filters.influenced)) ||
      (filters.influencedBy.values.size > 0 && !plangMatchesInfluenced(pg, pl, filters.influencedBy)) ||
      (filters.licenses.values.size > 0 && !plangMatchesLicenses(pg, pl, filters.licenses)) ||
      (filters.paradigm.values.size > 0 && !plangMatchesParadigm(pg, pl, filters.paradigm)) ||
      (filters.people.values.size > 0 && !plangMatchesPeople(pg, pl, filters.people)) ||
      (filters.platform.values.size > 0 && !plangMatchesParadigm(pg, pl, filters.platform)) ||
      (filters.standardFor.values.size > 0 && !plangMatchesStandardFor(pg, pl, filters.standardFor)) ||
      (filters.typeSystems.values.size > 0 && !plangMatchesTypeSystems(pg, pl, filters.typeSystems))
    ) {
      continue;
    }
    result.add(vid);
  }

  return result;
}

export function plangNameMatches(pl: Partial<V_Plang>, plangName: string): boolean {
  if (!pl.name || !plangName) return false;
  // TODO: we should keep the lower case names somewhere to avoid recomputing them.
  return pl.name.toLowerCase().includes(plangName);
}

export function plangHasLogo(pl: Partial<V_Plang>): boolean {
  return pl.images?.some((i) => i.kind === "logo") ?? false;
}

function plangHasReleases(pl: Partial<V_Plang>, minDate?: string): boolean {
  if (!pl.releases) return false;
  if (!minDate) return pl.releases.length > 0;
  return pl.releases.some((r) => r.date && r.date >= minDate);
}

/** Has any website, except wikipedia pages. */
function plangHasWebsites(pl: Partial<V_Plang>): boolean {
  if (!pl.websites) return false;
  return pl.websites.some((w) => w.kind !== "wikipedia");
}

function plangHasWikipedia(pl: Partial<V_Plang>): boolean {
  if (!pl.websites) return false;
  return pl.websites.some((w) => w.kind === "wikipedia");
}

function plangHasExt(pl: Partial<V_Plang>, { mode, values }: Filter): boolean {
  if (!pl.extensions) return false;
  const exts = new Set(pl.extensions.map((e) => e.toLowerCase())); // TODO: persist these sets.
  if (mode === "all") {
    for (const v of values) if (!exts.has(v)) return false;
    return true;
  }
  // any
  for (const v of values) if (pl.extensions.includes(v)) return true;
  return false;
}

function plangMatchesDialect(pg: PlangsGraph, pl: Partial<V_Plang>, dialectOf: Filter): boolean {
  return false;
}

function plangMatchesImplementedWith(pg: PlangsGraph, pl: Partial<V_Plang>, implementedWith: Filter): boolean {
  return false;
}

function plangMatchesInfluenced(pg: PlangsGraph, pl: Partial<V_Plang>, influenced: Filter): boolean {
  return false;
}

function plangMatchesLicenses(pg: PlangsGraph, pl: Partial<V_Plang>, licenses: Filter): boolean {
  return false;
}

function plangMatchesParadigm(pg: PlangsGraph, pl: Partial<V_Plang>, paradigm: Filter): boolean {
  return false;
}

function plangMatchesPeople(pg: PlangsGraph, pl: Partial<V_Plang>, people: Filter): boolean {
  return false;
}

function plangMatchesStandardFor(pg: PlangsGraph, pl: Partial<V_Plang>, standardFor: Filter): boolean {
  return false;
}

function plangMatchesTypeSystems(pg: PlangsGraph, pl: Partial<V_Plang>, typeSystems: Filter): boolean {
  return false;
}
