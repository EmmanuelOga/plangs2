import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Mercury";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Mercury" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Mercury_%28programming_language%29_logo.jpg/121px-Mercury_%28programming_language%29_logo.jpg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Mercury",
			href: "https://en.wikipedia.org/wiki/Mercury_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.mercurylang.org",
			href: "http://www.mercurylang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".m"]);

	plb.addReferences({});

	plb.addPeople([["person+Zoltan-Somogyi", "designer"]]);

	plb.addLicenses(["license+GPL", "license+LGPL"]);

	plb.addParadigms([]);

	plb.addTypeSystems(["tsys+polymorphic", "tsys+static", "tsys+strong"]);

	plb.addPlatforms([
		"platf+Android",
		"platf+Arm",
		"platf+CLI",
		"platf+Cross-platform",
		"platf+FreeBSD",
		"platf+IA-32",
		"platf+Java",
		"platf+Linux",
		"platf+OpenBSD",
		"platf+Solaris",
		"platf+Sparc64",
		"platf+Unix",
		"platf+Windows",
		"platf+macOS",
		"platf+x86-64",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Haskell", "pl+Hope", "pl+Prolog"]);

	plb.addInfluenced(["pl+Prolog"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1995-04-08",
			kind: "first",
		},
		{
			version: "22.01.8",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
