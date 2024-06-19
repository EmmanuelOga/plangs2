import type { PlangsGraph } from "./plangs_graph";
import type { Image, Link, Release, V_Plang } from "./schemas";

// Helpers to add data to Programming Language Vertex data.
export class PlangsBuilder {
    constructor(readonly g: PlangsGraph, readonly pl: Partial<V_Plang>) { }

    addRelease(release: Release) {
        const pl = this.pl;

        pl.releases ??= [];

        if (!pl.releases.some(r => r.version === release.version)) {
            pl.releases.push(release);
        }
    }

    addReference(key: string, ref: Link) {
        const pl = this.pl;
    }

    addScoping(types: string[]) {
        const pl = this.pl;
    }

    addExtensions(extensions: string[]) {
        const pl = this.pl;
    }

    addWebsite(link: Link) {
        const pl = this.pl;
    }

    addImage(image: Image) {
        const pl = this.pl;
    }
}