import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Perl";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Perl" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/5/56/Perl_language_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Perl",
			href: "https://en.wikipedia.org/wiki/Perl",
		},
		{
			kind: "homepage",
			title: "perl.org",
			href: "https://www.perl.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([
		".cgi",
		".pl",
		".pls",
		".plx",
		".pm",
		".pod",
		".psgi",
		".t",
		".xs",
	]);

	plb.addReferences({});

	plb.addPeople([["person+Larry-Wall", "designer"]]);

	plb.addLicenses([
		"license+Artistic-License",
		"license+GNU-General-Public-License",
	]);

	plb.addParadigms(["para+multi-paradigm"]);

	plb.addTypeSystems(["tsys+dynamic"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations(["pl+C"]);

	plb.addDialects(["pl+Raku"]);

	plb.addInfluences([
		"pl+AWK",
		"pl+BASIC",
		"pl+C",
		"pl+CPP",
		"pl+Lisp",
		"pl+Unix-shell",
		"pl+sed",
	]);

	plb.addInfluenced([
		"pl+AWK",
		"pl+BeanShell",
		"pl+C",
		"pl+CPP",
		"pl+ECMAScript",
		"pl+Julia",
		"pl+Lisp",
		"pl+PHP",
		"pl+Perl-Data-Language--PDL-",
		"pl+PowerShell",
		"pl+Python",
		"pl+Qore",
		"pl+Raku",
		"pl+Ruby",
		"pl+newLISP",
		"pl+sed",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1987-12-18",
			kind: "first",
		},
		{
			version: "5.40.0",
			date: "2024-06-09",
			kind: "stable",
		},
		{
			version: "5.39.10",
			date: "2024-04-27",
			kind: "preview",
		},
	]);
}
