import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+ms-power-fx",
    "Microsoft Power Fx",
    {
      name: "Microsoft Power Fx",
      websites: [
        { kind: "wikipedia", title: "Microsoft Power Fx", href: "https://en.wikipedia.org/wiki/Microsoft_Power_Fx" },
        {
          kind: "homepage",
          title: "docs.microsoft.com/en-us/power-platform/power-fx/overview",
          href: "https://docs.microsoft.com/en-us/power-platform/power-fx/overview",
        },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Power_Fx_logo.png/64px-Power_Fx_logo.png",
        },
      ],
      releases: [{ version: "unknown", date: "2021-01-01", kind: "first" }],
    },
    {
      influences: ["pl+excel-function", "pl+excel-macro", "pl+mathematica", "pl+miranda", "pl+pascal"],
      licenses: ["lic+mit"],
      paradigms: ["para+dec", "para+functional", "para+general", "para+imperative", "para+low", "para+strongly"],
      people: [
        ["person+darryl-rubin", "designer"],
        ["person+greg-lindhorst", "designer"],
        ["person+mike-stall", "designer"],
        ["person+robin-abraham", "designer"],
        ["person+shon-katzenberger", "designer"],
        ["person+vijay-mital", "designer"],
      ],
      typeSystems: ["tsys+strong"],
    },
  );
}
