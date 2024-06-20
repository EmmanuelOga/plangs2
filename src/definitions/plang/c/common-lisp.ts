import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Common-Lisp" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Common Lisp";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, ["dynamic"]);

	plb.addExtensions(pl, [".cl", ".fasl", ".l", ".lisp", ".lsp"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [
		["person+Dan-Weinreb", "designer"],
		["person+David-A-Moon", "designer"],
		["person+Guy-Steele", "designer"],
		["person+Kent-Pitman", "designer"],
		["person+Richard-P-Gabriel", "designer"],
		["person+Scott-Fahlman", "designer"],
	]);

	plb.addLicenses(pl, []);

	plb.addParadigms(pl, [
		"para+functional",
		"para+generic",
		"para+imperative",
		"para+meta",
		"para+multi-paradigm",
		"para+objects",
		"para+reflective",
	]);

	plb.addTypeSystems(pl, ["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(pl, ["platf+Cross-platform"]);

	plb.addImplementations(pl, [
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

	plb.addDialects(pl, ["pl+Lisp"]);

	plb.addInfluences(pl, [
		"pl+-StarLisp",
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
		"pl+SubL",
	]);

	plb.addInfluenced(pl, [
		"pl+-StarLisp--StarLisp-",
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
		"pl+newLISP",
	]);

	plb.addReleases(pl, [
		{ version: "unknown", date: "1984-01-01", kind: "first" },
	]);
}
