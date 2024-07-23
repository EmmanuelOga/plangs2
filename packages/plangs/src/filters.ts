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
      (filters.dialectOf.values.size > 0 && !plangMatchesDialect(pg, vid, filters.dialectOf)) ||
      (filters.standardFor.values.size > 0 && !plangMatchesStandardFor(pg, vid, filters.standardFor)) ||
      (filters.implements.values.size > 0 && !plangMatchesImplements(pg, vid, filters.implements)) ||
      (filters.implementedWith.values.size > 0 && !plangMatchesImplementedWith(pg, vid, filters.implementedWith)) ||
      (filters.influenced.values.size > 0 && !plangMatchesInfluenced(pg, vid, filters.influenced)) ||
      (filters.influencedBy.values.size > 0 && !plangMatchesInfluencedBy(pg, vid, filters.influencedBy)) ||
      (filters.licenses.values.size > 0 && !plangMatchesLicenses(pg, vid, filters.licenses)) ||
      (filters.paradigm.values.size > 0 && !plangMatchesParadigm(pg, vid, filters.paradigm)) ||
      (filters.people.values.size > 0 && !plangMatchesPeople(pg, vid, filters.people)) ||
      (filters.platform.values.size > 0 && !plangMatchesPlatform(pg, vid, filters.platform)) ||
      (filters.typeSystems.values.size > 0 && !plangMatchesTypeSystems(pg, vid, filters.typeSystems))
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

export function plangHasReleases(pl: Partial<V_Plang>, minDate?: string): boolean {
  if (!pl.releases) return false;
  if (!minDate) return pl.releases.length > 0;
  return pl.releases.some((r) => r.date && r.date >= minDate);
}

/** Has any website, except wikipedia pages. */
export function plangHasWebsites(pl: Partial<V_Plang>): boolean {
  if (!pl.websites) return false;
  return pl.websites.some((w) => w.kind !== "wikipedia");
}

export function plangHasWikipedia(pl: Partial<V_Plang>): boolean {
  if (!pl.websites) return false;
  return pl.websites.some((w) => w.kind === "wikipedia");
}

export function plangHasExt(pl: Partial<V_Plang>, { mode, values }: Filter): boolean {
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

export function plangAdjacentsMatchFilter<VID_ADJ>(
  vid: VID_Plang,
  { mode, values }: Filter,
  adjacents: (vid: VID_Plang) => Set<VID_ADJ>,
): boolean {
  if (mode === "all") {
    for (const v of values as Set<VID_ADJ>) if (!adjacents(vid).has(v)) return false;
    return true;
  }
  // any
  for (const v of values as Set<VID_ADJ>) if (adjacents(vid).has(v)) return true;
  return false;
}

export const plangMatchesDialect = (pg: PlangsGraph, vid: VID_Plang, filter: Filter) =>
  plangAdjacentsMatchFilter(vid, filter, (vid: VID_Plang) => pg.e_dialect_of.adjacentFrom(vid));

export const plangMatchesImplementedWith = (pg: PlangsGraph, vid: VID_Plang, filter: Filter) =>
  plangAdjacentsMatchFilter(vid, filter, (vid: VID_Plang) => pg.e_implements.adjacentTo(vid));

export const plangMatchesImplements = (pg: PlangsGraph, vid: VID_Plang, filter: Filter) =>
  plangAdjacentsMatchFilter(vid, filter, (vid: VID_Plang) => pg.e_implements.adjacentFrom(vid));

export const plangMatchesInfluenced = (pg: PlangsGraph, vid: VID_Plang, filter: Filter) =>
  plangAdjacentsMatchFilter(vid, filter, (vid: VID_Plang) => pg.e_l_influenced_l.adjacentFrom(vid));

export const plangMatchesInfluencedBy = (pg: PlangsGraph, vid: VID_Plang, filter: Filter) =>
  plangAdjacentsMatchFilter(vid, filter, (vid: VID_Plang) => pg.e_l_influenced_l.adjacentTo(vid));

export const plangMatchesLicenses = (pg: PlangsGraph, vid: VID_Plang, filter: Filter) =>
  plangAdjacentsMatchFilter(vid, filter, (vid: VID_Plang) => pg.e_has_license.adjacentFrom(vid));

export const plangMatchesParadigm = (pg: PlangsGraph, vid: VID_Plang, filter: Filter) =>
  plangAdjacentsMatchFilter(vid, filter, (vid: VID_Plang) => pg.e_plang_para.adjacentFrom(vid));

export const plangMatchesPeople = (pg: PlangsGraph, vid: VID_Plang, filter: Filter) =>
  plangAdjacentsMatchFilter(vid, filter, (vid: VID_Plang) => pg.e_person_plang.adjacentTo(vid));

export const plangMatchesPlatform = (pg: PlangsGraph, vid: VID_Plang, filter: Filter) =>
  plangAdjacentsMatchFilter(vid, filter, (vid: VID_Plang) => pg.e_supports_platf.adjacentFrom(vid));

export const plangMatchesStandardFor = (pg: PlangsGraph, vid: VID_Plang, filter: Filter) =>
  plangAdjacentsMatchFilter(vid, filter, (vid: VID_Plang) => pg.e_dialect_of.adjacentTo(vid));

export const plangMatchesTypeSystems = (pg: PlangsGraph, vid: VID_Plang, filter: Filter) =>
  plangAdjacentsMatchFilter(vid, filter, (vid: VID_Plang) => pg.e_plang_tsys.adjacentFrom(vid));
