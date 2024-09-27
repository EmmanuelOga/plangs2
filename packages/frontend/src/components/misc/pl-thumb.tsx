import type { JSX } from "preact/jsx-runtime";

import type { NPlang } from "@plangs/plangs";
import { cl } from "@plangs/server/elements";

import { tw } from "../../utils";

const PLACEHOLDER = "/favicon/android-chrome-512x512.png";

export function PlThumb({ pl, class: cssClass }: { class?: string; pl: NPlang }): JSX.Element {
  const thumbUrl = pl.thumbUrl;
  return (
    <div
      data-key={pl.key}
      class={tw(
        cl("plThumb"),
        "group",

        "flex flex-col",
        "aspect-square",
        "cursor-pointer",

        "max-w-[7rem] sm:max-w-[15rem]",
        "max-h-[7rem] sm:max-h-[15rem]",

        "bg-white/90",
        "border-1 border-foreground",
        "hover:outline-1 hover:outline-secondary",
        "shadow-lg shadow-secondary hover:shadow-primary/75",

        cssClass,
      )}>
      <div
        class={tw(
          "px-1.5 py-1",
          "text-center text-xs sm:text-lg",
          "overflow-hidden text-ellipsis whitespace-nowrap",

          "bg-secondary group-hover:bg-primary",
          "text-foreground/90 group-hover:text-background",
          "border-b-1 group-hover:border-secondary",
        )}>
        {pl.name}
      </div>
      <div
        class={tw("flex-1", thumbUrl ? "m-1 sm:m-2" : "m-3 sm:m-6")}
        style={`background: url('${thumbUrl ?? PLACEHOLDER}') no-repeat center/contain`}
      />
    </div>
  );
}
