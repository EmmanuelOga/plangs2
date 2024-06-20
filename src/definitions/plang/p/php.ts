import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+PHP";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "PHP" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "PHP",
			href: "https://en.wikipedia.org/wiki/PHP",
		},
		{
			kind: "homepage",
			title: "https://thephp.foundation",
			href: "https://thephp.foundation",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".phar", ".php", ".phps", ".pht", ".phtml"]);

	plb.addReferences({});

	plb.addPeople([["person+Rasmus-Lerdorf", "designer"]]);

	plb.addLicenses([
		"license+GNU-General-Public-License",
		"license+PHP-License",
		"license+Zend-Engine-License",
	]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+gradual", "tsys+weak"]);

	plb.addPlatforms([
		"platf+IBM-Z",
		"platf+IBM-i",
		"platf+OpenVMS",
		"platf+Unix-like",
		"platf+Windows",
		"platf+macOS",
	]);

	plb.addImplementations([
		"pl+C",
		"pl+CPP",
		"pl+HHVM",
		"pl+Parrot",
		"pl+PeachPie",
		"pl+Quercus",
		"pl+Zend-Engine",
	]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+ASP",
		"pl+C",
		"pl+CPP",
		"pl+Hack",
		"pl+JSP",
		"pl+Java",
		"pl+JavaScript",
		"pl+Perl",
		"pl+React-JS",
		"pl+Tcl",
	]);

	plb.addInfluenced([
		"pl+C",
		"pl+CPP",
		"pl+Hack",
		"pl+Haxe",
		"pl+Java",
		"pl+Smalltalk",
		"pl+Tcl",
		"pl+Umple",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1995-06-08",
			kind: "first",
		},
		{
			version: "8.3.8",
			date: "2024-06-06",
			kind: "stable",
		},
	]);
}
