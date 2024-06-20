import type { PlangsGraph } from "./plangs_graph";
import type { Image, Link, Release, T_Id_V_Paradigm, V_Plang } from "./schemas";

// Helpers to add data to Programming Language Vertex data.
export class PlangsBuilder {
    constructor(readonly g: PlangsGraph, readonly pl: Partial<V_Plang>) { }

    addParadigms(arg0: string[]) {
        const pl = this.pl;
    }

    addReferences(arg0: {}) {
        const pl = this.pl;
    }

    addExtensions(arg0: string[]) {
        const pl = this.pl;
    }

    addScoping(arg0: never[]) {
        const pl = this.pl;
    }

    addWebsites(arg0: { kind: string; title: string; href: string; }[]) {
        const pl = this.pl;
    }

    addImages(arg0: { kind: string; url: string; }[]) {
        const pl = this.pl;
    }

    addReleases(arg0: { version: string; date: string; kind: string; }[]) {
        const pl = this.pl;
    }

    addInfluenced(arg0: string[]) {
        const pl = this.pl;
    }

    addInfluences(arg0: string[]) {
        const pl = this.pl;
    }

    addDialects(arg0: string[]) {
        const pl = this.pl;
    }

    addImplementations(arg0: string[]) {
        const pl = this.pl;
    }

    addPlatforms(arg0: string[]) {
        const pl = this.pl;
    }

    addTypeSystems(arg0: string[]) {
        const pl = this.pl;
    }

    addLicenses(arg0: string[]) {
        const pl = this.pl;
    }

    addPeople(arg0: string[][]) {
        const pl = this.pl;
    }
}