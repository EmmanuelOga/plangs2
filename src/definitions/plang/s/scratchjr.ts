import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+ScratchJr";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "ScratchJr" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/ScratchJr_Logo.png/121px-ScratchJr_Logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "ScratchJr",
			href: "https://en.wikipedia.org/wiki/ScratchJr",
		},
		{
			kind: "homepage",
			title: "www.scratchjr.org",
			href: "http://www.scratchjr.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Android", "platf+ChromeOS", "platf+iOS"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+Scratch"]);

	plb.addReleases([{ version: "unknown", date: "2014-01-01", kind: "first" }]);
}
