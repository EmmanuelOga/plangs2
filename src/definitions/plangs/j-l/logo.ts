import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+logo")
    .merge({
      name: "Logo",
      websites: [
        { kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/Logo_(programming_language)" },
      ],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
        },
      ],
    })
    .addDialects(["pl+starlogo", "pl+netlogo"])
    .addImplementations(["pl+ucblogo"])
    .addInfluences(["pl+lisp"])
    .addPerson("person+wally-feurzeig", { role: "designer" })
    .addPerson("person+seymour-papert", { role: "designer" })
    .addPerson("person+cynthia-solomon", { role: "designer" })
    .addParadigms(["para+multi", "para+functional", "para+educational", "para+imperative", "para+reflective"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+netlogo")
    .merge({
      name: "NetLogo",
      websites: [{ kind: "wikipedia", title: "NetLogo", href: "https://en.wikipedia.org/wiki/NetLogo" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/NetLogo_%28logo%29.png/280px-NetLogo_%28logo%29.png",
        },
      ],
      releases: [{ name: "NetLogo", version: "6.4.0", date: "2023-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+scala", "pl+java"])
    .addInfluences(["pl+logo", "pl+starlogo", "pl+objectlogo", "pl+ucblogo"])
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+multi", "para+educational", "para+imperative", "para+computer", "para+simulation"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+cross-platform", "platf+jvm"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+objectlogo")
    .merge({
      name: "Logo",
      websites: [{ kind: "wikipedia", title: "Logo", href: "https://en.wikipedia.org/wiki/ObjectLOGO" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
        },
      ],
    })
    .addDialects(["pl+starlogo", "pl+netlogo"])
    .addImplementations(["pl+ucblogo"])
    .addInfluences(["pl+lisp"])
    .addPerson("person+wally-feurzeig", { role: "designer" })
    .addPerson("person+seymour-papert", { role: "designer" })
    .addPerson("person+cynthia-solomon", { role: "designer" })
    .addParadigms(["para+multi", "para+functional", "para+educational", "para+imperative", "para+reflective"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/

  g.buildPlang("pl+starlogo")
    .merge({
      name: "StarLogo",
      websites: [{ kind: "wikipedia", title: "StarLogo", href: "https://en.wikipedia.org/wiki/StarLogo" }],
      releases: [{ name: "StarLogo", version: "2.1", date: "2018-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+java", "pl+c"])
    .addInfluences(["pl+logo"])
    .addPerson("person+mitchel-resnick", { role: "designer" })
    .addPerson("person+media-lab", { role: "developer" })
    .addParadigms(["para+multi", "para+educational", "para+imperative", "para+agent", "para+simulation"])
    .addPlatforms(["platf+jvm", "platf+win", "platf+mac"])
    .addTypeSystems(["tsys+duck", "tsys+dynamic", "tsys+strong"]);

  /**/

  g.buildPlang("pl+ucblogo")
    .merge({
      name: "UCBLogo",
      websites: [{ kind: "wikipedia", title: "UCBLogo", href: "https://en.wikipedia.org/wiki/UCBLogo" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Ubclogo_spiral.png/121px-Ubclogo_spiral.png",
        },
      ],
      releases: [{ name: "UCBLogo", version: "6.2.1", date: "2020-01-01", kind: "stable" }],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+lisp"])
    .addPerson("person+brian-harvey", { role: "designer" })
    .addLicenses(["lic+gpl"])
    .addParadigms(["para+multi", "para+functional", "para+educational", "para+imperative", "para+reflection"])
    .addPlatforms(["platf+ia-32", "platf+x86-64", "platf+win", "platf+mac", "platf+linux"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
