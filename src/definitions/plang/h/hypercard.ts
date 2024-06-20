import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+HyperCard";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "HyperCard" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/e/ee/HyperCard_2-icon.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "HyperCard",
			href: "https://en.wikipedia.org/wiki/HyperCard",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Proprietary"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms(["platf+Apple-IIGS", "platf+Macintosh"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([]);

	plb.addInfluenced(["pl+Etoys", "pl+Scratch"]);

	plb.addReleases([{ version: "unknown", date: "1987-01-01", kind: "first" }]);
}
