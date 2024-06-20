import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+GNU-Guile";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "GNU Guile" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/b/b3/GNU-Guile-logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "GNU Guile",
			href: "https://en.wikipedia.org/wiki/GNU_Guile",
		},
		{
			kind: "homepage",
			title: "gnu.org/software/guile",
			href: "https://gnu.org/software/guile",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Aubrey-Jaffer", "designer"],
		["person+Miles-Bader", "designer"],
		["person+Tom-Lord", "designer"],
	]);

	plb.addLicenses(["license+LGPL-3dot0-or-later"]);

	plb.addParadigms([]);

	plb.addTypeSystems([]);

	plb.addPlatforms([
		"platf+AArch64",
		"platf+BSD",
		"platf+Cygwin",
		"platf+IA-32",
		"platf+Linux",
		"platf+MinGW",
		"platf+Windows",
		"platf+armel",
		"platf+armhf",
		"platf+mips",
		"platf+mips64el",
		"platf+mipsel",
		"platf+ppc64el",
		"platf+s390x",
		"platf+x86-64",
	]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+Lisp", "pl+SCM", "pl+Scheme"]);

	plb.addInfluenced(["pl+SCM"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1993-01-01",
			kind: "first",
		},
		{
			version: "3.0.9",
			date: "2023-01-25",
			kind: "stable",
		},
	]);
}
