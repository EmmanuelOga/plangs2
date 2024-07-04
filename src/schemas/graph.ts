import { Graph } from "../graphs/graph";
import {
  LicenseBuilder,
  ParadigmBuilder,
  PersonBuilder,
  PlangBuilder,
  PlatformBuilder,
  TypeSysBuilder,
} from "./builders";
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
} from "./entities";

/**
 * Collection of related edge and vertex tables.
 *
 * These repetitive definitions follow some simple conventions,
 * are tightly coupled with the schemas in `schemas.ts`,
 * and could potentially be auto-generated in the future.
 */
// biome-ignore format: it's artisanally formatted :-p.
export class PlangsGraph extends Graph {
  // Vertex tables.
  readonly v_license = this.v_table<Partial<V_License>, VID_License>("lic",);
  readonly v_paradigm = this.v_table<Partial<V_Paradigm>, VID_Paradigm>("para",);
  readonly v_person = this.v_table<Partial<V_Person>, VID_Person>("person");
  readonly v_plang = this.v_table<Partial<V_Plang>, VID_Plang>("pl");
  readonly v_platform = this.v_table<Partial<V_Platform>, VID_Platform>("platf");
  readonly v_tsystem = this.v_table<Partial<V_TypeSystem>, VID_TypeSystem>("tsys");

  // Edge Tables.
  readonly e_dialect_of = this.e_table<E_DialectOf, VID_Plang, VID_Plang>("dialect-of", this.v_plang, this.v_plang,);
  readonly e_has_license = this.e_table<E_HasLicense, VID_Plang, VID_License>("has-license", this.v_plang, this.v_license,);
  readonly e_implements = this.e_table<E_Implements, VID_Plang, VID_Plang>("implements", this.v_plang, this.v_plang,);
  readonly e_l_influenced_l = this.e_table<E_LInfluencedL, VID_Plang, VID_Plang>("influenced", this.v_plang, this.v_plang,);
  readonly e_person_plang = this.e_table<E_PersonPlang, VID_Person, VID_Plang>("had-role", this.v_person, this.v_plang);
  readonly e_plang_para = this.e_table<E_PlangPara, VID_Plang, VID_Paradigm>("paradigm", this.v_plang, this.v_paradigm,);
  readonly e_plang_tsys = this.e_table<E_PlangTsys, VID_Plang, VID_TypeSystem>("type-system", this.v_plang, this.v_tsystem);
  readonly e_supports_platf = this.e_table<E_SupportsPlatf, VID_Plang, VID_Platform>("supports-platf", this.v_plang, this.v_platform);

  // Builders.

  buildLicense(vid: VID_License) {
    return new LicenseBuilder(this, vid);
  }

  buildParadigm(vid: VID_Paradigm) {
    return new ParadigmBuilder(this, vid);
  }

  buildPerson(vid: VID_Person) {
    return new PersonBuilder(this, vid);
  }

  buildPlang(vid: VID_Plang) {
    return new PlangBuilder(this, vid);
  }

  buildPlatform(vid: VID_Platform) {
    return new PlatformBuilder(this, vid);
  }

  buildTypeSystem(vid: VID_TypeSystem) {
    return new TypeSysBuilder(this, vid);
  }

  // Convenience methods.

  plangLogo(vid: VID_Plang): Image | undefined {
    const pl = this.v_plang.get(vid);
    if (!pl?.images) return;
    for (const img of pl.images) if (img.kind === "logo") return img;
  }

  *typeSystems(): Generator<[VID_TypeSystem, string], void, unknown> {
    for (const [vid, data] of this.v_tsystem) {
      if (data.name === undefined) {
        console.error(`TypeSystem ${vid} has no name`);
        continue;
      }
      yield [vid, data.name];
    }
  }

  plangHasTypeSystems(vid: VID_Plang, mode: "all-of" | "any-of", values: Iterable<VID_TypeSystem>): boolean {
    const pl_tsys = this.e_plang_tsys.adjacentFrom(vid);
    if (mode === "all-of") {
      for (const ts of values) {
        if (!pl_tsys.has(ts as VID_TypeSystem)) return false;
      }
      return true;
    }
    // any-of
    for (const ts of values) {
      if (pl_tsys.has(ts as VID_TypeSystem)) return true;
    }
    return false;
  }
}
