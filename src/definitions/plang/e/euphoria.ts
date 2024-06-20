import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Euphoria";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Euphoria" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/OpenEuphoria_logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Euphoria",
			href: "https://en.wikipedia.org/wiki/Euphoria_(programming_language)",
		},
		{
			kind: "homepage",
			title: "openeuphoria.org",
			href: "http://openeuphoria.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".e", ".edb", ".ex", ".exw"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Derek-Parnell", "designer"],
		["person+Jeremy-Cowgar", "designer"],
		["person+Matt-Lewis", "designer"],
	]);

	plb.addLicenses(["license+BSD"]);

	plb.addParadigms(["para+imperative"]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+static"]);

	plb.addPlatforms([
		"platf+Cross-platform",
		"platf+FreeBSD",
		"platf+Linux",
		"platf+NetBSD",
		"platf+OpenBSD",
		"platf+Win32",
		"platf+macOS",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+BASIC"]);

	plb.addInfluenced([]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1993-01-01",
			kind: "first",
		},
		{
			version: "4.1.0",
			date: "2021-03-01",
			kind: "stable",
		},
	]);
}
