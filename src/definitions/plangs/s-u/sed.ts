import type { PlangsGraph } from "../../../schemas/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+sed")
    .merge({
      name: "sed",
      websites: [{ kind: "wikipedia", title: "sed", href: "https://en.wikipedia.org/wiki/Sed" }],
      images: [
        {
          kind: "screenshot",
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sed_stream_editor_cropped1.jpg/300px-Sed_stream_editor_cropped1.jpg",
        },
      ],
    })
    .addImplementations(["pl+c"])
    .addInfluences(["pl+ed"])
    .addPerson("person+lee-e-mcmahon", { role: "designer" })
    .addParadigms(["para+scripting"]);

  /**/
}
