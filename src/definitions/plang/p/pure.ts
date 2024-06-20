import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Pure";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Pure" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Pure_lang_logo.png/121px-Pure_lang_logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Pure",
			href: "https://en.wikipedia.org/wiki/Pure_(programming_language)",
		},
		{
			kind: "repository",
			title: "agraef.github.io/pure-lang/",
			href: "https://agraef.github.io/pure-lang/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Albert-Graf", "designer"]]);

	plb.addLicenses(["license+GNU-Lesser-General-Public-License"]);

	plb.addParadigms([
		"para+declarative",
		"para+functional",
		"para+term-rewriting",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms([
		"platf+Cross-platform",
		"platf+FreeBSD",
		"platf+Linux",
		"platf+Windows",
		"platf+macOS",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Alice", "pl+Haskell", "pl+Lisp", "pl+MATLAB", "pl+Q"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2008-01-01",
			kind: "first",
		},
		{
			version: "0.68",
			date: "2018-04-11",
			kind: "stable",
		},
	]);
}
