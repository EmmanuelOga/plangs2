import { EXTERNAL } from "@plangs/frontend/auxiliar/icons";
import { BORDER, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsVertex } from "@plangs/plangs/graph/vertex_base";

export function NodeDesc({ node, path }: { node: PlangsVertex<any, any>; path: string }) {
  return (
    <div key={node.key} class={tw("mb-8", tw(BORDER, "border-b-1"))}>
      <header class={tw("group relative", "flex flex-row gap-2 align-middle", "font-extrabold text-3xl")}>
        <div class={tw("-left-5 absolute", "font-bold", "hidden group-hover:block")}>#</div>
        <a id={`${node.plainKey}`} href={`${path}#${node.plainKey}`} title={node.name}>
          {node.name}
        </a>
        <a class="inline-block scale-70 hover:opacity-100 sm:opacity-50" href={node.urlHome}>
          {EXTERNAL}
        </a>
      </header>
      <p>{node.description}</p>
    </div>
  );
}
