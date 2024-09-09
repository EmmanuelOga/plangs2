import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+codemonkey", {
      name: "CodeMonkey",
      description:
        "CodeMonkey is an educational computer coding environment that allows beginners to learn computer programming concepts and languages. CodeMonkey is intended for students ages 6–14. Students learn text-based coding on languages like  Python, Blockly and CoffeeScript, as well as learning the fundamentals of computer science and math.\nThe software was first released in 2014, and was originally developed by Jonathan Schor, Ido Schor and Yishai Pinchover, supported by the Center for Educational Technology in Israel.",
      websites: [
        { href: "https://www.codemonkey.com/", title: "www.codemonkey.com", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/CodeMonkey_(software)", title: "CodeMonkey", kind: "wikipedia" },
      ],
    })
    .addPlatforms(["platf+cross"])
    .addWrittenIn(["pl+coffeescript", "pl+javascript", "pl+ruby"]);
}
