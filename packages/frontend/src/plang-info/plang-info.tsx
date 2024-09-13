import type { ComponentChildren, JSX, Ref } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import type { NPlang, PlangsGraph } from "@plangs/plangs";

import "./plang-info.css";

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

  const pl = pg ? pg.nodes.pl.getExisting(key) : undefined;

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
        <h2>{pl.data.name ?? key}</h2>
        <dl>
          {description && <Entry title="Description">{pl.description}</Entry>}

          {pl.relTsys.tap((rel) => (
            <Entry title="Type Systems">{rel.edges.map(({ tsys: { key, name, kind } }) => Pill({ key, name, kind }))}</Entry>
          ))}
          {pl.relPlatforms.tap((rel) => (
            <Entry title="Platforms">{rel.edges.map(({ plat: { key, name, kind } }) => Pill({ key, name, kind }))}</Entry>
          ))}
          {pl.relInfluencedBy.tap((rel) => (
            <Entry title="Influenced By">{rel.edges.map(({ toPl: { key, name, kind } }) => Pill({ key, name, kind }))}</Entry>
          ))}
          {pl.relInfluenced.tap((rel) => (
            <Entry title="Influenced">{rel.edges.map(({ fromPl: { key, name, kind } }) => Pill({ key, name, kind }))}</Entry>
          ))}
          {pl.relDialectOf.tap((rel) => (
            <Entry title="Dialect Of">{rel.edges.map(({ toPl: { key, name, kind } }) => Pill({ key, name, kind }))}</Entry>
          ))}
          {pl.relImplements.tap((rel) => (
            <Entry title="Standard For">{rel.edges.map(({ toPl: { key, name, kind } }) => Pill({ key, name, kind }))}</Entry>
          ))}
          {pl.relLicenses.tap((rel) => (
            <Entry title="Licenses">{rel.edges.map(({ license: { key, name, kind } }) => Pill({ key, name, kind }))}</Entry>
          ))}
          {pl.hasFileExtensions && <Entry title="Extensions">{pl.fileExtensions.map((name) => Pill({ key: name, name, kind: "ext" }))}</Entry>}
        </dl>
      </>
    );
  }

  return <div ref={self as Ref<HTMLDivElement>}>{content}</div>;
}

function Entry({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <div class="entry">
      <dt>{title}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function Pill({ key, kind, name }: { key: string; name: string; kind: string }) {
  return (
    <div class={`pill ${kind}-pill`} key={key} data-key={key} data-kind={kind}>
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
