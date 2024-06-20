import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Haskell" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Haskell";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Logo_of_the_Haskell_programming_language.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Haskell",
			href: "https://en.wikipedia.org/wiki/Haskell_(programming_language)",
		},
		{
			kind: "wikipedia",
			title: "Haskell",
			href: "https://en.wikipedia.org/wiki/Haskell",
		},
		{
			kind: "homepage",
			title: "haskell.org",
			href: "http://haskell.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".hs", ".lhs"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Erik-Meijer", "designer"],
		["person+John-Hughes", "designer"],
		["person+John-Launchbury", "designer"],
		["person+Lennart-Augustsson", "designer"],
		["person+Paul-Hudak", "designer"],
		["person+Philip-Wadler", "designer"],
		["person+Simon-Peyton-Jones", "designer"],
	]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, ["para+functional"]);

	plb.addTypeSystems(pl, ["tsys+inferred", "tsys+static", "tsys+strong"]);

	plb.addPlatforms(pl, ["platf+cross-platform"]);

	plb.addImplementations(pl, ["pl+GHC", "pl+Hugs", "pl+Yhc"]);

	plb.addDialects(pl, ["pl+Elm", "pl+Hume"]);

	plb.addInfluences(pl, [
		"pl+Clean",
		"pl+FP",
		"pl+Gofer",
		"pl+Hope",
		"pl+ISWIM",
		"pl+Id",
		"pl+KRC",
		"pl+Lisp",
		"pl+ML",
		"pl+Miranda",
		"pl+Orwell",
		"pl+SASL",
		"pl+SISAL",
		"pl+Scheme",
		"pl+Standard-ML",
	]);

	plb.addInfluenced(pl, [
		"pl+A-",
		"pl+Agda",
		"pl+Aldor",
		"pl+Clean",
		"pl+Clojure",
		"pl+Curry",
		"pl+Elm",
		"pl+EuLisp",
		"pl+FP",
		"pl+Flix",
		"pl+Fortress",
		"pl+Futhark",
		"pl+Hack",
		"pl+Hume",
		"pl+ISWIM",
		"pl+Idris",
		"pl+Lean",
		"pl+Lisp",
		"pl+LiveScript",
		"pl+ML",
		"pl+Mercury",
		"pl+Miranda",
		"pl+Orc",
		"pl+Orwell",
		"pl+Pure",
		"pl+PureScript",
		"pl+Python",
		"pl+Raku",
		"pl+Rust",
		"pl+SASL",
		"pl+Scala",
		"pl+Scheme",
		"pl+Standard-ML",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1990-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2010-01-01",
			kind: "stable",
		},
		{
			version: "unknown",
			date: "2020-01-01",
			kind: "preview",
		},
	]);
}
