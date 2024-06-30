import { caller } from "../util";
import type { PlangsGraph } from "./plangs_graph";
import type {
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
    data: Partial<V_Plang>,
    rel?: {
      dialects?: VID_Plang[];
      implementations?: VID_Plang[];
      influenced?: VID_Plang[];
      influences?: VID_Plang[];
      licenses?: VID_License[];
      paradigms?: VID_Paradigm[];
      people?: VID_Person[];
      platforms?: VID_Platform[];
      typeSystems?: VID_TypeSystem[];
    },
  ) {
    const g = this.g;
    const prev = { ...g.v_plang.declare(vid) }; // Copy so merge's assign won't modify this one.
    const v = g.v_plang.merge(vid, data);

    if (prev.extensions) mergeExtensions((v.extensions ??= []), prev.extensions);
    if (prev.images) mergeImages((v.images ??= []), prev.images);
    if (prev.releases) mergeReleases((v.releases ??= []), prev.releases);
    if (prev.scoping) mergeScoping((v.scoping ??= []), prev.scoping);
    if (prev.websites) mergeWebsites((v.websites ??= []), prev.websites);

    if (!rel) return;

    for (const otherVid of rel.dialects ?? []) g.e_dialect_of.connect(vid, otherVid);
    for (const otherVid of rel.implementations ?? []) g.e_implements.connect(otherVid, vid);
    for (const otherVid of rel.influenced ?? []) g.e_l_influenced_l.connect(vid, otherVid);
    for (const otherVid of rel.influences ?? []) g.e_l_influenced_l.connect(otherVid, vid);
    for (const otherVid of rel.licenses ?? []) g.e_has_license.connect(vid, otherVid);
    for (const otherVid of rel.paradigms ?? []) g.e_plang_para.connect(vid, otherVid);
    for (const otherVid of rel.people ?? []) g.e_person_plang_role.connect(otherVid, vid);
    for (const otherVid of rel.platforms ?? []) g.e_supports_platf.connect(vid, otherVid);
    for (const otherVid of rel.typeSystems ?? []) g.e_plang_tsys.connect(vid, otherVid);
  }
}

export class LicenseBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_License, data: Partial<V_License>) {
    const ew = this.g.v_license.declare(vid).websites;
    const ed = this.g.v_license.merge(vid, data);
    mergeWebsites((ed.websites ??= []), ew);
  }
}

export class ParadigmBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_Paradigm, data: Partial<V_Paradigm>) {
    const ew = this.g.v_paradigm.declare(vid).websites;
    const ed = this.g.v_paradigm.merge(vid, data);
    mergeWebsites((ed.websites ??= []), ew);
  }
}

export class PersonBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_Person, data: Partial<V_Person>) {
    const ew = this.g.v_person.declare(vid).websites;
    const ed = this.g.v_person.merge(vid, data);
    mergeWebsites((ed.websites ??= []), ew);
  }
}

export class PlatformBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_Platform, data: Partial<V_Platform>) {
    const ew = this.g.v_platform.declare(vid).websites;
    const ed = this.g.v_platform.merge(vid, data);
    mergeWebsites((ed.websites ??= []), ew);
  }
}

export class TypeSysBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_TypeSystem, data: Partial<V_TypeSystem>) {
    const ew = this.g.v_tsystem.declare(vid).websites;
    const ed = this.g.v_tsystem.merge(vid, data);
    mergeWebsites((ed.websites ??= []), ew);
  }
}

//--------------------------------------------------------------------------------

const _CALLER_PATTERN = "definitions";

function mergeWebsites(dst: Link[], newLinks?: Link[]) {
  for (const newLink of newLinks ?? []) {
    const found = dst.find((link) => link.href === newLink.href);
    if (found) {
      console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Link: ${JSON.stringify(newLink)}`);
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
      console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Image: ${JSON.stringify(newImage)}`);
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
      console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Release: ${JSON.stringify(newRel)}`);
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
      console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Scope: ${newScope}`);
    } else {
      dst.push(newScope);
    }
  }
}

function mergeExtensions(dst: string[], newExtensions?: string[]) {
  for (const newExt of newExtensions ?? []) {
    const found = dst.find((ext) => ext === newExt);
    if (found) {
      console.warn(`${caller(_CALLER_PATTERN)}: Duplicate Extension: ${newExt}`);
    } else {
      dst.push(newExt);
    }
  }
}
