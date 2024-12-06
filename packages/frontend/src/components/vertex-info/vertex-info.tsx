import { useEffect, useRef } from "preact/hooks";

import { ret } from "@plangs/auxiliar/misc";
import { BORDER, PROSE_BASIC, tw } from "@plangs/frontend/auxiliar/styles";
import { VPlang } from "@plangs/plangs/graph";
import type { TPlangsVertexClass } from "@plangs/plangs/graph/generated";
import { GRID_TABS, type TAB } from "@plangs/server/components/layout";
import { VertexLink } from "@plangs/server/components/vertex-link";
import type { ComponentChildren } from "preact";

export type VertexInfoProps = {
  tab: TAB;
  open?: boolean;
  vertex?: TPlangsVertexClass;
};

/** Display Vertex. */
export function VertexInfo({ vertex, open, tab }: VertexInfoProps) {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => h1Ref.current?.scrollIntoView({ behavior: "smooth", block: "end" }));
  const forGrid = GRID_TABS.has(tab);
  return (
    <div
      class={tw(
        "w-full overflow-y-scroll",
        "px-2 pt-2 sm:px-4",
        !forGrid && "-mx-4", // Compensate for padding so it aligns with the rest of the content.
        PROSE_BASIC,
        "max-w-[unset]",
        forGrid && "bg-linear-to-b to-secondary/50",
        tw(BORDER, forGrid && "border-b-1"),
      )}>
      {!vertex && (
        <p>
          <strong>Click</strong> a thumbnail for more info. <strong>Double-click</strong> a thumbnail to go directly to the item's page.
        </p>
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
          <p class={tw(forGrid && "inline sm:block")}>{vertex.description}</p>
        </>
      )}
      {vertex instanceof VPlang && (
        <details class={tw(forGrid && "hidden sm:block", "pb-4")} open={open}>
          <summary class="cursor-pointer text-primary">Details</summary>
          <div class={tw(!forGrid && "bg-linear-to-b to-secondary/25 pb-4")}>
            {relations(vertex).map(([title, vertices]) => (
              <div key={title}>
                <h3 class="mt-4 text-xl">{title}</h3>
                {vertices.map(vertex => (
                  <Pill key={vertex.key}>
                    <a href={vertex.href}>{vertex.name}</a>
                  </Pill>
                ))}
              </div>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

function Pill({ children }: { children: ComponentChildren }) {
  return (
    <span
      style="font-size: 1rem;"
      class={tw("inline-block", "rounded-tl-2xl rounded-br-2xl", "mr-2 mb-3 px-2", "border-2 border-secondary", "bg-secondary/50 text-foreground")}>
      {children}
    </span>
  );
}

function relations(pl: VPlang) {
  const all = [
    ["Type Systems", pl.relTypeSystems.values],
    ["Platforms", pl.relPlatforms.values],

    ["Influenced By", pl.relInfluencedBy.values],
    ["Influenced", pl.relInfluenced.values],
    ["Dialect Of", pl.relDialectOf.values],
    ["Implements", pl.relImplements.values],
    ["Compiles To", pl.relCompilesTo.values],

    ["Licenses", pl.relLicenses.values],

    ["Tags", pl.relTags.values],
    // ["Extensions", pl.extensions.map(name => ({ key: name, name, kind: "ext" })).existing],
  ] as const;

  return all.filter(([_, vertices]) => vertices.length > 0);
}

export const EVENTS = {} as const;
