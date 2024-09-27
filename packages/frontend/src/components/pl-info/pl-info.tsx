import { Fragment, type Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import type { NPlang, PlangsGraph } from "@plangs/plangs";

import { customEvent, tw, twBreakMd } from "../../utils";

export const TAG_NAME = "pl-info";

export type PlInfoProps = {
  pg?: PlangsGraph;
  pl?: NPlang;
  class?: string;
};

/** Display a PL information, if the key is known. */
export function PlInfo({ pg, pl, class: cssClass }: PlInfoProps) {
  const self = useRef<HTMLDivElement>();

  useEffect(() => {
    const root = self.current?.parentElement as HTMLElement;
    if (!root) return;
  });

  return (
    <div class={tw("readable dark:prose-invert", cssClass)} ref={self as Ref<HTMLDivElement>}>
      {!pl ? (
        <p>Select a language to show more information.</p>
      ) : !pg ? (
        <p>Loading graph...</p>
      ) : (
        <Fragment>
          <h1>{pl.name}</h1>
          <p>{pl.description}</p>
          <details open={true || twBreakMd()}>
            <summary class="cursor-pointer text-xl">Details</summary>
            {relations(pl).map(([title, iterTap]) => (
              <Fragment key={title}>
                <h2 class="mt-4 text-xl">{title}</h2>
                <p>{iterTap.existing.map(Pill)}</p>
              </Fragment>
            ))}
          </details>
        </Fragment>
      )}
    </div>
  );
}

function Pill({ key, kind, name }: { key: string; name: string; kind: string }) {
  return (
    <div
      key={key}
      data-key={key}
      data-kind={kind}
      class={tw(
        "inline-block",
        "mr-1 mb-3 p-1.5",
        "bg-primary text-background",
        "font-bold text-sm",
        "shadow-lg shadow-secondary",
        "outline-2 outline-secondary",
      )}>
      {name}
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

// Sticking to top or bottom based on the content height.
// const div = root.parentElement;
// if (div) {
//   const height = div.offsetHeight;
//   const viewportHeight = window.innerHeight;
//   if (height > viewportHeight) {
//     div.classList.remove("stick-to-top");
//     div.classList.add("stick-to-bottom");
//   } else {
//     div.classList.add("stick-to-top");
//     div.classList.remove("stick-to-bottom");
//   }
// }
// return on(root, EVENTS.inSetData.type, ({ detail: pg }: CustomEvent) => setPg(pg as PlangsGraph));
