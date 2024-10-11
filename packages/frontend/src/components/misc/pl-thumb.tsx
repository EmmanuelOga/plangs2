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

        "flex flex-col-reverse",
        "aspect-square",
        "cursor-pointer",

        "max-w-[7rem] sm:max-w-[15rem]",
        "max-h-[7rem] sm:max-h-[15rem]",

        "bg-background/75",
        "border-4 border-secondary hover:border-primary",
        "shadow-background shadow-lg hover:shadow-md hover:shadow-primary",

        cssClass,
      )}>
      <div
        class={tw(
          "px-1.5 py-1",
          "text-center text-xs sm:text-lg",
          NOWRAP_TEXT,

          "bg-secondary group-hover:bg-primary",
          "text-foreground/90 group-hover:text-background",
        )}>
        {pl.name}
      </div>
      <div
        class={tw("flex-1", thumbUrl ? "m-1 sm:m-4" : "m-3 sm:m-6")}
        style={`background: url('${thumbUrl ?? PLACEHOLDER}') center/contain no-repeat;`}
      />
    </div>
  );
}
