import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+aarch64", "AArch64", [
    { kind: "wikipedia", title: "Aarch64", href: "https://en.wikipedia.org/wiki/Aarch64" },
    { kind: "wikipedia", title: "AArch64", href: "https://en.wikipedia.org/wiki/AArch64" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+amazon_firetv", "Amazon Fire TV", [
    { kind: "wikipedia", title: "Amazon Fire TV", href: "https://en.wikipedia.org/wiki/Amazon_Fire_TV" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+amd", "AMD", [
    { kind: "wikipedia", title: "AMD", href: "https://en.wikipedia.org/wiki/Advanced_Micro_Devices" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+amd64", "AMD64", [
    { kind: "wikipedia", title: "AMD64", href: "https://en.wikipedia.org/wiki/AMD64" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+amd_am2900", "2901", [
    { kind: "wikipedia", title: "2901", href: "https://en.wikipedia.org/wiki/AMD_Am2900" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+amiga", "Amiga", [
    { kind: "wikipedia", title: "AmigaOS", href: "https://en.wikipedia.org/wiki/AmigaOS" },
    { kind: "wikipedia", title: "Amiga", href: "https://en.wikipedia.org/wiki/Amiga" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+android", "Android", [
    { kind: "wikipedia", title: "Android", href: "https://en.wikipedia.org/wiki/Android_(operating_system)" },
    { kind: "wikipedia", title: "Android TV", href: "https://en.wikipedia.org/wiki/Android_TV" },
    { kind: "wikipedia", title: "Android", href: "https://en.wikipedia.org/wiki/Google_Android" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+apple_ii", "Apple IIGS", [
    { kind: "wikipedia", title: "Apple II series", href: "https://en.wikipedia.org/wiki/Apple_II_series" },
    { kind: "wikipedia", title: "Apple II", href: "https://en.wikipedia.org/wiki/Apple_II" },
    { kind: "wikipedia", title: "Apple IIGS", href: "https://en.wikipedia.org/wiki/Apple_IIGS" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+apple_ios", "iOS", [
    { kind: "wikipedia", title: "iOS", href: "https://en.wikipedia.org/wiki/Apple_iOS" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+arcaos", "ArcaOS", [
    { kind: "wikipedia", title: "ArcaOS", href: "https://en.wikipedia.org/wiki/ArcaOS" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+arduino", "Arduino", [
    { kind: "wikipedia", title: "Arduino", href: "https://en.wikipedia.org/wiki/Arduino" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+arm", "ARM Cortex-M", [
    { kind: "wikipedia", title: "ARM", href: "https://en.wikipedia.org/wiki/ARM_architecture" },
    { kind: "wikipedia", title: "ARM", href: "https://en.wikipedia.org/wiki/ARM_architecture_family" },
    { kind: "wikipedia", title: "ARM64", href: "https://en.wikipedia.org/wiki/ARM64" },
    { kind: "wikipedia", title: "arm64", href: "https://en.wikipedia.org/wiki/Arm64" },
    { kind: "wikipedia", title: "64-bit Arm", href: "https://en.wikipedia.org/wiki/Armv8" },
    { kind: "wikipedia", title: "ARM32", href: "https://en.wikipedia.org/wiki/ARM32" },
    { kind: "wikipedia", title: "StrongARM", href: "https://en.wikipedia.org/wiki/StrongARM" },
    { kind: "wikipedia", title: "ARMv7", href: "https://en.wikipedia.org/wiki/ARMv7" },
    { kind: "wikipedia", title: "armhf", href: "https://en.wikipedia.org/wiki/ARM_architecture#Floating-point_(VFP)" },
    { kind: "wikipedia", title: "ARMv8", href: "https://en.wikipedia.org/wiki/ARMv8" },
    { kind: "wikipedia", title: "ARM Cortex-M", href: "https://en.wikipedia.org/wiki/ARM_Cortex-M" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+atari", "Atari TOS", [
    { kind: "wikipedia", title: "Atari 8-bit computers", href: "https://en.wikipedia.org/wiki/Atari_8-bit_computers" },
    { kind: "wikipedia", title: "Atari 8-bit", href: "https://en.wikipedia.org/wiki/Atari_8-bit" },
    { kind: "wikipedia", title: "Atari TOS", href: "https://en.wikipedia.org/wiki/Atari_TOS" },
    { kind: "wikipedia", title: "GEMDOS", href: "https://en.wikipedia.org/wiki/Atari_ST#Operating_system" },
  ]);

  //-------------------------------------------------------------------------------

  lb.define("platf+axiom", "Axiom computer algebra system", [
    {
      kind: "wikipedia",
      title: "Axiom computer algebra system",
      href: "https://en.wikipedia.org/wiki/Axiom_(computer_algebra_system)",
    },
  ]);
}
