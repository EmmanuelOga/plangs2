import type { JSX } from "preact/jsx-runtime";

import { tw } from "@plangs/frontend/auxiliar/styles";
import { type AnyNode, VPlang } from "@plangs/plangs";
import { cssClass } from "@plangs/server/elements";

const PLACEHOLDER = "/images/placeholder.png";

export function NodeThumbn({ node, class: klass }: { class?: string; node: AnyNode }): JSX.Element {
  const thumbUrl = node.thumbUrl;
  return (
    <div
      data-node-key={node.key}
      {...(node instanceof VPlang && {
        "data-node-ranking": `${node.ranking ?? ""}`,
      })}
      class={tw(cssClass("nodeThumbn"), "group relative", "cursor-pointer", "max-w-[7rem] sm:max-w-[15rem]", "max-h-[7rem] sm:max-h-[15rem]", klass)}>
      <div class={tw("truncate text-center", "text-foreground group-hover:text-primary")}>{node.name}</div>
      {node instanceof VPlang && node.ranking && (
        <div
          title={`Languish Ranking: ${node.ranking}`}
          class={tw(
            // ALlow hiding the ranking using a data attribute on the wrapper.
            "group-[[data-hide-ranking='1']]:hidden",
            "absolute right-0 bottom-0",
            "px-1 text-primary text-xs",
            "opacity-50",
          )}>
          <a href={`https://tjpalmer.github.io/languish/#names=${encodeURIComponent(node.name.toLowerCase())}`}>{node.ranking}</a>
        </div>
      )}
      <div
        class={tw(
          "p-4",
          "aspect-square overflow-hidden",
          "flex items-center justify-center",
          "bg-thumbnails",
          "border-1 border-primary",
          "shadow-background shadow-lg group-hover:shadow-md group-hover:shadow-primary",
        )}>
        <img alt={`${node.name}'s logo`} class="max-h-full max-w-full object-contain" src={thumbUrl ?? PLACEHOLDER} />
      </div>
    </div>
  );
}
