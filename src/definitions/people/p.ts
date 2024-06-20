import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+P-Nowosad", "P. Nowosad", []);

  lb.define("person+Patricia-Hill", "Patricia Hill", []);

  lb.define("person+Paul-Cockshott", "Paul Cockshott", [
    {
      title: "Paul Cockshott",
      href: "https://en.wikipedia.org/wiki/Paul_Cockshott",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Paul-Graham", "Paul Graham", [
    {
      title: "Paul Graham",
      href: "https://en.wikipedia.org/wiki/Paul_Graham_(programmer)",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Paul-Hudak", "Paul Hudak", [
    { title: "Paul Hudak", href: "https://en.wikipedia.org/wiki/Paul_Hudak", kind: "wikipedia" },
  ]);

  lb.define("person+Paul-King", "Paul King", []);

  lb.define("person+Paul-Laughton", "Paul Laughton", []);

  lb.define("person+Paul-Rovner", "Paul Rovner", []);

  lb.define("person+Paul-Tagliamonte", "Paul Tagliamonte", []);

  lb.define("person+Paul-Tenczar", "Paul Tenczar", []);

  lb.define("person+Paulo-Moura", "Paulo Moura", []);

  lb.define("person+PDC-A-SlashS", "PDC A/S", []);

  lb.define("person+Per-Bothner", "Per Bothner", []);

  lb.define("person+Peter-D-Schofield", "Peter D. Schofield", []);

  lb.define("person+Peter-D-Stephens", "Peter D. Stephens", []);

  lb.define("person+Peter-Deutsch", "Peter Deutsch", [
    {
      title: "Peter Deutsch",
      href: "https://en.wikipedia.org/wiki/L._Peter_Deutsch",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Peter-Landin", "Peter Landin", [
    {
      title: "Peter Landin",
      href: "https://en.wikipedia.org/wiki/Peter_Landin",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Peter-Robertson", "Peter Robertson", []);

  lb.define("person+Peter-von-der-Ahe", "Peter von der Ahé", []);

  lb.define("person+Peter-Weinberger", "Peter Weinberger", [
    {
      title: "Peter Weinberger",
      href: "https://en.wikipedia.org/wiki/Peter_J._Weinberger",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Peter-Welch", "Peter Welch", []);

  lb.define("person+Phil-Freeman", "Phil Freeman", []);

  lb.define("person+Phil-Moorby", "Phil Moorby", [
    { title: "Phil Moorby", href: "https://en.wikipedia.org/wiki/Phil_Moorby", kind: "wikipedia" },
  ]);

  lb.define("person+Philip-Wadler", "Philip Wadler", [
    {
      title: "Philip Wadler",
      href: "https://en.wikipedia.org/wiki/Philip_Wadler",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Philip-Woodward", "Philip Woodward", [
    {
      title: "Philip Woodward",
      href: "https://en.wikipedia.org/wiki/Philip_Woodward",
      kind: "wikipedia",
    },
  ]);

  lb.define("person+Philippe-Choquette", "Philippe Choquette", []);

  lb.define("person+Pierre-Yves-Strub", "Pierre-Yves Strub", []);

  lb.define("person+Prabhu-Goel", "Prabhu Goel", [
    { title: "Prabhu Goel", href: "https://en.wikipedia.org/wiki/Prabhu_Goel", kind: "wikipedia" },
  ]);
}
