import { EXTERNAL } from "@plangs/frontend/auxiliar/icons";
import { HOVER, tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";

export function VertexLink({ vertex, external, title }: { vertex: TPlangsVertex; external?: boolean; title?: string }) {
  const label = title ?? vertex.name;
  const href = external && title && vertex.urlHome ? vertex.urlHome : vertex.href;
  return (
    <div class={tw("group", "inline-flex flex-row items-center gap-1 align-middle")}>
      <a href={href} title={label}>
        {label}
      </a>
      {external && vertex.urlHome && (
        <a href={vertex.urlHome} class={tw("inline-block", "p-2", "scale-66 rounded opacity-50", "hover:opacity-100", HOVER)}>
          {EXTERNAL}
        </a>
      )}
    </div>
  );
}
