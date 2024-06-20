import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Starlark";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Starlark" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Starlark",
			href: "https://en.wikipedia.org/wiki/Bazel_(software)",
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

	plb.addDialects(["pl+Python"]);

	plb.addInfluences([]);

	plb.addInfluenced([]);

	plb.addReleases([]);
}
