import { EXTERNAL } from "@plangs/frontend/auxiliar/icons";
import { BORDER, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsVertex } from "@plangs/plangs/graph/vertex_base";

export function VertexHeader({ vertex, path }: { vertex: PlangsVertex<any, any>; path: string }) {
  return (
    <div key={vertex.key} class={tw("mb-8", tw(BORDER, "border-b-1"))}>
      <header class={tw("group relative", "flex flex-row gap-2 align-middle", "font-extrabold text-3xl")}>
        <div class={tw("-left-5 absolute", "font-bold", "hidden group-hover:block")}>#</div>
        <a id={`${vertex.plainKey}`} href={`${path}#${vertex.plainKey}`} title={vertex.name}>
          {vertex.name}
        </a>
        <a class="inline-block scale-70 hover:opacity-100 sm:opacity-50" href={vertex.urlHome}>
          {EXTERNAL}
        </a>
      </header>
      <p>{vertex.description}</p>
    </div>
  );
}
