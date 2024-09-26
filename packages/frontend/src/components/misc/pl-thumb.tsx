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

        "flex h-full w-full flex-col",
        "cursor-pointer",
        "aspect-square",

        "bg-white",
        "hover:outline-1 hover:outline-secondary",
        "shadow-lg shadow-secondary hover:shadow-primary/75",
      )}>
      <div
        class={tw(
          "m-0.5 px-1.5 py-1",
          "text-center text-xs sm:text-lg",
          "overflow-hidden text-ellipsis whitespace-nowrap",
          "bg-secondary group-hover:bg-primary",
          "text-foreground group-hover:text-background",
          "border-1 group-hover:border-secondary",
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
