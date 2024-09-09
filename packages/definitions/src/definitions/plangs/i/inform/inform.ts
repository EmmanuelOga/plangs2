import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+inform", {
      name: "Inform",
      description:
        "Inform is a programming language and design system for interactive fiction originally created in 1993 by Graham Nelson. Inform can generate programs designed for the Z-code or Glulx virtual machines. Versions 1 through 5 were released between 1993 and 1996. Around 1996, Nelson rewrote Inform from first principles to create version 6 (or Inform 6). Over the following decade, version 6 became reasonably stable and a popular language for writing interactive fiction. In 2006, Nelson released Inform 7 (briefly known as Natural Inform), a completely new language based on principles of natural language and a new set of tools based around a book-publishing metaphor.",
      websites: [
        { href: "https://ganelson.github.io/inform-website/", title: "https://ganelson.github.io/inform-website/", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Inform_(programming_language)", title: "Inform", kind: "wikipedia" },
      ],
      releases: [{ version: "10.1.1", date: "2022-01-01" }],
    })
    .addLicenses(["lic+artistic"])
    .addPlatforms(["platf+linux", "platf+windows"])
    .addTags(["tag+if"]);
}
