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
export function NodeInfo({ node: pl, open, tab }: NodeInfoProps) {
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
        <a class="text-foreground decoration-1 decoration-dotted" href={`/${pl?.plainKey}`}>
          {pl?.name ?? "Plang"}
        </a>
      </h2>
      {pl && (
        <>
          <span class={tw(forGrid ? "dash mx-2 inline-block sm:hidden" : "hidden")}>&#8212;</span>
          <div class={tw(forGrid && "hidden sm:block")}>
            {pl.year && <Pill children={`Appeared ${pl.year}`} />}
            {pl.lastRelease && <Pill children={`Last Rel ${pl.lastRelease.date ?? pl.lastRelease.version}`} />}
            {pl.isTranspiler && <Pill children="Transpiler" />}
            {pl.isPopular && <Pill children="Popular" />}
          </div>
          <p class={tw(forGrid && "inline sm:block")}>{pl.description || "..."}</p>
          <details class={tw(forGrid && "hidden sm:block", "pb-4")} open={open}>
            <summary class="cursor-pointer text-xl">Details</summary>
            {relations(pl).map(([title, iterTap]) => (
              <div key={title}>
                <h3 class="mt-4 text-xl">{title}</h3>
                {iterTap.existing.map(({ name, key, kind }) => (
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
    ["Type Systems", pl.relTsys.values.map(({ nodeTo }) => nodeTo)],
    ["Tags", pl.relTags.values.map(({ nodeTo }) => nodeTo)],
    ["Platforms", pl.relPlatforms.values.map(({ nodeTo }) => nodeTo)],

    ["Influenced By", pl.relInfluencedBy.values.map(({ nodeTo }) => nodeTo)],
    ["Influenced", pl.relInfluenced.values.map(({ nodeFrom }) => nodeFrom)],
    ["Dialect Of", pl.relDialectOf.values.map(({ nodeTo }) => nodeTo)],
    ["Implements", pl.relImplements.values.map(({ nodeTo }) => nodeTo)],
    ["Compiles To", pl.relCompilesTo.values.map(({ nodeTo }) => nodeTo)],

    ["Licenses", pl.relLicenses.values.map(({ nodeTo }) => nodeTo)],
    ["Extensions", pl.extensions.map(name => ({ key: name, name, kind: "ext" }))],
  ] as const;

  return all.filter(([_, iterTap]) => iterTap.isEmpty === false);
}

export const EVENTS = {} as const;
