import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+rust")
    .merge({
      name: "Rust",
      websites: [
        { kind: "wikipedia", title: "Rust", href: "https://en.wikipedia.org/wiki/Rust_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
        },
      ],
      releases: [{ name: "Rust", version: "1.78.0", date: "2024-01-01", kind: "stable" }],
      extensions: [".rlib", ".rs"],
    })
    .addDialects(["pl+project-verona"])
    .addInfluences(["pl+alef", "pl+c", "pl+cyclone", "pl+dis-virtual-machine", "pl+limbo", "pl+ml"])
    .addInfluence("pl+cpp", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20190126051127/https://doc.rust-lang.org/reference/influences.html",
          title: "Influences - The Rust Reference",
        },
      ],
    })
    .addInfluence("pl+cilk-plus", {
      refs: [
        {
          href: "https://github.com/rayon-rs/rayon/blob/master/FAQ.md#how-does-rayon-balance-work-between-threads",
          title: "Rayon FAQ",
        },
      ],
    })
    .addInfluence("pl+cilk", {
      refs: [
        {
          href: "https://github.com/rayon-rs/rayon/blob/master/FAQ.md#how-does-rayon-balance-work-between-threads",
          title: "Rayon FAQ",
        },
      ],
    })
    .addInfluence("pl+elm", {
      refs: [{ href: "https://blog.rust-lang.org/2016/08/10/Shape-of-errors-to-come.html", title: "Uniqueness Types" }],
    })
    .addInfluence("pl+erlang", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+modula", {
      refs: [
        {
          href: "https://www.reddit.com/r/rust/comments/cycjou/i_just_learned_about_modula3_a_language_that_had/",
          title:
            "R/Rust - I just learned about Modula-3, a language that had a lot of similar goals to Rust, and there was even an experimental OS that relied on the safety provided by the language",
        },
      ],
    })
    .addInfluence("pl+newsqueak", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+ocaml", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+poly-slashml", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+racket", {
      refs: [{ href: "https://mail.mozilla.org/pipermail/rust-dev/2013-May/003947.html", title: "Planet2 questions" }],
    })
    .addInfluence("pl+ruby", {
      refs: [
        {
          href: "https://web.archive.org/web/20190126051127/https://doc.rust-lang.org/reference/influences.html",
          title: "Influences - The Rust Reference",
        },
      ],
    })
    .addInfluence("pl+scheme", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+sml", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addInfluence("pl+swift", {
      refs: [{ href: "https://doc.rust-lang.org/reference/influences.html", title: "Influences - The Rust Reference" }],
    })
    .addLicenses(["lic+mit", "lic+apache"])
    .addPlatforms(["platf+cross-platform"])
    .addTypeSystems(["tsys+affine"]);

  /**/
}
