import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Coq";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Coq" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Coq",
			href: "https://en.wikipedia.org/wiki/Coq_(software)",
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

	plb.addInfluenced([
		"pl+Agda",
		"pl+FStar",
		"pl+Idris",
		"pl+Lean",
		"pl+ML",
		"pl+OCaml",
	]);

	plb.addReleases([]);
}
