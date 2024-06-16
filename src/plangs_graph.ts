/**
 * Define a collection of vertex and edge tables.
 */

import { GraphManager } from "./graph/tables";
import { type ID_V_Any, isAnyVid } from "./graph/vertex";
import type { E_Empty } from "./graph/edge";
import type { E_People, ID_V_Implementation, ID_V_License, ID_V_Person, ID_V_Plang, ID_V_Platform, ID_V_TypeSystem, V_Implementation, V_License, V_Person, V_Plang, V_Platform, V_TypeSystem } from "./schemas";

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
    readonly v_license = this.v_table<Partial<V_License>, ID_V_License>('license');
    readonly v_person = this.v_table<Partial<V_Person>, ID_V_Person>('person');
    readonly v_plang = this.v_table<Partial<V_Plang>, ID_V_Plang>('pl');
    readonly v_platform = this.v_table<Partial<V_Platform>, ID_V_Platform>('platf');
    readonly v_tsystem = this.v_table<Partial<V_TypeSystem>, ID_V_TypeSystem>('tsys');

    // Edge Tables.
    readonly e_dialect_of = this.e_table<E_Empty, ID_V_Plang, ID_V_Plang>(this.v_plang.v, this.v_plang.v, { type: 'dialect', d: true });
    readonly e_has_license = this.e_table<E_Empty, ID_V_Any, ID_V_License>(isAnyVid, this.v_license.v, { d: true, type: 'license' });
    readonly e_implemented_with = this.e_table<E_Empty, ID_V_Plang, ID_V_Plang>(this.v_plang.v, this.v_plang.v, { type: 'implemented_with', d: true });
    readonly e_implements = this.e_table<E_Empty, ID_V_Implementation, ID_V_Plang>(this.v_impl.v, this.v_plang.v, { type: 'impl', d: true });
    readonly e_influenced = this.e_table<E_Empty, ID_V_Any, ID_V_Any>(isAnyVid, isAnyVid, { d: true, type: 'influenced' });
    readonly e_people = this.e_table<E_People, ID_V_Person, ID_V_Any>(this.v_person.v, isAnyVid, { d: true });
    readonly e_plang_tsys = this.e_table<E_Empty, ID_V_Plang, ID_V_TypeSystem>(this.v_plang.v, this.v_tsystem.v, { type: 'type_system', d: true });
    readonly e_supports_platf = this.e_table<E_Empty, ID_V_Any, ID_V_Platform>(isAnyVid, this.v_platform.v, { type: 'supports', d: true });
}

/**
 * The main graph for the app.
 */
export class PlangsGraph extends PlangsBase {
}