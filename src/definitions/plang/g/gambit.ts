import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Gambit";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Gambit" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Gambit",
			href: "https://en.wikipedia.org/wiki/Gambit_(Scheme_implementation)",
		},
		{
			kind: "homepage",
			title: "gambitscheme.org",
			href: "http://gambitscheme.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Marc-Feeley", "designer"]]);

	plb.addLicenses(["license+Apache", "license+LGPL"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+meta",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+latent", "tsys+strong"]);

	plb.addPlatforms(["platf+Cross-platform", "platf+IA-32", "platf+x86-64"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Gerbil-Scheme",
		"pl+Lisp",
		"pl+Scheme",
		"pl+Termite-Scheme",
	]);

	plb.addInfluenced(["pl+MultiLisp"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1988-01-01",
			kind: "first",
		},
		{
			version: "4.9.5",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
