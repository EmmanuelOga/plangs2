import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+hhvm",
    "HHVM",
    {
      name: "HHVM",
      websites: [
        { kind: "wikipedia", title: "HHVM", href: "https://en.wikipedia.org/wiki/HHVM" },
        { kind: "homepage", title: "hhvm.com", href: "https://hhvm.com" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/HHVM_logo.svg" }],
      references: {
        initial_release: [
          {
            href: "https://www.facebook.com/notes/facebook-engineering/the-hiphop-virtual-machine/10150415177928920",
            title: "The HipHop Virtual Machine",
          },
        ],
        stable_release: [
          { href: "https://github.com/facebook/hhvm/releases/tag/HHVM-3.15.0", title: "Release 3.15.0" },
        ],
        written_in: [
          {
            href: "https://github.com/facebook/hhvm/wiki/Building-and-installing-hhvm-on-CentOS-7.x",
            title: "Building and installing HHVM on CentOS 7.x",
          },
          {
            href: "https://github.com/facebook/hhvm/wiki/Building%20the%20Hack%20Typechecker",
            title: "Building the Hack typechecker",
          },
          {
            href: "https://www.phoronix.com/scan.php?page=news_item&px=Facebook-Rust-HHVM",
            title: "Facebook's HHVM Begins Seeing Rust Rewrite - Phoronix",
          },
        ],
        license: [{ href: "https://github.com/facebook/hhvm#license", title: "facebook/hhvm: License" }],
      },
      releases: [
        { version: "unknown", date: "2011-12-09", kind: "first" },
        { version: "3.15.0", date: "2016-01-01", kind: "stable" },
      ],
    },
    { licenses: ["lic+php", "lic+zend"], people: [["person+meta-platforms", "developer"]] },
  );

  /**/
}
