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
        "pl+zend-engine",
        "pl+hhvm",
        "pl+peachpie",
        "pl+quercus",
        "pl+parrot-virtual-machine",
      ],
      influences: ["pl+c", "pl+cpp", "pl+java", "pl+perl", "pl+tcl", "pl+javascript", "pl+smalltalk"],
      licenses: ["lic+gpl", "lic+php", "lic+zend"],
      paradigms: ["para+multi", "para+imperative", "para+functional", "para+objects", "para+reflective"],
      people: ["person+rasmus-lerdorf"],
      platforms: ["platf+unix", "platf+win", "platf+mac", "platf+openvms"],
      typeSystems: ["tsys+dynamic", "tsys+weak", "tsys+gradual"],
    },
  );
}
