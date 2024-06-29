import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+win",
    "Windows Forms (WinForms)",
    {
      name: "Windows Forms (WinForms)",
      websites: [
        { kind: "wikipedia", title: "Windows", href: "https://en.wikipedia.org/wiki/Microsoft_Windows" },
        {
          kind: "wikipedia",
          title: "Universal Windows PlatformWindows Bridge for iOS (WinObjC)",
          href: "https://en.wikipedia.org/wiki/Universal_Windows_Platform",
        },
        {
          kind: "homepage",
          title: "developer.microsoft.com/en-us/windows/bridges/ios/",
          href: "https://developer.microsoft.com/en-us/windows/bridges/ios/",
        },
        { kind: "wikipedia", title: "Windows Forms", href: "https://en.wikipedia.org/wiki/Windows_Forms" },
        {
          kind: "homepage",
          title: "learn.microsoft.com/en-us/dotnet/desktop/winforms/",
          href: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/",
        },
      ],
      releases: [
        { version: "unknown", date: "2015-08-06", kind: "first" },
        { version: "unknown", date: "2002-02-13", kind: "first" },
        { version: "unknown", kind: "stable" },
        { version: "8.0.0", date: "2023-11-14", kind: "stable" },
      ],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/3/37/WinForms_Logo.png" }],
    },
    {
      influences: ["pl+basic"],
      licenses: ["lic+mit"],
      platforms: ["platf+ia-32", "platf+x86-64", "platf+arm", "platf+.net", "platf+mono"],
    },
  );
}
