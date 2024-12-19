import type { JSX } from "preact/jsx-runtime";

import { HOVER, tw } from "@plangs/frontend/auxiliar/styles";
import type { VertexDetail } from "@plangs/plangs/graph/vertex_base";
import { cssClass } from "@plangs/server/elements";
import { dataset } from "@plangs/server/utils/html";

const PLACEHOLDER = "/images/placeholder.png";

export function VertexThumbn({ detail, onlyImg, class: klass }: { class?: string; onlyImg?: boolean; detail: VertexDetail }): JSX.Element {
  return (
    <div
      {...dataset({ "vertex-key": detail.key, "vertex-name": detail.vertexName, "vertex-ranking": detail.ranking })}
      class={tw(cssClass("vertexThumbn"), "group", !onlyImg && "cursor-pointer", klass)}>
      {!onlyImg && (
        <div class="truncate text-center">
          <a class="text-foreground group-hover:text-primary" href={detail.href}>
            {detail.name}
          </a>
        </div>
      )}
      <div
        class={tw(
          "relative",
          "p-4",
          "aspect-square overflow-hidden",
          "flex items-center justify-center",
          "bg-thumbnails",
          "border-1 border-primary",
          "shadow-background shadow-lg group-hover:shadow-md group-hover:shadow-primary",
        )}>
        <img
          loading="lazy"
          src={onlyImg ? (detail.thumbUrl ?? PLACEHOLDER) : PLACEHOLDER}
          alt={detail.name}
          data-src={detail.thumbUrl ?? ""}
          class={tw(cssClass("vertexThumbnImg"), "max-h-full max-w-full object-contain")}
        />
        {"ranking" in detail && detail.ranking && (
          <div
            title={`Languish Ranking: ${detail.ranking}`}
            class={tw(
              "block",
              // ALlow hiding the ranking using a data attribute on the wrapper.
              "group-[[data-hide-ranking='1']]:hidden",
              "-bottom-1 absolute right-0",
              "p-1 text-primary text-xs",
              "rounded opacity-50",
              HOVER,
              "hover:border-1 hover:border-primary hover:opacity-100",
            )}>
            {detail.ranking}
          </div>
        )}
      </div>
    </div>
  );
}
