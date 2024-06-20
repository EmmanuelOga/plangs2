import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Oberon";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Oberon" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/9/97/Oberon_programming_language_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Oberon",
			href: "https://en.wikipedia.org/wiki/Oberon_(programming_language)",
		},
		{
			kind: "homepage",
			title: "projectoberon.net",
			href: "https://projectoberon.net",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+imperative",
		"para+modular",
		"para+object-oriented",
		"para+structured",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong"]);

	plb.addPlatforms([
		"platf+ARM",
		"platf+AmigaOS",
		"platf+Atari-TOS",
		"platf+Ceres",
		"platf+IA-32",
		"platf+Linux",
		"platf+NS32032",
		"platf+SPARC",
		"platf+Solaris",
		"platf+StrongARM",
		"platf+Windows",
		"platf+classic-Mac-OS",
		"platf+x86-64",
	]);

	plb.addImplementations([]);

	plb.addDialects(["pl+Active-Oberon", "pl+Oberon-2", "pl+Obliq"]);

	plb.addInfluences([
		"pl+Active-Oberon",
		"pl+Component-Pascal",
		"pl+Go",
		"pl+Modula-2",
		"pl+Nim",
		"pl+Oberon-2",
		"pl+V--Vlang-",
		"pl+Zonnon",
	]);

	plb.addInfluenced([
		"pl+Active-Oberon",
		"pl+Component-Pascal",
		"pl+Go",
		"pl+Java",
		"pl+Modula-2",
		"pl+Modula-3",
		"pl+Nim",
		"pl+Oberon-2",
		"pl+Object-Oberon",
		"pl+Obliq",
		"pl+Pascal",
		"pl+V",
		"pl+Zonnon",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1987-01-01",
			kind: "first",
		},
		{
			version: "unknown",
			date: "2020-03-06",
			kind: "stable",
		},
	]);
}
