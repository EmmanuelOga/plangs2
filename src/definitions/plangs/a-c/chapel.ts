import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+chapel")
    .merge({
      name: "Chapel",
      websites: [
        { kind: "wikipedia", title: "Chapel", href: "https://en.wikipedia.org/wiki/Chapel_(programming_language)" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/en/c/c0/Cray_Chapel_Logo.png" }],
      releases: [{ name: "Chapel", version: "2.0.0", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+c", "pl+cray-mta"])
    .addInfluence("pl+ada", {
      refs: [
        {
          href: "https://ghostarchive.org/archive/20221009/http://chapel.cray.com/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgements)",
        },
      ],
    })
    .addInfluence("pl+cpp", {
      refs: [
        {
          href: "https://web.archive.org/web/20180624150422/https://chapel-lang.org/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgements)",
        },
      ],
    })
    .addInfluence("pl+c-sharp", {
      refs: [
        {
          href: "https://web.archive.org/web/20160205114946/http://chapel.cray.com/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgments)",
        },
        { href: "http://chapel-lang.org/spec/spec-0.98.pdf", title: "Chapel spec (Acknowledgments)" },
      ],
    })
    .addInfluence("pl+fortran", {
      refs: [
        {
          href: "https://web.archive.org/web/20160205114946/http://chapel.cray.com/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgements)",
        },
      ],
    })
    .addInfluence("pl+java", {
      refs: [
        {
          href: "https://web.archive.org/web/20160205114946/http://chapel.cray.com/spec/spec-0.98.pdf",
          title: "Chapel spec (Acknowledgements)",
        },
      ],
    })
    .addInfluence("pl+zpl", {
      refs: [{ href: "http://chapel.cray.com/spec/spec-0.98.pdf", title: "Chapel spec (Acknowledgements)" }],
    })
    .addInfluence("pl+cray-xmt", {
      refs: [{ href: "http://chapel-lang.org/papers/BriefOverviewChapel.pdf", title: "A Brief Overview of Chapel" }],
    })
    .addLicenses(["lic+apache"])
    .addParadigms(["para+objects", "para+partitioned", "para+parallel"])
    .addPlatforms(["platf+aws", "platf+mac", "platf+linux", "platf+posix", "platf+win", "platf+cygwin", "platf+bsd"])
    .addTypeSystems(["tsys+static", "tsys+inferred"]);

  /**/
}
