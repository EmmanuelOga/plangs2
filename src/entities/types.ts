import { EdgeTables, VertexTables } from "../tables";

export function define(vt: VertexTables, et: EdgeTables) {
    vt.typeSystems.add({ type: "ts", id: "ts+oop", name: "Object-Oriented" });
    vt.typeSystems.add({ type: "ts", id: "ts+duck", name: "Duck Typing" });
    vt.typeSystems.add({ type: "ts", id: "ts+dynamic", name: "Dynamic Typing" });
    vt.typeSystems.add({ type: "ts", id: "ts+strong", name: "Strong Typing" });
    vt.typeSystems.add({ type: "ts", id: "ts+optional", name: "Optional Typing" });
}