import { arrayMerge } from "@plangs/auxiliar/array";
import { IterTap } from "@plangs/auxiliar/iter_tap";

import * as Gen from "./generated";

import { FieldGithub, FieldReleases } from "./vertex_data_fields";
import type { Release, StrDate, VPlangData } from "./vertex_data_schemas";

// Shortcuts to the configuration objects.
export const rel = Gen.PlangsGraphBase.relConfig;
export const prop = Gen.PlangsGraphBase.propConfig;

export class PlangsGraph extends Gen.PlangsGraphBase {
  /** We can derive / infer some data from the existing data. */
  materialize(): this {
    // Bundle -> Tool -> Plang is transitive: a bundle supports all the languages supported by its tools.
    for (const bundle of this.bundle.values) {
      for (const tool of bundle.relTools.values) {
        bundle.relPlangs.add(...tool.relPlangs.keys);
      }
    }

    // Data can say a langauge is a transpiler, but we can also infer it.
    // If a language compiles to another, then it is a transpiler.
    for (const plang of this.plang.values) {
      if (!plang.isTranspiler && plang.relCompilesTo.size > 0) {
        plang.data.isTranspiler = true;
      }
    }

    return this;
  }
}

export class VApp extends Gen.VAppBase {
  get github(): FieldGithub {
    return new FieldGithub(this);
  }

  get releases(): FieldReleases {
    return new FieldReleases(this);
  }
}

export class VBundle extends Gen.VBundleBase {}

export class VCommunity extends Gen.VCommunityBase {}

export class VLearning extends Gen.VLearningBase {}

export class VLibrary extends Gen.VLibraryBase {
  get github(): FieldGithub {
    return new FieldGithub(this);
  }

  get releases(): FieldReleases {
    return new FieldReleases(this);
  }
}

export class VLicense extends Gen.VLicenseBase {
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

export class VParadigm extends Gen.VParadigmBase {}

export class VPlang extends Gen.VPlangBase {
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

  /** Override merge to handle some array fields better. */
  override merge(data: Partial<VPlangData>): this {
    const { extensions, filenames, releases, ...rest } = data;

    if (extensions) this.addExtensions(extensions);
    if (filenames) this.addFilenames(filenames);
    if (releases) this.addReleases(releases);

    return super.merge(rest as VPlangData);
  }

  get extensions(): IterTap<string> {
    return new IterTap(this.data.extensions);
  }

  get github(): FieldGithub {
    return new FieldGithub(this);
  }

  get isPopular(): boolean {
    const { githubPopular, languishRanking } = this.data;
    return !!githubPopular || (typeof languishRanking === "number" && languishRanking <= 25);
  }

  get isTranspiler(): boolean {
    return this.data.isTranspiler === true;
  }

  override get ranking(): number | undefined {
    return this.data.languishRanking;
  }

  get releases(): FieldReleases {
    return new FieldReleases(this);
  }

  get stackovTags(): IterTap<string> {
    return new IterTap(this.data.stackovTags);
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

export class VPlatform extends Gen.VPlatformBase {}

export class VTag extends Gen.VTagBase {}

export class VTool extends Gen.VToolBase {
  get github(): FieldGithub {
    return new FieldGithub(this);
  }

  get releases(): FieldReleases {
    return new FieldReleases(this);
  }
}

export class VTypeSystem extends Gen.VTypeSystemBase {}

export class VSubsystem extends Gen.VSubsystemBase {
  get github(): FieldGithub {
    return new FieldGithub(this);
  }

  get releases(): FieldReleases {
    return new FieldReleases(this);
  }
}

export class VPost extends Gen.VPostBase {
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
}
