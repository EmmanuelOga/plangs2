import { arrayMerge, caller } from "../util";
import type { PlangsGraph } from "./plangs_graph";
import type {
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
} from "./schemas";

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

  addDialects(dialects: VID_Plang[]) {
    for (const otherVid of dialects) this.g.e_dialect_of.connect(this.vid, otherVid);
  }

  addImplementations(implementations: VID_Plang[]) {
    for (const otherVid of implementations ?? []) this.g.e_implements.connect(otherVid, this.vid);
  }

  addInfluenced(influenced: VID_Plang[]) {
    for (const otherVid of influenced ?? []) this.g.e_l_influenced_l.connect(this.vid, otherVid);
  }

  addInfluences(influences: VID_Plang[]) {
    for (const otherVid of influences ?? []) this.g.e_l_influenced_l.connect(otherVid, this.vid);
  }

  addLicenses(licenses: VID_License[]) {
    for (const otherVid of licenses ?? []) this.g.e_has_license.connect(this.vid, otherVid);
  }

  addParadigms(paradigms: VID_Paradigm[]) {
    for (const otherVid of paradigms ?? []) this.g.e_plang_para.connect(this.vid, otherVid);
  }

  addPeople(people: VID_Person[]) {
    for (const otherVid of people ?? []) this.g.e_person_plang.connect(otherVid, this.vid);
  }

  addPlatforms(platforms: VID_Platform[]) {
    for (const otherVid of platforms) this.g.e_supports_platf.connect(this.vid, otherVid);
  }

  addTypeSystems(typeSystems: VID_TypeSystem[]) {
    for (const otherVid of typeSystems ?? []) this.g.e_plang_tsys.connect(this.vid, otherVid);
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

  merge(data: Partial<V_Paradigm>) {
    const prev = { ...this.g.v_paradigm.get(this.vid) };
    const upd = this.g.v_paradigm.merge(this.vid, data);
    mergeWebsites(upd, prev);
  }
}

export class PersonBuilder {
  constructor(
    readonly g: PlangsGraph,
    readonly vid: VID_Person,
  ) {
    g.v_person.declare(this.vid);
  }

  merge(data: Partial<V_Person>) {
    const prev = { ...this.g.v_person.get(this.vid) };
    const upd = this.g.v_person.merge(this.vid, data);
    mergeWebsites(upd, prev);
  }
}

export class PlatformBuilder {
  constructor(
    readonly g: PlangsGraph,
    readonly vid: VID_Platform,
  ) {
    g.v_platform.declare(this.vid);
  }

  merge(data: Partial<V_Platform>) {
    const prev = { ...this.g.v_platform.get(this.vid) };
    const upd = this.g.v_platform.merge(this.vid, data);
    mergeWebsites(upd, prev);
  }
}

export class TypeSysBuilder {
  constructor(
    readonly g: PlangsGraph,
    readonly vid: VID_TypeSystem,
  ) {
    g.v_tsystem.declare(this.vid);
  }

  merge(data: Partial<V_TypeSystem>) {
    const prev = { ...this.g.v_tsystem.get(this.vid) };
    const upd = this.g.v_tsystem.merge(this.vid, data);
    mergeWebsites(upd, prev);
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
