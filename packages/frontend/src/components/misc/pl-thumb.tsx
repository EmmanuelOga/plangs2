import type { JSX } from "preact/jsx-runtime";

import type { NPlang } from "@plangs/plangs";

import { cssCl } from "@plangs/server/pages/dom";
import { tw } from "../../utils";

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
        "-skew-y-5 rotate-5",
        "rounded-sm",
        "shadow-lg",
        "bg-white shadow-primary/40",
        "hover:outline-2 hover:ring-3",
        "hover:shadow-primary/75 hover:outline-slate-800 hover:ring-primary",
      )}>
      <div
        class={tw(
          // ---
          "m-1 p-0.5",
          "overflow-clip text-ellipsis whitespace-nowrap",
          "text-center text-xs",
          "bg-primary text-secondary",
        )}>
        {pl.name}
      </div>
      <div
        class={tw(
          // ---
          "flex-1 self-center",
          "max-h-[50%] w-[75%]",
          thumbUrl ? "" : "opacity-10",
        )}
        style={`background: url('${thumbUrl || PLACEHOLDER}') no-repeat center/contain`}
      />
    </div>
  );
}
