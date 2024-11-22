import { arrayMerge } from "@plangs/auxiliar/array";
import { BaseGraph, Edge, EdgeMap, Node, NodeMap } from "@plangs/auxiliar/graph";
import { IterTap } from "@plangs/auxiliar/iter_tap";
import type { AnyValue } from "@plangs/auxiliar/value";

import { type PlangFacetKey, plangMatches } from "./facets/plangs";

import { FieldGithub, FieldReleases, FieldStrDate } from "./auxiliar/data";
import type {
  CommonEdgeData,
  CommonNodeData,
  E,
  GithubRepo,
  Image,
  Link,
  N,
  NAppData,
  NLearningData,
  NLibraryData,
  NLicenseData,
  NPlangData,
  NPostData,
  NToolData,
  Release,
  StrDate,
} from "./schema";
export type { E, N } from "./schema";

/** Alias for better readability. */
export type G = PlangsGraph;

export type AnyNode = NBase<N, CommonNodeData>;

export type AnyEdge = EBase<AnyNode, AnyNode, CommonEdgeData>;

export class PlangsGraph extends BaseGraph<N, E, G> {
  #nodeMap = <TN extends AnyNode>(ctor: new (g: G, key: TN["key"]) => TN) => new NodeMap<G, TN>(key => new ctor(this, key));
  #edgeMap = <TE extends AnyEdge>(ctor: new (g: G, from: TE["from"], to: TE["to"]) => TE) =>
    new EdgeMap<G, TE>((from, to) => new ctor(this, from, to));

  override readonly nodes = {
    app: this.#nodeMap(NApp),
    bundle: this.#nodeMap(NBundle),
    community: this.#nodeMap(NCommunity),
    learning: this.#nodeMap(NLearning),
    lib: this.#nodeMap(NLibrary),
    license: this.#nodeMap(NLicense),
    paradigm: this.#nodeMap(NParadigm),
    pl: this.#nodeMap(NPlang),
    plat: this.#nodeMap(NPlatform),
    post: this.#nodeMap(NPost),
    tag: this.#nodeMap(NTag),
    tool: this.#nodeMap(NTool),
    tsys: this.#nodeMap(NTsys),
  } as const;

  override readonly edges = {
    app: this.#edgeMap(EApp),
    bundle: this.#edgeMap(EBundle),
    commPl: this.#edgeMap(ECommPl),
    commTag: this.#edgeMap(ECommTag),
    compilesTo: this.#edgeMap(ECompilesTo),
    dialect: this.#edgeMap(EDialect),
    impl: this.#edgeMap(EImpl),
    influence: this.#edgeMap(EInfluence),
    learningPl: this.#edgeMap(ELearningPl),
    learningTag: this.#edgeMap(ELearningTag),
    learningComm: this.#edgeMap(ELearningComm),
    lib: this.#edgeMap(ELib),
    license: this.#edgeMap(ELicense),
    paradigm: this.#edgeMap(EParadigm),
    plBundle: this.#edgeMap(EPlBundle),
    plat: this.#edgeMap(EPlat),
    post: this.#edgeMap(EPost),
    tag: this.#edgeMap(ETag),
    tool: this.#edgeMap(ETool),
    tsys: this.#edgeMap(ETsys),
    writtenIn: this.#edgeMap(EWrittenIn),
  } as const;

  /** Find all plangs that match the given filters. */
  plangs(values: Map<PlangFacetKey, AnyValue>, limit = -1): Set<NPlang["key"]> {
    const keys = new Set<NPlang["key"]>();
    for (const pl of this.nodes.pl.values) {
      if (limit >= 0 && keys.size >= limit) break;
      if (plangMatches(pl, values)) keys.add(pl.key);
    }
    return keys;
  }
}

/** Base type for data on all nodes. */
export abstract class NBase<Prefix extends N, Data extends CommonNodeData> extends Node<PlangsGraph, `${Prefix}+${string}`, Data> {
  get name(): string {
    return this.data.name ? this.data.name : this.plainKey;
  }

  get description(): string {
    return this.data.description || this.name;
  }

  get urlHome(): string | undefined {
    return this.data.extHomeURL;
  }

  get links(): IterTap<Link> {
    return new IterTap(this.data.links);
  }

  get images() {
    return new IterTap(this.data.images);
  }

  get keywords(): IterTap<string> {
    return new IterTap(this.data.keywords);
  }

  get keywordsRegexp(): RegExp | undefined {
    const { keywords } = this.data;
    if (!keywords) return undefined;
    const lenient = keywords.map(k => k.replaceAll(/[- ]/g, "\\s*.?\\s*"));
    return new RegExp(`\\b(${lenient.join("|")})\\b`, "i");
  }

  get thumbUrl(): string | undefined {
    return (this.images.find(({ kind }) => kind === "logo") ?? this.images.first)?.url;
  }

  addImages(images: Image[]): this {
    arrayMerge((this.data.images ??= []), images, (i1, i2) => i1.url === i2.url);
    return this;
  }

  addLinks(links: Link[]): this {
    arrayMerge((this.data.links ??= []), links, (l1, l2) => l1.url === l2.url);
    return this;
  }
}

/** An app Node, for any sort of application. */
export class NApp extends NBase<"app", NAppData> {
  static readonly kind: N = "app";
  override kind = NApp.kind;

  get created(): FieldStrDate<"created"> {
    return new FieldStrDate("created", this);
  }

  get github(): FieldGithub {
    return new FieldGithub(this);
  }

  get releases(): FieldReleases {
    return new FieldReleases(this);
  }

  addPlangs(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.app.connect(other, this.key);
    return this;
  }
}

/** A programming language Node. */
export class NPlang extends NBase<"pl", NPlangData> {
  static readonly kind: N = "pl";
  override kind = NPlang.kind;

  readonly relApps = this.graph.edges.app.relFrom(this);
  readonly relCompilesTo = this.graph.edges.compilesTo.relFrom(this);
  readonly relDialectOf = this.graph.edges.dialect.relFrom(this);
  readonly relImplements = this.graph.edges.impl.relFrom(this);
  readonly relInfluenced = this.graph.edges.influence.relTo(this);
  readonly relInfluencedBy = this.graph.edges.influence.relFrom(this);
  readonly relLibs = this.graph.edges.lib.relFrom(this);
  readonly relLicenses = this.graph.edges.license.relFrom(this);
  readonly relParadigms = this.graph.edges.paradigm.relFrom(this);
  readonly relPlBundles = this.graph.edges.plBundle.relFrom(this);
  readonly relPlatforms = this.graph.edges.plat.relFrom(this);
  readonly relPosts = this.graph.edges.post.relFrom(this);
  readonly relTags = this.graph.edges.tag.relFrom(this);
  readonly relTools = this.graph.edges.tool.relFrom(this);
  readonly relTsys = this.graph.edges.tsys.relFrom(this);
  readonly relWrittenIn = this.graph.edges.writtenIn.relFrom(this);

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

  get created(): FieldStrDate<"created"> {
    return new FieldStrDate("created", this);
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
  family(opt = { compilesTo: true, dialectOf: true, implements: true }): Set<NPlang> {
    const set = new Set<NPlang>([]);
    if (opt.compilesTo) for (const pl of this.relCompilesTo.nodes()) set.add(pl);
    if (opt.dialectOf) for (const pl of this.relDialectOf.nodes()) set.add(pl);
    if (opt.implements) for (const pl of this.relImplements.nodes()) set.add(pl);
    return set;
  }
}

/** A community node, for linking to websites, forums, discord channels, conferences, etc. */
export class NCommunity extends NBase<"community", CommonNodeData> {
  static readonly kind: N = "community";
  override kind = NCommunity.kind;

  readonly relPlangs = this.graph.edges.commPl.relTo(this);
  readonly relTags = this.graph.edges.commTag.relFrom(this);
}

/** Short for Learning Resource, things like books, courses, video playlists, etc. */
export class NLearning extends NBase<"learning", NLearningData> {
  static readonly kind: N = "learning";
  override kind = NLearning.kind;

  readonly relCommunities = this.graph.edges.learningComm.relFrom(this);
  readonly relPlangs = this.graph.edges.learningPl.relTo(this);
  readonly relTags = this.graph.edges.learningTag.relFrom(this);
}

/** A library Node, for software libraries or frameworks, like jQuery, Rails, etc. */
export class NLibrary extends NBase<"lib", CommonNodeData & GithubRepo> {
  static readonly kind: N = "lib";
  override kind = NLibrary.kind;

  get created(): FieldStrDate<"created"> {
    return new FieldStrDate("created", this);
  }

  get github(): FieldGithub {
    return new FieldGithub(this);
  }

  get releases(): FieldReleases {
    return new FieldReleases(this);
  }

  readonly relPlangs = this.graph.edges.lib.relTo(this);
}

/** A License Node, e.g., MIT, GPL, etc. */
export class NLicense extends NBase<"license", NLicenseData> {
  static readonly kind: N = "license";
  override kind: N = NLicense.kind;

  get spdx(): string | undefined {
    return this.data.spdx;
  }

  get isFSFLibre(): boolean {
    return this.data.isFSFLibre === true;
  }

  get isOSIApproved(): boolean {
    return this.data.isOSIApproved === true;
  }

  readonly relPlangs = this.graph.edges.license.relTo(this);
}

/** A Paradigm Node, e.g., Functional, Imperative, etc. */
export class NParadigm extends NBase<"paradigm", CommonNodeData> {
  static readonly kind: N = "paradigm";
  override kind: N = NParadigm.kind;
}

/** A Platform Node for operating systems or architectures, e.g., Linux, Windows, ARM etc. */
export class NPlatform extends NBase<"plat", CommonNodeData> {
  static readonly kind: N = "plat" as const;
  override kind = NPlatform.kind;
}

/** A generic tag. */
export class NTag extends NBase<"tag", CommonNodeData> {
  static readonly kind: N = "tag";
  override kind = NTag.kind;
}

/** A tool Node, e.g., Version Manager, Linter, Formatter,  etc. */
export class NTool extends NBase<"tool", CommonNodeData & GithubRepo> {
  static readonly kind: N = "tool";
  override kind = NTool.kind;

  get created(): FieldStrDate<"created"> {
    return new FieldStrDate("created", this);
  }

  get github(): FieldGithub {
    return new FieldGithub(this);
  }

  get releases(): FieldReleases {
    return new FieldReleases(this);
  }

  addPlangs(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.tool.connect(other, this.key);
    return this;
  }
}

/** A Type System Node, e.g., OOP, Duck, Dynamic, etc. */
export class NTsys extends NBase<"tsys", CommonNodeData> {
  static readonly kind: N = "tsys";
  override kind = NTsys.kind;
}

/** Bundle of tools. */
export class NBundle extends NBase<"bundle", CommonNodeData> {
  static readonly kind: N = "bundle";
  override kind = NBundle.kind;

  readonly relTools = this.graph.edges.bundle.relFrom(this);
  readonly relPlangs = this.graph.edges.plBundle.relTo(this);
}

/**
 * A blog post entry.
 * Repurposes the `websites` field to point to plangs blog posts.
 * The blog posts are scanned at build time and added to the graph.
 */
export class NPost extends NBase<"post", NPostData> {
  static readonly kind: N = "post";
  override kind = NPost.kind;

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

  readonly relPlangs = this.graph.edges.post.relTo(this);
}

////////////////////////////////////////////////////////////////////////////////
// Edge Types
////////////////////////////////////////////////////////////////////////////////

/** Base type for data on all edges. */
export abstract class EBase<T_From extends AnyNode, T_To extends AnyNode, T_Data extends CommonEdgeData> extends Edge<
  PlangsGraph,
  T_From,
  T_To,
  T_Data
> {}

// biome-ignore format: keep it concise.
export class EApp extends EBase<NPlang, NApp, CommonEdgeData> {
  override kind: E = "app";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NApp | undefined { return this.graph.nodes.app.get(this.to); }
}

/** Edge from a tool to a bundle. */
// biome-ignore format: keep it concise.
export class EBundle extends EBase<NBundle, NTool, CommonEdgeData> {
  override kind: E = "bundle";
  get nodeFrom(): NBundle | undefined { return this.graph.nodes.bundle.get(this.from); }
  get nodeTo(): NTool | undefined { return this.graph.nodes.tool.get(this.to); }
}

// biome-ignore format: keep it concise.
export class ECompilesTo extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "compilesTo";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NPlang | undefined { return this.graph.nodes.pl.get(this.to); }
}

// biome-ignore format: keep it concise.
export class EDialect extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "dialect";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NPlang | undefined { return this.graph.nodes.pl.get(this.to); }
}

// biome-ignore format: keep it concise.
export class ELicense extends EBase<NPlang, NLicense, CommonEdgeData> {
  override kind: E = "license";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NLicense | undefined { return this.graph.nodes.license.get(this.to); }
}

// biome-ignore format: keep it concise.
export class EImpl extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "impl";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NPlang | undefined { return this.graph.nodes.pl.get(this.to); }
}

// biome-ignore format: keep it concise.
export class EInfluence extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "influence";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NPlang | undefined { return this.graph.nodes.pl.get(this.to); }
}

// biome-ignore format: keep it concise.
export class EParadigm extends EBase<NPlang, NParadigm, CommonEdgeData> {
  override kind: E = "paradigm";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NParadigm | undefined { return this.graph.nodes.paradigm.get(this.to); }
}

// biome-ignore format: keep it concise.
export class ETsys extends EBase<NPlang, NTsys, CommonEdgeData> {
  override kind: E = "tsys";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NTsys | undefined { return this.graph.nodes.tsys.get(this.to); }
}

/** Edge from a PLang to a Bundle. */
// biome-ignore format: keep it concise.
export class EPlBundle extends EBase<NPlang, NBundle, CommonEdgeData> {
  override kind: E = "plBundle";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NBundle | undefined { return this.graph.nodes.bundle.get(this.to); }
}

// biome-ignore format: keep it concise.
export class EPlat extends EBase<NPlang, NPlatform, CommonEdgeData> {
  override kind: E = "plat";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NPlatform | undefined { return this.graph.nodes.plat.get(this.to); }
}

// biome-ignore format: keep it concise.
export class EPost extends EBase<NPlang, NPost, CommonEdgeData> {
  override kind: E = "post";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NPost | undefined { return this.graph.nodes.post.get(this.to); }
}

// biome-ignore format: keep it concise.
export class ELib extends EBase<NPlang, NLibrary, NLibraryData> {
  override kind: E = "lib";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NLibrary | undefined { return this.graph.nodes.lib.get(this.to); }
}

// biome-ignore format: keep it concise.
export class ETag extends EBase<NPlang, NTag, CommonEdgeData> {
  override kind: E = "tag";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NTag | undefined { return this.graph.nodes.tag.get(this.to); }
}

// biome-ignore format: keep it concise.
export class ETool extends EBase<NPlang, NTool, NToolData> {
  override kind: E = "tool";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NTool | undefined { return this.graph.nodes.tool.get(this.to); }
}

// biome-ignore format: keep it concise.
export class EWrittenIn extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "writtenIn";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NPlang | undefined { return this.graph.nodes.pl.get(this.to); }
}

// biome-ignore format: keep it concise.
export class ECommPl extends EBase<NPlang, NCommunity, CommonEdgeData> {
  override kind: E = "commPl";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NCommunity | undefined { return this.graph.nodes.community.get(this.to); }
}

// biome-ignore format: keep it concise.
export class ECommTag extends EBase<NCommunity, NTag, CommonEdgeData> {
  override kind: E = "commTag";
  get nodeFrom(): NCommunity | undefined { return this.graph.nodes.community.get(this.from); }
  get nodeTo(): NTag | undefined { return this.graph.nodes.tag.get(this.to); }
}

// biome-ignore format: keep it concise.
export class ELearningPl extends EBase<NPlang, NLearning, CommonEdgeData> {
  override kind: E = "learningPl";
  get nodeFrom(): NPlang | undefined { return this.graph.nodes.pl.get(this.from); }
  get nodeTo(): NLearning | undefined { return this.graph.nodes.learning.get(this.to); }
}

// biome-ignore format: keep it concise.
export class ELearningTag extends EBase<NLearning, NTag, CommonEdgeData> {
  override kind: E = "learningTag";
  get nodeFrom(): NLearning | undefined { return this.graph.nodes.learning.get(this.from); }
  get nodeTo(): NTag | undefined { return this.graph.nodes.tag.get(this.to); }
}

// biome-ignore format: keep it concise.
export class ELearningComm extends EBase<NLearning, NCommunity, CommonEdgeData> {
  override kind: E = "learningTag";
  get nodeFrom(): NLearning | undefined { return this.graph.nodes.learning.get(this.from); }
  get nodeTo(): NCommunity | undefined { return this.graph.nodes.community.get(this.to); }
}
