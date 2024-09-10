import type { ComponentChildren, JSX, Ref } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import type { CommonNodeData, N, NBase, NPlang, PlangsGraph } from "@plangs/plangs";
import { customEvent, on } from "../utils";

export const TAG_NAME = "plang-info";

export type PlangInfoProps = {
  key?: NPlang["key"];
};

/** Display a PL information, if the key is known. */
export function PlangInfo({ key }: PlangInfoProps) {
  const self = useRef<HTMLDivElement>();
  const [pg, setPg] = useState<PlangsGraph>();

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

    return on(root, EVENTS.inSetData.type, ({ detail }: CustomEvent) => setPg(detail as PlangsGraph));
  });

  let content: JSX.Element;

  if (!key) {
    content = <p>Select a language to show more information.</p>;
  } else {
    const pl = pg?.nodes.pl.get(key);
    if (!pl || !pg) {
      content = <p>Loading...</p>;
    } else {
      const platforms = pl.relPlatforms;
      const tsys = pl.relTsys;
      const licenses = pl.relLicenses;
      const influenced = pl.relInfluenced;
      const influencedRev = pl.relInfluencedBy;
      const dialectOf = pl.relDialectOf;
      const implements_ = pl.relImplements;

      function Entry<T>({ title, children }: { title: string; children: ComponentChildren }) {
        return (
          <div class="entry">
            <dt>{title}</dt>
            <dd>{children}</dd>
          </div>
        );
      }

      function Pill<T extends CommonNodeData>({ key, kind, name }: { key: string; name: string; kind: string }) {
        return (
          <div class={`pill ${kind}-pill`} key={key} data-key={key} data-kind={kind}>
            {name}
          </div>
        );
      }

      content = (
        <>
          <h2>{pl.data.name ?? key}</h2>
          <dl>
            {pl.data.description && <Entry title="Description">{pl.data.description}</Entry>}
            {pl.data.extensions && <Entry title="Extensions">{pl.data.extensions.map((name) => Pill({ key: name, name, kind: "ext" }))}</Entry>}
            {tsys.size > 0 && <Entry title="Type Systems">{tsys.edges.map(({ key, tsys: { name, kind } }) => Pill({ key, name, kind }))}</Entry>}
            {platforms.size > 0 && (
              <Entry title="Platforms">{platforms.edges.map(({ key, plat: { name, kind } }) => Pill({ key, name, kind }))}</Entry>
            )}
            {influencedRev.size > 0 && (
              <Entry title="Influenced By">{influencedRev.edges.map(({ key, fromPl: { name, kind } }) => Pill({ key, name, kind }))}</Entry>
            )}
            {influenced.size > 0 && (
              <Entry title="Influenced">{influenced.edges.map(({ key, fromPl: { name, kind } }) => Pill({ key, name, kind }))}</Entry>
            )}
            {dialectOf.size > 0 && (
              <Entry title="Dialect Of">{dialectOf.edges.map(({ key, fromPl: { name, kind } }) => Pill({ key, name, kind }))}</Entry>
            )}
            {implements_.size > 0 && (
              <Entry title="Standard For">{implements_.edges.map(({ key, fromPl: { name, kind } }) => Pill({ key, name, kind }))}</Entry>
            )}
            {licenses.size > 0 && (
              <Entry title="Licenses">{licenses.edges.map(({ key, license: { name, kind } }) => Pill({ key, name, kind }))}</Entry>
            )}

            {/*
              <dt>Misc</dt>
              <dd>{pl.isTranspiler && "Source-to-source compiler"}</dd>
              */}

            {/* images */}
            {/* releases */}
            {/* links */}
          </dl>
        </>
      );
    }
  }

  return (
    <div id="plang-infobox" ref={self as Ref<HTMLDivElement>}>
      {content}
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
