import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Magma";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Magma" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Magma-logo.png/120px-Magma-logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Magma",
			href: "https://en.wikipedia.org/wiki/Magma_computer_algebra_system",
		},
		{
			kind: "homepage",
			title: "magma.maths.usyd.edu.au",
			href: "http://magma.maths.usyd.edu.au",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+School-of-Mathematics", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "2.27", date: "2023-02-22", kind: "stable" }]);
}
