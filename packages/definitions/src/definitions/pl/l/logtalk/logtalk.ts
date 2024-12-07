import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+logtalk", {
      name: "Logtalk",
      description:
        "Logtalk is a declarative object-oriented logic programming language that extends and leverages the Prolog language with modern code encapsulation and code reuse mechanisms. It is implemented as a trans-compiler in highly portable, extensively tested, and well-documented code, utilizing most modern and standards-compliant Prolog implementations as a backend compiler. Logtalk supports modules, prototypes, classes, protocols, categories, event-driven programming, and high-level multi-threading programming. It is distributed under a commercial-friendly license and includes extensive documentation and portable libraries.",
      keywords: ["logic programming", "logtalk", "prolog"],
      isTranspiler: true,
      releases: [
        { version: "3.85.0", name: "", date: "2024-11-12" },
        { version: "3.66.0", name: "", date: "2023-05-30" },
      ],
      stackovTags: ["logtalk"],
      githubName: "Logtalk",
      githubLangId: "210",
      githubColor: "#295b9a",
      githubPopular: false,
      githubType: "programming",
      extensions: [".lgt"],
      extWikipediaPath: "Logtalk",
      extHomeURL: "https://logtalk.org/",
      created: "1998",
    })
    .relCompilesTo.add("pl+prolog")
    .relInfluencedBy.add("pl+prolog")
    .relLicenses.add("lic+apache", "lic+artistic")
    .relParadigms.add("para+logic", "para+oop", "para+prototype")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+analysis", "tag+compiler", "tag+framework", "tag+interpreters", "tag+viz");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
