import type { Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import type { NPlang, PlangsGraph } from "@plangs/plangs";

import { READABLE_CLASSES } from "@plangs/server/elements";
import { customEvent, tw } from "../../utils";
import { Pill } from "../misc/pill";

export const TAG_NAME = "pl-info";

export type PlInfoProps = {
  pl?: NPlang;
  open?: boolean;
  class?: string;
};

/** Display a PL information, if the key is known. */
export function PlInfo({ pl, class: cssClass, open }: PlInfoProps) {
  return (
    <div
      class={tw(
        READABLE_CLASSES,
        "bg-linear-to-b from-background to-primary/20",
        "shadow-lg shadow-primary/25",
        "border-b-1 border-b-primary border-dotted",
        cssClass,
      )}>
      {!pl ? (
        <p>Select a language to show more information.</p>
      ) : (
        <div>
          <h1>{pl.name}</h1>
          <span class="dash hidden">&#8212;</span>
          <p>{pl.description}</p>
          <details class="pb-4" open={open}>
            <summary class="cursor-pointer text-xl">Details</summary>
            {relations(pl).map(([title, iterTap]) => (
              <div key={title}>
                <h2 class="mt-4 text-xl">{title}</h2>
                <p>{iterTap.existing.map(Pill)}</p>
              </div>
            ))}
          </details>
        </div>
      )}
    </div>
  );
}

const relations = (pl: NPlang) =>
  [
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

export const EVENTS = {
  /** Incoming event: setup the component with a PlangsGraph. */
  inSetData: {
    type: `${TAG_NAME}:set-data`,
    create: (pg: PlangsGraph) => customEvent(EVENTS.inSetData.type, pg),
  },
};
