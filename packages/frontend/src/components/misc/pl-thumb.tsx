import type { JSX } from "preact/jsx-runtime";

import type { NPlang } from "@plangs/plangs";
import { cl } from "@plangs/server/pages/dom";

import { tw } from "../../utils";

const PLACEHOLDER = "/favicon/android-chrome-512x512.png";

export function PlThumb({ pl }: { pl: NPlang }): JSX.Element {
  const thumbUrl = pl.thumbUrl;

  return (
    <div
      data-key={pl.key}
      class={tw(
        cl("plThumb"),
        "group",
        // ---
        "cursor-pointer",
        "aspect-square",
        "hover:outline-1 hover:outline-secondary",
        "shadow-lg shadow-secondary hover:shadow-primary/75",
      )}>
      <div class={tw("bg-white", "flex h-full w-full flex-col")}>
        <div
          class={tw(
            "m-0.5 px-1.5 py-1",
            "overflow-hidden text-ellipsis whitespace-nowrap",
            "text-center text-xs sm:text-lg",
            "bg-secondary group-hover:bg-primary",
            "text-foreground group-hover:text-background",
            "border-1 group-hover:border-secondary",
          )}>
          {pl.name}
        </div>
        <div class={tw("flex-1", thumbUrl ? "m-1 sm:m-2" : "m-2 opacity-20 grayscale sm:m-8")}>
          <div class={tw("h-full w-full bg-[]")} style={`background: url('${thumbUrl || PLACEHOLDER}') no-repeat center/contain`} />
        </div>
      </div>
    </div>
  );
}
