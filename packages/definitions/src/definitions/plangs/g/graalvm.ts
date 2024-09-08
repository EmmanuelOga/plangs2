import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+graalvm", {
      images: [{ title: "GraalVM", kind: "logo", url: "/images/plangs/g/graalvm/main.png" }],
      name: "GraalVM",
      description:
        "GraalVM is a Java Development Kit (JDK) written in Java. The open-source distribution of GraalVM is based on OpenJDK, and the enterprise distribution is based on Oracle JDK. As well as just-in-time (JIT) compilation, GraalVM can compile a Java application ahead of time. This allows for faster initialization, greater runtime performance, and decreased resource consumption, but the resulting executable can only run on the platform it was compiled for.",
      websites: [
        { href: "https://www.graalvm.org/", title: "www.graalvm.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/GraalVM#Language_and_Runtime_Support", title: "GraalVM", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addImplements(["pl+ruby"])
    .addLicenses(["lic+gnu-gpl"])
    .addPlatforms(["platf+apple", "platf+java", "platf+linux", "platf+windows"]);
}
