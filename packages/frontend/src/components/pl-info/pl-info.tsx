import type { NPlang, PlangsGraph } from "@plangs/plangs";

import { customEvent, tw } from "../../utils";
import { Anchor } from "../misc/anchor";
import { Pill } from "../misc/pill";

export const TAG_NAME = "pl-info";

export type PlInfoProps = {
  pl?: NPlang;
  open?: boolean;
  kind?: "browse" | "pl";
};

/** Display a PL information, if the key is known. */
export function PlInfo({ pl, open, kind: plInfoKind }: PlInfoProps) {
  const forPl = plInfoKind === "pl";
  const forBrowse = !forPl;
  return (
    <div
      class={tw(
        "p-4",
        "h-fit w-full",
        "readable dark:prose-invert max-w-[unset]",
        "bg-linear-to-b from-background to-secondary/50",
        "shadow-lg shadow-primary/25",
        "border-b-1 border-b-primary border-dotted",
      )}>
      <h1 class={tw(forPl && "text-4xl", forBrowse && "inline text-lg sm:block sm:text-4xl")}>{pl?.name ?? "Plang"}</h1>
      {pl && (
        <>
          <span class={tw(forBrowse ? "dash sm:hidden" : "hidden")}>&#8212;</span>
          <div class={tw(forBrowse && "hidden")}>
            {pl.firstAppeared && <Pill name={`Appeared ${pl.firstAppeared}`} nodeKey="NA" kind="firstAppeared" plInfoKind={plInfoKind} />}
            {pl.lastRelease && (
              <Pill name={`Last Rel ${pl.lastRelease.date ?? pl.lastRelease.version}`} nodeKey="NA" kind="firstAppeared" plInfoKind={plInfoKind} />
            )}
            {pl.isTranspiler && <Pill name="Transpiler" nodeKey="NA" kind="transpiler" plInfoKind={plInfoKind} />}
            {pl.isMainstream && <Pill name="Mainstream" nodeKey="NA" kind="mainstream" plInfoKind={plInfoKind} />}
          </div>
          <p class={tw(forBrowse && "inline sm:block")}>{pl.description || "..."}</p>
          <details class={tw("pb-4", forBrowse && "hidden sm:block")} open={open}>
            <summary class="cursor-pointer text-xl">Details</summary>

            {!pl.websites.isEmpty && (
              <div>
                <h2>Websites</h2>
                {
                  pl.websites.map(link => (
                    <div key={link.href} class={tw("overflow-hidden text-ellipsis whitespace-nowrap")}>
                      <Pill name={link.kind ?? "link"} nodeKey="NA" kind={link.kind ?? "link"} />
                      <Anchor link={link} />
                    </div>
                  )).existing
                }
              </div>
            )}

            {relations(pl).map(([title, iterTap]) => (
              <div key={title}>
                <h2 class="mt-4 text-xl">{title}</h2>
                {iterTap.existing.map(({ name, key, kind }) => (
                  <Pill key={key} name={name} nodeKey={key} kind={kind} plInfoKind={plInfoKind} />
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

export const EVENTS = {
  /** Incoming event: setup the component with a PlangsGraph. */
  inSetData: {
    type: `${TAG_NAME}:set-data`,
    create: (pg: PlangsGraph) => customEvent(EVENTS.inSetData.type, pg),
  },
};
