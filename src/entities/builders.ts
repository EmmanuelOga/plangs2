import type { PlangsGraph } from "./plangs_graph";
import type {
  E_People,
  Link,
  Image,
  Release,
  VID_License,
  VID_Paradigm,
  VID_Person,
  VID_Plang,
  VID_Platform,
  VID_TypeSystem,
  V_Plang,
} from "./schemas";
import { caller } from "../util";

export class PlangsBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(
    vid: VID_Plang,
    name: string,
    { extensions, images, releases, scoping, websites, references }: Partial<V_Plang>,
    vrelations: {
      licenses?: VID_License[];
      platforms?: VID_Platform[];
      influences?: VID_Plang[];
      influenced?: VID_Plang[];
      dialects?: VID_Plang[];
      implementations?: VID_Plang[];
      paradigms?: VID_Paradigm[];
      people?: [VID_Person, E_People["role"]][];
      typeSystems?: VID_TypeSystem[];
    },
  ) {
    const v = this.g.v_plang.merge(vid, { name });
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
  }
}

export class LicenseBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_License, name: string, { websites }: { websites: Link[] }) {
    const v = this.g.v_license.merge(vid, { name });
    v.websites ??= [];
    mergeWebsites(v.websites, websites);
  }
}

export class ParadigmBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_Paradigm, name: string, { websites }: { websites: Link[] }) {
    const v = this.g.v_paradigm.merge(vid, { name });
    v.websites ??= [];
    mergeWebsites(v.websites, websites);
  }
}

export class PersonBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_Person, name: string, { websites }: { websites: Link[] }) {
    const v = this.g.v_person.merge(vid, { name });
    v.websites ??= [];
    mergeWebsites(v.websites, websites);
  }
}

export class PlatformBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_Platform, name: string, { websites }: { websites: Link[] }) {
    const v = this.g.v_platform.merge(vid, { name });
    v.websites ??= [];
    mergeWebsites(v.websites, websites);
  }
}

export class TypeSysBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(vid: VID_TypeSystem, name: string, { websites }: { websites: Link[] }) {
    const v = this.g.v_tsystem.merge(vid, { name });
    v.websites ??= [];
    mergeWebsites(v.websites, websites);
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
