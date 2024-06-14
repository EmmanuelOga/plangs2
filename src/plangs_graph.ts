/**
 * Define a collection of vertex and edge tables.
 */

import { GraphManager, TK, VID } from "./graph";

import { E_Empty, E_People, V_Implementation, V_Person, V_Plang, V_Platform, V_TypeSystem } from "./schemas";

/**
 * Collection of related edge and vertex tables.
 * These mildly repetitive definitions follow some simple conventions,
 * are tightly coupled with the schemas in `schemas.ts,
 * and we could potentially auto-generate this class in the future.
 */
class PlangsTables extends GraphManager {
    // Vertex tables.
    readonly v_impl = this.define<Partial<V_Implementation>, VID<`impl`>>('impl');
    readonly v_person = this.define<Partial<V_Person>, VID<`person`>>('person');
    readonly v_pl = this.define<Partial<V_Plang>, VID<`pl`>>('pl');
    readonly v_platf = this.define<Partial<V_Platform>, VID<`platf`>>('platf');
    readonly v_tsys = this.define<Partial<V_TypeSystem>, VID<`tsys`>>('tsys');

    // Edge Tables.
    readonly e_people = this.connectToAny<E_People, TK<typeof this.v_person>>(this.v_person);
    readonly e_pl_impl = this.connect<E_Empty, TK<typeof this.v_pl>, TK<typeof this.v_impl>>(this.v_pl, this.v_impl);
    readonly e_pl_platf = this.connect<E_Empty, TK<typeof this.v_pl>, TK<typeof this.v_platf>>(this.v_pl, this.v_platf);
    readonly e_pl_tsys = this.connect<E_Empty, TK<typeof this.v_pl>, TK<typeof this.v_tsys>>(this.v_pl, this.v_tsys);
}

/**
 * The main graph for the app. It includes some helper methods to define relationships.
 */
export class PlangsGraph extends PlangsTables {
    /**
     * Define an implementation for a language.
     * @param vp the vertex id of the language.
     * @param vi the vertex id of the implementation.
     * @param implName the name of the implementation.
     */
    defineImplOf(
        vp: TK<PlangsGraph['v_pl']>,
        vi: TK<PlangsGraph['v_impl']>,
        implName: string,
    ): void {
        const { conflicts } = this.v_impl.merge(vi, { name: implName });
        if (conflicts.length > 0) console.log(`Warning, conflicting definition for ${vi}: ${JSON.stringify(conflicts)}.`)
        this.e_pl_impl.connect({ from: vp, to: vi });
    }
}