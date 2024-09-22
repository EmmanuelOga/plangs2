import type { JSX } from "preact/jsx-runtime";

import type { NPlang } from "@plangs/plangs";

import { tw } from "../../utils";

const PLACEHOLDER = "/favicon/android-chrome-512x512.png";

export function PlThumb({ pl }: { pl: NPlang }): JSX.Element {
  const thumbUrl = pl.thumbUrl;
  return (
    <div
      class={tw(
        "flex flex-col",
        "aspect-square overflow-hidden",
        "max-h-28 max-w-28",
        "-skew-y-3 rotate-3",
        "rounded-sm",
        "shadow-lg",
        "bg-white shadow-primary/40",
        "hover:outline-2 hover:ring-3",
        "hover:shadow-primary/75 hover:outline-slate-800 hover:ring-primary",
      )}>
      <div
        class={tw(
          "py-1.5",
          "overflow-clip text-ellipsis whitespace-nowrap",
          "text-center text-sm",
          "text-slate-800",
        )}>
        {pl.name}
      </div>
      <div
        class={tw(thumbUrl ? "" : "opacity-10", "max-h-[50%] w-[75%] flex-1 self-center")}
        style={`background: url('${thumbUrl || PLACEHOLDER}') no-repeat center/contain`}
      />
    </div>
  );
}
