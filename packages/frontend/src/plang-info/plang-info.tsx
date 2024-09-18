import type { ComponentChildren, JSX, Ref } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import type { NPlang, PlangsGraph } from "@plangs/plangs";

import { customEvent, on } from "../utils";

export const TAG_NAME = "plang-info";

export type PlangInfoProps = {
  graph?: PlangsGraph;
  plangKey?: NPlang["key"];
  description?: boolean;
};

/** Display a PL information, if the key is known. */
export function PlangInfo({ plangKey: key, graph, description }: PlangInfoProps) {
  const self = useRef<HTMLDivElement>();
  const [pg, setPg] = graph ? useState<PlangsGraph>(graph) : useState<PlangsGraph>();

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

    return on(root, EVENTS.inSetData.type, ({ detail: pg }: CustomEvent) => setPg(pg as PlangsGraph));
  });

  const pl = pg ? pg.nodes.pl.get(key) : undefined;

  let content: JSX.Element;

  if (!key) {
    content = <p>Select a language to show more information.</p>;
  } else if (!pg) {
    content = <p>Loading graph ...</p>;
  } else if (!pl) {
    content = <p>Loading language ...</p>;
  } else {
    content = (
      <>
        {description !== false && <h2>{pl.name ?? key}</h2>}
        <dl class="prose prose-invert">
          {description !== false && <Entry title="Description">{pl.description}</Entry>}

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
        </dl>
      </>
    );
  }

  return (
    <div class="prose prose-invert mt-2 px-5; pt-0 pb-2 text-[#eee]" ref={self as Ref<HTMLDivElement>}>
      {content}
    </div>
  );
}

function Entry({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <div class="entry">
      <dt>{title}</dt>
      <dd class="m-0 rounded-tr-2xl rounded-bl-2xl border border-solid bg-[white] p-3 text-[black]">{children}</dd>
    </div>
  );
}

function Pill({ key, kind, name }: { key: string; name: string; kind: string }) {
  return (
    <div
      class="m-1 inline-block rounded-tr rounded-bl border-r border-r-[gray] border-b border-b-[gray] border-solid px-2 py-1"
      key={key}
      data-key={key}
      data-kind={kind}>
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
