import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+NekoVMNeko";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "NekoVMNeko" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/2/26/NekoVM_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "NekoVMNeko",
			href: "https://en.wikipedia.org/wiki/Neko_(programming_language)",
		},
		{
			kind: "homepage",
			title: "nekovm.org/specs/syntax",
			href: "http://nekovm.org/specs/syntax",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Motion-Twin", "designer"],
		["person+Nicolas-Cannasse", "designer"],
		["person+Shiro-Games", "designer"],
	]);

	plb.addLicenses(["license+MIT"]);

	plb.addParadigms([
		"para+multi-paradigm",
		"para+object-oriented",
		"para+prototype-based",
		"para+scripting",
		"para+structured",
	]);

	plb.addTypeSystems(["tsys+dynamic"]);

	plb.addPlatforms(["platf+Linux", "platf+Windows", "platf+macOS"]);

	plb.addImplementations(["pl+OCaml"]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2005-01-01",
			kind: "first",
		},
		{
			version: "2.3.0",
			date: "2019-10-24",
			kind: "stable",
		},
		{
			version: "unknown",
			date: "2005-01-01",
			kind: "first",
		},
	]);
}
