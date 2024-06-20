import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Visual-Basic-dotNET";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Visual Basic .NET" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Visual Basic .NET",
			href: "https://en.wikipedia.org/wiki/Visual_Basic_.NET",
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
		"pl+BASIC",
		"pl+Microsoft-Small-Basic",
		"pl+Visual-Basic",
	]);

	plb.addReleases([]);
}
