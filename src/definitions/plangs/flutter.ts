import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+flutter",
    "Flutter",
    {
      name: "Flutter",
      websites: [
        { kind: "wikipedia", title: "Flutter", href: "https://en.wikipedia.org/wiki/Flutter_(software)" },
        { kind: "homepage", title: "flutter.dev", href: "https://flutter.dev" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg" }],
      references: {
        initial_release: [
          {
            href: "https://web.archive.org/web/20190205055416/https://github.com/flutter/flutter/releases/tag/v0.0.6",
            title: "Release v0.0.6: Rev alpha branch version to 0.0.6, flutter 0.0.26 (#10010) · flutter/flutter",
          },
        ],
        stable_release: [
          {
            href: "https://github.com/flutter/flutter/releases/tag/3.22.0",
            title: "https://github.com/flutter/flutter/releases/tag/3.22.0",
          },
        ],
        written_in: [
          { href: "https://web.archive.org/web/20190223023951/https://flutter.dev/", title: "FAQ - Flutter" },
        ],
      },
      releases: [
        { version: "0.0.6", date: "2017-05-12", kind: "first" },
        { version: "3.22.0", date: "2024-01-01", kind: "stable" },
      ],
    },
    {
      licenses: ["lic+bsd-n"],
      platforms: [
        "platf+android",
        "platf+google-fuchsia",
        "platf+ios",
        "platf+linux",
        "platf+mac",
        "platf+web",
        "platf+windows",
      ],
    },
  );

  /**/
}
