import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Lean";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Lean" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Lean_logo2.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Lean",
			href: "https://en.wikipedia.org/wiki/Lean_(proof_assistant)",
		},
		{
			kind: "homepage",
			title: "lean-lang.org",
			href: "https://lean-lang.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms(["para+functional", "para+imperative"]);

	plb.addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations(["pl+CPP"]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Coq", "pl+Haskell", "pl+ML"]);

	plb.addInfluenced(["pl+FStar"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2013-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2024-04-03",
			kind: "stable",
		},
		{
			version: "unknown",
			date: "2024-05-02",
			kind: "preview",
		},
	]);
}
