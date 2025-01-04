import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.platform.set("plat+linux", {
    name: "Linux",
    description:
      "A family of open-source Unix-like operating systems, with various distributions such as Ubuntu, Debian, CentOS, and Red Hat Enterprise Linux.",
    extHomeURL: "https://en.wikipedia.org/wiki/Linux",
    keywords: [
      "centos",
      "debian",
      "gnu/linux",
      "linux",
      "openSUSE",
      "redhat",
      "ubuntu",
    ],
  });
}
