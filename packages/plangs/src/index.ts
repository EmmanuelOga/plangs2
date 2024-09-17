import { BaseGraph, Edge, EdgeMap, Node, NodeMap } from "@plangs/graph";
import { IterTap, MapTap, arrayMerge } from "@plangs/graph/auxiliar";

import type { PlangFilters } from "./filter";

export const NODE_NAMES = ["app", "bundle", "lib", "license", "paradigm", "pl", "plat", "post", "tag", "tool", "tsys"] as const;
export const EDGE_NAMES = [
  "bundle",
  "dialect",
  "impl",
  "influence",
  "lib",
  "license",
  "paradigm",
  "plat",
  "post",
  "tag",
  "tool",
  "tsys",
  "writtenIn",
] as const;

export type N = (typeof NODE_NAMES)[number];
export type E = (typeof EDGE_NAMES)[number];

/** Alias to define types more succinctly. */
export type G = PlangsGraph;

export class PlangsGraph extends BaseGraph<N, E, G> {
  readonly nodes = {
    app: new NodeMap<G, NApp>((key) => new NApp(this, key)),
    post: new NodeMap<G, NPost>((key) => new NPost(this, key)),
    bundle: new NodeMap<G, NBundle>((key) => new NBundle(this, key)),
    lib: new NodeMap<G, NLibrary>((key) => new NLibrary(this, key)),
    license: new NodeMap<G, NLicense>((key) => new NLicense(this, key)),
    paradigm: new NodeMap<G, NParadigm>((key) => new NParadigm(this, key)),
    pl: new NodeMap<G, NPlang>((key) => new NPlang(this, key)),
    plat: new NodeMap<G, NPlatform>((key) => new NPlatform(this, key)),
    tag: new NodeMap<G, NTag>((key) => new NTag(this, key)),
    tool: new NodeMap<G, NTool>((key) => new NTool(this, key)),
    tsys: new NodeMap<G, NTsys>((key) => new NTsys(this, key)),
  };

  readonly edges = {
    app: new EdgeMap<G, EApp>((from, to) => new EApp(this, from, to)),
    bundle: new EdgeMap<G, EBundle>((from, to) => new EBundle(this, from, to)),
    dialect: new EdgeMap<G, EDialect>((from, to) => new EDialect(this, from, to)),
    impl: new EdgeMap<G, EImpl>((from, to) => new EImpl(this, from, to)),
    influence: new EdgeMap<G, EInfluence>((from, to) => new EInfluence(this, from, to)),
    lib: new EdgeMap<G, ELib>((from, to) => new ELib(this, from, to)),
    license: new EdgeMap<G, ELicense>((from, to) => new ELicense(this, from, to)),
    paradigm: new EdgeMap<G, EParadigm>((from, to) => new EParadigm(this, from, to)),
    plat: new EdgeMap<G, EPlat>((from, to) => new EPlat(this, from, to)),
    post: new EdgeMap<G, EPost>((from, to) => new EPost(this, from, to)),
    tag: new EdgeMap<G, ETag>((from, to) => new ETag(this, from, to)),
    tool: new EdgeMap<G, ETool>((from, to) => new ETool(this, from, to)),
    tsys: new EdgeMap<G, ETsys>((from, to) => new ETsys(this, from, to)),
    writtenIn: new EdgeMap<G, EWrittenIn>((from, to) => new EWrittenIn(this, from, to)),
  };

  /** Find all plangs that match the given filters. */
  plangs(f: PlangFilters): Set<NPlang["key"]> {
    const keys = new Set<NPlang["key"]>();
    for (const pl of this.nodes.pl.values) {
      if (f.matchesAll(pl)) keys.add(pl.key);
    }
    return keys;
  }
}

export interface CommonNodeData {
  name: string;
  description: string;
  websites: Link[];
  keywords: string[];
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
    const lenient = keywords.map((k) => k.replaceAll(/[- ]/g, "\\s*.?\\s*"));
    return new RegExp(`\\b(${lenient.join("|")})\\b`, "i");
  }

  addWebsites(links: Link[]): this {
    arrayMerge((this.data.websites ??= []), links, (l1, l2) => l1.href === l2.href);
    return this;
  }
}

/** A programming language Node. */
export class NPlang extends NBase<
  "pl",
  CommonNodeData & {
    extensions: string[];
    firstAppeared: StrDate;
    images: Image[];
    isTranspiler: boolean;
    isMainstream: boolean;
    releases: Release[];
  }
> {
  override kind: N = "pl";

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

  get isTranspiler(): boolean {
    return this.data.isTranspiler === true;
  }

  get isMainstream(): boolean {
    return this.data.isMainstream === true;
  }

  get releases(): IterTap<Release> {
    return new IterTap(this.data.releases);
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

  addPosts(others: NPost["key"][]): this {
    for (const other of others) this.graph.edges.post.connect(this.key, other);
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

  get relLibraries(): MapTap<NLibrary["key"], ELib> {
    return new MapTap(this.graph.edges.lib.adjFrom.getMap(this.key));
  }

  get relLicenses(): MapTap<NLicense["key"], ELicense> {
    return new MapTap(this.graph.edges.license.adjFrom.getMap(this.key));
  }

  get relParadigms(): MapTap<NParadigm["key"], EParadigm> {
    return new MapTap(this.graph.edges.paradigm.adjFrom.getMap(this.key));
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
  override kind: N = "lib";

  addPls(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.lib.connect(other, this.key);
    return this;
  }
}

/** A License Node, e.g., MIT, GPL, etc. */
export class NLicense extends NBase<
  "license",
  CommonNodeData & {
    /** spdx: The SPDX identifier from https://spdx.org/licenses/. */
    spdx?: string;

    /** Wether the license is recognized as Free/Libre by the Free Software Foundation (FSF). */
    isFSFLibre?: boolean;

    /** Wether the license is approved by the Open Source Initiative (OSI).*/
    isOSIApproved?: boolean;
  }
> {
  override kind: N = "license";

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
  override kind: N = "paradigm";
}

/** A Platform Node for operating systems or architectures, e.g., Linux, Windows, ARM etc. */
export class NPlatform extends NBase<"plat", CommonNodeData> {
  override kind: N = "plat";
}

/** A generic tag. */
export class NTag extends NBase<"tag", CommonNodeData> {
  override kind: N = "tag";
}

/** A tool Node, e.g., Version Manager, Linter, Formatter,  etc. */
export class NTool extends NBase<"tool", CommonNodeData> {
  override kind: N = "tool";

  addPls(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.tool.connect(other, this.key);
    return this;
  }
}

/** A Type System Node, e.g., OOP, Duck, Dynamic, etc. */
export class NTsys extends NBase<"tsys", CommonNodeData> {
  override kind: N = "tsys";
}

/** An app Node, for any sort of application. */
export class NApp extends NBase<"app", CommonNodeData> {
  override kind: N = "app";

  addPls(others: NPlang["key"][]): this {
    for (const other of others) this.graph.edges.app.connect(this.key, other);
    return this;
  }
}

/** Bundle of tools. */
export class NBundle extends NBase<"bundle", CommonNodeData> {
  override kind: N = "bundle";

  addTools(others: `tool+${string}`[]): this {
    for (const other of others) this.graph.edges.bundle.connect(other, this.key);
    return this;
  }
}

/**
 * A blog post entry.
 * Repurposes the `websites` field to point to plangs blog posts.
 * The blog posts are scanned at build time and added to the graph.
 */
export class NPost extends NBase<"post", CommonNodeData & { path: string; title: string; author: string; date: StrDate }> {
  override kind: N = "post";

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
}

////////////////////////////////////////////////////////////////////////////////
// Edge Types
////////////////////////////////////////////////////////////////////////////////

export interface CommonEdgeData {
  refs: Link[];
}

// biome-ignore lint/suspicious/noExplicitAny: we use any for the generic types... sory biome.
type Any = any;

/** Base type for data on all edges. */
export abstract class EBase<T_From extends NBase<Any, Any>, T_To extends NBase<Any, Any>, T_Data extends CommonEdgeData> extends Edge<
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

export class EApp extends EBase<NApp, NPlang, CommonEdgeData> {
  override kind: E = "bundle";

  get app(): NApp | undefined {
    return this.graph.nodes.app.get(this.from);
  }

  get pl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.to);
  }
}

export class EBundle extends EBase<NTool, NBundle, CommonEdgeData> {
  override kind: E = "bundle";

  get tool(): NTool | undefined {
    return this.graph.nodes.tool.get(this.from);
  }

  get bundle(): NBundle | undefined {
    return this.graph.nodes.bundle.get(this.to);
  }
}

export class EDialect extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "dialect";

  get fromPl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get toPl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.to);
  }
}

export class ELicense extends EBase<NPlang, NLicense, CommonEdgeData> {
  override kind: E = "license";

  get pl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get license(): NLicense | undefined {
    return this.graph.nodes.license.get(this.to);
  }
}

export class EImpl extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "impl";

  get fromPl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get toPl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.to);
  }
}

export class EInfluence extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "influence";

  get fromPl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get toPl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.to);
  }
}

export class EParadigm extends EBase<NPlang, NParadigm, CommonEdgeData> {
  override kind: E = "paradigm";

  get pl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get paradigm(): NParadigm | undefined {
    return this.graph.nodes.paradigm.get(this.to);
  }
}

export class ETsys extends EBase<NPlang, NTsys, CommonEdgeData> {
  override kind: E = "tsys";

  get pl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get tsys(): NTsys | undefined {
    return this.graph.nodes.tsys.get(this.to);
  }
}

export class EPlat extends EBase<NPlang, NPlatform, CommonEdgeData> {
  override kind: E = "plat";

  get pl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get plat(): NPlatform | undefined {
    return this.graph.nodes.plat.get(this.to);
  }
}

export class EPost extends EBase<NPlang, NPost, CommonEdgeData> {
  override kind: E = "post";

  get pl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get post(): NPost | undefined {
    return this.graph.nodes.post.get(this.to);
  }
}

export class ELib extends EBase<NPlang, NLibrary, CommonEdgeData> {
  override kind: E = "lib";

  get pl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get lib(): NLibrary | undefined {
    return this.graph.nodes.lib.get(this.to);
  }
}

export class ETag extends EBase<NPlang, NTag, CommonEdgeData> {
  override kind: E = "tag";

  get pl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get tag(): NTag | undefined {
    return this.graph.nodes.tag.get(this.to);
  }
}

export class ETool extends EBase<NPlang, NTool, CommonEdgeData> {
  override kind: E = "tool";

  get pl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get tool(): NTool | undefined {
    return this.graph.nodes.tool.get(this.to);
  }
}

export class EWrittenIn extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "writtenIn";

  get fromPl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.from);
  }

  get toPl(): NPlang | undefined {
    return this.graph.nodes.pl.get(this.to);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Auxiliary Types
////////////////////////////////////////////////////////////////////////////////

/**
 * A release of a programming language.
 */
export interface Release {
  version: string;
  name?: string;
  date?: StrDate;
}

/**
 * A reference to a web page.
 */
export interface Link {
  kind?: "homepage" | "repository" | "releases" | "apidocs" | "wikipedia" | "plangsPost" | "other";
  href: string;
  title: string;
}

/**
 * An image, e.g., a logo.
 */
export interface Image {
  kind: "logo" | "screenshot" | "other";
  title: string;
  url: string;
  width?: number;
  height?: number;
}

/**
 * A serializable date string.
 */
export type year = number;
export type month = string; // 0 padded
export type day = string; // 0 padded
export type StrDate = `${year}-${month}-${day}`;
