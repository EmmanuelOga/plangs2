import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Haxe";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Haxe" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Haxe_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Haxe",
			href: "https://en.wikipedia.org/wiki/Haxe",
		},
		{
			kind: "homepage",
			title: "haxe.org",
			href: "https://haxe.org",
		},
	]);

	plb.addScoping(["lexical"]);

	plb.addExtensions([".hx", ".hxml"]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+GPL", "license+MIT"]);

	plb.addParadigms([
		"para+functional",
		"para+generic",
		"para+multi-paradigm",
		"para+object-oriented",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+nominative", "tsys+static"]);

	plb.addPlatforms([
		"platf+AArch64",
		"platf+Android",
		"platf+IA-32",
		"platf+Linux",
		"platf+MIPS--MIPS64el--MIPSel",
		"platf+Windows",
		"platf+armel--armhf",
		"platf+iOS",
		"platf+macOS",
		"platf+ppc64el",
		"platf+s390x",
		"platf+x86-64",
	]);

	plb.addImplementations(["pl+OCaml"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+ActionScript",
		"pl+CPP",
		"pl+CSharp",
		"pl+ECMAScript",
		"pl+Java",
		"pl+JavaScript",
		"pl+Lua",
		"pl+NekoVM",
		"pl+OCaml",
		"pl+PHP",
		"pl+Python",
	]);

	plb.addInfluenced([
		"pl+ActionScript",
		"pl+Java",
		"pl+JavaScript",
		"pl+OCaml",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2005-11-14",
			kind: "first",
		},
		{
			version: "4.3.4",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
