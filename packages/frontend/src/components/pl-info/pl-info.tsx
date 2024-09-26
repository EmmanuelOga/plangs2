import type { ComponentChildren, JSX, Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

import type { NPlang, PlangsGraph } from "@plangs/plangs";

import { customEvent, tw, twBreakMd } from "../../utils";

export const TAG_NAME = "pl-info";

export type PlInfoProps = {
  pg?: PlangsGraph;
  pl?: NPlang;
};

/** Display a PL information, if the key is known. */
export function PlInfo({ pg, pl }: PlInfoProps) {
  const self = useRef<HTMLDivElement>();

  useEffect(() => {
    const root = self.current?.parentElement as HTMLElement;
    if (!root) return;

    const div = root.parentElement;
    if (div) {
      const height = div.offsetHeight;
      const viewportHeight = window.innerHeight;

      if (height > viewportHeight) {
        div.classList.remove("stick-to-top");
        div.classList.add("stick-to-bottom");
      } else {
        div.classList.add("stick-to-top");
        div.classList.remove("stick-to-bottom");
      }
    }

    // return on(root, EVENTS.inSetData.type, ({ detail: pg }: CustomEvent) => setPg(pg as PlangsGraph));
  });

  let content: JSX.Element;

  if (!pl) {
    content = <p>Select a language to show more information.</p>;
  } else if (!pg) {
    content = <p>Loading graph ...</p>;
  } else if (!pl) {
    content = <p>Loading language ...</p>;
  } else {
    content = (
      <>
        <h1>{pl.name}</h1>
        <p>{pl.description}</p>
        <details class="-mb-4 mt-8" open={twBreakMd()}>
          <summary class="font-bold text-xl">Details</summary>
          {pl.relTsys.tap(rel => (
            <Entry title="Type Systems">{rel.values.map(({ tsys }) => tsys && Pill(tsys))}</Entry>
          ))}
          {pl.relTags.tap(rel => (
            <Entry title="Tags">{rel.values.map(({ tag }) => tag && Pill(tag))}</Entry>
          ))}
          {pl.relPlatforms.tap(rel => (
            <Entry title="Platforms">{rel.values.map(({ plat }) => plat && Pill(plat))}</Entry>
          ))}
          {pl.relInfluencedBy.tap(rel => (
            <Entry title="Influenced By">{rel.values.map(({ toPl }) => toPl && Pill(toPl))}</Entry>
          ))}
          {pl.relInfluenced.tap(rel => (
            <Entry title="Influenced">{rel.values.map(({ fromPl }) => fromPl && Pill(fromPl))}</Entry>
          ))}
          {pl.relDialectOf.tap(rel => (
            <Entry title="Dialect Of">{rel.values.map(({ toPl }) => toPl && Pill(toPl))}</Entry>
          ))}
          {pl.relImplements.tap(rel => (
            <Entry title="Standard For">{rel.values.map(({ toPl }) => toPl && Pill(toPl))}</Entry>
          ))}
          {pl.relLicenses.tap(rel => (
            <Entry title="Licenses">{rel.values.map(({ license }) => license && Pill(license))}</Entry>
          ))}
          {pl.extensions.tap(extensions => (
            <Entry title="Extensions">{extensions.map(name => Pill({ key: name, name, kind: "ext" }))}</Entry>
          ))}
        </details>
      </>
    );
  }

  return (
    <div class={tw("readable dark:prose-invert", "pt-4")} ref={self as Ref<HTMLDivElement>}>
      {content}
    </div>
  );
}

function Entry({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <>
      <h3>{title}</h3>
      <p>{children}</p>
    </>
  );
}

function Pill({ key, kind, name }: { key: string; name: string; kind: string }) {
  return (
    <div
      key={key}
      data-key={key}
      data-kind={kind}
      class="-skew-y-2 mr-1 mb-3 inline-block bg-primary p-1.5 font-bold font-bold text-background text-sm shadow-lg shadow-secondary outline-2 outline-secondary">
      {name}
    </div>
  );
}

export const EVENTS = {
  /** Incoming event: setup the component with a PlangsGraph. */
  inSetData: {
    type: `${TAG_NAME}:set-data`,
    create: (pg: PlangsGraph) => customEvent(EVENTS.inSetData.type, pg),
  },
};
