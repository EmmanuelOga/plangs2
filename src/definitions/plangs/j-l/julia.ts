import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+julia")
    .merge({
      name: "Julia",
      websites: [
        { kind: "wikipedia", title: "Julia", href: "https://en.wikipedia.org/wiki/Julia_(programming_language)" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg",
        },
      ],
      releases: [
        { name: "Julia", version: "1.10.3", date: "2024-01-01", kind: "stable" },
        { name: "Julia", version: "1.11.0", date: "2024-01-01", kind: "preview" },
      ],
    })
    .addImplementations(["pl+c", "pl+cpp", "pl+scheme"])
    .addImplementation("pl+llvm", {
      refs: [
        {
          href: "https://github.com/JuliaLang/julia/blob/master/doc/src/devdocs/build/build.md#required-build-tools-and-external-libraries",
          title: "Building Julia (Detailed)",
        },
      ],
    })
    .addInfluences(["pl+common-lisp", "pl+c", "pl+scheme"])
    .addInfluence("pl+dylan", {
      refs: [
        {
          href: "https://increment.com/programming-languages/goldilocks-language-history-of-julia/",
          title: "Julia: The Goldilocks language",
        },
      ],
    })
    .addInfluence("pl+python", {
      refs: [
        {
          href: "https://web.archive.org/web/20200502144010/https://julialang.org/blog/2012/02/why-we-created-julia/",
          title: "Why We Created Julia",
        },
      ],
    })
    .addInfluence("pl+r", {
      refs: [
        {
          href: "https://web.archive.org/web/20180620172516/https://docs.julialang.org/en/stable/manual/introduction/#man-introduction-1",
          title: "Introduction",
        },
      ],
    })
    .addInfluence("pl+ruby", {
      refs: [
        {
          href: "https://web.archive.org/web/20180816025550/https://docs.julialang.org/en/stable/",
          title: "Julia 1.0 Documentation: Introduction",
        },
      ],
    })
    .addPerson("person+jeff-bezanson", { role: "designer" })
    .addPerson("person+alan-edelman", { role: "designer" })
    .addPerson("person+stefan-karpinski", { role: "designer" })
    .addPerson("person+viral-b-shah", {
      role: "designer",
      refs: [{ href: "https://github.com/JuliaLang/julia/blob/master/LICENSE.md", title: "LICENSE.md" }],
    })
    .addLicenses(["lic+mit"])
    .addParadigms([
      "para+functional",
      "para+array",
      "para+imperative",
      "para+structured",
      "para+reflective",
      "para+meta",
    ])
    .addParadigm("para+multi", {
      refs: [
        {
          href: "https://medium.com/@acidflask/smoothing-data-with-julia-s-generated-functions-c80e240e05f3#.615wk3dle",
          title: "Smoothing data with Julia's @generated functions",
        },
      ],
    })
    .addParadigm("para+objects", {
      refs: [
        {
          href: "https://www.oreilly.com/library/view/beginning-julia-programming/9781484231715/A458482_1_En_2_Chapter.html",
          title: "2. Object-Oriented Programming - Beginning Julia Programming: For Engineers and Scientists [Book]",
        },
      ],
    })
    .addPlatforms([
      "platf+x86-64",
      "platf+ia-32",
      "platf+mac",
      "platf+64-bit-computing",
      "platf+aarch64",
      "platf+bsd",
      "platf+arm",
      "platf+rocm",
      "platf+oneapi",
      "platf+linux",
      "platf+win",
    ])
    .addPlatform("platf+cuda", { refs: [{ href: "https://juliagpu.org/cuda/", title: "NVIDIA CUDA ⋅ JuliaGPU" }] })
    .addTypeSystems(["tsys+inferred", "tsys+optional", "tsys+nominative", "tsys+parametric"])
    .addTypeSystem("tsys+dynamic", {
      refs: [
        {
          href: "https://erik-engheim.medium.com/dynamically-typed-languages-are-not-what-you-think-ac8d1392b803",
          title: "Dynamically Typed Languages Are Not What You Think",
        },
      ],
    })
    .addTypeSystem("tsys+strong", {
      refs: [
        {
          href: "https://erik-engheim.medium.com/dynamically-typed-languages-are-not-what-you-think-ac8d1392b803",
          title: "Dynamically Typed Languages Are Not What You Think",
        },
      ],
    });

  /**/
}
