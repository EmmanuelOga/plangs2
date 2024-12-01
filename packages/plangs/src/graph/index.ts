import { arrayMerge } from "@plangs/auxiliar/array";
import { IterTap } from "@plangs/auxiliar/iter_tap";
import type { AnyValue } from "@plangs/auxiliar/value";
import { type PlangFacetKey, plangMatches } from "@plangs/plangs/facets/plangs";

import {
  PlangsGraphBase,
  VAppBase,
  VBundleBase,
  VCommunityBase,
  VLearningBase,
  VLibraryBase,
  VLicenseBase,
  VParadigmBase,
  VPlangBase,
  type VPlangKey,
  VPlatformBase,
  VPostBase,
  VTagBase,
  VToolBase,
  type VToolKey,
  VTypeSystemBase,
} from "./generated";

import { type ToolFacetKey, toolMatches } from "@plangs/plangs/facets/tools";
import { FieldGithub, FieldReleases } from "./vertex_data_fields";
import type { Release, StrDate } from "./vertex_data_schemas";

export class PlangsGraph extends PlangsGraphBase {
  filterPlangs(values: Map<PlangFacetKey, AnyValue>, limit = -1): Set<VPlangKey> {
    const keys = new Set<VPlangKey>();
    for (const pl of this.plang.values) {
      if (limit >= 0 && keys.size >= limit) break;
      if (plangMatches(pl, values)) keys.add(pl.key);
    }
    return keys;
  }

  filterTools(values: Map<ToolFacetKey, AnyValue>, limit = -1): Set<VToolKey> {
    const keys = new Set<VToolKey>();
    for (const pl of this.tool.values) {
      if (limit >= 0 && keys.size >= limit) break;
      if (toolMatches(pl, values)) keys.add(pl.key);
    }
    return keys;
  }

  /**
   * We can derive / infer some data from the existing data.
   * We may implement some sort of inference engine in the future,
   * but for now we can just materialize some simple rules.
   */
  materialize(): this {
    // All languages implement themselves.
    for (const pl of this.plang.values) pl.relImplements.add(pl.key);

    // For each bundle, a bundle supports a language if any of its tools support that language.
    for (const bundle of this.bundle.values) {
      for (const tool of bundle.relTools.values) {
        bundle.relPlangs.add(...tool.relPlangs.keys);
      }
    }

    return this;
  }
}

export class VApp extends VAppBase {
  get github(): FieldGithub {
    return new FieldGithub(this);
  }

  get releases(): FieldReleases {
    return new FieldReleases(this);
  }
}

export class VPlang extends VPlangBase {
  addExtensions(exts: string[]): this {
    arrayMerge((this.data.extensions ??= []), exts);
    return this;
  }

  addFilenames(filenames: string[]): this {
    arrayMerge((this.data.filenames ??= []), filenames);
    return this;
  }

  addReleases(releases: Release[]): this {
    arrayMerge((this.data.releases ??= []), releases, (r1, r2) => r1.version === r2.version);
    return this;
  }

  addStackovTags(stackovTags: string[]): this {
    arrayMerge((this.data.stackovTags ??= []), stackovTags);
    return this;
  }

  get extensions(): IterTap<string> {
    return new IterTap(this.data.extensions);
  }

  get github(): FieldGithub {
    return new FieldGithub(this);
  }

  get href(): string {
    return `/${this.plainKey}`;
  }

  get isPopular(): boolean {
    const { githubPopular, languishRanking } = this.data;
    return !!githubPopular || (typeof languishRanking === "number" && languishRanking <= 25);
  }

  get isTranspiler(): boolean {
    return this.data.isTranspiler === true;
  }

  get ranking(): number | undefined {
    return this.data.languishRanking;
  }

  get releases(): FieldReleases {
    return new FieldReleases(this);
  }

  get stackovTags(): IterTap<string> {
    return new IterTap(this.data.stackovTags);
  }

  get urlReddit(): string | undefined {
    return this.data.extRedditPath ? `https://reddit.com/${this.data.extRedditPath}` : undefined;
  }

  get urlRepository(): string | undefined {
    return this.data.extRepositoryURL;
  }

  get urlStackov(): string | undefined {
    return this.stackovTags ? `https://stackoverflow.com/questions/tagged/${this.stackovTags.join("+")}` : undefined;
  }

  get urlWikipedia(): string | undefined {
    return this.data.extWikipediaPath ? `https://github.com/${this.data.extGithubPath}` : undefined;
  }

  /**
   * Builds (non-recursively) a set of all languages that this language is related to, not including self.
   * A language is related if it is compiled to, is a dialect of, or implements this language.
   */
  family(opt = { compilesTo: true, dialectOf: true, implements: true }): Set<VPlang> {
    const set = new Set<VPlang>([]);
    if (opt.compilesTo) for (const pl of this.relCompilesTo.values) set.add(pl);
    if (opt.dialectOf) for (const pl of this.relDialectOf.values) set.add(pl);
    if (opt.implements) for (const pl of this.relImplements.values) set.add(pl);
    return set;
  }
}

export class VCommunity extends VCommunityBase {}

export class VLearning extends VLearningBase {}

export class VLibrary extends VLibraryBase {
  get github(): FieldGithub {
    return new FieldGithub(this);
  }

  get releases(): FieldReleases {
    return new FieldReleases(this);
  }
}

export class VLicense extends VLicenseBase {
  get spdx(): string | undefined {
    return this.data.spdx;
  }

  get isFSFLibre(): boolean {
    return this.data.isFSFLibre === true;
  }

  get isOSIApproved(): boolean {
    return this.data.isOSIApproved === true;
  }
}

export class VParadigm extends VParadigmBase {}

export class VPlatform extends VPlatformBase {}

export class VTag extends VTagBase {}

export class VTool extends VToolBase {
  get github(): FieldGithub {
    return new FieldGithub(this);
  }

  get releases(): FieldReleases {
    return new FieldReleases(this);
  }
}

export class VTypeSystem extends VTypeSystemBase {}

export class VBundle extends VBundleBase {}

export class VPost extends VPostBase {
  set path(path: string) {
    this.data.path = path;
  }

  get author(): string | undefined {
    return this.data.author;
  }

  get date(): StrDate | undefined {
    return this.data.date;
  }

  get path(): string | undefined {
    return this.data.path;
  }

  get title(): string | undefined {
    return this.name;
  }

  get href(): string {
    return `/blog/${this.plainKey}`;
  }
}
