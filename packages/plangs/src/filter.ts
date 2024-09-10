import type { Filter, NPlang, StrDate } from ".";

/**
 * Criteria to filter programming languages.
 */
export class PlangFilters {
  values = {
    // String filters always match if empty.

    plangName: undefined as RegExp | undefined,
    firstAppearedMinDate: undefined as StrDate | undefined,
    releaseMinDate: undefined as StrDate | undefined,

    hasLogo: undefined as boolean | undefined,
    hasReleases: undefined as boolean | undefined,
    hasWikipedia: undefined as boolean | undefined,
    isTranspiler: undefined as boolean | undefined,
    isMainstream: undefined as boolean | undefined,

    dialectOf: undefined as Filter | undefined,
    implements: undefined as Filter | undefined,
    influencedBy: undefined as Filter | undefined,
    licenses: undefined as Filter | undefined,
    paradigms: undefined as Filter | undefined,
    plangExts: undefined as Filter | undefined,
    platforms: undefined as Filter | undefined,
    tags: undefined as Filter | undefined,
    typeSystems: undefined as Filter | undefined,
    writtenIn: undefined as Filter | undefined,
  };

  matchAll(pl: NPlang): boolean {
    if (!this.machesHasLogo(pl)) return false;
    if (!this.machesHasWikipedia(pl)) return false;
    if (!this.machtesIsTranspiler(pl)) return false;
    // if (!this.matchesDialectOf(pl)) return false;
    if (!this.matchesFirstAppearedMinDate(pl)) return false;
    // if (!this.matchesImplements(pl)) return false;
    // if (!this.matchesInfluencedBy(pl)) return false;
    // if (!this.matchesIsMainstream(pl)) return false;
    // if (!this.matchesLicenses(pl)) return false;
    // if (!this.matchesParadigms(pl)) return false;
    // if (!this.matchesPlangExts(pl)) return false;
    if (!this.matchesPlangName(pl)) return false;
    // if (!this.matchesPlatforms(pl)) return false;
    if (!this.matchesReleaseMinDate(pl)) return false;
    if (!this.matchesHasReleases(pl)) return false;
    // if (!this.matchesTags(pl)) return false;
    // if (!this.matchesTypeSystems(pl)) return false;
    // if (!this.matchesWrittenIn(pl)) return false;

    return true;
  }

  matchesPlangName(pl: NPlang): boolean {
    return match(this.values.plangName, (val) => pl.matchesName(val));
  }

  matchesFirstAppearedMinDate(pl: NPlang): boolean {
    return match(this.values.firstAppearedMinDate, (val) => pl.firstAppearedAfter(val));
  }

  matchesReleaseMinDate(pl: NPlang): boolean {
    return match(this.values.releaseMinDate, (val) => pl.hasReleases(val));
  }

  matchesHasReleases(pl: NPlang): boolean {
    const { hasReleases } = this.values;
    return hasReleases === undefined || hasReleases === pl.hasReleases();
  }

  machesHasLogo(pl: NPlang): boolean {
    return match(this.values.hasLogo, (val) => val === pl.hasLogo);
  }

  machesHasWikipedia(pl: NPlang): boolean {
    return match(this.values.hasWikipedia, (val) => val === pl.hasWikipedia);
  }

  machtesIsTranspiler(pl: NPlang): boolean {
    return match(this.values.isTranspiler, (val) => val === (pl.data.isTranspiler ?? false));
  }

  matchesIsMainstream(pl: NPlang): boolean {
    return match(this.values.isMainstream, (val) => val === (pl.data.isMainstream ?? false));
  }

  matchesDialectOf(pl: NPlang): boolean {
    return pl.relDialectOf.matches(this.values.dialectOf);
  }

  matchesImplements(pl: NPlang): boolean {
    return pl.relImplements.matches(this.values.implements);
  }

  matchesInfluencedBy(pl: NPlang): boolean {
    return pl.relInfluencedBy.matches(this.values.influencedBy);
  }

  matchesLicenses(pl: NPlang): boolean {
    return pl.relLicenses.matches(this.values.licenses);
  }

  matchesParadigms(pl: NPlang): boolean {
    return pl.relParadigms.matches(this.values.paradigms);
  }

  matchesPlangExts(pl: NPlang): boolean {
    return pl.hasExtensions(this.values.plangExts);
  }

  matchesPlatforms(pl: NPlang): boolean {
    return pl.relPlatforms.matches(this.values.platforms);
  }

  matchesTags(pl: NPlang): boolean {
    return pl.relTags.matches(this.values.tags);
  }

  matchesTypeSystems(pl: NPlang): boolean {
    return pl.relTypeSystems.matches(this.values.typeSystems);
  }

  matchesWrittenIn(pl: NPlang): boolean {
    return pl.relWrittenIn.matches(this.values.writtenIn);
  }
}

function match<T>(filter: T | undefined, check: (val: T) => boolean): boolean {
  // Convention: undefined means "don't care".
  return filter === undefined || check(filter);
}