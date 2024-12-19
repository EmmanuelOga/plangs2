/**
 * Methods to work with vertex data fields.
 *
 * - Having these wrappers helps avoid duplication of methods that do the same thing accross different vertices.
 * - Wrappers are passed the vertex object instead of the data directly since eventually we will have setters that should modify the data in the vertex.
 */

import { IterTap } from "@plangs/auxiliar/iter_tap";
import { isRecent, parseMonth, parseYear, strDateCompare } from "@plangs/plangs/auxiliar/str_date";

import type { GithubRepo, Release, StrDate } from "./vertex_data_schemas";

/** Wraps a single release. */
export class ReleaseWrapper {
  constructor(private readonly release: Release) {}

  get version(): string | undefined {
    return this.release.version;
  }

  get date(): StrDate | undefined {
    return this.release.date;
  }

  get year(): number | undefined {
    return parseYear(this.release.date);
  }

  get month(): number | undefined {
    return parseMonth(this.release.date);
  }

  get yearMonth() {
    const { year, month } = this;
    return year && month ? `${month.toString().padStart(2, "0")}/${year}` : year;
  }

  isRecent(referenceDate: StrDate): boolean {
    return isRecent(this.date, referenceDate);
  }

  compareDate(other: ReleaseWrapper): number {
    return strDateCompare(this.date, other.date);
  }
}

/** Wraps a list of releases. */
export class FieldReleases {
  constructor(private readonly vertex: { data: { releases?: Release[] } }) {}

  get all(): IterTap<ReleaseWrapper> {
    return new IterTap(this.vertex.data.releases).map(rel => new ReleaseWrapper(rel));
  }

  get last(): ReleaseWrapper | undefined {
    const all = this.all;
    if (all.size === 0) return undefined;
    if (all.size === 1) return all.get(0);
    return all.sort((r1, r2) => r1.compareDate(r2))[0];
  }
}

/** Wraps a StrDate field. */
export class FieldStrDate<Key extends string> {
  constructor(
    private readonly key: Key,
    private readonly vertex: { data: Partial<Record<Key, StrDate | undefined>> },
  ) {}

  get value(): StrDate | undefined {
    return this.vertex.data[this.key];
  }

  get year(): number | undefined {
    return parseYear(this.value);
  }

  get strYear(): string | undefined {
    return this.value?.slice(0, 4);
  }

  get month(): number | undefined {
    return parseMonth(this.value);
  }

  isRecent(referenceDate: StrDate): boolean {
    return isRecent(this.value, referenceDate);
  }
}

/**
 * Wraps Github fields: repo stars and repo path
 * The releases field is present in Github but wrapped by FieldReleases.
 */
export class FieldGithub {
  constructor(private readonly vertex: { data: Partial<GithubRepo> }) {}

  /** Returns -1 if the number of stars is unknown. */
  get stars(): number {
    return this.vertex.data.githubStars ?? -1;
  }

  get path(): string | undefined {
    return this.vertex.data.extGithubPath;
  }

  get url(): string | undefined {
    return this.path ? `https://github.com/${this.path}` : undefined;
  }
}
