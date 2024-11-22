import { ret } from "@plangs/auxiliar/misc";
import { BORDER, tw } from "@plangs/frontend/auxiliar/styles";
import type { NPlang } from "@plangs/plangs";
import type { TAB } from "@plangs/server/components/layout";
import type { ComponentChildren } from "preact";

export type NodeInfoProps = {
  node?: NPlang;
  open?: boolean;
  tab?: TAB;
};

/** Display Node. */
export function NodeInfo({ node, open, tab }: NodeInfoProps) {
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
        <a class="text-foreground decoration-1 decoration-dotted" href={`/${node?.plainKey}`}>
          {node?.name ?? ""}
        </a>
      </h2>
      {node && (
        <>
          <span class={tw(forGrid ? "dash mx-2 inline-block sm:hidden" : "hidden")}>&#8212;</span>
          <div class={tw(forGrid && "hidden sm:block")}>
            {node.created.value && <Pill children={`Appeared ${node.created.year}`} />}
            {ret(node.releases.last, rel => rel && <Pill children={`Last Rel ${rel.date ?? rel.version}`} />)}
            {node.isTranspiler && <Pill children="Transpiler" />}
            {node.isPopular && <Pill children="Popular" />}
          </div>
          <p class={tw(forGrid && "inline sm:block")}>{node.description || "..."}</p>
          <details class={tw(forGrid && "hidden sm:block", "pb-4")} open={open}>
            <summary class="cursor-pointer text-xl">Details</summary>
            {relations(node).map(([title, nodes]) => (
              <div key={title}>
                <h3 class="mt-4 text-xl">{title}</h3>
                {nodes.map(({ name, key }) => (
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

function relations(pl: NPlang) {
  const all = [
    ["Type Systems", pl.relTsys.nodes()],
    ["Platforms", pl.relPlatforms.nodes()],

    ["Influenced By", pl.relInfluencedBy.nodes()],
    ["Influenced", pl.relInfluenced.nodes()],
    ["Dialect Of", pl.relDialectOf.nodes()],
    ["Implements", pl.relImplements.nodes()],
    ["Compiles To", pl.relCompilesTo.nodes()],

    ["Licenses", pl.relLicenses.nodes()],

    ["Tags", pl.relTags.nodes()],
    ["Extensions", pl.extensions.map(name => ({ key: name, name, kind: "ext" })).existing],
  ] as const;

  return all.filter(([_, nodes]) => nodes.length > 0);
}

export const EVENTS = {} as const;
