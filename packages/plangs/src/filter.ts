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
    return (
      this.matchesPlangName(pl) &&
      this.matchesFirstAppearedMinDate(pl) &&
      this.matchesReleaseMinDate(pl) &&
      this.machesHasLogo(pl) &&
      this.matchesHasReleases(pl) &&
      this.matchesHasWebsites(pl) &&
      this.machesHasWikipedia(pl) &&
      this.machtesIsTranspiler(pl) &&
      this.matchesIsMainstream(pl) &&
      this.matchesDialectOf(pl) &&
      this.matchesImplements(pl) &&
      this.matchesInfluencedBy(pl) &&
      this.matchesLicenses(pl) &&
      this.matchesParadigms(pl) &&
      this.matchesPlangExts(pl) &&
      this.matchesPlatforms(pl) &&
      this.matchesTags(pl) &&
      this.matchesTypeSystems(pl) &&
      this.matchesWrittenIn(pl)
    );
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
