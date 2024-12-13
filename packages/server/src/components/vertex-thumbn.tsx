import type { JSX } from "preact/jsx-runtime";

import { HOVER, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsVertex } from "@plangs/plangs/graph/vertex_base";
import { cssClass } from "@plangs/server/elements";
import { dataset } from "@plangs/server/utils/html";

const PLACEHOLDER = "/images/placeholder.png";

export function VertexThumbn({ vertex, onlyImg, class: klass }: { class?: string; onlyImg?: boolean; vertex: PlangsVertex<any, any> }): JSX.Element {
  return (
    <div
      {...dataset({ "vertex-key": vertex.key, "vertex-name": vertex.vertexName, "vertex-ranking": vertex.ranking })}
      class={tw(
        cssClass("vertexThumbn"),
        "group",
        !onlyImg && "cursor-pointer",
        "max-w-[7rem] sm:max-w-[15rem]",
        "max-h-[7rem] sm:max-h-[15rem]",
        klass,
      )}>
      {!onlyImg && (
        <div class="truncate text-center">
          <a class="text-foreground group-hover:text-primary" href={vertex.href}>
            {vertex.name}
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
          src={onlyImg ? (vertex.thumbUrl ?? PLACEHOLDER) : PLACEHOLDER}
          alt={vertex.name}
          data-src={vertex.thumbUrl ?? ""}
          class={tw(cssClass("vertexThumbnImg"), "max-h-full max-w-full object-contain")}
        />
        {"ranking" in vertex && vertex.ranking && (
          <a
            href={`https://tjpalmer.github.io/languish/#names=${encodeURIComponent(vertex.name.toLowerCase())}`}
            title={`Languish Ranking: ${vertex.ranking}`}
            class={tw(
              "block",
              // ALlow hiding the ranking using a data attribute on the wrapper.
              "group-[[data-hide-ranking='1']]:hidden",
              "absolute right-0 bottom-0",
              "m-0.5 px-2 py-1 text-primary text-xs",
              "rounded opacity-50",
              HOVER,
              "hover:border-1 hover:border-primary hover:opacity-100",
            )}>
            {vertex.ranking}
          </a>
        )}
      </div>
    </div>
  );
}
