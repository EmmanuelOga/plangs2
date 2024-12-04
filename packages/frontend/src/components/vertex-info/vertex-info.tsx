import { useEffect, useRef } from "preact/hooks";

import { ret } from "@plangs/auxiliar/misc";
import { BORDER, tw } from "@plangs/frontend/auxiliar/styles";
import { VPlang } from "@plangs/plangs/graph";
import type { TPlangsVertexClass } from "@plangs/plangs/graph/generated";
import { GRID_TABS, type TAB } from "@plangs/server/components/layout";
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
        "px-2 pt-2 sm:p-4",
        !forGrid && "-mx-4", // Compensate for padding so it aligns with the rest of the content.
        "prose prose-green dark:prose-invert",
        "max-w-[unset]",
        forGrid && "bg-linear-to-b to-secondary/50",
        tw(BORDER, forGrid && "border-b-1"),
      )}>
      {!vertex && (
        <>
          <p>Click a thumbnail for more info.</p>
          <p>Double-click a thumbnail to go directly to the item's page.</p>
        </>
      )}
      {vertex && (
        <h1 ref={h1Ref} class={tw(forGrid && "inline sm:block")}>
          <a class="text-primary" href={vertex ? `/${vertex.plainKey}` : "#"}>
            {vertex ? vertex.name : "Info"}
          </a>
        </h1>
      )}
      {vertex && (
        <>
          <span class={tw(forGrid ? "dash mx-2 inline-block sm:hidden" : "hidden")}>&#8212;</span>
          <div class={tw(forGrid && "hidden sm:block")}>
            {vertex.created.value && <Pill children={`Appeared ${vertex.created.year}`} />}
            {"releases" in vertex && ret(vertex.releases.last, rel => rel && <Pill children={`Last Rel ${rel.date ?? rel.version}`} />)}
            {vertex instanceof VPlang && vertex.isTranspiler && <Pill children="Transpiler" />}
            {"isPopular" in vertex && vertex.isPopular && <Pill children="Popular" />}
          </div>
          <p class={tw(forGrid && "inline sm:block")}>{vertex.description || "..."}</p>
        </>
      )}
      {vertex instanceof VPlang && (
        <details class={tw(forGrid && "hidden sm:block", "pb-4")} open={open}>
          <summary class="cursor-pointer text-xl">Details</summary>
          {relations(vertex).map(([title, vertices]) => (
            <div key={title}>
              <h3 class="mt-4 text-xl">{title}</h3>
              {vertices.map(({ name, key }) => (
                <Pill key={key} children={name} />
              ))}
            </div>
          ))}
        </details>
      )}
    </div>
  );
}

function Pill({ children }: { children: ComponentChildren }) {
  return <span class={tw("inline-block", "mr-2 mb-3 px-1", "border-2 border-primary", "bg-primary text-secondary")}>{children}</span>;
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
    ["Extensions", pl.extensions.map(name => ({ key: name, name, kind: "ext" })).existing],
  ] as const;

  return all.filter(([_, vertices]) => vertices.length > 0);
}

export const EVENTS = {} as const;
