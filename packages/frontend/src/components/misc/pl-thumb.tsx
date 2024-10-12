import type { JSX } from "preact/jsx-runtime";

import type { NPlang } from "@plangs/plangs";
import { cl } from "@plangs/server/elements";

import { NOWRAP_TEXT } from "../../styles";
import { tw } from "../../utils";

const PLACEHOLDER = "/images/placeholder.png";

export function PlThumb({ pl, class: cssClass }: { class?: string; pl: NPlang }): JSX.Element {
  const thumbUrl = pl.thumbUrl;
  return (
    <div
      data-node-key={pl.key}
      class={tw(
        cl("plThumb"),
        "group",
        "cursor-pointer",
        "max-w-[7rem] sm:max-w-[15rem]",
        "max-h-[7rem] sm:max-h-[15rem]",
        "bg-background/50",
        cssClass,
      )}>
      <div class={tw("p-1", "text-center", NOWRAP_TEXT, "text-foreground group-hover:text-primary")}>{pl.name}</div>

      <div
        class={tw(
          "border-1 border-primary",
          "p-4",
          "aspect-square ",
          "flex items-center justify-center",
          "bg-secondary",
          "shadow-background shadow-lg group-hover:shadow-md group-hover:shadow-primary",
        )}>
        <img alt={`${pl.name}'s logo`} class="max-h-full max-w-full object-contain" src={thumbUrl ?? PLACEHOLDER} />
      </div>
    </div>
  );
}
