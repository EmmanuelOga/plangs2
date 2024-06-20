import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Gosu";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Gosu" });

	const plb = g.plangBuilder(pl);

	plb.addImages([]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Gosu",
			href: "https://en.wikipedia.org/wiki/Gosu_(programming_language)",
		},
		{
			kind: "repository",
			title: "gosu-lang.github.io",
			href: "https://gosu-lang.github.io/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".gs", ".gsp", ".gst", ".gsx"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([]);

	plb.addTypeSystems(["tsys+static"]);

	plb.addPlatforms(["platf+Java-Virtual-Machine", "platf+bytecode"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+CSharp", "pl+Java", "pl+Kotlin"]);

	plb.addInfluenced(["pl+Kotlin"]);

	plb.addReleases([{ version: "1.17.10", date: "2024-01-01", kind: "stable" }]);
}
