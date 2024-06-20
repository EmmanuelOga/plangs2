import type { PlangsGraph } from "./plangs_graph";
import type {
  Image,
  Link,
  Release,
  T_Id_V_License,
  T_Id_V_Paradigm,
  T_Id_V_TypeSystem,
  V_Person,
  V_Plang,
} from "./schemas";

export class PlangsBuilder {
  constructor(readonly g: PlangsGraph) {}

  addDialects(pl: Partial<V_Plang>, vids: string[]) {}

  addExtensions(pl: Partial<V_Plang>, arg0: string[]) {}

  addImages(pl: Partial<V_Plang>, images: Image[]) {}

  addImplementations(pl: Partial<V_Plang>, vids: string[]) {}

  addInfluenced(pl: Partial<V_Plang>, vids: string[]) {}

  addInfluences(pl: Partial<V_Plang>, vids: string[]) {}

  addLicenses(pl: Partial<V_Plang>, vids: string[]) {}

  addParadigms(pl: Partial<V_Plang>, arg0: string[]) {}

  addPeople(pl: Partial<V_Plang>, vids: string[][]) {}

  addPlatforms(pl: Partial<V_Plang>, vids: string[]) {}

  addReferences(pl: Partial<V_Plang>, references: Record<string, Link[]>) {}

  addReleases(pl: Partial<V_Plang>, releases: Release[]) {}

  addScoping(pl: Partial<V_Plang>, vids: string[]) {}

  addTypeSystems(pl: Partial<V_Plang>, vids: string[]) {}

  addWebsites(pl: Partial<V_Plang>, websites: Link[]) {}
}

export class LicenseBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(lvid: T_Id_V_License, name: string, websites: Link[]) {
    throw new Error("Method not implemented.");
  }
}

export class ParadigmBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(para: T_Id_V_Paradigm, name: string, websites: Link[]) {}
}

export class PersonBuilder {
  constructor(readonly g: PlangsGraph) {}

  addWebsites(p: Partial<V_Person>, websites: Link[]) {}
}

export class PlatformBuilder {
  constructor(readonly g: PlangsGraph) {}
}

export class TypeSysBuilder {
  constructor(readonly g: PlangsGraph) {}

  define(tsysvid: T_Id_V_TypeSystem, name: string, websites: Link[]) {}
}
