import { EXTERNAL } from "@plangs/frontend/auxiliar/icons";
import { tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertexClass } from "@plangs/plangs/graph/generated";

export function VertexLink({
  vertex,
  nocolor,
  title,
  includeLocal,
}: { vertex: TPlangsVertexClass; title?: string; includeLocal: boolean; nocolor?: boolean }) {
  const url = includeLocal ? vertex.href : vertex.urlHome;
  const overrideProse = nocolor ? { style: "color: var(--color-foreground);" } : {};
  return (
    <div class={tw("group relative", "flex flex-row gap-2 align-middle")}>
      <div class={tw("-left-5 absolute", "font-bold", "hidden", includeLocal && "group-hover:block")}>#</div>

      <a id={`${vertex.plainKey}`} href={url} title={vertex.name} {...overrideProse}>
        {title ?? vertex.name}
      </a>

      <a class="inline-block scale-70 hover:opacity-100 sm:opacity-50" href={vertex.urlHome} {...overrideProse}>
        {EXTERNAL}
      </a>
    </div>
  );
}
