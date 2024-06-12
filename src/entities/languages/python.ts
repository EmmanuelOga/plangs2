import { Table, Vertex, genId } from "../../graph";
import { EdgeTables, VertexTables } from "../../tables";

export function define(vt: VertexTables, et: EdgeTables) {
    vt.plangs.add({
        type: "pl",
        id: "pl+python",
        name: "Python",
        urls: [],
    });

    vt.people.add({
        type: "person",
        id: "person+guido",
        name: "Guido van Rossum"
    });

    et.designers.add(genId({
        type: 'designer',
        from: 'pl+python',
        to: 'person+guido'
    }));
}
