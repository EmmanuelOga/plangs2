import { BaseGraph, Edge, Node } from "@plangs/graph";

import { arrayMerge, verify } from "./util";

export class PlangsGraph extends BaseGraph {
  // Node tables.

  readonly n_library = this.nodeMap<NLibrary>("lib", (key) => new NLibrary(this, key));
  readonly n_license = this.nodeMap<NLicense>("lic", (key) => new NLicense(this, key));
  readonly n_paradigm = this.nodeMap<NParadigm>("para", (key) => new NParadigm(this, key));
  readonly n_plang = this.nodeMap<NPlang>("pl", (key) => new NPlang(this, key));
  readonly n_platform = this.nodeMap<NPlatform>("platf", (key) => new NPlatform(this, key));
  readonly n_tool = this.nodeMap<NTool>("tool", (key) => new NTool(this, key));
  readonly n_tsystem = this.nodeMap<NTypeSystem>("tsys", (key) => new NTypeSystem(this, key));
  readonly n_tags = this.nodeMap<NTag>("tag", (key) => new NTag(this, key));

  // Edge Tables.

  readonly e_dialect_of = this.edgeMap<EDialectOf>("dialect-of", (from, to) => new EDialectOf(this, from, to));
  readonly e_has_license = this.edgeMap<EHasLicense>("has-license", (from, to) => new EHasLicense(this, from, to));
  readonly e_implementedWith = this.edgeMap<EImplementedWith>("implemented-with", (from, to) => new EImplementedWith(this, from, to));
  readonly e_influence = this.edgeMap<EInfluence>("influenced", (from, to) => new EInfluence(this, from, to));
  readonly e_lib = this.edgeMap<EPlangLib>("lib", (from, to) => new EPlangLib(this, from, to));
  readonly e_paradigm = this.edgeMap<EPlangPara>("paradigm", (from, to) => new EPlangPara(this, from, to));
  readonly e_platform = this.edgeMap<ESupportsPlatf>("platform", (from, to) => new ESupportsPlatf(this, from, to));
  readonly e_tool = this.edgeMap<EPlangTool>("tool", (from, to) => new EPlangTool(this, from, to));
  readonly e_tsys = this.edgeMap<EPlangTsys>("tsys", (from, to) => new EPlangTsys(this, from, to));

  /**
   * Return a set of programming languages that match the given filters.
   */
  filterPlangs(filters: PlangFilters): Set<NPlang["key"]> {
    const result = new Set<NPlang["key"]>();
    for (const [nid, pl] of this.n_plang) {
      if (
        (filters.plangName.length > 0 && !pl.matchesName(filters.plangName)) ||
        (filters.transpiler && !pl.data.isTranspiler) ||
        (filters.hasLogo && !pl.hasLogo()) ||
        (filters.hasReleases && !pl.hasReleases(filters.releaseMinDate)) ||
        (filters.hasWebsite && !pl.hasWebsites()) ||
        (filters.hasWikipedia && !pl.hasWikipedia()) ||
        (filters.plangExt.values.size > 0 && !pl.hasExt(filters.plangExt)) ||
        (filters.dialectOf.values.size > 0 && !pl.relMatchesFilter(filters.dialectOf, pl.relDialects)) ||
        (filters.implementedWith.values.size > 0 && !pl.relMatchesFilter(filters.implementedWith, pl.relImplementedWith)) ||
        (filters.influenced.values.size > 0 && !pl.relMatchesFilter(filters.influenced, pl.relInfluenced)) ||
        (filters.licenses.values.size > 0 && !pl.relMatchesFilter(filters.licenses, pl.relLicenses)) ||
        (filters.paradigm.values.size > 0 && !pl.relMatchesFilter(filters.paradigm, pl.relParadigms)) ||
        (filters.platform.values.size > 0 && !pl.relMatchesFilter(filters.platform, pl.relPlatforms)) ||
        (filters.typeSystems.values.size > 0 && !pl.relMatchesFilter(filters.typeSystems, pl.relTypeSystems))
      ) {
        continue;
      }
      result.add(nid);
    }

    return result;
  }
}

interface CommonNodeData {
  name: string;
  description: string;
  websites: Link[];
  keywords: string[];
}

/** Base type for data on all nodes. */
abstract class NBase<Key extends string, Data extends CommonNodeData> extends Node<PlangsGraph, Key, Data> {
  addWebsites(links: Link[]): this {
    arrayMerge((this.data.websites ??= []), links, (l1, l2) => l1.href === l2.href);
    return this;
  }
}

/** A generic tag. */
export class NTag extends NBase<`tag+${string}`, CommonNodeData> {}

/** A programming language Node. */
export class NPlang extends NBase<
  `pl+${string}`,
  CommonNodeData & {
    extensions: string[];
    images: Image[];
    releases: Release[];
    scoping: Scoping[];
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

  addScoping(scopings: Scoping[]): this {
    arrayMerge((this.data.scoping ??= []), scopings);
    return this;
  }

  addDialect(other: NPlang["key"], data: EDialectOf["data"]): this {
    this.graph.e_dialect_of.connect(other, this.key).merge(data);
    return this;
  }

  addDialects(others: NPlang["key"][]): this {
    for (const other of others) this.graph.e_dialect_of.connect(other, this.key);
    return this;
  }

  addImplementation(other: NPlang["key"], data: EImplementedWith["data"]): this {
    this.graph.e_implementedWith.connect(other, this.key).merge(data);
    return this;
  }

  addImplementations(others: NPlang["key"][]): this {
    for (const other of others) this.graph.e_implementedWith.connect(other, this.key);
    return this;
  }

  addInfluence(other: NPlang["key"], data: EInfluence["data"]): this {
    this.graph.e_influence.connect(other, this.key).merge(data);
    return this;
  }

  addInfluences(others: NPlang["key"][]): this {
    for (const other of others) this.graph.e_influence.connect(other, this.key);
    return this;
  }

  addLicense(other: NLicense["key"], data: EHasLicense["data"]): this {
    this.graph.e_has_license.connect(this.key, other).merge(data);
    return this;
  }

  addLicenses(others: NLicense["key"][]): this {
    for (const other of others) this.graph.e_has_license.connect(this.key, other);
    return this;
  }

  addParadigm(other: NParadigm["key"], data: EPlangPara["data"]): this {
    this.graph.e_paradigm.connect(this.key, other).merge(data);
    return this;
  }

  addParadigms(others: NParadigm["key"][]): this {
    for (const otherkey of others) this.graph.e_paradigm.connect(this.key, otherkey);
    return this;
  }

  addPlatform(other: NPlatform["key"], data: ESupportsPlatf["data"]): this {
    this.graph.e_platform.connect(this.key, other).merge(data);
    return this;
  }

  addPlatforms(others: NPlatform["key"][]): this {
    for (const other of others) this.graph.e_platform.connect(this.key, other);
    return this;
  }

  addTypeSystem(other: NTypeSystem["key"], data: EPlangTsys["data"]): this {
    this.graph.e_tsys.connect(this.key, other).merge(data);
    return this;
  }

  addTypeSystems(others: NTypeSystem["key"][]): this {
    for (const other of others) this.graph.e_tsys.connect(this.key, other);
    return this;
  }

  /** NOTE: the name is matched against lowercase. */
  matchesName(name?: string): boolean {
    if (!name || !this.data.name) return false;
    // TODO: we should keep the lower case names somewhere to avoid recomputing them.
    return this.data.name.toLowerCase().includes(name);
  }

  hasLogo(): boolean {
    return this.data.images?.some((i) => i.kind === "logo") ?? false;
  }

  hasReleases(minDate?: string): boolean {
    if (!this.data.releases) return false;
    if (!minDate) return this.data.releases.length > 0;
    return this.data.releases.some((r) => r.date && r.date >= minDate);
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

  hasExt({ values, mode }: Filter): boolean {
    if (!this.data.extensions) return false;
    // TODO: persist these sets.
    const exts = new Set(this.data.extensions.map((e) => e.toLowerCase()));
    return verify(values, mode, (v) => exts.has(v));
  }

  #collectRel<F, T>(rel: Map<string, F> | undefined, getter: (e: F) => T | undefined) {
    return Array.from(rel?.values() ?? [])
      .map(getter)
      .filter(Boolean) as T[];
  }

  platforms(): NPlatform[] {
    return this.#collectRel(this.relPlatforms, (e) => e.platform);
  }

  typeSystems(): NTypeSystem[] {
    return this.#collectRel(this.relTypeSystems, (e) => e.typeSystem);
  }

  licenses(): NLicense[] {
    return this.#collectRel(this.relLicenses, (e) => e.license);
  }

  influenced(): NPlang[] {
    return this.#collectRel(this.relInfluenced, (e) => e.toPlang);
  }

  dialectOf(): NPlang[] {
    return this.#collectRel(this.relDialects, (e) => e.toPlang);
  }

  implementedWith(): NPlang[] {
    return this.#collectRel(this.relImplementedWith, (e) => e.toPlang);
  }

  get relDialects(): Map<NPlang["key"], EDialectOf> | undefined {
    return this.graph.e_dialect_of.adjFrom.getMap(this.key);
  }

  get relImplementedWith(): Map<NPlang["key"], EImplementedWith> | undefined {
    return this.graph.e_implementedWith.adjFrom.getMap(this.key);
  }

  get relInfluenced(): Map<NPlang["key"], EImplementedWith> | undefined {
    return this.graph.e_influence.adjFrom.getMap(this.key);
  }

  get relLicenses(): Map<NLicense["key"], EHasLicense> | undefined {
    return this.graph.e_has_license.adjFrom.getMap(this.key);
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

  // biome-ignore lint/suspicious/noExplicitAny: we don't care about the type of the filter values.
  relMatchesFilter({ values, mode }: Filter, relationship: Map<string, any> | undefined): boolean {
    if (!relationship) return false;
    return verify(values, mode, (v) => relationship.has(v));
  }

  logoOrImage(): Image | undefined {
    if (!this.data.images || this.data.images.length === 0) return undefined;
    const firstLogo = this.data.images.find((img) => img.kind === "logo");
    return firstLogo ?? this.data.images[0];
  }
}

/** A Platform Node for operating systems or architectures, e.g., Linux, Windows, ARM etc. */
export class NPlatform extends NBase<`platf+${string}`, CommonNodeData> {}

/** A Type System Node, e.g., OOP, Duck, Dynamic, etc. */
export class NTypeSystem extends NBase<`tsys+${string}`, CommonNodeData> {}

/** A Paradigm Node, e.g., Functional, Imperative, etc. */
export class NParadigm extends NBase<`para+${string}`, CommonNodeData> {}

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

/** A tool Node, e.g., Version Manager, Linter, Formatter,  etc. */
export class NTool extends NBase<`tool+${string}`, CommonNodeData> {}

/** A library Node, for software libraries or frameworks, like jQuery, Rails, etc. */
export class NLibrary extends NBase<`lib+${string}`, CommonNodeData> {}

////////////////////////////////////////////////////////////////////////////////
// Edge Types
////////////////////////////////////////////////////////////////////////////////

interface CommonEdgeData {
  refs: Link[];
}

// biome-ignore lint/suspicious/noExplicitAny: we use any for the generic types... sory biome.
type Any = any;

/** Base type for data on all edges. */
abstract class EBase<T_From extends NBase<Any, Any>, T_To extends NBase<Any, Any>, T_Data extends CommonEdgeData> extends Edge<
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
 * The scoping of a programming language.
 */
export type Scoping = "lexical" | "static" | "dynamic" | "other";

/**
 * A release of a programming language.
 */
export interface Release {
  kind: "first" | "preview" | "stable" | "other";
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

/**
 * Used to filter programming languages.
 */
export type Filter = {
  mode: "all" | "any";
  values: Set<string>;
};

/**
 * Criteria to filter programming languages.
 */
export type PlangFilters = {
  // String filters are used if the string is non-empty.
  plangName: string;
  releaseMinDate: string;

  // Boolean filters are used if true.

  hasLogo: boolean;
  hasReleases: boolean;
  hasWebsite: boolean;
  hasWikipedia: boolean;
  transpiler: boolean;

  // Value filters are used if the set is non-empty.

  dialectOf: Filter;
  implementedWith: Filter;
  influenced: Filter;

  licenses: Filter;
  paradigm: Filter;
  plangExt: Filter;
  platform: Filter;
  standardFor: Filter;
  typeSystems: Filter;
};
