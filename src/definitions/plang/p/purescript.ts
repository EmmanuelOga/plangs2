import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+PureScript";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "PureScript" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/PureScript_Logo.png/121px-PureScript_Logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "PureScript",
			href: "https://en.wikipedia.org/wiki/PureScript",
		},
		{
			kind: "homepage",
			title: "www.purescript.org",
			href: "https://www.purescript.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".purs"]);

	plb.addReferences({});

	plb.addPeople([["person+Phil-Freeman", "designer"]]);

	plb.addLicenses(["license+BSD"]);

	plb.addParadigms(["para+functional"]);

	plb.addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Haskell", "pl+JavaScript"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2013-01-01",
			kind: "first",
		},
		{
			version: "0.15.15",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
