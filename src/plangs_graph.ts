import { Graph } from "./graph/base";
import type { E_Empty, E_People, T_Id_V_Implem, T_Id_V_License, T_Id_V_Paradigm, T_Id_V_Person, T_Id_V_Plang, T_Id_V_Platform, T_Id_V_TypeSystem, V_Implem, V_License, V_Paradigm, V_Person, V_Plang, V_Platform, V_TypeSystem } from "./schemas";

/**
 * Collection of related edge and vertex tables.
 * 
 * These repetitive definitions follow some simple conventions, are tightly coupled with the schemas in `schemas.ts`,
 * and could potentially be auto-generated in the future.
 */
export class PlangsGraph extends Graph {
    // Vertex tables.
    readonly v_implem = this.v_table<Partial<V_Implem>, T_Id_V_Implem>('impl');
    readonly v_license = this.v_table<Partial<V_License>, T_Id_V_License>('license');
    readonly v_paradigm = this.v_table<Partial<V_Paradigm>, T_Id_V_Paradigm>('para');
    readonly v_person = this.v_table<Partial<V_Person>, T_Id_V_Person>('person');
    readonly v_plang = this.v_table<Partial<V_Plang>, T_Id_V_Plang>('pl');
    readonly v_platform = this.v_table<Partial<V_Platform>, T_Id_V_Platform>('platf');
    readonly v_tsystem = this.v_table<Partial<V_TypeSystem>, T_Id_V_TypeSystem>('tsys');

    // Edge Tables.
    readonly e_dialect_of = this.e_table<E_Empty, T_Id_V_Plang, T_Id_V_Plang>('dialect-of', this.v_plang, this.v_plang);
    readonly e_has_license = this.e_table<E_Empty, T_Id_V_Plang, T_Id_V_License>('has-license', this.v_plang, this.v_license);
    readonly e_implemented_with = this.e_table<E_Empty, T_Id_V_Implem, T_Id_V_Plang>('implemented-with', this.v_implem, this.v_plang,);
    readonly e_implements = this.e_table<E_Empty, T_Id_V_Implem, T_Id_V_Plang>('implements', this.v_implem, this.v_plang);
    readonly e_l_influenced_l = this.e_table<E_Empty, T_Id_V_Plang, T_Id_V_Plang>('influenced', this.v_plang, this.v_plang);
    readonly e_person_plang_role = this.e_table<E_People, T_Id_V_Person, T_Id_V_Plang>('had-role', this.v_person, this.v_plang);
    readonly e_plang_para = this.e_table<E_Empty, T_Id_V_Plang, T_Id_V_Paradigm>('paradigm', this.v_plang, this.v_paradigm);
    readonly e_plang_tsys = this.e_table<E_Empty, T_Id_V_Plang, T_Id_V_TypeSystem>('type-system', this.v_plang, this.v_tsystem);
    readonly e_supports_platf = this.e_table<E_Empty, T_Id_V_Plang, T_Id_V_Platform>('supports-platf', this.v_plang, this.v_platform);
}