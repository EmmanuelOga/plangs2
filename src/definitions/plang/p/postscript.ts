import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+PostScript";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "PostScript" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Adobe_PostScript_3_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "PostScript",
			href: "https://en.wikipedia.org/wiki/PostScript",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Bill-Paxton", "designer"],
		["person+Chuck-Geschke", "designer"],
		["person+John-Warnock", "designer"],
	]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+concatenative",
		"para+imperative",
		"para+multi-paradigm",
		"para+stack-oriented",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+weak"]);

	plb.addPlatforms([]);

	plb.addImplementations(["pl+Ghostscript", "pl+TrueImage"]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Interpress", "pl+Lisp", "pl+Mesa", "pl+PDF"]);

	plb.addInfluenced(["pl+Mesa-1-"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1982-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "1997-01-01",
			kind: "stable",
		},
	]);
}
