import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+graalvm", {
      name: "GraalVM",
      description:
        "GraalVM is a Java Development Kit (JDK) written in Java. The open-source distribution of GraalVM is based on OpenJDK, and the enterprise distribution is based on Oracle JDK. As well as just-in-time (JIT) compilation, GraalVM can compile a Java application ahead of time. This allows for faster initialization, greater runtime performance, and decreased resource consumption, but the resulting executable can only run on the platform it was compiled for.",
      websites: [
        { href: "https://www.graalvm.org/", title: "www.graalvm.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/GraalVM#Language_and_Runtime_Support", title: "GraalVM", kind: "wikipedia" },
      ],
      images: [{ kind: "logo", title: "GraalVM", url: "/images/plangs/g/graalvm/logo.png" }],
    })
    .addImplements(["pl+ruby"])
    .addLicenses(["license+gnu-gpl"])
    .addPlatforms(["plat+apple", "plat+java", "plat+linux", "plat+windows"]);
}
