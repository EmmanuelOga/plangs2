import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Scilab";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Scilab" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Scilab_Logo.png/90px-Scilab_Logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Scilab",
			href: "https://en.wikipedia.org/wiki/Scilab",
		},
		{
			kind: "wikipedia",
			title: "Scilab",
			href: "https://en.wikipedia.org/wiki/Xcos",
		},
		{
			kind: "homepage",
			title: "www.scilab.org",
			href: "https://www.scilab.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Dassault-Systemes", "designer"]]);

	plb.addLicenses(["license+CeCILL", "license+GPLv2"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+MATLAB--programming-language-MATLAB--software-"]);

	plb.addReleases([
		{ version: "2024.1.0", date: "2024-01-01", kind: "stable" },
	]);
}
