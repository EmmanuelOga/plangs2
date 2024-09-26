import type { JSX } from "preact/jsx-runtime";

import type { NPlang } from "@plangs/plangs";
import { cl } from "@plangs/server/pages/dom";

import { tw } from "../../utils";

const PLACEHOLDER = "/favicon/android-chrome-512x512.png";

export function PlThumb({ pl }: { pl: NPlang }): JSX.Element {
  const thumbUrl = pl.thumbUrl;

  return (
    <div data-key={pl.key} class={tw(cl("plThumb"), "aspect-square")}>
      <div
        class={tw(
          "bg-white",
          "flex h-full w-full flex-col",
          "outline-2.5 outline-secondary/75 hover:outline-primary",
          "shadow-md shadow-primary/50 hover:shadow-primary/75",
        )}>
        <div
          class={tw(
            "m-0.5 p-0.5",
            "overflow-hidden",
            "text-center text-xs",
            "rounded-sm",
            "text-ellipsis whitespace-nowrap",
            "bg-secondary text-foreground",
          )}>
          {pl.name}
        </div>
        <div class={tw("flex-1", thumbUrl ? "m-1" : "m-2 opacity-25 grayscale sm:m-5")}>
          <div class={tw("h-full w-full bg-[]")} style={`background: url('${thumbUrl || PLACEHOLDER}') no-repeat center/contain`} />
        </div>
      </div>
    </div>
  );
}
