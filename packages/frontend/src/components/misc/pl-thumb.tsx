import type { JSX } from "preact/jsx-runtime";

import { tw } from "@plangs/frontend/auxiliar/styles";
import type { NPlang } from "@plangs/plangs";
import { cssClass } from "@plangs/server/elements";

const PLACEHOLDER = "/images/placeholder.png";

export function PlThumb({ pl, class: klass }: { class?: string; pl: NPlang }): JSX.Element {
  const thumbUrl = pl.thumbUrl;
  return (
    <div
      data-node-key={pl.key}
      class={tw(cssClass("plThumb"), "group", "cursor-pointer", "max-w-[7rem] sm:max-w-[15rem]", "max-h-[7rem] sm:max-h-[15rem]", klass)}>
      <div class={tw("truncate text-center", "text-foreground group-hover:text-primary")}>{pl.name}</div>
      <div
        class={tw(
          "p-4",
          "aspect-square overflow-hidden",
          "flex items-center justify-center",
          "bg-thumbnails",
          "border-1 border-primary",
          "shadow-background shadow-lg group-hover:shadow-md group-hover:shadow-primary",
        )}>
        <img alt={`${pl.name}'s logo`} class="max-h-full max-w-full object-contain" src={thumbUrl ?? PLACEHOLDER} />
      </div>
    </div>
  );
}
