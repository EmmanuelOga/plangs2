import type { PlangsGraph } from "@plangs/plangs/graph";

    export function define(g: PlangsGraph) {
      g.plang.set("pl+python", {"name":"Python","description":"Dynamic, high-level programming language known for its easy-to-read syntax and flexibility. A multi-paradigm language supporting procedural, object-oriented, and functional programming models, widely used in web development, data analysis, artificial intelligence, and more.","shortDesc":"Dynamic, high-level programming language known for its easy-to-read syntax.","created":"1991","extensions":[".py",".pyc",".pyd",".pyi",".pyo",".pyw",".pyz"],"extGithubPath":"python/cpython","extHomeURL":"https://www.python.org/","extRedditPath":"Python","extWikipediaPath":"Python_(programming_language)","githubColor":"#3572A5","githubLangId":"303","githubName":"Python","githubPopular":true,"githubStars":64100,"githubType":"programming","isTranspiler":false,"languishRanking":1,"releases":[{"version":"2.7.18","name":"Final Release of Python 2","date":"2020-04-19"},{"version":"3.13.0","name":"Python 3.13.0","date":"2024-10-07"}],"stackovTags":["python"]})
    .relInfluencedBy.add("pl+.net","pl+ada","pl+apl","pl+c","pl+c++","pl+haskell","pl+lisp","pl+perl","pl+r5rs","pl+scheme","pl+standard-ml")
    .relLicenses.add("lic+python")
    .relParadigms.add("para+functional","para+imperative","para+interpreted","para+multi","para+oop","para+procedural","para+reflective","para+scripting","para+structured")
    .relPlatforms.add("plat+android","plat+apple","plat+bsd","plat+cross","plat+linux","plat+raspberry","plat+wasm","plat+windows")
    .relTags.add("tag+analysis","tag+app","tag+automation","tag+cas","tag+cli","tag+compiler","tag+dataflow","tag+dbms","tag+framework","tag+games","tag+gui","tag+industrial","tag+interpreters","tag+low-code","tag+modeling","tag+numeric","tag+sci","tag+scripting","tag+testing","tag+viz","tag+wavelet","tag+webdev")
    .relTypeSystems.add("tsys+duck","tsys+dynamic","tsys+inferred","tsys+object","tsys+optional","tsys+strong")
    .relWrittenWith.add("pl+c","pl+python")
    }