/**
 * Methods to work with Node data fields.
 *
 * - Having these wrappers helps avoid duplication of methods that do the same thing accross different nodes.
 * - Wrappers are passed the node object instead of the data directly since eventually we will have setters that should modify the data in the node.
 */

import { IterTap } from "@plangs/auxiliar/iter_tap";
import { isRecent, parseMonth, parseYear, strDateCompare } from "./auxiliar/str_date";
import type { GithubRepo, Release, StrDate } from "./schema";

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

  isRecent(referenceDate: StrDate): boolean {
    return isRecent(this.date, referenceDate);
  }

  compareDate(other: ReleaseWrapper): number {
    return strDateCompare(this.date, other.date);
  }
}

/** Wraps a list of releases. */
export class FieldReleases {
  constructor(private readonly node: { data: { releases?: Release[] } }) {}

  get all(): IterTap<ReleaseWrapper> {
    return new IterTap(this.node.data.releases).map(rel => new ReleaseWrapper(rel));
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
    private readonly node: { data: Partial<Record<Key, StrDate | undefined>> },
  ) {}

  get value(): StrDate | undefined {
    return this.node.data[this.key];
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
  constructor(private readonly node: { data: Partial<GithubRepo> }) {}

  get stars(): number | undefined {
    return this.node.data.githubStars;
  }

  get path(): string | undefined {
    return this.node.data.extGithubPath;
  }

  get url(): string | undefined {
    return this.path ? `https://github.com/${this.path}` : undefined;
  }
}
