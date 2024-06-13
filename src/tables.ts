/**
 * Define all the relevant tables in classes for easy access and type checking.
 */

import { createVTable, createETable, Table } from "./graph";

import { VPlang, VTypeSystem, VPerson } from "./schemas";
import { EPeople, EPlangTypeSystem } from "./schemas";

/**
 * Define a collection of vertex tables. See related {@link ETS}.
 */
export class VTables {
    readonly plang = createVTable<`pl+${string}`, VPlang>('pl+');
    readonly typesys = createVTable<`plts+${string}`, VTypeSystem>('plts+');
    readonly person = createVTable<`person+${string}`, VPerson>('person+');

    *allVertices(): Iterable<[string, unknown]> {
        yield* this.plang.entries();
        yield* this.typesys.entries();
        yield* this.person.entries();
    }
}

/**
 * Define a collection of edge tables related to {@link VTS}.
 */
export class ETables {
    readonly plangTypesys = createETable<EPlangTypeSystem>()
        .from<`pl+${string}`>('pl+')
        .to<`plts+${string}`>('plts+').build();

    readonly peopleAny = createETable<EPeople>()
        .from<`person+${string}`>('person+')
        .toAny().build();

    *allEdges(): Iterable<[string, unknown]> {
        yield* this.plangTypesys.entries();
        yield* this.peopleAny.entries();
    }
}
