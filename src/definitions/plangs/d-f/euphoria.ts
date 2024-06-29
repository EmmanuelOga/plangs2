import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+euphoria",
    "Euphoria",
    {
      name: "Euphoria",
      websites: [
        { kind: "wikipedia", title: "Euphoria", href: "https://en.wikipedia.org/wiki/Euphoria_(programming_language)" },
        { kind: "homepage", title: "openeuphoria.org", href: "http://openeuphoria.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/OpenEuphoria_logo.png" }],
      releases: [
        { version: "unknown", date: "1993-01-01", kind: "first" },
        { version: "4.1.0", date: "2021-03-01", kind: "stable" },
      ],
      extensions: [".e", ".ex", ".exw", ".edb"],
    },
    {
      influences: ["pl+basic"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+imperative"],
      people: [
        ["person+derek-parnell", { role: "designer" }],
        ["person+jeremy-cowgar", { role: "designer" }],
        ["person+matt-lewis", { role: "designer" }],
        ["person+robert-craig", { role: "designer" }],
      ],
      platforms: ["platf+bsd", "platf+cross-platform", "platf+linux", "platf+mac", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+static"],
    },
  );
}
