import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+basic",
    "BASIC",
    {
      name: "BASIC",
      websites: [{ kind: "wikipedia", title: "BASIC", href: "https://en.wikipedia.org/wiki/BASIC" }],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/AtariBASIC.png/300px-AtariBASIC.png",
        },
      ],
      releases: [{ version: "unknown", date: "1964-05-01", kind: "first" }],
    },
    {
      dialects: ["pl+atari-basic", "pl+open-programming-language", "pl+vilnius-basic"],
      implementations: [
        "pl+applesoft-basic",
        "pl+atari-basic",
        "pl+bbc-basic",
        "pl+casio-basic",
        "pl+commodore-basic",
        "pl+dartmouth-basic",
        "pl+freebasic",
        "pl+liberty-basic",
        "pl+microsoft-basic",
        "pl+powerbasic",
        "pl+qb64",
        "pl+quickbasic",
        "pl+sinclair-basic",
        "pl+ti-basic",
        "pl+tiny-basic",
      ],
      influenced: [
        "pl+autoit",
        "pl+bs",
        "pl+comal",
        "pl+d",
        "pl+dibol",
        "pl+euphoria",
        "pl+ezhil",
        "pl+fortran-95",
        "pl+perl",
        "pl+ring",
        "pl+ruby",
        "pl+speedcoding",
        "pl+visual-basic",
      ],
      influences: [
        "pl+algol-60",
        "pl+comal",
        "pl+fortran",
        "pl+grass",
        "pl+joss",
        "pl+visual-basic",
        "pl+visual-basic-.net",
        "pl+xojo",
      ],
      paradigms: ["para+imperative", "para+non", "para+objects"],
      people: [
        ["person+john-g-kemeny", "designer"],
        ["person+thomas-e-kurtz", "designer"],
      ],
    },
  );

  /**/
}
