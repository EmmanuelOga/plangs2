import { EXTERNAL } from "@plangs/frontend/auxiliar/icons";
import { HOVER_SVG, tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";

export function VertexLink({
  vertex,
  nocolor,
  title,
  includeLocal,
}: { vertex: TPlangsVertex; title?: string; includeLocal: boolean; nocolor?: boolean }) {
  const url = includeLocal ? vertex.href : vertex.urlHome;
  const overrideProse = nocolor ? { style: "color: var(--color-foreground);" } : {};
  return (
    <div class={tw("group relative", "inline-flex flex-row items-center align-middle")}>
      <div class={tw("-left-5 absolute", "font-bold", "hidden", includeLocal && "group-hover:block")}>#</div>
      <a id={`${vertex.plainKey}`} href={url} title={vertex.name} {...overrideProse}>
        {title ?? vertex.name}
      </a>
      <a class={tw("inline-block scale-50 opacity-50 hover:opacity-100", HOVER_SVG)} href={vertex.urlHome} {...overrideProse}>
        {EXTERNAL}
      </a>
    </div>
  );
}
