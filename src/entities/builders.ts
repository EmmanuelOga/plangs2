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
  V_Person,
  V_Plang,
} from "./schemas";

export class PlangsBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(
    vid: VID_Plang,
    {
      websites,
    }: {
      websites: Link[];
      images: Image[];
      releases: Release[];
      extensions: string[];
      people: [VID_Person, string][];
      licenses: VID_License[];
      platforms: VID_Platform[];
      influences: VID_Plang[];
      influenced: VID_Plang[];
    },
  ) {}
}

export class LicenseBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(lvid: VID_License, name: string, websites: Link[]) {
    throw new Error("Method not implemented.");
  }
}

export class ParadigmBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(para: VID_Paradigm, name: string, websites: Link[]) {}
}

export class PersonBuilder {
  define(arg0: string, arg1: string, arg2: { title: string; href: string; kind: string }[]) {
    throw new Error("Method not implemented.");
  }
  constructor(readonly g: PlangsGraph) {}

  addWebsites(p: Partial<V_Person>, websites: Link[]) {}
}

export class PlatformBuilder {
  define(arg0: string, arg1: string, arg2: { kind: string; title: string; href: string }[]) {
    throw new Error("Method not implemented.");
  }
  constructor(readonly g: PlangsGraph) {}
}

export class TypeSysBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(tsysvid: VID_TypeSystem, name: string, websites: Link[]) {}
}
