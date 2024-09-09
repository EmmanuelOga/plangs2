import { type NPlang, type StrDate, emptyFilter } from ".";

/**
 * Criteria to filter programming languages.
 */
export class PlangFilters {
  values = {
    // String filters always match if empty.

    plangName: undefined as RegExp | undefined,
    firstAppearedMinDate: undefined as StrDate | undefined,
    releaseMinDate: undefined as StrDate | undefined,

    // Boolean filters always match if false.

    hasLogo: false,
    hasReleases: false,
    hasWebsites: false,
    hasWikipedia: false,
    isTranspiler: false,
    isMainstream: false,

    // Value filters always match if empty.

    dialectOf: emptyFilter(),
    implements: emptyFilter(),
    influencedBy: emptyFilter(),
    licenses: emptyFilter(),
    paradigms: emptyFilter(),
    plangExts: emptyFilter(),
    platforms: emptyFilter(),
    tags: emptyFilter(),
    typeSystems: emptyFilter(),
    writtenIn: emptyFilter(),
  };

  matchAll(pl: NPlang): boolean {
    if (!this.matchesPlangName(pl)) return false;
    // if (!this.matchesFirstAppearedMinDate(pl)) return false;
    // if (!this.matchesReleaseMinDate(pl)) return false;
    // if (!this.machesHasLogo(pl)) return false;
    // if (!this.matchesHasReleases(pl)) return false;
    // if (!this.matchesHasWebsites(pl)) return false;
    // if (!this.machesHasWikipedia(pl)) return false;
    // if (!this.machtesIsTranspiler(pl)) return false;
    // if (!this.matchesIsMainstream(pl)) return false;
    // if (!this.matchesDialectOf(pl)) return false;
    // if (!this.matchesImplements(pl)) return false;
    // if (!this.matchesInfluencedBy(pl)) return false;
    // if (!this.matchesLicenses(pl)) return false;
    // if (!this.matchesParadigms(pl)) return false;
    // if (!this.matchesPlangExts(pl)) return false;
    // if (!this.matchesPlatforms(pl)) return false;
    // if (!this.matchesTags(pl)) return false;
    // if (!this.matchesTypeSystems(pl)) return false;
    // if (!this.matchesWrittenIn(pl)) return false;

    return true;
  }

  matchesPlangName(pl: NPlang): boolean {
    const { plangName } = this.values;
    return !plangName || pl.matchesName(plangName);
  }

  matchesFirstAppearedMinDate(pl: NPlang): boolean {
    const { firstAppearedMinDate } = this.values;
    return !firstAppearedMinDate || pl.firstAppearedAfter(firstAppearedMinDate);
  }

  matchesReleaseMinDate(pl: NPlang): boolean {
    const { releaseMinDate } = this.values;
    return !releaseMinDate || pl.hasReleases(releaseMinDate);
  }

  machesHasLogo(pl: NPlang): boolean {
    return !this.values.hasLogo || pl.hasLogo;
  }

  matchesHasReleases(pl: NPlang): boolean {
    return !this.values.hasReleases || pl.hasReleases();
  }

  matchesHasWebsites(pl: NPlang): boolean {
    return !this.values.hasWebsites || pl.hasWebsites;
  }

  machesHasWikipedia(pl: NPlang): boolean {
    return !this.values.hasWikipedia || pl.hasWikipedia;
  }

  machtesIsTranspiler(pl: NPlang): boolean {
    return !this.values.isTranspiler || pl.data.isTranspiler === true;
  }

  matchesIsMainstream(pl: NPlang): boolean {
    return !this.values.isMainstream || pl.data.isMainstream === true;
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
