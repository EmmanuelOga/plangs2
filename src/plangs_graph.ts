/**
 * Define a collection of vertex and edge tables.
 */

import { E_Empty } from "./graph/edge";
import { GraphManager, TK } from "./graph/tables";
import { E_People, ID_V_Implementation, ID_V_Person, ID_V_Plang, ID_V_Platform, ID_V_TypeSystem, V_Implementation, V_Person, V_Plang, V_Platform, V_TypeSystem } from "./schemas";

/**
 * Collection of related edge and vertex tables.
 * 
 * These mildly repetitive definitions follow some simple conventions,
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
    readonly e_people = this.e_tableTo<E_People, TK<typeof this.v_person>>(this.v_person, { d: true });
    readonly e_impl_pl = this.e_tableFromTo<E_Empty, TK<typeof this.v_impl>, TK<typeof this.v_pl>>(this.v_impl, this.v_pl, { type: 'impl', d: true });
    readonly e_pl_platf = this.e_tableFromTo<E_Empty, TK<typeof this.v_pl>, TK<typeof this.v_platf>>(this.v_pl, this.v_platf, { type: 'supports', d: true });
    readonly e_pl_tsys = this.e_tableFromTo<E_Empty, TK<typeof this.v_pl>, TK<typeof this.v_tsys>>(this.v_pl, this.v_tsys, { type: 'type_system' });
    readonly e_influenced = this.e_table<E_Empty>({ d: true, type: 'influenced' });
}

/**
 * The main graph for the app.
 */
export class PlangsGraph extends PlangsBase {
}