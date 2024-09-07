import { BaseGraph, Edge, Node } from "@plangs/graph";

import { arrayMerge, keywordsToRegexp, verify } from "./util";

export class PlangsGraph extends BaseGraph {
  // Node tables.

  readonly n_library = this.nodeMap<NLibrary>("lib", (key) => new NLibrary(this, key));
  readonly n_license = this.nodeMap<NLicense>("lic", (key) => new NLicense(this, key));
  readonly n_paradigm = this.nodeMap<NParadigm>("para", (key) => new NParadigm(this, key));
  readonly n_plang = this.nodeMap<NPlang>("pl", (key) => new NPlang(this, key));
  readonly n_platform = this.nodeMap<NPlatform>("platf", (key) => new NPlatform(this, key));
  readonly n_tags = this.nodeMap<NTag>("tag", (key) => new NTag(this, key));
  readonly n_tool = this.nodeMap<NTool>("tool", (key) => new NTool(this, key));
  readonly n_tsystem = this.nodeMap<NTypeSystem>("tsys", (key) => new NTypeSystem(this, key));

  // Edge Tables.

  readonly e_dialect = this.edgeMap<EDialectOf>("dialect", (from, to) => new EDialectOf(this, from, to));
  readonly e_license = this.edgeMap<EHasLicense>("license", (from, to) => new EHasLicense(this, from, to));
  readonly e_implementation = this.edgeMap<EImplementedWith>("implementation", (from, to) => new EImplementedWith(this, from, to));
  readonly e_influence = this.edgeMap<EInfluence>("influence", (from, to) => new EInfluence(this, from, to));
  readonly e_lib = this.edgeMap<EPlangLib>("lib", (from, to) => new EPlangLib(this, from, to));
  readonly e_paradigm = this.edgeMap<EPlangPara>("paradigm", (from, to) => new EPlangPara(this, from, to));
  readonly e_platform = this.edgeMap<ESupportsPlatf>("platform", (from, to) => new ESupportsPlatf(this, from, to));
  readonly e_tool = this.edgeMap<EPlangTool>("tool", (from, to) => new EPlangTool(this, from, to));
  readonly e_tsys = this.edgeMap<EPlangTsys>("tsys", (from, to) => new EPlangTsys(this, from, to));
}

export interface CommonNodeData {
  name: string;
  description: string;
  websites: Link[];
  keywords: string[];
}

/** Base type for data on all nodes. */
export abstract class NBase<Key extends string, Data extends CommonNodeData> extends Node<PlangsGraph, Key, Data> {
  addWebsites(links: Link[]): this {
    arrayMerge((this.data.websites ??= []), links, (l1, l2) => l1.href === l2.href);
    return this;
  }

  /** Has any website, except wikipedia pages. */
  hasWebsites(): boolean {
    if (!this.data.websites) return false;
    return this.data.websites.some((w) => w.kind !== "wikipedia");
  }

  hasWikipedia(): boolean {
    if (!this.data.websites) return false;
    return this.data.websites.some((w) => w.kind === "wikipedia");
  }

  matchesKeyword(str: string): boolean {
    if (!this.data.keywords || this.data.keywords.length === 0) return false;
    return keywordsToRegexp(this.data.keywords).test(str);
  }

  matchesName(name?: string): boolean {
    if (!name || !this.data.name) return false;
    // TODO: persist these regexes.
    return new RegExp(`${name}`, "i").test(this.data.name);
  }
}

/** A programming language Node. */
export class NPlang extends NBase<
  `pl+${string}`,
  CommonNodeData & {
    extensions: string[];
    images: Image[];
    releases: Release[];
    isTranspiler: boolean;
  }
> {
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

  addDialects(others: NPlang["key"][]): this {
    for (const other of others) this.graph.e_dialect.connect(other, this.key);
    return this;
  }

  addLicenses(others: NLicense["key"][]): this {
    for (const other of others) this.graph.e_license.connect(this.key, other);
    return this;
  }

  addImplementations(others: NPlang["key"][]): this {
    for (const other of others) this.graph.e_implementation.connect(other, this.key);
    return this;
  }

  addInfluences(others: NPlang["key"][]): this {
    for (const other of others) this.graph.e_influence.connect(other, this.key);
    return this;
  }

  addLibraries(others: NLibrary["key"][]): this {
    for (const other of others) this.graph.e_lib.connect(this.key, other);
    return this;
  }

  addParadigms(others: NParadigm["key"][]): this {
    for (const otherkey of others) this.graph.e_paradigm.connect(this.key, otherkey);
    return this;
  }

  addPlatforms(others: NPlatform["key"][]): this {
    for (const other of others) this.graph.e_platform.connect(this.key, other);
    return this;
  }

  addTools(others: NTool["key"][]): this {
    for (const other of others) this.graph.e_tool.connect(this.key, other);
    return this;
  }

  addTypeSystems(others: NTypeSystem["key"][]): this {
    for (const other of others) this.graph.e_tsys.connect(this.key, other);
    return this;
  }

  get relDialects(): Map<NPlang["key"], EDialectOf> | undefined {
    return this.graph.e_dialect.adjFrom.getMap(this.key);
  }

  get relImplementedWith(): Map<NPlang["key"], EImplementedWith> | undefined {
    return this.graph.e_implementation.adjFrom.getMap(this.key);
  }

  get relInfluenced(): Map<NPlang["key"], EImplementedWith> | undefined {
    return this.graph.e_influence.adjFrom.getMap(this.key);
  }

  get relLicenses(): Map<NLicense["key"], EHasLicense> | undefined {
    return this.graph.e_license.adjFrom.getMap(this.key);
  }

  get relParadigms(): Map<NParadigm["key"], EPlangPara> | undefined {
    return this.graph.e_paradigm.adjFrom.getMap(this.key);
  }

  get relTypeSystems(): Map<NTypeSystem["key"], EPlangTsys> | undefined {
    return this.graph.e_tsys.adjFrom.getMap(this.key);
  }

  get relPlatforms(): Map<NPlatform["key"], ESupportsPlatf> | undefined {
    return this.graph.e_platform.adjFrom.getMap(this.key);
  }

  hasLogo(): boolean {
    return this.data.images?.some((i) => i.kind === "logo") ?? false;
  }

  hasReleases(minDate?: string): boolean {
    if (!this.data.releases) return false;
    if (!minDate) return this.data.releases.length > 0;
    return this.data.releases.some((r) => r.date && r.date >= minDate);
  }

  hasExt({ values, mode }: Filter): boolean {
    if (!this.data.extensions) return false;
    // TODO: persist these sets.
    const exts = new Set(this.data.extensions.map((e) => e.toLowerCase()));
    return verify(values, mode, (v) => exts.has(v));
  }

  logoOrImage(): Image | undefined {
    if (!this.data.images || this.data.images.length === 0) return undefined;
    const firstLogo = this.data.images.find((img) => img.kind === "logo");
    return firstLogo ?? this.data.images[0];
  }
}

/** A library Node, for software libraries or frameworks, like jQuery, Rails, etc. */
export class NLibrary extends NBase<`lib+${string}`, CommonNodeData> {}

/** A License Node, e.g., MIT, GPL, etc. */
export class NLicense extends NBase<
  `lic+${string}`,
  CommonNodeData & {
    /** spdx: The SPDX identifier from https://spdx.org/licenses/. */
    spdx?: string;

    /** Wether the license is recognized as Free/Libre by the Free Software Foundation (FSF). */
    isFSFLibre?: boolean;

    /** Wether the license is approved by the Open Source Initiative (OSI).*/
    isOSIApproved?: boolean;
  }
> {}

/** A Paradigm Node, e.g., Functional, Imperative, etc. */
export class NParadigm extends NBase<`para+${string}`, CommonNodeData> {}

/** A Platform Node for operating systems or architectures, e.g., Linux, Windows, ARM etc. */
export class NPlatform extends NBase<`platf+${string}`, CommonNodeData> {}

/** A generic tag. */
export class NTag extends NBase<`tag+${string}`, CommonNodeData> {}

/** A tool Node, e.g., Version Manager, Linter, Formatter,  etc. */
export class NTool extends NBase<`tool+${string}`, CommonNodeData> {}

/** A Type System Node, e.g., OOP, Duck, Dynamic, etc. */
export class NTypeSystem extends NBase<`tsys+${string}`, CommonNodeData> {}

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

export class EDialectOf extends EBase<NPlang, NPlang, CommonEdgeData> {
  get key(): string {
    return `dialect-of~${this.from}~${this.to}`;
  }

  get fromPlang(): NPlang | undefined {
    return this.graph.n_plang.get(this.from);
  }

  get toPlang(): NPlang | undefined {
    return this.graph.n_plang.get(this.to);
  }
}

export class EHasLicense extends EBase<NPlang, NLicense, CommonEdgeData> {
  get key(): string {
    return `has-license~${this.from}~${this.to}`;
  }

  get plang(): NPlang | undefined {
    return this.graph.n_plang.get(this.from);
  }

  get license(): NLicense | undefined {
    return this.graph.n_license.get(this.to);
  }
}

export class EImplementedWith extends EBase<NPlang, NPlang, CommonEdgeData> {
  get key(): string {
    return `implemented-with~${this.from}~${this.to}`;
  }

  get fromPlang(): NPlang | undefined {
    return this.graph.n_plang.get(this.from);
  }

  get toPlang(): NPlang | undefined {
    return this.graph.n_plang.get(this.to);
  }
}

export class EInfluence extends EBase<NPlang, NPlang, CommonEdgeData> {
  get key(): string {
    return `influenced~${this.from}~${this.to}`;
  }

  get fromPlang(): NPlang | undefined {
    return this.graph.n_plang.get(this.from);
  }

  get toPlang(): NPlang | undefined {
    return this.graph.n_plang.get(this.to);
  }
}

export class EPlangPara extends EBase<NPlang, NParadigm, CommonEdgeData> {
  get key(): string {
    return `paradigm~${this.from}~${this.to}`;
  }

  get plang(): NPlang | undefined {
    return this.graph.n_plang.get(this.from);
  }

  get paradigm(): NParadigm | undefined {
    return this.graph.n_paradigm.get(this.to);
  }
}

export class EPlangTsys extends EBase<NPlang, NTypeSystem, CommonEdgeData> {
  get key(): string {
    return `type-system~${this.from}~${this.to}`;
  }

  get plang(): NPlang | undefined {
    return this.graph.n_plang.get(this.from);
  }

  get typeSystem(): NTypeSystem | undefined {
    return this.graph.n_tsystem.get(this.to);
  }
}

export class ESupportsPlatf extends EBase<NPlang, NPlatform, CommonEdgeData> {
  get key(): string {
    return `platf~${this.from}~${this.to}`;
  }

  get plang(): NPlang | undefined {
    return this.graph.n_plang.get(this.from);
  }

  get platform(): NPlatform | undefined {
    return this.graph.n_platform.get(this.to);
  }
}

export class EPlangLib extends EBase<NPlang, NLibrary, CommonEdgeData> {
  get key(): string {
    return `lib~${this.from}~${this.to}`;
  }

  get plang(): NPlang | undefined {
    return this.graph.n_plang.get(this.from);
  }

  get library(): NLibrary | undefined {
    return this.graph.n_library.get(this.to);
  }
}

export class EPlangTool extends EBase<NPlang, NTool, CommonEdgeData> {
  get key(): string {
    return `tool~${this.from}~${this.to}`;
  }

  get plang(): NPlang | undefined {
    return this.graph.n_plang.get(this.from);
  }

  get tool(): NTool | undefined {
    return this.graph.n_tool.get(this.to);
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
  kind?: "homepage" | "repository" | "releases" | "apidocs" | "wikipedia" | "other";
  href: string;
  title: string;
}

/**
 * An image, e.g., a logo.
 */
export interface Image {
  kind: "logo" | "screenshot" | "other";
  url: string;
  width?: number;
  height?: number;
}

/**
 * A serializable date string.
 */
export type year = number;
export type month = number;
export type day = number;
export type StrDate = `${year}-${month}-${day}`;
