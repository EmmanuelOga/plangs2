import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+XSB";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "XSB" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "XSB",
			href: "https://en.wikipedia.org/wiki/XSB",
		},
		{
			kind: "homepage",
			title: "Sourceforge.net",
			href: "https://xsb.sourceforge.net/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".P"]);

	plb.addReferences({});

	plb.addPeople([
		["person+David-Sdot-Warren", "designer"],
		["person+Kostis-Sagonas", "designer"],
		["person+Terrance-Swift", "designer"],
	]);

	plb.addLicenses([]);

	plb.addParadigms(["para+logic-programming"]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Prolog"]);

	plb.addInfluenced([]);

	plb.addReleases([{ version: "5.0", date: "2022-05-12", kind: "stable" }]);
}
