import { useEffect, useRef } from "preact/hooks";

import { ret } from "@plangs/auxiliar/misc";
import { PROSE_BASIC, VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";
import { GRID_PAGES, type PlangsPage } from "@plangs/server/components/layout";
import { VertexLink } from "@plangs/server/components/vertex-link";
import { VertexThumbn } from "@plangs/server/components/vertex-thumbn";
import type { ComponentChildren } from "preact";

export type VertexInfoProps = {
  page: PlangsPage;
  open?: boolean;
  vertex?: TPlangsVertex;
};

/** Display Vertex. */
export function VertexInfo({ vertex, open, page }: VertexInfoProps) {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => h1Ref.current?.scrollIntoView({ behavior: "smooth", block: "end" }));
  const forGrid = GRID_PAGES.has(page);
  const rels = relations(vertex);
  return (
    <div class={tw(VSCROLL, forGrid && "p-4", !forGrid && "mb-16", PROSE_BASIC, "max-w-[unset]")}>
      {!vertex && (
        <div>
          <h2 class={tw("mt-0!")}>Information</h2>
          <p>
            <strong class="text-primary">Click</strong> a thumbnail for more info. <strong class="text-primary">Double-click</strong> a thumbnail to
            go directly to the item's page.
          </p>
        </div>
      )}
      {vertex && (
        <div>
          {vertex && !forGrid && (
            <div class="float-right pl-4 text-center">
              <VertexThumbn vertex={vertex} onlyImg={true} class="h-[6.5rem] w-[6.5rem]" />
              {vertex.urlHome && <VertexLink vertex={vertex} external={true} title="Home" />}
            </div>
          )}

          <h2 ref={h1Ref} class={tw("mt-0!", forGrid && "inline sm:block")}>
            <a class="text-primary" href={vertex.href}>
              {vertex.name}
            </a>
            {forGrid && vertex.urlHome && <VertexLink vertex={vertex} external={true} title="" />}
          </h2>
          <span class={tw(forGrid ? "dash mx-2 inline-block sm:hidden" : "hidden")}>&#8212;</span>
          <p class={tw(forGrid && "inline sm:block", "hyphens-auto")}>{forGrid ? vertex.shortDesc : vertex.description}</p>
        </div>
      )}
      {vertex && rels.length > 0 && (
        <details
          class={tw(forGrid && "hidden sm:block", "overflow-hidden", !forGrid && tw("p-4", tw("border-foreground/25 border-dotted", "border-1")))}
          open={open}>
          <summary class="cursor-pointer text-primary">Details</summary>
          <div class={tw(forGrid ? "flex flex-col" : "grid grid-cols-[auto_1fr]", "gap-4 pt-4")}>
            <DetailCell title="General">
              {vertex.created.value && <Pill children={`Appeared ${vertex.created.year}`} />}
              {"releases" in vertex && ret(vertex.releases.last, rel => rel && <Pill children={`Released ${rel.date ?? rel.version}`} />)}
              {"isTranspiler" in vertex && vertex.isTranspiler && <Pill children="Transpiler" />}
              {"isPopular" in vertex && vertex.isPopular && <Pill children="Popular" />}
            </DetailCell>
            {relations(vertex).map(([title, vertices]) => (
              <DetailCell key={title} title={title}>
                {vertices.map(vertex => (
                  <Pill key={vertex.key}>
                    <a href={vertex.href}>{vertex.name}</a>
                  </Pill>
                ))}
              </DetailCell>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

function DetailCell({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <div class={tw("col-span-2 grid grid-cols-subgrid", "pt-2", tw("border-foreground/25 border-dotted", "border-t-1"))} key={title}>
      <header class="p-2 text-foreground/75">{title}</header>
      <div class="p-2">{children}</div>
    </div>
  );
}

function Pill({ children }: { children: ComponentChildren }) {
  return (
    // shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-blue-600 inset-ring inset-ring-white/15
    <div
      style="font-size: 1.125rem; height: 2rem;"
      class={tw(
        "inline-flex items-center",
        "mr-2 mb-3 max-w-full px-2",
        "border-2 border-secondary",
        "rounded-tl-2xl rounded-br-2xl",
        "bg-secondary/50 text-foreground",
        "overflow-ellipsis whitespace-nowrap",
      )}>
      {children}
    </div>
  );
}

function relations(vertex?: TPlangsVertex): [string, TPlangsVertex[]][] {
  const result: [string, TPlangsVertex[]][] = [];
  if (!vertex) return result;
  for (const rel of vertex.relations.values()) {
    const relValues = rel.values.filter(related => related.key !== vertex.key);
    if (relValues.length > 0) result.push([rel.desc, relValues]);
  }
  return result;
}

export const EVENTS = {} as const;
