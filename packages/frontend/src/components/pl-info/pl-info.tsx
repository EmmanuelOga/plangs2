import { BORDER, tw } from "@plangs/frontend/auxiliar/styles";
import { Pill } from "@plangs/frontend/components/misc/pill";
import type { NPlang } from "@plangs/plangs";
import type { TAB } from "@plangs/server/components/layout";

export type PlInfoProps = {
  pl?: NPlang;
  open?: boolean;
  tab?: TAB;
};

/** Display a PL information, if the key is known. */
export function PlInfo({ pl, open, tab }: PlInfoProps) {
  const forGrid = tab === "plangs";
  return (
    <div
      class={tw(
        "w-full overflow-y-scroll",
        "px-2 pt-2 sm:p-4",
        !forGrid && "-mx-4", // Compensate for padding so it aligns with the rest of the content.
        "prose prose-green dark:prose-invert sm:prose-sm lg:prose-lg xl:prose-xl max-w-[unset]",
        forGrid && "bg-linear-to-b to-secondary/50",
        tw(BORDER, forGrid && "border-b-1"),
      )}>
      <h1 class={tw(!forGrid && "text-4xl", forGrid && "inline text-lg sm:block sm:text-4xl")}>
        <a class="text-foreground decoration-1 decoration-dotted" href={`/${pl?.plainKey}`}>
          {pl?.name ?? "Plang"}
        </a>
      </h1>
      {pl && (
        <>
          <span class={tw(forGrid ? "dash sm:hidden" : "hidden")}>&#8212;</span>
          <div class={tw(forGrid && "hidden sm:block")}>
            {pl.year && <Pill name={`Appeared ${pl.year}`} nodeKey="NA" kind="firstAppeared" tab={tab} />}
            {pl.lastRelease && (
              <Pill name={`Last Rel ${pl.lastRelease.date ?? pl.lastRelease.version}`} nodeKey="NA" kind="firstAppeared" tab={tab} />
            )}
            {pl.isTranspiler && <Pill name="Transpiler" nodeKey="NA" kind="transpiler" tab={tab} />}
            {pl.isPopular && <Pill name="Popular" nodeKey="NA" kind="popular" tab={tab} />}
          </div>
          <p class={tw(forGrid && "inline sm:block")}>{pl.description || "..."}</p>
          <details class={tw(forGrid && "hidden sm:block", "pb-4")} open={open}>
            <summary class="cursor-pointer text-xl">Details</summary>
            {relations(pl).map(([title, iterTap]) => (
              <div key={title}>
                <h2 class="mt-4 text-xl">{title}</h2>
                {iterTap.existing.map(({ name, key, kind }) => (
                  <Pill key={key} name={name} nodeKey={key} kind={kind} tab={tab} />
                ))}
              </div>
            ))}
          </details>
        </>
      )}
    </div>
  );
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
