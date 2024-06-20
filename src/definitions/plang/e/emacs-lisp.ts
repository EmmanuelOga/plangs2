import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Emacs-Lisp";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Emacs Lisp" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/0/08/EmacsIcon.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Emacs Lisp",
			href: "https://en.wikipedia.org/wiki/Emacs_Lisp",
		},
		{
			kind: "homepage",
			title: "www.gnu.org/software/emacs",
			href: "http://www.gnu.org/software/emacs",
		},
	]);

	plb.addScoping(["lexical"]);

	plb.addExtensions([".el", ".elc", ".eln"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Guy-Ldot-Steele", "designer"],
		["person+Richard-Stallman", "designer"],
	]);

	plb.addLicenses(["license+GPLv3"]);

	plb.addParadigms(["para+functional", "para+meta", "para+reflective"]);

	plb.addTypeSystems(["tsys+dynamic", "tsys+strong"]);

	plb.addPlatforms(["platf+Emacs"]);

	plb.addImplementations([]);

	plb.addDialects(["pl+Lisp"]);

	plb.addInfluences(["pl+Common-Lisp", "pl+Maclisp"]);

	plb.addInfluenced(["pl+Common-Lisp"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1985-01-01",
			kind: "first",
		},
		{
			version: "29.1",
			date: "2023-07-30",
			kind: "stable",
		},
	]);
}
