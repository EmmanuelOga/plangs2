import { type AnyNode, BaseGraph, Edge, type NO_DATA, Node } from "@plangs/graph";

import { arrayMerge, verify } from "./util";

export class PlangsGraph extends BaseGraph {
  // Vertex tables.

  readonly n_license = this.nodeMap<NLicense>("lic", (key) => new NLicense(this, key));
  readonly n_paradigm = this.nodeMap<NParadigm>("para", (key) => new NParadigm(this, key));
  readonly n_person = this.nodeMap<NPerson>("person", (key) => new NPerson(this, key));
  readonly n_plang = this.nodeMap<NPlang>("pl", (key) => new NPlang(this, key));
  readonly n_platform = this.nodeMap<NPlatform>("platf", (key) => new NPlatform(this, key));
  readonly n_tsystem = this.nodeMap<NTypeSystem>("tsys", (key) => new NTypeSystem(this, key));

  // Edge Tables.

  readonly e_dialect_of = this.edgeMap<EDialectOf>("dialect-of", (from, to) => new EDialectOf(this, from, to));
  readonly e_has_license = this.edgeMap<EHasLicense>("has-license", (from, to) => new EHasLicense(this, from, to));
  readonly e_implements = this.edgeMap<EImplements>("implements", (from, to) => new EImplements(this, from, to));
  readonly e_l_influenced_l = this.edgeMap<ELInfluencedL>("influenced", (from, to) => new ELInfluencedL(this, from, to));
  readonly e_person_plang = this.edgeMap<EPersonPlang>("had-role", (from, to) => new EPersonPlang(this, from, to));
  readonly e_plang_para = this.edgeMap<EPlangPara>("paradigm", (from, to) => new EPlangPara(this, from, to));
  readonly e_plang_tsys = this.edgeMap<EPlangTsys>("type-system", (from, to) => new EPlangTsys(this, from, to));
  readonly e_supports_platf = this.edgeMap<ESupportsPlatf>("pl-platf", (from, to) => new ESupportsPlatf(this, from, to));

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
        (filters.dialectOf.values.size > 0 && !pl.relMatchesFilter(filters.dialectOf, pl.relDialects("from"))) ||
        (filters.implements.values.size > 0 && !pl.relMatchesFilter(filters.implements, pl.relImplements("from"))) ||
        (filters.influenced.values.size > 0 && !pl.relMatchesFilter(filters.influenced, pl.relInfluenced("from"))) ||
        (filters.dialectOfRev.values.size > 0 && !pl.relMatchesFilter(filters.dialectOfRev, pl.relDialects("to"))) ||
        (filters.implementsRev.values.size > 0 && !pl.relMatchesFilter(filters.implementsRev, pl.relImplements("to"))) ||
        (filters.influencedRev.values.size > 0 && !pl.relMatchesFilter(filters.influencedRev, pl.relInfluenced("to"))) ||
        (filters.licenses.values.size > 0 && !pl.relMatchesFilter(filters.licenses, pl.relLicenses())) ||
        (filters.paradigm.values.size > 0 && !pl.relMatchesFilter(filters.paradigm, pl.relParadigms())) ||
        (filters.people.values.size > 0 && !pl.relMatchesFilter(filters.people, pl.relPeople())) ||
        (filters.platform.values.size > 0 && !pl.relMatchesFilter(filters.platform, pl.relPlatforms())) ||
        (filters.typeSystems.values.size > 0 && !pl.relMatchesFilter(filters.typeSystems, pl.relTypeSystems()))
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
}

/** Base type for data on all nodes. */
abstract class NBase<Key extends string, Data extends CommonNodeData> extends Node<Key, Data> {
  constructor(
    public readonly g: PlangsGraph,
    key: Key,
  ) {
    super(key);
  }

  addWebsites(links: Link[]): this {
    arrayMerge((this.data.websites ??= []), links, (l1, l2) => l1.href === l2.href);
    return this;
  }
}

/** A programming language Vertex. */
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
    this.g.e_dialect_of.connect(other, this.key).merge(data);
    return this;
  }

  addDialects(others: NPlang["key"][]): this {
    for (const other of others) this.g.e_dialect_of.connect(other, this.key);
    return this;
  }

  addImplementation(other: NPlang["key"], data: EImplements["data"]): this {
    this.g.e_implements.connect(other, this.key).merge(data);
    return this;
  }

  addImplementations(others: NPlang["key"][]): this {
    for (const other of others) this.g.e_implements.connect(other, this.key);
    return this;
  }

  addInfluence(other: NPlang["key"], data: ELInfluencedL["data"]): this {
    this.g.e_l_influenced_l.connect(other, this.key).merge(data);
    return this;
  }

  addInfluences(others: NPlang["key"][]): this {
    for (const other of others) this.g.e_l_influenced_l.connect(other, this.key);
    return this;
  }

  addLicense(other: NLicense["key"], data: EHasLicense["data"]): this {
    this.g.e_has_license.connect(this.key, other).merge(data);
    return this;
  }

  addLicenses(others: NLicense["key"][]): this {
    for (const other of others) this.g.e_has_license.connect(this.key, other);
    return this;
  }

  addParadigm(other: NParadigm["key"], data: EPlangPara["data"]): this {
    this.g.e_plang_para.connect(this.key, other).merge(data);
    return this;
  }

  addParadigms(others: NParadigm["key"][]): this {
    for (const otherkey of others) this.g.e_plang_para.connect(this.key, otherkey);
    return this;
  }

  addPerson(other: NPerson["key"], data: EPersonPlang["data"]): this {
    this.g.e_person_plang.connect(other, this.key).merge(data);
    return this;
  }

  addPeople(others: NPerson["key"][]): this {
    for (const other of others) this.g.e_person_plang.connect(other, this.key);
    return this;
  }

  addPlatform(other: NPlatform["key"], data: ESupportsPlatf["data"]): this {
    this.g.e_supports_platf.connect(this.key, other, data);
    return this;
  }

  addPlatforms(others: NPlatform["key"][]): this {
    for (const other of others) this.g.e_supports_platf.connect(this.key, other);
    return this;
  }

  addTypeSystem(other: NTypeSystem["key"], data: EPlangTsys["data"]): this {
    this.g.e_plang_tsys.connect(this.key, other).merge(data);
    return this;
  }

  addTypeSystems(others: NTypeSystem["key"][]): this {
    for (const other of others) this.g.e_plang_tsys.connect(this.key, other);
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

  relDialects(direction: "from" | "to"): Map<NPlang["key"], EDialectOf> | undefined {
    return this.g.e_dialect_of.adj(direction).getMap(this.key);
  }

  relLicenses(): Map<NLicense["key"], EHasLicense> | undefined {
    return this.g.e_has_license.adjFrom.getMap(this.key);
  }

  relImplements(direction: "from" | "to"): Map<NPlang["key"], EImplements> | undefined {
    return this.g.e_implements.adj(direction).getMap(this.key);
  }

  relInfluenced(direction: "from" | "to"): Map<NPlang["key"], EImplements> | undefined {
    return this.g.e_l_influenced_l.adj(direction).getMap(this.key);
  }

  relPeople(): Map<NPerson["key"], EPersonPlang> | undefined {
    return this.g.e_person_plang.adjTo.getMap(this.key);
  }

  relParadigms(): Map<NParadigm["key"], EPlangPara> | undefined {
    return this.g.e_plang_para.adjFrom.getMap(this.key);
  }

  relTypeSystems(): Map<NTypeSystem["key"], EPlangTsys> | undefined {
    return this.g.e_plang_tsys.adjFrom.getMap(this.key);
  }

  relPlatforms(): Map<NPlatform["key"], ESupportsPlatf> | undefined {
    return this.g.e_supports_platf.adjFrom.getMap(this.key);
  }

  // biome-ignore lint/suspicious/noExplicitAny: we don't care about the type of the filter values.
  relMatchesFilter({ values, mode }: Filter, relationship: Map<string, any> | undefined): boolean {
    if (!relationship) return false;
    return verify(values, mode, (v) => relationship.has(v));
  }
}

/** A platform Vertex, e.g., Linux, Windows, etc. */
export class NPlatform extends NBase<`platf+${string}`, CommonNodeData> {}

/** A type system Vertex, e.g., OOP, Duck, Dynamic, etc. */
export class NTypeSystem extends NBase<`tsys+${string}`, CommonNodeData> {}

/** A programming paradigm Vertex, e.g., Functional, Imperative, etc. */
export class NParadigm extends NBase<`para+${string}`, CommonNodeData> {}

/** A person Vertex, for people involved in the development of a programming language. */
export class NPerson extends NBase<`person+${string}`, CommonNodeData> {}

/** A license Vertex, e.g., MIT, GPL, etc. */
export class NLicense extends NBase<`lic+${string}`, CommonNodeData> {}

/** A tool Vertex, e.g., Version Manager, Linter, Formatter,  etc. */
export class NTool extends NBase<`tool+${string}`, CommonNodeData> {}

/** A library Vertex. */
export class NLibrary extends NBase<`lib+${string}`, CommonNodeData> {}

////////////////////////////////////////////////////////////////////////////////
// Edge Types
////////////////////////////////////////////////////////////////////////////////

interface CommonEdgeData {
  refs: Link[];
}

/** Base type for data on all edges. */
abstract class EBase<T_From extends AnyNode, T_To extends AnyNode, T_Data extends CommonEdgeData> extends Edge<
  T_From,
  T_To,
  T_Data
> {
  constructor(
    public readonly g: PlangsGraph,
    from: T_From["key"],
    to: T_To["key"],
  ) {
    super(from, to);
  }
}

export class EPersonPlang extends EBase<NPerson, NPlang, CommonEdgeData & { role: "designer" | "developer" }> {}

export class EDialectOf extends EBase<NPlang, NPlang, CommonEdgeData> {}

export class EHasLicense extends EBase<NPlang, NLicense, CommonEdgeData> {}

export class EImplements extends EBase<NPlang, NPlang, CommonEdgeData> {}

export class ELInfluencedL extends EBase<NPlang, NPlang, CommonEdgeData> {}

export class EPlangPara extends EBase<NPlang, NParadigm, CommonEdgeData> {}

export class EPlangTsys extends EBase<NPlang, NTypeSystem, CommonEdgeData> {}

export class ESupportsPlatf extends EBase<NPlang, NPlatform, CommonEdgeData> {}

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
  version: string;
  kind: "first" | "preview" | "stable" | "other";
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
  implements: Filter;
  influenced: Filter;

  dialectOfRev: Filter;
  implementsRev: Filter;
  influencedRev: Filter;

  licenses: Filter;
  paradigm: Filter;
  people: Filter;
  plangExt: Filter;
  platform: Filter;
  standardFor: Filter;
  typeSystems: Filter;
};
