import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Gleam";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Gleam" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Gleam_Lucy.png/220px-Gleam_Lucy.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Gleam",
			href: "https://en.wikipedia.org/wiki/Gleam_(programming_language)",
		},
		{
			kind: "homepage",
			title: "gleam.run",
			href: "https://gleam.run/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".gleam"]);

	plb.addReferences({});

	plb.addPeople([["person+Louis-Pilfold", "designer"]]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([
		"para+concurrent",
		"para+functional",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems(["tsys+inferred", "tsys+safe", "tsys+static"]);

	plb.addPlatforms([
		"platf+FreeBSD",
		"platf+Linux",
		"platf+OpenBSD",
		"platf+Windows",
		"platf+macOS",
	]);

	plb.addImplementations(["pl+Rust"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Elixir",
		"pl+Elm",
		"pl+Erlang",
		"pl+Go",
		"pl+JavaScript",
		"pl+OCaml",
		"pl+Rust",
	]);

	plb.addInfluenced(["pl+Elixir"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2016-06-13",
			kind: "first",
		},
		{
			version: "1.1.0",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
