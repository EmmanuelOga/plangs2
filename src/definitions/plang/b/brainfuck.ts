import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Brainfuck";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Brainfuck" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Brainfuck",
			href: "https://en.wikipedia.org/wiki/Brainfuck",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".b", ".bf"]);

	plb.addReferences({});

	plb.addPeople([["person+Urban-Muller", "designer"]]);

	plb.addLicenses([]);

	plb.addParadigms(["para+esoteric", "para+imperative", "para+structured"]);

	plb.addTypeSystems([]);

	plb.addPlatforms([]);

	plb.addImplementations([]);

	plb.addDialects(["pl+P--"]);

	plb.addInfluences(["pl+FALSE", "pl+Malbolge", "pl+P--"]);

	plb.addInfluenced(["pl+Malbolge", "pl+P--"]);

	plb.addReleases([{ version: "unknown", date: "1993-01-01", kind: "first" }]);
}
