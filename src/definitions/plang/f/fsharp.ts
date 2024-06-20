import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+FSharp";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "F#" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "F#",
			href: "https://en.wikipedia.org/wiki/F_Sharp_(programming_language)",
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

	plb.addDialects(["pl+ML"]);

	plb.addInfluences([]);

	plb.addInfluenced([
		"pl+ArkTS",
		"pl+CPP",
		"pl+Elm",
		"pl+Erlang",
		"pl+FStar",
		"pl+Flix",
		"pl+Idris",
		"pl+LiveScript",
		"pl+ML",
		"pl+OCaml",
		"pl+Python",
		"pl+Scala",
		"pl+Standard-ML",
		"pl+TypeScript",
	]);

	plb.addReleases([]);
}
