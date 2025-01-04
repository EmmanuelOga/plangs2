import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.tool
    .set("tool+vscode-python", {
      name: "Python for VSCode",
      description:
        "Python language support with extension access points for IntelliSense (Pylance), Debugging (Python Debugger), linting, formatting, refactoring, unit tests, and more.",
      extHomeURL:
        "https://marketplace.visualstudio.com/items?itemName=ms-python.python",
      keywords: [
        "debugging",
        "formatting",
        "intellisense",
        "linting",
        "refactoring",
      ],
    })
    .relPlangs.add("pl+python")
    .relWrittenWith.add("pl+typescript");
}
