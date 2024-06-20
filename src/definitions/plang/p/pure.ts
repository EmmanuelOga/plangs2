import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Pure" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Pure";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Pure_lang_logo.png/121px-Pure_lang_logo.png",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Pure",
			href: "https://en.wikipedia.org/wiki/Pure_(programming_language)",
		},
		{
			kind: "repository",
			title: "agraef.github.io/pure-lang/",
			href: "https://agraef.github.io/pure-lang/",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Albert-Graf", "designer"]]);

	plb.addLicenses(pl, ["license+gnu-lesser-gpl"]);

	plb.addParadigms(pl, [
		"para+declarative",
		"para+functional",
		"para+term-rewriting",
	]);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(pl, [
		"platf+Cross-platform",
		"platf+FreeBSD",
		"platf+Linux",
		"platf+Windows",
		"platf+macOS",
	]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, []);

	plb.addInfluences(pl, [
		"pl+Alice",
		"pl+Haskell",
		"pl+Lisp",
		"pl+MATLAB",
		"pl+Q",
	]);

	plb.addInfluenced(pl, []);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "2008-01-01",
			kind: "first",
		},
		{
			version: "0.68",
			date: "2018-04-11",
			kind: "stable",
		},
	]);
}
