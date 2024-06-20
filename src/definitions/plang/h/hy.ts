import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Hy";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Hy" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Hy_Cuddles.png/121px-Hy_Cuddles.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Hy",
			href: "https://en.wikipedia.org/wiki/Hy_(programming_language)",
		},
		{
			kind: "homepage",
			title: "hylang.org",
			href: "http://hylang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".hy"]);

	plb.addReferences({});

	plb.addPeople([["person+Paul-Tagliamonte", "designer"]]);

	plb.addLicenses(["license+MIT"]);

	plb.addParadigms([
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+meta",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Cross-platform", "platf+IA-32", "platf+x86-64"]);

	plb.addImplementations([]);

	plb.addDialects(["pl+Lisp"]);

	plb.addInfluences(["pl+Clojure", "pl+Common-Lisp", "pl+Kawa"]);

	plb.addInfluenced(["pl+Clojure", "pl+LFE"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2013-01-01",
			kind: "first",
		},
		{
			version: "0.29.0",
			date: "2024-01-01",
			kind: "stable",
		},
		{
			version: "1.0",
			date: "2022-03-16",
			kind: "preview",
		},
	]);
}
