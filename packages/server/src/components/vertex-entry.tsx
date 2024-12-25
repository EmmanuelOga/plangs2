import { EXTERN } from "@plangs/frontend/auxiliar/icons";
import { BORDER, HOVER_ICON, tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";

export function VertexEntry({ vertex }: { vertex: TPlangsVertex }) {
  return (
    <div
      vocab="https://schema.org/"
      typeof={vertex.schemaType}
      key={vertex.key}
      class={tw("mb-8", tw(BORDER, "border-b-1"), tw("hover:bg-hiliteb/10"))}>
      <meta property="identifier" content={vertex.key} />
      <header>
        <div class={tw("group", "inline-flex flex-row items-center gap-1 align-middle")}>
          <a class="text-xl" href={vertex.href} property="name">
            {vertex.name}
          </a>
          {vertex.urlHome && (
            <a href={vertex.urlHome} class={tw("inline-block scale-66", "p-2", "rounded opacity-50", "hover:opacity-100", HOVER_ICON)}>
              {EXTERN}
            </a>
          )}
        </div>
      </header>
      <p property="description">{vertex.description}</p>
    </div>
  );
}
