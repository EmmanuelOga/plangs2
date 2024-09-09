import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+vala", {
      name: "Vala",
      description: "Vala is an object-oriented programming language with a self-hosting compiler that generates C code and uses the GObject system.",
      firstAppeared: "2006-01-01",
      extensions: [".vala", ".vapi"],
      websites: [
        { href: "https://vala.dev/", title: "vala.dev", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Vala_(programming_language)", title: "Vala", kind: "wikipedia" },
      ],
      releases: [{ version: "0.57.0", date: "2023-01-01" }],
      images: [{ kind: "logo", title: "Vala", url: "/images/plangs/v/vala/logo.png" }],
    })
    .addInfluencedBy(["pl+boo", "pl+c", "pl+c++", "pl+c-sharp", "pl+d"])
    .addParadigms(["para+imperative", "para+multi", "para+oop", "para+structured"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);
}
