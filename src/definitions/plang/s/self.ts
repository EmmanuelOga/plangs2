import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Self";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Self" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/8/88/Self-logo.svg",
		},
	]);

	plb.addWebsites([
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

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+David-Ungar", "designer"]]);

	plb.addLicenses(["license+BSD"]);

	plb.addParadigms(["para+object-oriented", "para+prototype-based"]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms([
		"platf+Cross-platform",
		"platf+Unix-like",
		"platf+Windows",
		"platf+macOS",
	]);

	plb.addImplementations([]);

	plb.addDialects(["pl+Newspeak"]);

	plb.addInfluences([
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

	plb.addInfluenced([
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

	plb.addReleases([
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
