import type { JSX } from "preact/jsx-runtime";

import { tw } from "@plangs/frontend/auxiliar/styles";
import { VPlang } from "@plangs/plangs/graph";
import type { PlangsVertex } from "@plangs/plangs/graph/vertex_base";
import { cssClass } from "@plangs/server/elements";

const PLACEHOLDER = "/images/placeholder.png";

export function VertexThumbn({ vertex, class: klass }: { class?: string; vertex: PlangsVertex<any, any> }): JSX.Element {
  const thumbUrl = vertex.thumbUrl;
  return (
    <div
      data-vkey={vertex.key}
      {...(vertex instanceof VPlang && {
        "data-vertex-ranking": `${vertex.ranking ?? ""}`,
      })}
      class={tw(
        cssClass("vertexThumbn"),
        "group relative",
        "cursor-pointer",
        "max-w-[7rem] sm:max-w-[15rem]",
        "max-h-[7rem] sm:max-h-[15rem]",
        klass,
      )}>
      <div class={tw("truncate text-center", "text-foreground group-hover:text-primary")}>{vertex.name}</div>
      {vertex instanceof VPlang && vertex.ranking && (
        <div
          title={`Languish Ranking: ${vertex.ranking}`}
          class={tw(
            // ALlow hiding the ranking using a data attribute on the wrapper.
            "group-[[data-hide-ranking='1']]:hidden",
            "absolute right-0 bottom-0",
            "px-1 text-primary text-xs",
            "opacity-50",
          )}>
          <a href={`https://tjpalmer.github.io/languish/#names=${encodeURIComponent(vertex.name.toLowerCase())}`}>{vertex.ranking}</a>
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
        <img alt={`${vertex.name}'s logo`} class="max-h-full max-w-full object-contain" src={thumbUrl ?? PLACEHOLDER} />
      </div>
    </div>
  );
}
