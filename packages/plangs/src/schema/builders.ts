import { arrayMerge, caller } from "../util";
import type { PlangsGraph } from "../graph";
import type {
  E_DialectOf,
  E_HasLicense,
  E_Implements,
  E_LInfluencedL,
  E_PersonPlang,
  E_PlangPara,
  E_PlangTsys,
  E_SupportsPlatf,
  Image,
  Link,
  Release,
  Scoping,
  VID_License,
  VID_Paradigm,
  VID_Person,
  VID_Plang,
  VID_Platform,
  VID_TypeSystem,
  V_Base,
  V_License,
  V_Paradigm,
  V_Person,
  V_Plang,
  V_Platform,
  V_TypeSystem,
} from "./entities";

export class PlangBuilder {
  constructor(
    readonly g: PlangsGraph,
    readonly vid: VID_Plang,
  ) {
    g.v_plang.declare(vid);
  }

  merge(data: Partial<V_Plang>): this {
    const prev = { ...this.g.v_plang.get(this.vid) }; // Save a _copy_ before merging.
    const upd = this.g.v_plang.merge(this.vid, data);

    mergeExtensions(upd, prev);
    mergeImages(upd, prev);
    mergeReleases(upd, prev);
    mergeScoping(upd, prev);
    mergeWebsites(upd, prev);

    return this;
  }

  addDialect(other: VID_Plang, data: Partial<E_DialectOf>): this {
    this.g.e_dialect_of.merge(other, this.vid, data);
    return this;
  }

  addDialects(others: VID_Plang[]): this {
    for (const other of others) this.g.e_dialect_of.connect(other, this.vid);
    return this;
  }

  addImplementation(other: VID_Plang, data: Partial<E_Implements>): this {
    this.g.e_implements.merge(other, this.vid, data);
    return this;
  }

  addImplementations(others: VID_Plang[]): this {
    for (const other of others) this.g.e_implements.connect(other, this.vid);
    return this;
  }

  addInfluence(other: VID_Plang, data: Partial<E_LInfluencedL>): this {
    this.g.e_l_influenced_l.merge(other, this.vid, data);
    return this;
  }

  addInfluences(others: VID_Plang[]): this {
    for (const other of others) this.g.e_l_influenced_l.connect(other, this.vid);
    return this;
  }

  addLicense(other: VID_License, data: Partial<E_HasLicense>): this {
    this.g.e_has_license.merge(this.vid, other, data);
    return this;
  }

  addLicenses(others: VID_License[]): this {
    for (const other of others ?? []) this.g.e_has_license.connect(this.vid, other);
    return this;
  }

  addParadigm(other: VID_Paradigm, data: Partial<E_PlangPara>): this {
    this.g.e_plang_para.merge(this.vid, other, data);
    return this;
  }

  addParadigms(others: VID_Paradigm[]): this {
    for (const otherVid of others ?? []) this.g.e_plang_para.connect(this.vid, otherVid);
    return this;
  }

  addPerson(other: VID_Person, data: Partial<E_PersonPlang>): this {
    this.g.e_person_plang.merge(other, this.vid, data);
    return this;
  }

  addPeople(others: VID_Person[]): this {
    for (const other of others ?? []) this.g.e_person_plang.connect(other, this.vid);
    return this;
  }

  addPlatform(other: VID_Platform, data: Partial<E_SupportsPlatf>): this {
    this.g.e_supports_platf.merge(this.vid, other, data);
    return this;
  }

  addPlatforms(others: VID_Platform[]): this {
    for (const other of others) this.g.e_supports_platf.connect(this.vid, other);
    return this;
  }

  addTypeSystem(other: VID_TypeSystem, data: Partial<E_PlangTsys>): this {
    this.g.e_plang_tsys.merge(this.vid, other, data);
    return this;
  }

  addTypeSystems(others: VID_TypeSystem[]): this {
    for (const other of others ?? []) this.g.e_plang_tsys.connect(this.vid, other);
    return this;
  }
}

export class LicenseBuilder {
  constructor(
    readonly g: PlangsGraph,
    readonly vid: VID_License,
  ) {
    g.v_license.declare(this.vid);
  }

  merge(data: Partial<V_License>): this {
    const prev = { ...this.g.v_license.get(this.vid) };
    const upd = this.g.v_license.merge(this.vid, data);
    mergeWebsites(upd, prev);
    return this;
  }
}

export class ParadigmBuilder {
  constructor(
    readonly g: PlangsGraph,
    readonly vid: VID_Paradigm,
  ) {
    g.v_paradigm.declare(this.vid);
  }

  merge(data: Partial<V_Paradigm>): this {
    const prev = { ...this.g.v_paradigm.get(this.vid) };
    const upd = this.g.v_paradigm.merge(this.vid, data);
    mergeWebsites(upd, prev);
    return this;
  }
}

export class PersonBuilder {
  constructor(
    readonly g: PlangsGraph,
    readonly vid: VID_Person,
  ) {
    g.v_person.declare(this.vid);
  }

  merge(data: Partial<V_Person>): this {
    const prev = { ...this.g.v_person.get(this.vid) };
    const upd = this.g.v_person.merge(this.vid, data);
    mergeWebsites(upd, prev);
    return this;
  }
}

export class PlatformBuilder {
  constructor(
    readonly g: PlangsGraph,
    readonly vid: VID_Platform,
  ) {
    g.v_platform.declare(this.vid);
  }

  merge(data: Partial<V_Platform>): this {
    const prev = { ...this.g.v_platform.get(this.vid) };
    const upd = this.g.v_platform.merge(this.vid, data);
    mergeWebsites(upd, prev);
    return this;
  }
}

export class TypeSysBuilder {
  constructor(
    readonly g: PlangsGraph,
    readonly vid: VID_TypeSystem,
  ) {
    g.v_tsystem.declare(this.vid);
  }

  merge(data: Partial<V_TypeSystem>): this {
    const prev = { ...this.g.v_tsystem.get(this.vid) };
    const upd = this.g.v_tsystem.merge(this.vid, data);
    mergeWebsites(upd, prev);
    return this;
  }
}

//--------------------------------------------------------------------------------

const _CALLER_PATTERN = "definitions";

type Attr<T, Key extends keyof T> = Partial<Pick<T, Key>>;

function mergeWebsites(target: Attr<V_Base, "websites">, newData: Attr<V_Base, "websites">) {
  if (newData.websites === undefined) return;
  arrayMerge(
    (target.websites ??= []),
    newData.websites,
    (l1: Link, l2: Link) => l1.href === l2.href,
    (prevLink: Link, newLink: Link) => {
      console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Link: ${JSON.stringify({ prevLink, newLink })}`);
    },
  );
}

function mergeImages(target: Attr<V_Plang, "images">, newData: Attr<V_Plang, "images">) {
  if (newData.images === undefined) return;
  arrayMerge(
    (target.images ??= []),
    newData.images,
    (img1: Image, img2: Image) => img1.url === img2.url,
    (prevImage: Image, newImage: Image) => {
      console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Image: ${JSON.stringify({ prevImage, newImage })}`);
      prevImage.width ??= newImage.width;
      prevImage.height ??= newImage.height;
    },
  );
}

function mergeReleases(target: Attr<V_Plang, "releases">, newData: Attr<V_Plang, "releases">) {
  if (!newData.releases) return;
  arrayMerge(
    (target.releases ??= []),
    newData.releases,
    (rel1: Release, rel2: Release) => rel1.version === rel2.version && rel1.date === rel2.date,
    (prevRel: Release, newRel: Release) => {
      console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Release: ${JSON.stringify({ prevRel, newRel })}`);
    },
  );
}

function mergeScoping(target: Attr<V_Plang, "scoping">, newData: Attr<V_Plang, "scoping">) {
  if (!newData.scoping) return;
  arrayMerge(
    (target.scoping ??= []),
    newData.scoping,
    (scope1: Scoping, scope2: Scoping) => scope1 === scope2,
    (prevScope, newScope) => {
      console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Scope: ${newScope}`);
    },
  );
}

function mergeExtensions(target: Attr<V_Plang, "extensions">, newData: Attr<V_Plang, "extensions">) {
  if (newData.extensions === undefined) return;
  arrayMerge(
    (target.extensions ??= []),
    newData.extensions,
    (ext1, ext2) => ext1 === ext2,
    (prevExt, newExt) => {
      console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Extension: ${newExt}`);
    },
  );
}
