import { caller } from "../util";
import type { PlangsGraph } from "./plangs_graph";
import type {
  E_People,
  Image,
  Link,
  Release,
  VID_License,
  VID_Paradigm,
  VID_Person,
  VID_Plang,
  VID_Platform,
  VID_TypeSystem,
  V_License,
  V_Paradigm,
  V_Person,
  V_Plang,
  V_Platform,
  V_TypeSystem,
} from "./schemas";

export class PlangsBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(
    vid: VID_Plang,
    name: string,
    { extensions, images, releases, scoping, websites, references }: Partial<V_Plang>,
    vrelations?: {
      licenses?: VID_License[];
      platforms?: VID_Platform[];
      influences?: VID_Plang[];
      influenced?: VID_Plang[];
      dialects?: VID_Plang[];
      implementations?: VID_Plang[];
      paradigms?: VID_Paradigm[];
      people?: [VID_Person, Partial<E_People>][];
      typeSystems?: VID_TypeSystem[];
    },
  ) {
    const g = this.g;
    const v = g.v_plang.merge(vid, { name });
    v.websites ??= [];
    mergeWebsites(v.websites, websites);
    v.extensions ??= [];
    mergeExtensions(v.extensions, extensions);
    v.images ??= [];
    mergeImages(v.images, images);
    v.releases ??= [];
    mergeReleases(v.releases, releases);
    v.scoping ??= [];
    mergeScoping(v.scoping, scoping);
    v.references ??= {};
    mergeReferences(v.references, references);

    if (!vrelations) return;

    for (const otherVid of vrelations.licenses ?? []) g.e_has_license.connect(vid, otherVid);
    for (const otherVid of vrelations.platforms ?? []) g.e_supports_platf.connect(vid, otherVid);

    for (const otherVid of vrelations.influences ?? []) g.e_l_influenced_l.connect(otherVid, vid);
    for (const otherVid of vrelations.influenced ?? []) g.e_l_influenced_l.connect(vid, otherVid);
    for (const otherVid of vrelations.dialects ?? []) g.e_dialect_of.connect(vid, otherVid);

    for (const otherVid of vrelations.implementations ?? []) g.e_implements.connect(otherVid, vid);
    for (const otherVid of vrelations.paradigms ?? []) g.e_plang_para.connect(vid, otherVid);
    for (const otherVid of vrelations.typeSystems ?? []) g.e_plang_tsys.connect(vid, otherVid);

    for (const [otherVid, { role }] of vrelations.people ?? []) {
      if (!role) continue;
      if (role === "developer" || role === "designer") {
        g.e_person_plang_role.merge(otherVid, vid, { role });
      } else {
        console.warn(`${caller(_SITE)}: Invalid role: ${role}`);
      }
    }
  }
}

export class LicenseBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_License, name: string, data: Partial<V_License>) {
    const v = this.g.v_license.merge(vid, { name });
    v.websites ??= [];
    mergeWebsites(v.websites, data.websites);
  }
}

export class ParadigmBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_Paradigm, name: string, data: Partial<V_Paradigm>) {
    const v = this.g.v_paradigm.merge(vid, { name });
    v.websites ??= [];
    mergeWebsites(v.websites, data.websites);
  }
}

export class PersonBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_Person, name: string, data: Partial<V_Person>) {
    const v = this.g.v_person.merge(vid, { name });
    v.websites ??= [];
    mergeWebsites(v.websites, data.websites);
  }
}

export class PlatformBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_Platform, name: string, data: Partial<V_Platform>) {
    const v = this.g.v_platform.merge(vid, { name });
    v.websites ??= [];
    mergeWebsites(v.websites, data.websites);
  }
}

export class TypeSysBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_TypeSystem, name: string, data: Partial<V_TypeSystem>) {
    const v = this.g.v_tsystem.merge(vid, { name });
    v.websites ??= [];
    mergeWebsites(v.websites, data.websites);
  }
}

//--------------------------------------------------------------------------------

const _SITE = "definitions";

function mergeWebsites(dst: Link[], newLinks?: Link[]) {
  for (const newLink of newLinks ?? []) {
    const found = dst.find((link) => link.href === newLink.href);
    if (found) {
      console.warn(`${caller(_SITE)}: Duplicate Link: ${JSON.stringify(newLink)}`);
      if (found.title.length > newLink.title.length) {
        found.title = newLink.title;
      }
      found.kind ??= newLink.kind;
    } else {
      dst.push(newLink);
    }
    const link = found ?? newLink;
    if (!link.kind && link.href.includes("wikipedia.org")) link.kind = "wikipedia";
  }
}

function mergeImages(dst: Image[], newImages?: Image[]) {
  for (const newImage of newImages ?? []) {
    const found = dst.find((img) => img.url === newImage.url);
    if (found) {
      console.warn(`${caller(_SITE)}: Duplicate Image: ${JSON.stringify(newImage)}`);
      found.width ??= newImage.width;
      found.height ??= newImage.height;
    } else {
      dst.push(newImage);
    }
  }
}

function mergeReleases(dst: Release[], newReleases?: Release[]) {
  for (const newRel of newReleases ?? []) {
    const found = dst.find((rel) => rel.version === newRel.version && rel.date === newRel.date);
    if (found) {
      console.warn(`${caller(_SITE)}: Duplicate Release: ${JSON.stringify(newRel)}`);
      found.date ??= newRel.date;
    } else {
      dst.push(newRel);
    }
  }
}

function mergeScoping(dst: V_Plang["scoping"], newScopings?: V_Plang["scoping"]) {
  for (const newScope of newScopings ?? []) {
    const found = dst.find((scope) => scope === newScope);
    if (found) {
      console.warn(`${caller(_SITE)}: Duplicate Scope: ${newScope}`);
    } else {
      dst.push(newScope);
    }
  }
}

function mergeExtensions(dst: string[], newExtensions?: string[]) {
  for (const newExt of newExtensions ?? []) {
    const found = dst.find((ext) => ext === newExt);
    if (found) {
      console.warn(`${caller(_SITE)}: Duplicate Extension: ${newExt}`);
    } else {
      dst.push(newExt);
    }
  }
}

function mergeReferences(dst: V_Plang["references"], references?: V_Plang["references"]) {
  for (const [key, val] of Object.entries(references ?? {})) {
    dst[key] ??= [];
    mergeWebsites(dst[key], val);
  }
}
