/**
 * Define all the relevant tables in classes for easy access and type checking.
 */

import { Table } from "./graph";
import { Designer, Person, ProgLang } from "./schemas";

export class VertexTables {
    readonly plangs = new Table<ProgLang>();
    readonly people = new Table<Person>();

    readonly all = [this.plangs, this.people];
}

export class EdgeTables {
    readonly designers = new Table<Designer>();

    readonly all = [this.designers];
}
