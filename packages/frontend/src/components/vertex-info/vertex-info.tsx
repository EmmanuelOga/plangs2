import { ret } from "@plangs/auxiliar/misc";
import { BORDER, tw } from "@plangs/frontend/auxiliar/styles";
import type { VPlang } from "@plangs/plangs/graph";
import type { TAB } from "@plangs/server/components/layout";
import type { ComponentChildren } from "preact";

export type VertexInfoProps = {
  vertex?: VPlang;
  open?: boolean;
  tab?: TAB;
};

/** Display Vertex. */
export function VertexInfo({ vertex, open, tab }: VertexInfoProps) {
  const forGrid = tab === "plangs";
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
      <h2 class={tw(forGrid && "inline sm:block")}>
        <a class="text-foreground decoration-1 decoration-dotted" href={`/${vertex?.plainKey}`}>
          {vertex?.name ?? ""}
        </a>
      </h2>
      {vertex && (
        <>
          <span class={tw(forGrid ? "dash mx-2 inline-block sm:hidden" : "hidden")}>&#8212;</span>
          <div class={tw(forGrid && "hidden sm:block")}>
            {vertex.created.value && <Pill children={`Appeared ${vertex.created.year}`} />}
            {ret(vertex.releases.last, rel => rel && <Pill children={`Last Rel ${rel.date ?? rel.version}`} />)}
            {vertex.isTranspiler && <Pill children="Transpiler" />}
            {vertex.isPopular && <Pill children="Popular" />}
          </div>
          <p class={tw(forGrid && "inline sm:block")}>{vertex.description || "..."}</p>
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
        </>
      )}
    </div>
  );
}

function Pill({ children }: { children: ComponentChildren }) {
  return <span class={tw("inline-block", "mr-2 mb-2 px-1", "border-2 border-secondary", "bg-secondary/50")}>{children}</span>;
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
