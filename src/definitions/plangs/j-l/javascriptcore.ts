import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+javascriptcore",
    "JavaScriptCore",
    {
      name: "JavaScriptCore",
      websites: [
        { kind: "wikipedia", title: "WebKit", href: "https://en.wikipedia.org/wiki/JavaScriptCore" },
        { kind: "homepage", title: "webkit.org", href: "http://webkit.org" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/0/05/WebKit_logo_%282023%29.svg" }],
      references: {
        original_authors: [
          {
            href: "https://web.archive.org/web/20150209072938/http://lists.kde.org/?m=104197092318639",
            title: "'(fwd) Greetings from the Safari team at Apple Computer' – MARC",
          },
          {
            href: "http://donmelton.com/2013/01/10/safari-is-released-to-the-world/",
            title: "Safari is released to the world",
          },
        ],
        preview_release: [
          {
            href: "https://web.archive.org/web/20160403165617/https://webkit.org/downloads/",
            title: "WebKit Nightly Builds",
          },
        ],
        written_in: [
          {
            href: "https://web.archive.org/web/20170501132832/https://webkit.org/code-style-guidelines/",
            title: "Code Style Guidelines",
          },
        ],
        operating_system: [
          { href: "https://webkit.org/downloads/", title: "WebKit Download" },
          {
            href: "https://web.archive.org/web/20210808104008/https://webkit.org/webkit-on-windows/",
            title: "WebKit on Windows | WebKit",
          },
          {
            href: "https://web.archive.org/web/20210808103951/https://trac.webkit.org/wiki/BuildingCairoOnWindows",
            title: "BuildingCairoOnWindows – WebKit",
          },
        ],
        license: [{ href: "https://webkit.org/licensing-webkit/", title: "Licensing WebKit | WebKit" }],
      },
      releases: [{ version: "unknown", date: "1998-11-04", kind: "first" }],
    },
    { licenses: ["lic+bsd-s", "lic+lgpl"] },
  );
}
