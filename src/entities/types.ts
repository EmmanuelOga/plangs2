import { ETables, VTables } from "../tables";

export function define(vt: VTables, et: ETables) {
    vt.typesys.set("plts+oop", { name: "Object-Oriented" });
    vt.typesys.set("plts+duck", { name: "Duck Typing" });
    vt.typesys.set("plts+dynamic", { name: "Dynamic Typing" });
    vt.typesys.set("plts+strong", { name: "Strong Typing" });
    vt.typesys.set("plts+optional", { name: "Optional Typing" });
}