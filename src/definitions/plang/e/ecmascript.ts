import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+ECMAScript";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "ECMAScript" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Crystal_source.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "ECMAScript",
			href: "https://en.wikipedia.org/wiki/ECMAScript",
		},
		{
			kind: "homepage",
			title: "Standards",
			href: "https://www.ecma-international.org/publications-and-standards/standards/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Brendan-Eich", "designer"],
		["person+Ecma-International", "designer"],
	]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+prototype-based",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+weak"]);

	plb.addPlatforms([]);

	plb.addImplementations([
		"pl+ActionScript",
		"pl+Google-Apps-Script",
		"pl+InScript",
		"pl+JScript",
		"pl+JavaScript",
		"pl+QtScript",
	]);

	plb.addDialects(["pl+Haxe"]);

	plb.addInfluences([
		"pl+AWK",
		"pl+C",
		"pl+CoffeeScript",
		"pl+HyperTalk",
		"pl+Java",
		"pl+Perl",
		"pl+Python",
		"pl+Scheme",
		"pl+Self",
	]);

	plb.addInfluenced([
		"pl+Haxe",
		"pl+HyperTalk",
		"pl+JScript-dotNET",
		"pl+Java",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1997-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "1997-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2023-01-01",
			kind: "other",
		},
	]);
}
