import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+V";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "V" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/e/e8/V_Logo_SVG.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "V",
			href: "https://en.wikipedia.org/wiki/V_(programming_language)",
		},
		{
			kind: "homepage",
			title: "vlang.io",
			href: "http://vlang.io",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".v", ".vsh"]);

	plb.addReferences({});

	plb.addPeople([["person+Alexander-Medvednikov", "designer"]]);

	plb.addLicenses(["license+MIT"]);

	plb.addParadigms([
		"para+concurrent",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+structured",
	]);

	plb.addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms([
		"platf+DragonflyBSD",
		"platf+FreeBSD",
		"platf+Linux",
		"platf+NetBSD",
		"platf+OpenBSD",
		"platf+Solaris",
		"platf+Windows",
		"platf+macOS",
		"platf+x86-64",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Go",
		"pl+Kotlin",
		"pl+Oberon",
		"pl+Python",
		"pl+Rust",
		"pl+Swift",
	]);

	plb.addInfluenced(["pl+Rust"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2019-06-20",
			kind: "first",
		},
		{
			version: "0.4.5",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
