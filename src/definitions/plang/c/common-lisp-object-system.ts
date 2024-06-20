import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Common-Lisp-Object-System";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Common Lisp Object System" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Common Lisp Object System",
			href: "https://en.wikipedia.org/wiki/Common_Lisp_Object_System",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+Smalltalk"]);

	plb.addReleases([]);
}
