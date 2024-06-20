import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Self" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Self";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Self-logo.svg",
		},
	]);

	plb.addWebsites(pl, [
		{
			kind: "wikipedia",
			title: "Self",
			href: "https://en.wikipedia.org/wiki/Self_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.selflanguage.org",
			href: "http://www.selflanguage.org",
		},
	]);

	plb.addScoping(pl, []);

	plb.addExtensions(pl, []);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+David-Ungar", "designer"]]);

	plb.addLicenses(pl, ["license+bsd"]);

	plb.addParadigms(pl, ["para+objects", "para+prototypes"]);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(pl, [
		"platf+Cross-platform",
		"platf+Unix-like",
		"platf+Windows",
		"platf+macOS",
	]);

	plb.addImplementations(pl, []);

	plb.addDialects(pl, ["pl+Newspeak"]);

	plb.addInfluences(pl, [
		"pl+APL",
		"pl+Agora",
		"pl+Factor",
		"pl+Io",
		"pl+JavaScript",
		"pl+Lua",
		"pl+NewtonScript",
		"pl+Rebol",
		"pl+Smalltalk",
		"pl+Squeak",
	]);

	plb.addInfluenced(pl, [
		"pl+AmbientTalk",
		"pl+ECMAScript",
		"pl+Factor",
		"pl+Io",
		"pl+JavaScript",
		"pl+Newspeak",
		"pl+NewtonScript",
		"pl+Obliq",
		"pl+Rebol",
		"pl+Smalltalk",
		"pl+Squeak",
		"pl+Strongtalk",
		"pl+urbiscript",
	]);

	plb.addReleases(pl, [
		{
			version: "unknown",
			date: "1987-01-01",
			kind: "first",
		},
		{
			version: "2017.1",
			date: "2017-05-24",
			kind: "stable",
		},
	]);
}
