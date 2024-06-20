import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Logo";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Logo" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Logo",
			href: "https://en.wikipedia.org/wiki/Logo_(programming_language)",
		},
		{
			kind: "wikipedia",
			title: "Logo",
			href: "https://en.wikipedia.org/wiki/ObjectLOGO",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Cynthia-Solomon", "designer"],
		["person+Seymour-Papert", "designer"],
		["person+Wally-Feurzeig", "designer"],
	]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+educational",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+reflective",
	]);

	plb.addTypeSystems(["tsys+dynamic"]);

	plb.addPlatforms([]);

	plb.addImplementations(["pl+UCBLogo"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+AgentSheets",
		"pl+Etoys",
		"pl+Lisp",
		"pl+Microsoft-Small-Basic",
		"pl+NetLogo",
		"pl+REBOL",
		"pl+Scratch",
		"pl+Smalltalk",
	]);

	plb.addInfluenced([
		"pl+AgentCubes",
		"pl+AgentSheets",
		"pl+Etoys",
		"pl+Ezhil",
		"pl+Lisp",
		"pl+Microsoft-Small-Basic",
		"pl+NetLogo",
		"pl+Rebol",
		"pl+Scratch",
		"pl+Smalltalk",
		"pl+Snap-",
		"pl+Squeak",
		"pl+StarLogo",
		"pl+The-Kojo-Learning-Environment",
		"pl+TurtleStitch",
		"pl+VisualWorks",
	]);

	plb.addReleases([{ version: "unknown", date: "1967-01-01", kind: "first" }]);
}
