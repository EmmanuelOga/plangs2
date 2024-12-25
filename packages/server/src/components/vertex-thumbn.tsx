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
        <div class="truncate pb-0.5 text-center">
          <a class="text-foreground underline group-hover:text-primary" href={detail.href}>
            {detail.name}
          </a>
        </div>
      )}
      <div
        class={tw(
          "relative",
          "aspect-square overflow-hidden",
          "flex items-center justify-center",
          "bg-thumbnails",
          "ring-1 ring-primary/50",
          "shadow-background shadow-lg group-hover:shadow-md group-hover:shadow-primary",
        )}>
        <img
          loading="lazy"
          alt={detail.name}
          data-src={detail.thumbUrl ?? ""}
          src={onlyImg ? (detail.thumbUrl ?? PLACEHOLDER) : PLACEHOLDER}
          class={tw(cssClass("vertexThumbnImg"), "max-h-full max-w-full p-1")}
          width={128}
          height={128}
        />
        {"ranking" in detail && detail.ranking && (
          <div
            title={`Languish Ranking: ${detail.ranking}`}
            class={tw("absolute", "-bottom-1 right-0", "p-1 text-primary text-xs", "rounded opacity-50", HOVER, "hover:opacity-100")}>
            {detail.ranking}
          </div>
        )}
      </div>
    </div>
  );
}
