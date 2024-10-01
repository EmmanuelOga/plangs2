import type { NPlang, PlangsGraph } from "@plangs/plangs";

import { customEvent, tw } from "../../utils";
import { Pill } from "../misc/pill";

export const TAG_NAME = "pl-info";

export type PlInfoProps = {
  pl?: NPlang;
  open?: boolean;
  id?: string;
  kind?: "browse" | "pl";
};

/** Display a PL information, if the key is known. */
export function PlInfo({ pl, open, kind: plInfoKind }: PlInfoProps) {
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
      <h1 class={tw("text-lg sm:text-4xl", "inline sm:block")}>{pl?.name ?? ""}</h1>
      <span class="dash sm:hidden">&#8212;</span>
      <p class="inline sm:block">{pl?.description || "..."}</p>
      {pl && (
        <details class={tw("pb-4", plInfoKind === "browse" && "hidden sm:block")} open={open}>
          <summary class="cursor-pointer text-xl">Details</summary>
          {relations(pl).map(([title, iterTap]) => (
            <div key={title}>
              <h2 class="mt-4 text-xl">{title}</h2>
              {iterTap.existing.map(({ name, key, kind }) => (
                <Pill name={name} key={key} kind={kind} plInfoKind={plInfoKind} />
              ))}
            </div>
          ))}
        </details>
      )}
    </div>
  );
}

function relations(pl: NPlang) {
  const all = [
    ["Type Systems", pl.relTsys.values.map(({ tsys }) => tsys)],
    ["Tags", pl.relTags.values.map(({ tag }) => tag)],
    ["Platforms", pl.relPlatforms.values.map(({ plat }) => plat)],
    ["Influenced By", pl.relInfluencedBy.values.map(({ toPl }) => toPl)],
    ["Influenced", pl.relInfluenced.values.map(({ fromPl }) => fromPl)],
    ["Dialect Of", pl.relDialectOf.values.map(({ toPl }) => toPl)],
    ["Standard For", pl.relImplements.values.map(({ toPl }) => toPl)],
    ["Licenses", pl.relLicenses.values.map(({ license }) => license)],
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
