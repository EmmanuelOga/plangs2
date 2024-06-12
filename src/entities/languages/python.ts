import { genId as edge } from "../../graph";
import { PlangType, TypeSystem } from "../../schemas";
import { EdgeTables, VertexTables } from "../../tables";

export function define(vt: VertexTables, et: EdgeTables) {
    vt.plangs.add({
        type: "pl", id: "pl+python",

        name: "Python",
        urls: [
            { kind: "homepage", url: "https://www.python.org/" },
            { kind: "repository", url: "https://github.com/python/cpython" },
            { kind: "releases", url: "https://www.python.org/downloads/" },
            { kind: "apidocs", url: "https://docs.python.org/3" },
            { kind: "other", url: "https://en.wikipedia.org/wiki/Python_(programming_language)" }
        ],
        firstAppeared: "1991-02-20",
        releases: [
            { version: "3.12.4", date: "2024-06-06", tags: ["stable"] },
        ],
    });

    vt.people.add({
        type: "person", id: "person+guido",
        name: "Guido van Rossum"
    });

    et.designers.add(edge({
        type: 'designer',
        from: 'pl+python',
        to: 'person+guido'
    }));

    const types: TypeSystem['id'][] = ["ts+oop", "ts+duck", "ts+dynamic", "ts+strong", "ts+optional"];

    for (const tsId of types) {
        et.plangTypes.add(edge({ type: "pl-ts", from: "pl+python", to: tsId }));
    }
}
