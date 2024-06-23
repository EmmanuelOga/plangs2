import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+jscript",
    "JScript",
    {
      name: "JScript",
      websites: [
        { kind: "wikipedia", title: "JScript", href: "https://en.wikipedia.org/wiki/JScript" },
        {
          kind: "homepage",
          title: "learn.microsoft.com/en-us/previous-versions/hbxc2t98(v=vs.85)",
          href: "https://learn.microsoft.com/en-us/previous-versions/hbxc2t98(v=vs.85)",
        },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/e/e8/Jscript_icon.gif" }],
      releases: [
        { version: "unknown", date: "1996-01-01", kind: "first" },
        { version: "9.0", date: "2011-01-01", kind: "stable" },
      ],
      references: {
        filename_extensions: [
          { href: "https://msdn.microsoft.com/en-us/library/67w03h17(v=VS.85).aspx", title: "Types of Script Files" },
        ],
      },
      extensions: [".jse", ".wsc (", ")"],
    },
    {
      implementations: ["pl+active-scripting", "pl+jscript-.net"],
      influenced: ["pl+jscript-.net"],
      platforms: ["platf+windows"],
      typeSystems: ["tsys+duck", "tsys+dynamic", "tsys+weak"],
    },
  );

  /**/
}
