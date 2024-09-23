import type { JSX } from "preact/jsx-runtime";

import type { NPlang } from "@plangs/plangs";

import { cssCl } from "@plangs/server/pages/dom";
import { script, tw } from "../../utils";

const PLACEHOLDER = "/favicon/android-chrome-512x512.png";

export function PlThumb({ pl }: { pl: NPlang }): JSX.Element {
  const thumbUrl = pl.thumbUrl;
  return (
    <div
      data-key={pl.key}
      class={tw(
        cssCl("plThumb"),
        "flex flex-col",
        "aspect-square overflow-hidden",
        "max-h-28 max-w-28",
        "rounded-sm",
        "-skew-y-5 rotate-5",
        "bg-white",
        "shadow-lg shadow-secondary",
        "hover:shadow-primary/75",
        "hover:outline-1 hover:outline-slate-800",
        "hover:ring-3 hover:ring-primary",
      )}>
      {script('console.log("ok!")')}
      <div
        class={tw(
          // ---
          "m-0.5 p-0.5",
          "rounded-sm",
          "overflow-clip text-ellipsis whitespace-nowrap",
          "text-center text-xs",
          "bg-secondary text-foreground",
        )}>
        {pl.name}
      </div>
      <div class={tw("flex-1", "relative")}>
        <div
          class={tw(
            // ---
            "absolute inset-1",
            thumbUrl ? "" : "opacity-10",
          )}
          style={`background: url('${thumbUrl || PLACEHOLDER}') no-repeat center/contain`}
        />
      </div>
    </div>
  );
}
