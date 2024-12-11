import { useEffect, useRef } from "preact/hooks";

import { ret } from "@plangs/auxiliar/misc";
import { PROSE_BASIC, VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import type { RelFrom, RelTo } from "@plangs/graphgen/library";
import type { TPlangsVertexClass } from "@plangs/plangs/graph/generated";
import { GRID_PAGES, type PlangsPage } from "@plangs/server/components/layout";
import { VertexLink } from "@plangs/server/components/vertex-link";
import type { ComponentChildren } from "preact";

export type VertexInfoProps = {
  page: PlangsPage;
  open?: boolean;
  vertex?: TPlangsVertexClass;
};

/** Display Vertex. */
export function VertexInfo({ vertex, open, page }: VertexInfoProps) {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => h1Ref.current?.scrollIntoView({ behavior: "smooth", block: "end" }));
  const forGrid = GRID_PAGES.has(page);
  const rels = relations(vertex);
  return (
    <div class={tw(VSCROLL, forGrid && "p-4", PROSE_BASIC, "max-w-[unset]")}>
      {!vertex && (
        <>
          <h2 class={tw("mt-0!")}>Information</h2>
          <p>
            <strong>Click</strong> a thumbnail for more info. <strong>Double-click</strong> a thumbnail to go directly to the item's page.
          </p>
        </>
      )}
      {vertex && (
        <>
          <h2 ref={h1Ref} class={tw("mt-0!", forGrid && "inline sm:block")}>
            <a class="text-primary" href={vertex.href}>
              {vertex.name}
            </a>
          </h2>
          <span class={tw(forGrid ? "dash mx-2 inline-block sm:hidden" : "hidden")}>&#8212;</span>
          <div class={tw(forGrid && "hidden sm:block")}>
            {vertex.urlHome && (
              <Pill>
                <VertexLink vertex={vertex} includeLocal={false} title="Homepage" nocolor={true} />
              </Pill>
            )}
            {vertex.created.value && <Pill children={`Appeared ${vertex.created.year}`} />}
            {"releases" in vertex && ret(vertex.releases.last, rel => rel && <Pill children={`Released ${rel.date ?? rel.version}`} />)}
            {"isTranspiler" in vertex && vertex.isTranspiler && <Pill children="Transpiler" />}
            {"isPopular" in vertex && vertex.isPopular && <Pill children="Popular" />}
          </div>
          <p class={tw(forGrid && "inline sm:block")}>{forGrid ? vertex.shortDesc : vertex.description}</p>
        </>
      )}
      {rels.length > 0 && (
        <details class={tw(forGrid && "hidden sm:block", "pb-4")} open={open}>
          <summary class="cursor-pointer text-primary">Details</summary>
          <table>
            <tbody>
              {relations(vertex).map(([title, vertices]) => (
                <tr key={title}>
                  <th class="align-baseline">{title}</th>
                  <td>
                    {vertices.map(vertex => (
                      <Pill key={vertex.key}>
                        <a href={vertex.href}>{vertex.name}</a>
                      </Pill>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </details>
      )}
    </div>
  );
}

function Pill({ children }: { children: ComponentChildren }) {
  return (
    // shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-blue-600 inset-ring inset-ring-white/15
    <span
      style="font-size: 1.125rem; height: 2rem;"
      class={tw(
        "inline-flex items-center",
        "mr-2 mb-3 px-2",
        "border-2 border-secondary",
        "rounded-tl-2xl rounded-br-2xl",
        "bg-secondary/50 text-foreground",
        "overflow-ellipsis whitespace-nowrap",
      )}>
      {children}
    </span>
  );
}

function relations(vertex?: TPlangsVertexClass): [string, TPlangsVertexClass[]][] {
  const result: [string, TPlangsVertexClass[]][] = [];
  if (!vertex) return result;
  for (const rel of vertex.relations.values()) {
    const relValues = rel.values.filter(related => related.key !== vertex.key);
    if (relValues.length > 0) result.push([rel.desc, relValues]);
  }
  return result;
}

export const EVENTS = {} as const;
