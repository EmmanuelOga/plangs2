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
      // Use a high ranking for those that don't have one, so they appear at the end when sorted.
      data-node-ranking={`${pl.ranking ?? 999_999}`}
      class={tw(cssClass("plThumb"), "group relative", "cursor-pointer", "max-w-[7rem] sm:max-w-[15rem]", "max-h-[7rem] sm:max-h-[15rem]", klass)}>
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
      {pl.ranking && (
        <div
          title={`Languish Ranking: ${pl.ranking}`}
          class={tw("absolute right-1 bottom-1", "rounded bg-background bg-opacity-50", "p-1 text-primary text-xs")}>
          <a href={`https://tjpalmer.github.io/languish/#names=${encodeURIComponent(pl.name.toLowerCase())}`}>#{pl.ranking}</a>
        </div>
      )}
    </div>
  );
}
