import { BaseGraph, Edge, EdgeMap, Node, NodeMap } from "@plangs/graph";

import type { PlangFilters } from "./filter";
import { arrayMerge, keywordsToRegexp, verify } from "./util";

export const NODE_NAMES = ["lib", "license", "paradigm", "pl", "plat", "tag", "tool", "tsys"] as const;
export const EDGE_NAMES = ["dialect", "impl", "influence", "lib", "license", "paradigm", "plat", "tag", "tool", "tsys", "writtenIn"] as const;

export type N = (typeof NODE_NAMES)[number];
export type E = (typeof EDGE_NAMES)[number];

/** Alias to define types more succinctly. */
export type G = PlangsGraph;

export class PlangsGraph extends BaseGraph<N, E, G> {
  readonly nodes = {
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
    dialect: new EdgeMap<G, EDialect>((from, to) => new EDialect(this, from, to)),
    impl: new EdgeMap<G, EImpl>((from, to) => new EImpl(this, from, to)),
    influence: new EdgeMap<G, EInfluence>((from, to) => new EInfluence(this, from, to)),
    lib: new EdgeMap<G, ELib>((from, to) => new ELib(this, from, to)),
    license: new EdgeMap<G, ELicense>((from, to) => new ELicense(this, from, to)),
    paradigm: new EdgeMap<G, EParadigm>((from, to) => new EParadigm(this, from, to)),
    plat: new EdgeMap<G, EPlat>((from, to) => new EPlat(this, from, to)),
    tag: new EdgeMap<G, ETag>((from, to) => new ETag(this, from, to)),
    tool: new EdgeMap<G, ETool>((from, to) => new ETool(this, from, to)),
    tsys: new EdgeMap<G, ETsys>((from, to) => new ETsys(this, from, to)),
    writtenIn: new EdgeMap<G, EWrittenIn>((from, to) => new EWrittenIn(this, from, to)),
  };

  /** Find all plangs that match the given filters. */
  plangs(f: PlangFilters): Set<NPlang["key"]> {
    const keys = new Set<NPlang["key"]>();
    for (const pl of this.nodes.pl.values()) {
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

  /** The key without the node kind prefix. */
  get plainKey(): string {
    return this.key.replace(/^[a-z]+[+]/, "");
  }

  /** The first letter of the key, or "_" if it starts with a non-letter. */
  get keyFolder(): string {
    const name = this.key.split("+")[1];
    return /^[a-z]/.test(name) ? name[0] : "_";
  }

  addWebsites(links: Link[]): this {
    arrayMerge((this.data.websites ??= []), links, (l1, l2) => l1.href === l2.href);
    return this;
  }

  /** All links including wikipedia. */
  get allWebsites(): Link[] {
    return this.data.websites ?? [];
  }

  /** Has any website, except wikipedia pages. */
  get hasWebsites(): boolean {
    if (!this.data.websites) return false;
    return this.data.websites.some((w) => w.kind !== "wikipedia");
  }

  get hasWikipedia(): boolean {
    return this.data.websites?.some((w) => w.kind === "wikipedia") ?? false;
  }

  matchesKeyword(str: string): boolean {
    if (!this.data.keywords || this.data.keywords.length === 0) return false;
    return keywordsToRegexp(this.data.keywords).test(str);
  }

  matchesName(pattern: RegExp): boolean {
    return pattern.test(this.name);
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

  get hasFileExtensions(): boolean {
    return this.data.extensions ? this.data.extensions.length > 0 : false;
  }

  get fileExtensions(): string[] {
    return this.data.extensions ?? [];
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

  get relDialectOf(): Rel<NPlang["key"], EDialect> {
    return new Rel(this.graph.edges.dialect.adjFrom.getMap(this.key));
  }

  get relImplements(): Rel<NPlang["key"], EImpl> {
    return new Rel(this.graph.edges.impl.adjFrom.getMap(this.key));
  }

  get relInfluenced(): Rel<NPlang["key"], EImpl> {
    return new Rel(this.graph.edges.influence.adjTo.getMap(this.key));
  }

  get relInfluencedBy(): Rel<NPlang["key"], EImpl> {
    return new Rel(this.graph.edges.influence.adjFrom.getMap(this.key));
  }

  get relLibraries(): Rel<NLibrary["key"], ELib> {
    return new Rel(this.graph.edges.lib.adjFrom.getMap(this.key));
  }

  get relLicenses(): Rel<NLicense["key"], ELicense> {
    return new Rel(this.graph.edges.license.adjFrom.getMap(this.key));
  }

  get relParadigms(): Rel<NParadigm["key"], EParadigm> {
    return new Rel(this.graph.edges.paradigm.adjFrom.getMap(this.key));
  }

  get relPlatforms(): Rel<NPlatform["key"], EPlat> {
    return new Rel(this.graph.edges.plat.adjFrom.getMap(this.key));
  }

  get relTags(): Rel<NTag["key"], ETag> {
    return new Rel(this.graph.edges.tag.adjFrom.getMap(this.key));
  }

  get relTools(): Rel<NTool["key"], ETool> {
    return new Rel(this.graph.edges.tool.adjFrom.getMap(this.key));
  }

  get relTsys(): Rel<NTsys["key"], ETsys> {
    return new Rel(this.graph.edges.tsys.adjFrom.getMap(this.key));
  }

  get relWrittenIn(): Rel<NPlang["key"], EWrittenIn> {
    return new Rel(this.graph.edges.writtenIn.adjFrom.getMap(this.key));
  }

  firstAppearedAfter(minDate: StrDate): boolean {
    return !!this.data.firstAppeared && this.data.firstAppeared >= minDate;
  }

  get hasLogo(): boolean {
    return this.data.images?.some((i) => i.kind === "logo") ?? false;
  }

  hasReleases(minDate?: StrDate): boolean {
    if (!this.data.releases || this.data.releases.length === 0) return false;
    if (!minDate) return this.data.releases.length > 0;
    return this.data.releases.some((r) => r.date && r.date >= minDate);
  }

  hasExtensions(filter?: Filter<string>): boolean {
    if (!filter || filter.values.size === 0) return true;
    const { extensions } = this.data;
    if (!extensions || extensions.length === 0) return false;
    // TODO: persist these sets.
    const exts = new Set(extensions.map((e) => e.toLowerCase()));
    return verify(filter.values, filter.mode, (v) => exts.has(v));
  }

  get logoOrImage(): Image | undefined {
    const images = this.data.images;
    if (!images || images.length === 0) return undefined;
    return images.find((img) => img.kind === "logo") ?? images[0];
  }
}

/** A library Node, for software libraries or frameworks, like jQuery, Rails, etc. */
export class NLibrary extends NBase<"lib", CommonNodeData> {
  override kind: N = "lib";
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
}

/** A Type System Node, e.g., OOP, Duck, Dynamic, etc. */
export class NTsys extends NBase<"tsys", CommonNodeData> {
  override kind: N = "tsys";
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

export class EDialect extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "dialect";

  get fromPl(): NPlang {
    return this.graph.nodes.pl.get(this.from);
  }

  get toPl(): NPlang {
    return this.graph.nodes.pl.get(this.to);
  }
}

export class ELicense extends EBase<NPlang, NLicense, CommonEdgeData> {
  override kind: E = "license";

  get pl(): NPlang {
    return this.graph.nodes.pl.get(this.from);
  }

  get license(): NLicense {
    return this.graph.nodes.license.get(this.to);
  }
}

export class EImpl extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "impl";

  get fromPl(): NPlang {
    return this.graph.nodes.pl.get(this.from);
  }

  get toPl(): NPlang {
    return this.graph.nodes.pl.get(this.to);
  }
}

export class EInfluence extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "influence";

  get fromPl(): NPlang {
    return this.graph.nodes.pl.get(this.from);
  }

  get toPl(): NPlang {
    return this.graph.nodes.pl.get(this.to);
  }
}

export class EParadigm extends EBase<NPlang, NParadigm, CommonEdgeData> {
  override kind: E = "paradigm";

  get pl(): NPlang {
    return this.graph.nodes.pl.get(this.from);
  }

  get paradigm(): NParadigm {
    return this.graph.nodes.paradigm.get(this.to);
  }
}

export class ETsys extends EBase<NPlang, NTsys, CommonEdgeData> {
  override kind: E = "tsys";

  get pl(): NPlang {
    return this.graph.nodes.pl.get(this.from);
  }

  get tsys(): NTsys {
    return this.graph.nodes.tsys.get(this.to);
  }
}

export class EPlat extends EBase<NPlang, NPlatform, CommonEdgeData> {
  override kind: E = "plat";

  get pl(): NPlang {
    return this.graph.nodes.pl.get(this.from);
  }

  get plat(): NPlatform {
    return this.graph.nodes.plat.get(this.to);
  }
}

export class ELib extends EBase<NPlang, NLibrary, CommonEdgeData> {
  override kind: E = "lib";

  get pl(): NPlang {
    return this.graph.nodes.pl.get(this.from);
  }

  get lib(): NLibrary {
    return this.graph.nodes.lib.get(this.to);
  }
}

export class ETag extends EBase<NPlang, NTag, CommonEdgeData> {
  override kind: E = "tag";

  get pl(): NPlang {
    return this.graph.nodes.pl.get(this.from);
  }

  get tag(): NTag {
    return this.graph.nodes.tag.get(this.to);
  }
}

export class ETool extends EBase<NPlang, NTool, CommonEdgeData> {
  override kind: E = "tool";

  get pl(): NPlang {
    return this.graph.nodes.pl.get(this.from);
  }

  get tool(): NTool {
    return this.graph.nodes.tool.get(this.to);
  }
}

export class EWrittenIn extends EBase<NPlang, NPlang, CommonEdgeData> {
  override kind: E = "writtenIn";

  get fromPl(): NPlang {
    return this.graph.nodes.pl.get(this.from);
  }

  get toPl(): NPlang {
    return this.graph.nodes.pl.get(this.to);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Auxiliary Types
////////////////////////////////////////////////////////////////////////////////

export type Filter<T> = {
  mode: "all" | "any";
  /** By convention, if the values are empty, the filter "matches". */
  values: Set<T>;
};

/** A relationship class to wrap a Map from Node key to list of edges. */
class Rel<T extends `${N}+${string}`, E extends EBase<Any, Any, Any>> {
  constructor(private readonly map: Map<T, E> | undefined) {}

  /** Undefined or empty values filter always return true. */
  matches(filter?: Filter<T>): boolean {
    if (!filter || filter.values.size === 0) return true;
    const m = this.map;
    if (!m) return false;
    return verify(filter.values, filter.mode, (v) => m.has(v as T));
  }

  get size(): number {
    return this.map ? this.map.size : 0;
  }

  get keys(): T[] {
    return this.map ? [...this.map.keys()] : [];
  }

  get edges(): E[] {
    if (!this.map) return [];
    return [...this.map.values()];
  }

  /** Call the callback if there are any edges. */
  tap<T>(callback: (rel: this) => T): T | undefined {
    if (this.size > 0) return callback(this);
  }
}

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
  kind?: "homepage" | "repository" | "releases" | "apidocs" | "wikipedia" | "other";
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
