import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Python" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
	const pl = g.v_plang.declare(PL_V_Id);

	pl.name = "Python";

	const plb = g.plangBuilder;

	plb.addImages(pl, [
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
		},
	]);

	plb.addWebsites(pl, [
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

	plb.addScoping(pl, []);

	plb.addExtensions(pl, [".py", ".pyc", ".pyd", ".pyi", ".pyw", ".pyz"]);

	plb.addReferences(pl, {});

	plb.addPeople(pl, [["person+Guido-van-Rossum", "designer"]]);

	plb.addLicenses(pl, ["license+python-software-foundation"]);

	plb.addParadigms(pl, [
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+objects",
		"para+reflective",
		"para+structured",
	]);

	plb.addTypeSystems(pl, [
		"tsys+duck",
		"tsys+dynamic",
		"tsys+optional",
		"tsys+strong",
	]);

	plb.addPlatforms(pl, [
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

	plb.addImplementations(pl, [
		"pl+CPython",
		"pl+CircuitPython",
		"pl+IronPython",
		"pl+Jython",
		"pl+MicroPython",
		"pl+PyPy",
		"pl+Stackless-Python",
	]);

	plb.addDialects(pl, ["pl+Mojo"]);

	plb.addInfluences(pl, [
		"pl+ABC",
		"pl+ALGOL-68",
		"pl+APL",
		"pl+Ada",
		"pl+Apache-Groovy",
		"pl+Boo",
		"pl+C",
		"pl+C-Plus-Plus",
		"pl+CLU",
		"pl+Cobra",
		"pl+CoffeeScript",
		"pl+D",
		"pl+Dylan",
		"pl+F-Sharp",
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

	plb.addInfluenced(pl, [
		"pl+ABC",
		"pl+APL",
		"pl+Ada",
		"pl+Boo",
		"pl+C",
		"pl+C-Plus-Plus",
		"pl+CLU",
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

	plb.addReleases(pl, [
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
