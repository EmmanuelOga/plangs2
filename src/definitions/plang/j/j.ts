import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+J";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "J" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/65/J_%28programming_language%29_icon.png/121px-J_%28programming_language%29_icon.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "J",
			href: "https://en.wikipedia.org/wiki/J_(programming_language)",
		},
		{
			kind: "homepage",
			title: "www.jsoftware.com",
			href: "http://www.jsoftware.com",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Roger-Hui", "designer"]]);

	plb.addLicenses(["license+GPLv3"]);

	plb.addParadigms([
		"para+array",
		"para+class-based",
		"para+function-level",
		"para+functional",
		"para+object-oriented",
		"para+prototype-based",
		"para+tacit",
	]);

	plb.addTypeSystems(["tsys+dynamic"]);

	plb.addPlatforms([
		"platf+Android",
		"platf+Cross-platform",
		"platf+Linux",
		"platf+Raspberry-Pi",
		"platf+Windows",
		"platf+iOS",
		"platf+macOS",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+APL", "pl+FL", "pl+NumPy", "pl+SuperCollider"]);

	plb.addInfluenced(["pl+APL", "pl+FL"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1990-01-01",
			kind: "first",
		},
		{
			version: "9.5",
			date: "2023-12-20",
			kind: "stable",
		},
	]);
}
