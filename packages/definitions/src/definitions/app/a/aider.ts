import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.app
    .set("app+aider", {
      name: "Aider",
      description:
        "Aider lets you pair program with LLMs, to edit code in your local git repository. Start a new project or work with an existing git repo. Aider works best with GPT-4o & Claude 3.5 Sonnet and can connect to almost any LLM.",
      shortDesc: "Pair program with LLMs.",
      extGithubPath: "Aider-AI/aider",
      extHomeURL: "https://aider.chat/",
      keywords: ["git", "llm", "pair programming"],
    })
    .relPlatforms.add("plat+cross", "plat+linux", "plat+osx", "plat+windows")
    .relWrittenWith.add("pl+python");
}
