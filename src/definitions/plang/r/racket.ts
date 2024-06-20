import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Racket";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Racket" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Racket-logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Racket",
			href: "https://en.wikipedia.org/wiki/Racket_(programming_language)",
		},
		{
			kind: "homepage",
			title: "racket-lang.org",
			href: "https://racket-lang.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".rkt"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache-2dot0", "license+MIT"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+logic",
		"para+meta",
		"para+modular",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong"]);

	plb.addPlatforms([
		"platf+ARM",
		"platf+Cross-platform",
		"platf+MIPS",
		"platf+PowerPC",
		"platf+SPARC",
		"platf+x86",
	]);

	plb.addImplementations([]);

	plb.addDialects(["pl+Lisp"]);

	plb.addInfluences([
		"pl+Clojure",
		"pl+Eiffel",
		"pl+Rust",
		"pl+Scheme",
		"pl+Scheme--R6RS-",
	]);

	plb.addInfluenced(["pl+Clojure", "pl+Eiffel", "pl+Scheme"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1995-01-28",
			kind: "first",
		},
		{
			version: "8.13",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
