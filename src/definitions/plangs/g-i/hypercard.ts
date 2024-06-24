import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+hypercard",
    "HyperCard",
    {
      name: "HyperCard",
      websites: [{ kind: "wikipedia", title: "HyperCard", href: "https://en.wikipedia.org/wiki/HyperCard" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/e/ee/HyperCard_2-icon.png" }],
      references: {
        initial_release: [
          { href: "http://macgui.com/usenet/?group=14&id=4987", title: "Hypercard – How About New Mac Owners" },
          { href: "http://32by32.com/macworld-expo-1987-boston/", title: "Macworld Expo 1987 Boston" },
        ],
      },
      releases: [{ version: "unknown", date: "1987-01-01", kind: "first" }],
    },
    { licenses: ["lic+proprietary"], platforms: ["platf+mac"] },
  );

  /**/
}
