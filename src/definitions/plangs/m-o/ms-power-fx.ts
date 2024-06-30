import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+ms-power-fx")
    .merge({
      name: "Microsoft Power Fx",
      websites: [
        { kind: "wikipedia", title: "Microsoft Power Fx", href: "https://en.wikipedia.org/wiki/Microsoft_Power_Fx" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Power_Fx_logo.png/64px-Power_Fx_logo.png",
        },
      ],
    })
    .addInfluences(["pl+excel", "pl+pascal", "pl+mathematica", "pl+miranda"])
    .addLicenses(["lic+mit"])
    .addParadigms(["para+low", "para+general", "para+imperative", "para+strongly", "para+dec", "para+functional"])
    .addTypeSystems(["tsys+strong"]);

  /**/
}
