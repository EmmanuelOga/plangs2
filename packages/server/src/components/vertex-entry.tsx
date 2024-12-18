import { EXTERN } from "@plangs/frontend/auxiliar/icons";
import { BORDER, HOVER_ICON, tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";

export function VertexEntry({ vertex }: { vertex: TPlangsVertex }) {
  return (
    <div key={vertex.key} class={tw("mb-8", tw(BORDER, "border-b-1"), tw("hover:bg-hiliteb/10"))}>
      <header>
        <VertexLink vertex={vertex} external={true} />
      </header>
      <p>{vertex.description}</p>
    </div>
  );
}

function VertexLink({ vertex, external, title }: { vertex: TPlangsVertex; external?: boolean; title?: string }) {
  const label = title ?? vertex.name;
  const href = external && title && vertex.urlHome ? vertex.urlHome : vertex.href;
  return (
    <div class={tw("group", "inline-flex flex-row items-center gap-1 align-middle")}>
      <a class="text-xl" href={href} title={label}>
        {label}
      </a>
      {external && vertex.urlHome && (
        <a href={vertex.urlHome} class={tw("inline-block scale-66", "p-2", "rounded opacity-50", "hover:opacity-100", HOVER_ICON)}>
          {EXTERN}
        </a>
      )}
    </div>
  );
}
