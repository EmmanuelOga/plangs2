import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Plang } from "../../../entities/schemas";

export const PL_V_Id = "pl+Java" as T_Id_V_Plang;

export function define(g: PlangsGraph) {
  const pl = g.v_plang.declare(PL_V_Id);

  pl.name = "Java";

  const plb = g.plangBuilder;

  plb.addImages(pl, [
    {
      kind: "logo",
      url: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    },
  ]);

  plb.addWebsites(pl, [
    {
      kind: "wikipedia",
      title: "Java",
      href: "https://en.wikipedia.org/wiki/Java_(programming_language)",
    },
    {
      kind: "homepage",
      title: "oracle.com/java/",
      href: "http://oracle.com/java/",
    },
    {
      kind: "homepage",
      title: "java.com",
      href: "http://java.com",
    },
    {
      kind: "homepage",
      title: "dev.java",
      href: "http://dev.java",
    },
  ]);

  plb.addScoping(pl, []);

  plb.addExtensions(pl, [".java", ".jmod"]);

  plb.addReferences(pl, {});

  plb.addPeople(pl, [["person+James-Gosling", "designer"]]);

  plb.addLicenses(pl, []);

  plb.addParadigms(pl, [
    "para+class-based",
    "para+concurrent",
    "para+functional",
    "para+generic",
    "para+imperative",
    "para+multi-paradigm",
    "para+objects",
    "para+reflective",
  ]);

  plb.addTypeSystems(pl, [
    "tsys+manifest",
    "tsys+nominative",
    "tsys+safe",
    "tsys+static",
    "tsys+strong",
  ]);

  plb.addPlatforms(pl, []);

  plb.addImplementations(pl, []);

  plb.addDialects(pl, []);

  plb.addInfluences(pl, [
    "pl+Ada-2005",
    "pl+Ada-83",
    "pl+ArkTS",
    "pl+BeanShell",
    "pl+C-Plus-Plus",
    "pl+C-Sharp",
    "pl+CLU",
    "pl+Chapel",
    "pl+Clojure",
    "pl+ECMAScript",
    "pl+Eiffel",
    "pl+Fantom",
    "pl+Gambas",
    "pl+Groovy",
    "pl+Hack",
    "pl+Haxe",
    "pl+J-Sharp",
    "pl+JS-Plus-Plus",
    "pl+JavaScript",
    "pl+Kotlin",
    "pl+Lisp",
    "pl+Mesa",
    "pl+Modula-3",
    "pl+Oberon",
    "pl+Object-Pascal",
    "pl+Objective-C",
    "pl+PHP",
    "pl+Python",
    "pl+Scala",
    "pl+Seed7",
    "pl+Simula67",
    "pl+Smalltalk",
    "pl+UCSD-Pascal",
    "pl+Vala",
  ]);

  plb.addInfluenced(pl, [
    "pl+ActionScript",
    "pl+Ada",
    "pl+ArkTS",
    "pl+Ballerina",
    "pl+BeanShell",
    "pl+C",
    "pl+C-Plus-Plus",
    "pl+Ceylon",
    "pl+Chapel",
    "pl+Clojure",
    "pl+D-programming-language",
    "pl+Dart",
    "pl+E",
    "pl+ECMAScript",
    "pl+Eiffel",
    "pl+Emerald",
    "pl+Fantom",
    "pl+Gambas",
    "pl+Gosu",
    "pl+Groovy",
    "pl+Hack",
    "pl+Haxe",
    "pl+JS-Plus-Plus",
    "pl+JavaScript",
    "pl+Join-Java",
    "pl+Kotlin",
    "pl+MDL",
    "pl+Mesa[1]",
    "pl+Mirah",
    "pl+Modula-3",
    "pl+NetRexx",
    "pl+Oaklisp",
    "pl+Object-Pascal",
    "pl+Objective-C",
    "pl+OptimJ",
    "pl+PHP",
    "pl+Pascal",
    "pl+Pizza",
    "pl+Qore",
    "pl+Scala",
    "pl+Seed7",
    "pl+Smalltalk",
    "pl+Strongtalk",
    "pl+SystemVerilog",
    "pl+Tea",
    "pl+TypeScript",
    "pl+Umple",
    "pl+Vala",
    "pl+Whiley",
    "pl+X10",
    "pl+Xtend",
  ]);

  plb.addReleases(pl, [{ version: "unknown", date: "1995-05-23", kind: "first" }]);
}
