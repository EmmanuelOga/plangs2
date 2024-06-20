import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Common-Lisp";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Common Lisp" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Common Lisp",
			href: "https://en.wikipedia.org/wiki/Common_Lisp",
		},
		{
			kind: "homepage",
			title: "common-lisp.net",
			href: "http://common-lisp.net",
		},
	]);

	plb.addScoping(["dynamic"]);

	plb.addExtensions([".cl", ".fasl", ".l", ".lisp", ".lsp"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Dan-Weinreb", "designer"],
		["person+David-Adot-Moon", "designer"],
		["person+Guy-Steele", "designer"],
		["person+Kent-Pitman", "designer"],
		["person+Richard-Pdot-Gabriel", "designer"],
		["person+Scott-Fahlman", "designer"],
	]);

	plb.addLicenses([]);

	plb.addParadigms([
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+meta",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([
		"pl+ABCL",
		"pl+Allegro-CL",
		"pl+CLISP",
		"pl+CMUCL",
		"pl+Clozure-CL",
		"pl+ECL",
		"pl+GCL",
		"pl+LispWorks",
		"pl+SBCL",
		"pl+Symbolics-Common-Lisp",
	]);

	plb.addDialects(["pl+Lisp"]);

	plb.addInfluences([
		"pl+AutoLisp",
		"pl+Clojure",
		"pl+Dylan",
		"pl+Emacs-Lisp",
		"pl+EuLisp",
		"pl+ISLISP",
		"pl+Interlisp",
		"pl+Julia",
		"pl+Lisp",
		"pl+Lisp-Machine-Lisp",
		"pl+Maclisp",
		"pl+Moose",
		"pl+R",
		"pl+SKILL",
		"pl+Scheme",
		"pl+StarLisp",
		"pl+SubL",
	]);

	plb.addInfluenced([
		"pl+Clojure",
		"pl+Emacs-Lisp",
		"pl+Embeddable-Common-Lisp",
		"pl+EuLisp",
		"pl+Franz-Lisp",
		"pl+Hy",
		"pl+ISLISP",
		"pl+LFE",
		"pl+Lisp-Machine-Lisp",
		"pl+LispWorks",
		"pl+MDL",
		"pl+Maclisp",
		"pl+SKILL",
		"pl+Sather",
		"pl+Scala",
		"pl+Scheme",
		"pl+StarLisp--StarLisp-",
		"pl+newLISP",
	]);

	plb.addReleases([{ version: "unknown", date: "1984-01-01", kind: "first" }]);
}
