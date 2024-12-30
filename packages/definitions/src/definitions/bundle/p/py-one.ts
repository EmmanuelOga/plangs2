import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.bundle
    .set("bun+py-one", {
      description:
        "Manage Python dependencies with Pixi, lint and format code with Ruff, and use Pyright for type checking. Includes the Python extension for VSCode.",
    })
    .relTools.add("tool+pixi", "tool+pyright", "tool+ruff", "tool+vscode-python");
}
