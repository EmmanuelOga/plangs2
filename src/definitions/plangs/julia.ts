import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+julia",
    "Julia",
    {
      name: "Julia",
      websites: [
        { kind: "wikipedia", title: "Julia", href: "https://en.wikipedia.org/wiki/Julia_(programming_language)" },
        { kind: "homepage", title: "JuliaLang.org", href: "https://JuliaLang.org" },
      ],
      images: [
        {
          kind: "logo",
          url: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Julia_Programming_Language_Logo.svg",
        },
      ],
      references: {
        paradigm: [
          {
            href: "https://www.oreilly.com/library/view/beginning-julia-programming/9781484231715/A458482_1_En_2_Chapter.html",
            title: "2. Object-Oriented Programming - Beginning Julia Programming: For Engineers and Scientists [Book]",
          },
          {
            href: "https://medium.com/@acidflask/smoothing-data-with-julia-s-generated-functions-c80e240e05f3#.615wk3dle",
            title: "Smoothing data with Julia's @generated functions",
          },
        ],
        developer: [
          { href: "https://github.com/JuliaLang/julia/blob/master/LICENSE.md", title: "LICENSE.md" },
          { href: "https://github.com/JuliaLang/julia/graphs/contributors", title: "Contributors to JuliaLang/julia" },
        ],
        first_appeared: [
          { href: "https://julialang.org/blog/2012/02/why-we-created-julia", title: "Why We Created Julia" },
        ],
        stable_release: [
          { href: "https://julialang.org/downloads/", title: "Download Julia" },
          {
            href: "https://github.com/JuliaLang/julia/tree/release-1.6",
            title: "GitHub - JuliaLang/julia at release-1.6",
          },
          {
            href: "https://github.com/JuliaLang/julia/pull/45319",
            title: "release-1.6: Backports for 1.6.7 by KristofferC · Pull Request #45319 · JuliaLang/julia",
          },
        ],
        preview_release: [
          {
            href: "https://discourse.julialang.org/t/julia-v1-11-0-beta2-is-now-available/114938",
            title: "Julia v1.11.0-beta2 is now available",
          },
          { href: "https://github.com/JuliaLang/julia", title: "GitHub - JuliaLang/julia at release-1.11" },
          {
            href: "https://discourse.julialang.org/t/julia-1-10-4-testing-period/114958",
            title: "Julia 1.10.4 testing period",
          },
        ],
        typing_discipline: [
          {
            href: "https://erik-engheim.medium.com/dynamically-typed-languages-are-not-what-you-think-ac8d1392b803",
            title: "Dynamically Typed Languages Are Not What You Think",
          },
        ],
        implementation_language: [
          {
            href: "https://github.com/JuliaLang/julia/blob/master/doc/src/devdocs/build/build.md#required-build-tools-and-external-libraries",
            title: "Building Julia (Detailed)",
          },
        ],
        platform: [{ href: "https://juliagpu.org/cuda/", title: "NVIDIA CUDA ⋅ JuliaGPU" }],
        influenced_by: [
          {
            href: "https://increment.com/programming-languages/goldilocks-language-history-of-julia/",
            title: "Julia: The Goldilocks language",
          },
          { href: "https://julialang.org/blog/2012/02/why-we-created-julia", title: "Why We Created Julia" },
          { href: "https://juliacon.org/2016", title: "JuliaCon 2016" },
          { href: "https://docs.julialang.org/en/v1/", title: "Home · The Julia Language" },
          {
            href: "https://web.archive.org/web/20201220131729/http://fatiherikli.github.io/programming-language-network/#language:Julia",
            title: "Programming Language Network",
          },
          {
            href: "https://writings.stephenwolfram.com/2013/02/what-should-we-call-the-language-of-mathematica/",
            title: "What Should We Call the Language of Mathematica?—Stephen Wolfram Writings",
          },
        ],
      },
      releases: [
        { version: "unknown", date: "2012-01-01", kind: "first" },
        { version: "1.10.3", date: "2022-07-19", kind: "stable" },
        { version: "1.11.0", date: "2024-05-30", kind: "preview" },
      ],
      extensions: [".jl"],
    },
    {
      implementations: ["pl+c", "pl+c-plus-plus", "pl+llvm", "pl+scheme"],
      influenced: [
        "pl+c",
        "pl+common-lisp",
        "pl+dylan",
        "pl+lisp",
        "pl+matlab",
        "pl+python",
        "pl+r",
        "pl+ruby",
        "pl+scheme",
        "pl+wolfram-language",
      ],
      influences: [
        "pl+dylan",
        "pl+fortress",
        "pl+lisp",
        "pl+lua",
        "pl+matlab",
        "pl+perl",
        "pl+python",
        "pl+r",
        "pl+ruby",
        "pl+wolfram-language",
      ],
      licenses: ["lic+mit"],
      paradigms: [
        "para+array",
        "para+functional",
        "para+imperative",
        "para+meta",
        "para+multi",
        "para+objects",
        "para+reflective",
        "para+structured",
      ],
      people: [
        ["person+alan-edelman", "designer"],
        ["person+jeff-bezanson", "designer"],
        ["person+stefan-karpinski", "designer"],
        ["person+viral-b-shah", "designer"],
      ],
      platforms: [
        "platf+64-bit-computing",
        "platf+aarch64",
        "platf+arm",
        "platf+bsd",
        "platf+cuda",
        "platf+ia-32",
        "platf+linux",
        "platf+mac",
        "platf+oneapi",
        "platf+rocm",
        "platf+win",
        "platf+x86-64",
      ],
      typeSystems: [
        "tsys+dynamic",
        "tsys+inferred",
        "tsys+nominative",
        "tsys+optional",
        "tsys+parametric",
        "tsys+strong",
      ],
    },
  );

  /**/
}
