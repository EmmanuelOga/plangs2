import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+OpenMP";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "OpenMP" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/OpenMP_logo.png/180px-OpenMP_logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "OpenMP",
			href: "https://en.wikipedia.org/wiki/OpenMP",
		},
		{
			kind: "homepage",
			title: "openmp.org",
			href: "http://openmp.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+CilkOpenCilkCilk-Plus"]);

	plb.addReleases([{ version: "5.2", date: "2021-01-01", kind: "stable" }]);
}
