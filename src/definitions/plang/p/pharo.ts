import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Pharo";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Pharo" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Pharo_Logo_v3.0.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Pharo",
			href: "https://en.wikipedia.org/wiki/Pharo",
		},
		{
			kind: "homepage",
			title: "pharo.org",
			href: "http://pharo.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache", "license+MIT"]);

	plb.addParadigms(["para+object-oriented"]);

	plb.addTypeSystems(["tsys+dynamic"]);

	plb.addPlatforms([
		"platf+ARM",
		"platf+IA-32",
		"platf+Linux",
		"platf+Windows",
		"platf+macOS",
		"platf+x86-64",
	]);

	plb.addImplementations(["pl+Smalltalk"]);

	plb.addDialects(["pl+Squeak"]);

	plb.addInfluences(["pl+Smalltalk", "pl+Squeak"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2008-01-01",
			kind: "first",
		},
		{
			version: "12.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
