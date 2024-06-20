import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Crystal" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Crystal";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Crystal_language_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Crystal",
			href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)",
		},
		{
			kind: "homepage",
			title: "crystal-lang.org",
			href: "https://crystal-lang.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".cr"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Ary-Borenszweig", "designer"],
		["person+Brian-Cardiff", "designer"],
		["person+Juan-Wajnerman", "designer"],
	]);

	plb.addLicenses(pl, ["license+apache-2"]);

	plb.addParadigms(pl, [
		"para+concurrent",
		"para+multi-paradigm",
		"para+objects",
	]);

	plb.addTypeSystems(pl, [
		"tsys+duck",
		"tsys+inferred",
		"tsys+nominative",
		"tsys+static",
	]);

	plb.addPlatforms(pl, [
		"platf+aarch64",
		"platf+bsd",
		"platf+ia-32",
		"platf+linux",
		"platf+macos",
		"platf+windows",
		"platf+x86-64",
	]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+C",
		"pl+C-Sharp",
		"pl+Go",
		"pl+Python",
		"pl+Ruby",
		"pl+Rust",
	]);

	plb.addInfluenced(pl, ["pl+Go", "pl+Ruby"]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2014-06-19",
			kind: "first",
		},
		{
			version: "1.12.1",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
