import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Gleam" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Gleam";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Gleam_Lucy.png/220px-Gleam_Lucy.png",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".gleam"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Louis-Pilfold", "designer"]]);

	plb.addLicenses(pl, ["license+apache-2"]);

	plb.addParadigms(pl, [
		"para+concurrent",
		"para+functional",
		"para+multi-paradigm",
	]);

	plb.addTypeSystems(pl, ["tsys+inferred", "tsys+safe", "tsys+static"]);

	plb.addPlatforms(pl, [
		"platf+bsd",
		"platf+linux",
		"platf+macos",
		"platf+windows",
	]);

	plb.addImplementations(pl, ["pl+Rust"]);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+Elixir",
		"pl+Elm",
		"pl+Erlang",
		"pl+Go",
		"pl+JavaScript",
		"pl+OCaml",
		"pl+Rust",
	]);

	plb.addInfluenced(pl, ["pl+Elixir"]);

	plb.addReleases(pl, [
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
