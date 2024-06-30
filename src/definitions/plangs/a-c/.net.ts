import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+.net").merge({
    name: "CLI",
    websites: [
      { kind: "wikipedia", title: ".NET", href: "https://en.wikipedia.org/wiki/.NET" },
      { kind: "wikipedia", title: "CLI", href: "https://en.wikipedia.org/wiki/Common_Language_Infrastructure" },
    ],
  });

  /**/

  g.buildPlang("pl+.net-framework").merge({
    name: ".NET Framework",
    websites: [{ kind: "wikipedia", title: ".NET Framework", href: "https://en.wikipedia.org/wiki/.NET_Framework" }],
  });

  /**/

  g.buildPlang("pl+.net-framework-sdk").merge({
    name: ".NET Framework SDK",
    websites: [
      { kind: "wikipedia", title: ".NET Framework SDK", href: "https://en.wikipedia.org/wiki/.NET_Framework_SDK" },
    ],
  });

  /**/

  g.buildPlang("pl+asp.net")
    .merge({
      name: "ASP.NET",
      websites: [{ kind: "wikipedia", title: "ASP.NET (software)", href: "https://en.wikipedia.org/wiki/ASP.NET" }],
      releases: [{ name: "ASP.NET (software)", version: "4.8.1", date: "2022-01-01", kind: "stable" }],
      extensions: [".aspx", ".cshtml", ".vbhtml"],
    })
    .addLicense("lic+proprietary", {
      refs: [
        {
          href: "https://web.archive.org/web/20150402161923/https://msdn.microsoft.com/en-us/library/ms994405.aspx",
          title: "Microsoft .NET Framework Redistributable EULA",
        },
      ],
    })
    .addPlatforms(["platf+.net"]);

  /**/

  g.buildPlang("pl+jscript-.net")
    .merge({
      name: "JScript .NET",
      websites: [{ kind: "wikipedia", title: "JScript .NET", href: "https://en.wikipedia.org/wiki/JScript_.NET" }],
      extensions: [".js"],
    })
    .addInfluences(["pl+jscript", "pl+ecmascript"])
    .addParadigms(["para+multi"])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+duck", "tsys+weak", "tsys+dynamic"]);

  /**/

  g.buildPlang("pl+script.net")
    .merge({
      name: "Script.NET",
      websites: [{ kind: "wikipedia", title: "Script.NET", href: "https://en.wikipedia.org/wiki/Script.NET" }],
    })
    .addInfluences(["pl+javascript"])
    .addParadigms(["para+imperative", "para+meta", "para+scripting"])
    .addPlatforms(["platf+.net"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
