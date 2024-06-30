import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+php",
    {
      name: "PHP",
      websites: [
        { kind: "wikipedia", title: "PHP", href: "https://en.wikipedia.org/wiki/PHP" },
        { kind: "homepage", title: "https://thephp.foundation", href: "https://thephp.foundation" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" }],
      releases: [{ version: "8.3.8", date: "2024-01-01", kind: "stable" }],
      extensions: [".phar", ".php", ".phps", ".pht", ".phtml"],
    },
    {
      implementations: [
        "pl+c",
        "pl+cpp",
        "pl+hhvm",
        "pl+parrot-virtual-machine",
        "pl+peachpie",
        "pl+quercus",
        "pl+zend-engine",
      ],
      influences: ["pl+c", "pl+cpp", "pl+java", "pl+javascript", "pl+perl", "pl+smalltalk", "pl+tcl"],
      people: ["person+rasmus-lerdorf"],
      licenses: ["lic+gpl", "lic+php", "lic+zend"],
      paradigms: ["para+functional", "para+imperative", "para+multi", "para+objects", "para+reflective"],
      platforms: ["platf+mac", "platf+openvms", "platf+unix", "platf+win"],
      typeSystems: ["tsys+dynamic", "tsys+gradual", "tsys+weak"],
    },
  );
}
