import type { PlangsGraph } from "../../../schema/graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+php")
    .merge({
      name: "PHP",
      websites: [
        { kind: "wikipedia", title: "PHP", href: "https://en.wikipedia.org/wiki/PHP" },
        { kind: "homepage", title: "https://thephp.foundation", href: "https://thephp.foundation" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" }],
      releases: [{ name: "PHP", version: "8.3.8", date: "2024-01-01", kind: "stable" }],
      extensions: [".phar", ".php", ".phps", ".pht", ".phtml"],
    })
    .addImplementations([
      "pl+c",
      "pl+cpp",
      "pl+zend-engine",
      "pl+hhvm",
      "pl+peachpie",
      "pl+quercus",
      "pl+parrot-virtual-machine",
    ])
    .addInfluences(["pl+c", "pl+cpp", "pl+perl", "pl+smalltalk"])
    .addInfluence("pl+java", {
      refs: [{ href: "https://www.php.net/manual/en/preface.php", title: "PHP: Preface – Manual" }],
    })
    .addInfluence("pl+tcl", {
      refs: [
        {
          href: "https://web.archive.org/web/20190106230504/http://web.archive.org/web/20130729204354id_/http://itc.conversationsnetwork.org/shows/detail3298.html",
          title:
            "PHP on Hormones – history of PHP presentation by Rasmus Lerdorf given at the MySQL Conference in Santa Clara, California",
        },
        {
          href: "http://itc.conversationsnetwork.org/shows/detail3298.html",
          title:
            "PHP on Hormones – history of PHP presentation by Rasmus Lerdorf given at the MySQL Conference in Santa Clara, California",
        },
      ],
    })
    .addInfluence("pl+javascript", {
      refs: [
        {
          href: "https://x.com/dstogov/status/672864802474229760",
          title:
            "It's not a secret that some #PHP7 optimization ideas came from HHVM, LuaJIT and V8. Thank you @HipHopVM @SaraMG. #php7thankyou",
        },
      ],
    })
    .addPerson("person+rasmus-lerdorf", { role: "designer" })
    .addLicenses(["lic+php", "lic+zend"])
    .addLicense("lic+gpl", {
      refs: [{ href: "https://museum.php.net/php3/", title: "PHP: Release Archives (museum)" }],
    })
    .addParadigms(["para+multi", "para+imperative", "para+functional", "para+objects", "para+reflective"])
    .addPlatforms(["platf+unix", "platf+win", "platf+mac", "platf+openvms"])
    .addTypeSystems(["tsys+dynamic", "tsys+weak"])
    .addTypeSystem("tsys+gradual", {
      refs: [
        {
          href: "https://secure.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration.strict",
          title: "PHP: Function arguments – Manual",
        },
      ],
    });

  /**/
}
