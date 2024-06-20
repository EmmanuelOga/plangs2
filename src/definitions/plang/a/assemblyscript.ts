import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+AssemblyScript";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "AssemblyScript" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/0/00/AssemblyScript_logo_2020.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "AssemblyScript",
			href: "https://en.wikipedia.org/wiki/AssemblyScript",
		},
		{
			kind: "homepage",
			title: "www.assemblyscript.org",
			href: "https://www.assemblyscript.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Daniel-Wirtz", "designer"],
		["person+Max-Graey", "designer"],
	]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems(["tsys+static"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+JavaScript", "pl+TypeScript", "pl+WebAssembly"]);

	plb.addInfluenced(["pl+ArkTS", "pl+JavaScript", "pl+TypeScript"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2017-01-01",
			kind: "first",
		},
		{
			version: "0.27.27",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
