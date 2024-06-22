import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  //-------------------------------------------------------------------------------

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
      references: {
        first_appeared: [
          {
            href: "https://groups.google.com/group/comp.infosystems.www.authoring.cgi/msg/cc7d43454d64d133?pli=1",
            title: "Announce: Personal Home Page Tools (PHP Tools)",
          },
          {
            href: "https://web.archive.org/web/20190106230504/http://web.archive.org/web/20130729204354id_/http://itc.conversationsnetwork.org/shows/detail3298.html",
            title:
              "PHP on Hormones – history of PHP presentation by Rasmus Lerdorf given at the MySQL Conference in Santa Clara, California",
          },
        ],
        stable_release: [
          { href: "https://www.php.net/archive/2024.php#2024-06-06-2", title: "PHP: News Archive - 2024" },
        ],
        typing_discipline: [
          {
            href: "https://secure.php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration.strict",
            title: "PHP: Function arguments – Manual",
          },
        ],
        license: [{ href: "https://museum.php.net/php3/", title: "PHP: Release Archives (museum)" }],
        influenced_by: [
          { href: "https://www.php.net/manual/en/preface.php", title: "PHP: Preface – Manual" },
          {
            href: "https://web.archive.org/web/20190106230504/http://web.archive.org/web/20130729204354id_/http://itc.conversationsnetwork.org/shows/detail3298.html",
            title:
              "PHP on Hormones – history of PHP presentation by Rasmus Lerdorf given at the MySQL Conference in Santa Clara, California",
          },
          {
            href: "https://x.com/dstogov/status/672864802474229760",
            title:
              "It's not a secret that some #PHP7 optimization ideas came from HHVM, LuaJIT and V8. Thank you @HipHopVM @SaraMG. #php7thankyou",
          },
        ],
        founder: [
          {
            href: "https://www.howtogeek.com/devops/what-the-new-php-foundation-means-for-phps-future/",
            title: "What the New PHP Foundation Means for PHP's Future",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "1995-06-08", kind: "first" },
        { version: "8.3.8", date: "2024-06-06", kind: "stable" },
      ],
      extensions: [".php", ".phar", ".phtml", ".pht", ".phps"],
    },
    {
      implementations: [
        "pl+c",
        "pl+c-plus-plus",
        "pl+hhvm",
        "pl+parrot",
        "pl+peachpie",
        "pl+quercus",
        "pl+zend-engine",
      ],
      influenced: ["pl+c", "pl+c-plus-plus", "pl+hack", "pl+haxe", "pl+java", "pl+smalltalk", "pl+tcl", "pl+umple"],
      influences: [
        "pl+asp",
        "pl+c",
        "pl+c-plus-plus",
        "pl+hack",
        "pl+java",
        "pl+javascript",
        "pl+jsp",
        "pl+perl",
        "pl+react-js",
        "pl+tcl",
      ],
      licenses: ["lic+gnu-gpl", "lic+php", "lic+zend"],
      paradigms: ["para+functional", "para+imperative", "para+multi-paradigm", "para+objects", "para+reflective"],
      people: [["person+rasmus-lerdorf", "designer"]],
      platforms: ["platf+macos", "platf+openvms", "platf+unix", "platf+windows"],
      typeSystems: ["tsys+dynamic", "tsys+gradual", "tsys+weak"],
    },
  );
}
