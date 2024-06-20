import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+APL";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "APL" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/b/b6/APL_%28programming_language%29_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "APL",
			href: "https://en.wikipedia.org/wiki/APL_(programming_language)",
		},
		{
			kind: "wikipedia",
			title: "APL",
			href: "https://en.wikipedia.org/wiki/APL_programming_language",
		},
		{
			kind: "homepage",
			title: "aplwiki.com",
			href: "https://aplwiki.com/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Dick-Lathwell", "designer"],
		["person+Larry-Breed", "designer"],
		["person+Roger-Moore", "designer"],
	]);

	plb.addLicenses(["license+Proprietary", "license+open-source"]);

	plb.addParadigms([
		"para+array",
		"para+functional",
		"para+modular",
		"para+structured",
	]);

	plb.addTypeSystems(["tsys+dynamic"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations(["pl+APLX"]);

	plb.addDialects(["pl+APLX"]);

	plb.addInfluences([
		"pl+A-and-AP",
		"pl+CPP",
		"pl+FP",
		"pl+J",
		"pl+K",
		"pl+MATLAB",
		"pl+Mathematical-notation",
		"pl+Nial",
		"pl+PPL",
		"pl+Python",
		"pl+S",
		"pl+Snap-",
		"pl+Speakeasy",
		"pl+Wolfram-Language",
		"pl+q--kdb-",
	]);

	plb.addInfluenced([
		"pl+AP",
		"pl+FP",
		"pl+Futhark",
		"pl+Go",
		"pl+J",
		"pl+K",
		"pl+MATLAB--programming-language-MATLAB--software-",
		"pl+Nial",
		"pl+Perl-Data-Language--PDL-",
		"pl+Python",
		"pl+S",
		"pl+SAC",
		"pl+Self",
		"pl+Snap-",
		"pl+SpeakeasySpeakeasy--the-interpreted-programming-language-",
		"pl+Wolfram-Language",
		"pl+q",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1966-11-27",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2001-02-01",
			kind: "stable",
		},
	]);
}
