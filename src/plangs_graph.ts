/**
 * Define a collection of vertex and edge tables.
 */

import { TK, GraphManager } from "./graph";

import { EPeople, EPlangPlatform, EPlangTypeSystem, VPerson, VPlang, VPlatform, VTypeSystem } from "./schemas";

/**
 * Collection of related edge and vertex tables.
 */
export class PlangsGraph extends GraphManager {
    // Vertex tables.
    readonly v_person = this.define<VPerson, `person+${string}`>('person+');
    readonly v_pl = this.define<VPlang, `pl+${string}`>('pl+');
    readonly v_pl_impl = this.define<VTypeSystem, `pl-impl+${string}`>('pl-impl+');
    readonly v_pl_tsys = this.define<VTypeSystem, `pl-tsys+${string}`>('pl-tsys+');
    readonly v_platf = this.define<VPlatform, `platf+${string}`>('platf+');

    // Edge Tables.
    readonly e_people = this.connectToAny<EPeople, TK<typeof this.v_person>>(this.v_person);
    readonly e_pl_platf = this.connect<EPlangPlatform, TK<typeof this.v_pl>, TK<typeof this.v_platf>>(this.v_pl, this.v_platf);
    readonly e_pl_tsys = this.connect<EPlangTypeSystem, TK<typeof this.v_pl>, TK<typeof this.v_pl_tsys>>(this.v_pl, this.v_pl_tsys);
}
