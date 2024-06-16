/**
 * Define a collection of vertex and edge tables.
 */

import { GraphManager } from "./graph/tables";
import { isAnyVid, type Any, type VID } from "./graph/vertex";
import type { E_Impl_Plang, E_Influenced, E_People, E_Plang_Platf, E_Plang_Tsys, ID_V_Implementation, ID_V_Person, ID_V_Plang, ID_V_Platform, ID_V_TypeSystem, V_Implementation, V_Person, V_Plang, V_Platform, V_TypeSystem } from "./schemas";

/**
 * Collection of related edge and vertex tables.
 * 
 * These repetitive definitions follow some simple conventions,
 * are tightly coupled with the schemas in `schemas.ts`,
 * and we could potentially auto-generate this class in the future.
 */
class PlangsBase extends GraphManager {
    // Vertex tables.
    readonly v_impl = this.v_table<Partial<V_Implementation>, ID_V_Implementation>('impl');
    readonly v_person = this.v_table<Partial<V_Person>, ID_V_Person>('person');
    readonly v_pl = this.v_table<Partial<V_Plang>, ID_V_Plang>('pl');
    readonly v_platf = this.v_table<Partial<V_Platform>, ID_V_Platform>('platf');
    readonly v_tsys = this.v_table<Partial<V_TypeSystem>, ID_V_TypeSystem>('tsys');

    // Edge Tables.
    readonly e_people = this.e_table<E_People, ID_V_Person, VID<Any>>(this.v_person.v, isAnyVid, { d: true });
    readonly e_impl_pl = this.e_table<E_Impl_Plang, ID_V_Implementation, ID_V_Plang>(this.v_impl.v, this.v_pl.v, { type: 'impl', d: true });
    readonly e_pl_platf = this.e_table<E_Plang_Platf, ID_V_Plang, ID_V_Platform>(this.v_pl.v, this.v_platf.v, { type: 'supports', d: true });
    readonly e_pl_tsys = this.e_table<E_Plang_Tsys, ID_V_Plang, ID_V_TypeSystem>(this.v_pl.v, this.v_tsys.v, { type: 'type_system' });
    readonly e_influenced = this.e_table<E_Influenced, VID<Any>, VID<Any>>(isAnyVid, isAnyVid, { d: true, type: 'influenced' });
}

/**
 * The main graph for the app.
 */
export class PlangsGraph extends PlangsBase {
}