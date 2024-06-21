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
} from "./schemas";

export class PlangsBuilder {
  constructor(readonly g: PlangsGraph) { }

  define(
    vid: VID_Plang,
    name: string,
    { websites, images, releases, extensions, people, licenses, platforms, influences, influenced }: {
      websites: Link[];
      images: Image[];
      releases: Release[];
      extensions: string[];
      people: [VID_Person, E_People['role']][];
      licenses: VID_License[];
      platforms: VID_Platform[];
      influences: VID_Plang[];
      influenced: VID_Plang[];
    },
  ) { }
}

export class LicenseBuilder {
  constructor(readonly g: PlangsGraph) { }

  define(vid: VID_License, name: string, { websites }: { websites: Link[] }) {
  }
}

export class ParadigmBuilder {
  constructor(readonly g: PlangsGraph) { }

  define(vid: VID_Paradigm, name: string, { websites }: { websites: Link[] }) {
  }
}

export class PersonBuilder {
  constructor(readonly g: PlangsGraph) { }

  define(vid: VID_Person, name: string, { websites }: { websites: Link[] }) {
  }
}

export class PlatformBuilder {
  constructor(readonly g: PlangsGraph) { }

  define(vid: VID_Platform, name: string, { websites }: { websites: Link[] }) {
  }
}

export class TypeSysBuilder {
  constructor(readonly g: PlangsGraph) { }

  define(vid: VID_TypeSystem, name: string, { websites }: { websites: Link[] }) {
  }
}