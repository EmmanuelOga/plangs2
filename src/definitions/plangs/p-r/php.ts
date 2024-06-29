import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+php",
    "PHP",
    {
      name: "PHP",
      websites: [
        { kind: "wikipedia", title: "PHP", href: "https://en.wikipedia.org/wiki/PHP" },
        { kind: "homepage", title: "https://thephp.foundation", href: "https://thephp.foundation" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" }],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1995-06-08", kind: "first" },
        { version: "8.3.8", date: "2024-06-06", kind: "stable" },
      ],
      extensions: [".php", ".phar", ".phtml", ".pht", ".phps"],
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
      influences: ["pl+java", "pl+cpp", "pl+perl", "pl+c", "pl+tcl", "pl+javascript", "pl+smalltalk"],
      licenses: ["lic+gpl", "lic+php", "lic+zend"],
      paradigms: ["para+multi", "para+imperative", "para+functional", "para+objects", "para+reflective"],
      people: ["person+rasmus-lerdorf"],
      platforms: ["platf+unix", "platf+win", "platf+mac", "platf+openvms"],
      typeSystems: ["tsys+dynamic", "tsys+weak", "tsys+gradual"],
    },
  );
}
