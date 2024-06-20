import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+LiveScript";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "LiveScript" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "LiveScript",
			href: "https://en.wikipedia.org/wiki/LiveScript_(programming_language)",
		},
		{
			kind: "homepage",
			title: "livescript.net",
			href: "https://livescript.net",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".ls"]);

	plb.addReferences({});

	plb.addPeople([
		["person+George-Zahariev", "designer"],
		["person+Jeremy-Ashkenas", "designer"],
		["person+Satoshi-Murakami", "designer"],
	]);

	plb.addLicenses(["license+MIT"]);

	plb.addParadigms([
		"para+functional",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+weak"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+CoffeeScript",
		"pl+FSharp",
		"pl+Haskell",
		"pl+JavaScript",
	]);

	plb.addInfluenced(["pl+CoffeeScript"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2011-01-01",
			kind: "first",
		},
		{
			version: "1.6.1",
			date: "2020-07-14",
			kind: "stable",
		},
	]);
}
