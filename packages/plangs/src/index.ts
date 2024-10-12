import { BaseGraph, Edge, EdgeMap, Node, NodeMap } from "@plangs/graph";
import { IterTap, MapTap, arrayMerge } from "@plangs/graph/auxiliar";

import type { PlangFilters } from "./filter";

import type { CommonEdgeData, CommonNodeData, E, Image, Link, N, NLicenseData, NPlangData, NPostData, Release, StrDate } from "./schema";
export type { E, N } from "./schema";

/** Alias for better readability. */
export type G = PlangsGraph;

export type AnyNode = NBase<N, CommonNodeData>;

export type AnyEdge = EBase<AnyNode, AnyNode, CommonEdgeData>;

export class PlangsGraph extends BaseGraph<N, E, G> {
  #nodeMap = <TN extends AnyNode>(ctor: new (g: G, key: TN["key"]) => TN) => new NodeMap<G, TN>(key => new ctor(this, key));
  #edgeMap = <TE extends AnyEdge>(ctor: new (g: G, from: TE["from"], to: TE["to"]) => TE) =>
    new EdgeMap<G, TE>((from, to) => new ctor(this, from, to));

  readonly nodes = {
    app: this.#nodeMap(NApp),
    post: this.#nodeMap(NPost),
    bundle: this.#nodeMap(NBundle),
    lib: this.#nodeMap(NLibrary),
    license: this.#nodeMap(NLicense),
    paradigm: this.#nodeMap(NParadigm),
    pl: this.#nodeMap(NPlang),
    plat: this.#nodeMap(NPlatform),
    tag: this.#nodeMap(NTag),
    tool: this.#nodeMap(NTool),
    tsys: this.#nodeMap(NTsys),
  } as const;

  readonly edges = {
    app: this.#edgeMap(EApp),
    bundle: this.#edgeMap(EBundle),
    compilesTo: this.#edgeMap(ECompilesTo),
    dialect: this.#edgeMap(EDialect),
    impl: this.#edgeMap(EImpl),
    influence: this.#edgeMap(EInfluence),
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
  plangs(f: PlangFilters, limit = -1): Set<NPlang["key"]> {
    const keys = new Set<NPlang["key"]>();
    for (const pl of this.nodes.pl.values) {
      if (limit >= 0 && keys.size >= limit) break;
      if (f.matchesAll(pl)) keys.add(pl.key);
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

  get websites(): IterTap<Link> {
    return new IterTap(this.data.websites);
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

  addWebsites(links: Link[]): this {
    arrayMerge((this.data.websites ??= []), links, (l1, l2) => l1.href === l2.href);
    return this;
  }
}

/** A programming language Node. */
export class NPlang extends NBase<"pl", NPlangData> {
  static readonly kind: N = "pl";
  override kind = NPlang.kind;

  get href(): string {
    return `/${this.plainKey}`;
  }

  get extensions(): IterTap<string> {
    return new IterTap(this.data.extensions);
  }

  get firstAppeared(): StrDate | undefined {
    return this.data.firstAppeared;
  }

  firstAppearedAfter(minDate: StrDate): boolean {
    return !!this.data.firstAppeared && this.data.firstAppeared >= minDate;
  }

  get images() {
    return new IterTap(this.data.images);
  }

  get thumbUrl(): string | undefined {
    return (this.images.find(({ kind }) => kind === "logo") ?? this.images.first)?.url;
  }

  get isTranspiler(): boolean {
    return this.data.isTranspiler === true;
  }

  get isMainstream(): boolean {
    return this.data.isMainstream === true;
  }

  get releases(): IterTap<Release> {
    return new IterTap(this.data.releases);
  }

  get lastRelease(): Release | undefined {
    const rel = this.releases.sort((r1, r2) => r2.date?.localeCompare(r1.date ?? "") ?? 0);
    if (rel.length === 0) return undefined;
    return rel[0];
  }

  addExtensions(exts: string[]): this {
    arrayMerge((this.data.extensions ??= []), exts);
    return this;
  }

  addImages(images: Image[]): this {
    arrayMerge((this.data.images ??= []), images, (i1, i2) => i1.url === i2.url);
    return this;
  }

  addReleases(releases: Release[]): this {
    arrayMerge((this.data.releases ??= []), releases, (r1, r2) => r1.version === r2.version);
    return this;
  }

  addCompilesTo(others: NPlang["key"][]): this {
    if (others.length > 0) this.data.isTranspiler = true;
    for (const other of others) this.graph.edges.compilesTo.connect(this.key, other);
    return this;
  }

  addDialectOf(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.dialect.connect(this.key, other);
    return this;
  }

  addLicenses(others: NLicense["key"][]): this {
    for (const other of others) this.graph.edges.license.connect(this.key, other);
    return this;
  }

  addImplements(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.impl.connect(this.key, other);
    return this;
  }

  addInfluencedBy(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.influence.connect(this.key, other);
    return this;
  }

  addLibraries(others: NLibrary["key"][]): this {
    for (const other of others) this.graph.edges.lib.connect(this.key, other);
    return this;
  }

  addParadigms(others: NParadigm["key"][]): this {
    for (const otherkey of others) this.graph.edges.paradigm.connect(this.key, otherkey);
    return this;
  }

  addPlatforms(others: NPlatform["key"][]): this {
    for (const other of others) this.graph.edges.plat.connect(this.key, other);
    return this;
  }

  addTags(others: NTag["key"][]): this {
    for (const other of others) this.graph.edges.tag.connect(this.key, other);
    return this;
  }

  addTools(others: NTool["key"][]): this {
    for (const other of others) this.graph.edges.tool.connect(this.key, other);
    return this;
  }

  addTypeSystems(others: NTsys["key"][]): this {
    for (const other of others) this.graph.edges.tsys.connect(this.key, other);
    return this;
  }

  addWrittenIn(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.writtenIn.connect(this.key, other);
    return this;
  }

  get relApps(): MapTap<NApp["key"], EApp> {
    return new MapTap(this.graph.edges.app.adjFrom.getMap(this.key));
  }

  get relCompilesTo(): MapTap<NPlang["key"], EDialect> {
    return new MapTap(this.graph.edges.compilesTo.adjFrom.getMap(this.key));
  }

  get relDialectOf(): MapTap<NPlang["key"], EDialect> {
    return new MapTap(this.graph.edges.dialect.adjFrom.getMap(this.key));
  }

  get relImplements(): MapTap<NPlang["key"], EImpl> {
    return new MapTap(this.graph.edges.impl.adjFrom.getMap(this.key));
  }

  get relInfluenced(): MapTap<NPlang["key"], EImpl> {
    return new MapTap(this.graph.edges.influence.adjTo.getMap(this.key));
  }

  get relInfluencedBy(): MapTap<NPlang["key"], EImpl> {
    return new MapTap(this.graph.edges.influence.adjFrom.getMap(this.key));
  }

  get relLibs(): MapTap<NLibrary["key"], ELib> {
    return new MapTap(this.graph.edges.lib.adjFrom.getMap(this.key));
  }

  get relLicenses(): MapTap<NLicense["key"], ELicense> {
    return new MapTap(this.graph.edges.license.adjFrom.getMap(this.key));
  }

  get relParadigms(): MapTap<NParadigm["key"], EParadigm> {
    return new MapTap(this.graph.edges.paradigm.adjFrom.getMap(this.key));
  }

  get relPlBundles(): MapTap<NBundle["key"], EPlBundle> {
    return new MapTap(this.graph.edges.plBundle.adjFrom.getMap(this.key));
  }

  get relPlatforms(): MapTap<NPlatform["key"], EPlat> {
    return new MapTap(this.graph.edges.plat.adjFrom.getMap(this.key));
  }

  get relTags(): MapTap<NTag["key"], ETag> {
    return new MapTap(this.graph.edges.tag.adjFrom.getMap(this.key));
  }

  get relTools(): MapTap<NTool["key"], ETool> {
    return new MapTap(this.graph.edges.tool.adjFrom.getMap(this.key));
  }

  get relTsys(): MapTap<NTsys["key"], ETsys> {
    return new MapTap(this.graph.edges.tsys.adjFrom.getMap(this.key));
  }

  get relWrittenIn(): MapTap<NPlang["key"], EWrittenIn> {
    return new MapTap(this.graph.edges.writtenIn.adjFrom.getMap(this.key));
  }

  get relPosts(): MapTap<NPost["key"], EPost> {
    return new MapTap(this.graph.edges.post.adjFrom.getMap(this.key));
  }
}

/** A library Node, for software libraries or frameworks, like jQuery, Rails, etc. */
export class NLibrary extends NBase<"lib", CommonNodeData> {
  static readonly kind: N = "lib";
  override kind = NLibrary.kind;

  addPls(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.lib.connect(other, this.key);
    return this;
  }
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
export class NTool extends NBase<"tool", CommonNodeData> {
  static readonly kind: N = "tool";
  override kind = NTool.kind;

  addPls(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.tool.connect(other, this.key);
    return this;
  }
}

/** A Type System Node, e.g., OOP, Duck, Dynamic, etc. */
export class NTsys extends NBase<"tsys", CommonNodeData> {
  static readonly kind: N = "tsys";
  override kind = NTsys.kind;
}

/** An app Node, for any sort of application. */
export class NApp extends NBase<"app", CommonNodeData> {
  static readonly kind: N = "app";
  override kind = NApp.kind;

  addPls(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.app.connect(other, this.key);
    return this;
  }
}

/** Bundle of tools. */
export class NBundle extends NBase<"bundle", CommonNodeData> {
  static readonly kind: N = "bundle";
  override kind = NBundle.kind;

  addTools(others: `tool+${string}`[]): this {
    for (const other of others) this.graph.edges.bundle.connect(this.key, other);
    return this;
  }

  addPls(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.plBundle.connect(other, this.key);
    return this;
  }

  get relTools(): MapTap<NTool["key"], EBundle> {
    return new MapTap(this.graph.edges.bundle.adjFrom.getMap(this.key));
  }

  get relPls(): MapTap<NPlang["key"], EPlBundle> {
    return new MapTap(this.graph.edges.plBundle.adjTo.getMap(this.key));
  }
}

/**
 * A blog post entry.
 * Repurposes the `websites` field to point to plangs blog posts.
 * The blog posts are scanned at build time and added to the graph.
 */
export class NPost extends NBase<"post", NPostData> {
  static readonly kind: N = "post";
  override kind = NPost.kind;

  get author(): string | undefined {
    return this.data.author;
  }

  get path(): string | undefined {
    return this.data.path;
  }

  get title(): string | undefined {
    return this.data.title;
  }

  get date(): StrDate | undefined {
    return this.data.date;
  }

  set link(link: Link) {
    this.data.websites = [link];
  }

  get link(): Link | undefined {
    return this.websites.first;
  }

  addPls(others: `pl+${string}`[]) {
    for (const other of others) this.graph.edges.post.connect(other, this.key);
    return this;
  }
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
> {
  addRefs(links: Link[]): this {
    arrayMerge((this.data.refs ??= []), links, (l1, l2) => l1.href === l2.href);
    return this;
  }
}

export class EApp extends EBase<NPlang, NApp, CommonEdgeData> {
  override kind: E = "bundle";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NApp | undefined {
    return this.graph.nodes.app.get(this.to);
  }
}

/** Edge from a tool to a bundle. */
export class EBundle extends EBase<NBundle, NTool, CommonEdgeData> {
  override kind: E = "bundle";

  get nodeFrom(): NBundle | undefined {
    return this.graph.nodes.bundle.get(this.from);
  }

  get nodeTo(): NTool | undefined {
    return this.graph.nodes.tool.get(this.to);
  }
}

export class ECompilesTo extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "compilesTo";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.to);
  }
}

export class EDialect extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "dialect";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.to);
  }
}

export class ELicense extends EBase<NPlang, NLicense, CommonEdgeData> {
  override kind: E = "license";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NLicense | undefined {
    return this.graph.nodes.license.get(this.to);
  }
}

export class EImpl extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "impl";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.to);
  }
}

export class EInfluence extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "influence";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.to);
  }
}

export class EParadigm extends EBase<NPlang, NParadigm, CommonEdgeData> {
  override kind: E = "paradigm";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NParadigm | undefined {
    return this.graph.nodes.paradigm.get(this.to);
  }
}

export class ETsys extends EBase<NPlang, NTsys, CommonEdgeData> {
  override kind: E = "tsys";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NTsys | undefined {
    return this.graph.nodes.tsys.get(this.to);
  }
}

/** Edge from a PLang to a Bundle. */
export class EPlBundle extends EBase<NPlang, NBundle, CommonEdgeData> {
  override kind: E = "plBundle";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NBundle | undefined {
    return this.graph.nodes.bundle.get(this.to);
  }
}

export class EPlat extends EBase<NPlang, NPlatform, CommonEdgeData> {
  override kind: E = "plat";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NPlatform | undefined {
    return this.graph.nodes.plat.get(this.to);
  }
}

export class EPost extends EBase<NPlang, NPost, CommonEdgeData> {
  override kind: E = "post";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NPost | undefined {
    return this.graph.nodes.post.get(this.to);
  }
}

export class ELib extends EBase<NPlang, NLibrary, CommonEdgeData> {
  override kind: E = "lib";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NLibrary | undefined {
    return this.graph.nodes.lib.get(this.to);
  }
}

export class ETag extends EBase<NPlang, NTag, CommonEdgeData> {
  override kind: E = "tag";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NTag | undefined {
    return this.graph.nodes.tag.get(this.to);
  }
}

export class ETool extends EBase<NPlang, NTool, CommonEdgeData> {
  override kind: E = "tool";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NTool | undefined {
    return this.graph.nodes.tool.get(this.to);
  }
}

export class EWrittenIn extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "writtenIn";

  get nodeFrom(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get nodeTo(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.to);
  }
}
