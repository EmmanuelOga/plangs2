import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Python";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Python" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Python",
			href: "https://en.wikipedia.org/wiki/Python_(programming_language)",
		},
		{
			kind: "homepage",
			title: "python.org",
			href: "https://www.python.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".py", ".pyc", ".pyd", ".pyi", ".pyw", ".pyz"]);

	plb.addReferences({});

	plb.addPeople([["person+Guido-van-Rossum", "designer"]]);

	plb.addLicenses(["license+Python-Software-Foundation-License"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
		"para+structured",
	]);

	plb.addTypeSystems([
		"tsys+duck",
		"tsys+dynamic",
		"tsys+optional",
		"tsys+strong",
	]);

	plb.addPlatforms([
		"platf+Android",
		"platf+BSD",
		"platf+FreeBSD",
		"platf+Linux",
		"platf+Raspberry-Pi-OS",
		"platf+Unix-like",
		"platf+WebAssembly",
		"platf+Windows",
		"platf+iOS",
		"platf+macOS",
	]);

	plb.addImplementations([
		"pl+CPython",
		"pl+CircuitPython",
		"pl+IronPython",
		"pl+Jython",
		"pl+MicroPython",
		"pl+PyPy",
		"pl+Stackless-Python",
	]);

	plb.addDialects(["pl+Mojo"]);

	plb.addInfluences([
		"pl+ABC",
		"pl+ALGOL-68",
		"pl+APL",
		"pl+Ada",
		"pl+Apache-Groovy",
		"pl+Boo",
		"pl+C",
		"pl+CLU",
		"pl+CPP",
		"pl+Cobra",
		"pl+CoffeeScript",
		"pl+D",
		"pl+Dylan",
		"pl+FSharp",
		"pl+GDScript",
		"pl+Genie",
		"pl+Go",
		"pl+Haskell",
		"pl+Icon",
		"pl+JavaScript",
		"pl+Julia",
		"pl+Lisp",
		"pl+Modula-3",
		"pl+Mojo",
		"pl+Nim",
		"pl+Perl",
		"pl+Ring",
		"pl+Ruby",
		"pl+Standard-ML",
		"pl+Swift",
	]);

	plb.addInfluenced([
		"pl+ABC",
		"pl+APL",
		"pl+Ada",
		"pl+Boo",
		"pl+C",
		"pl+CLU",
		"pl+CPP",
		"pl+Cobra",
		"pl+Crystal",
		"pl+Cython",
		"pl+D-programming-language",
		"pl+Dylan",
		"pl+ECMAScript",
		"pl+Ezhil",
		"pl+Genie",
		"pl+Godot-EngineGDScript",
		"pl+Groovy",
		"pl+Haxe",
		"pl+Icon",
		"pl+Io",
		"pl+Java",
		"pl+Julia",
		"pl+Kotlin",
		"pl+Lisp",
		"pl+Modula-3",
		"pl+Nim",
		"pl+PowerShell",
		"pl+Pyomo",
		"pl+Ring",
		"pl+Ruby",
		"pl+Scheme",
		"pl+Smalltalk",
		"pl+Solidity",
		"pl+Squirrel",
		"pl+Standard-ML",
		"pl+V",
		"pl+Whiley",
		"pl+eC",
		"pl+occam",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "1991-02-20",
			kind: "first",
		},
		{
			version: "3.12.4",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
