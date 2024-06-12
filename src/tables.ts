/**
 * Define all the relevant tables in classes for easy access and type checking.
 */

import { Table } from "./graph";
import { Designer, Person, PlangType as PlangType, Plang, TypeSystem } from "./schemas";

export class VertexTables {
    readonly plangs = new Table<Plang>();
    readonly typeSystems = new Table<TypeSystem>();
    readonly people = new Table<Person>();

    readonly all = [this.plangs, this.typeSystems, this.people];
}

export class EdgeTables {
    readonly designers = new Table<Designer>();
    readonly plangTypes = new Table<PlangType>();

    readonly all = [this.designers, this.plangTypes];
}
