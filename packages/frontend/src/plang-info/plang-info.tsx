import type { ComponentChildren, JSX, Ref } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import type { NPlang, PlangsGraph } from "@plangs/plangs";
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
    const pl = pg?.n_plang.get(key);
    if (!pl || !pg) {
      content = <p>Loading...</p>;
    } else {
      const people = pl.people();
      const platforms = pl.platforms();
      const tsys = pl.typeSystems();
      const licenses = pl.licenses();
      const influenced = pl.influenced();
      const influencedRev = pl.influencedRev();
      const dialectOf = pl.dialectOf();
      const dialectOfRev = pl.dialectOfRev();
      const implements_ = pl.implements();
      const implementsRev = pl.implementsRev();

      function Entry<T>({ title, children }: { title: string; children: ComponentChildren }) {
        return (
          <div class="entry">
            <dt>{title}</dt>
            <dd>{children}</dd>
          </div>
        );
      }

      function Pill({ key, name, kind }: { key: string; kind: string; name: string }) {
        const cssClasses = kind === "pl" ? "pill pl-pill" : "pill";
        return (
          <div class={cssClasses} key={key} data-key={key} data-kind={kind}>
            {name}
          </div>
        );
      }

      content = (
        <>
          <h2>{pl.data.name ?? key}</h2>
          <dl>
            {pl.data.description && <Entry title="Description">{pl.data.description}</Entry>}
            {people.length > 0 && (
              <Entry title="People">{people.map(({ key, data }) => Pill({ key, name: data.name ?? key, kind: "person" }))}</Entry>
            )}
            {pl.data.scoping && <Entry title="Scoping">{pl.data.scoping.map((data) => Pill({ key: data, name: data, kind: "scoping" }))}</Entry>}
            {pl.data.extensions && <Entry title="Extensions">{pl.data.extensions.map((data) => Pill({ key: data, name: data, kind: "ext" }))}</Entry>}
            {tsys.length > 0 && (
              <Entry title="Type Systems">{tsys.map(({ key, data }) => Pill({ key, name: data.name ?? key, kind: "tsys" }))}</Entry>
            )}
            {platforms.length > 0 && (
              <Entry title="Platforms">{platforms.map(({ key, data }) => Pill({ key, name: data.name ?? key, kind: "platf" }))}</Entry>
            )}
            {influencedRev.length > 0 && (
              <Entry title="Influenced By">{influencedRev.map(({ key, data }) => Pill({ key, name: data.name ?? key, kind: "pl" }))}</Entry>
            )}
            {influenced.length > 0 && (
              <Entry title="Influenced">{influenced.map(({ key, data }) => Pill({ key, name: data.name ?? key, kind: "pl" }))}</Entry>
            )}
            {dialectOf.length > 0 && (
              <Entry title="Dialect Of">{dialectOf.map(({ key, data }) => Pill({ key, name: data.name ?? key, kind: "pl" }))}</Entry>
            )}
            {dialectOfRev.length > 0 && (
              <Entry title="Implemented By">{dialectOfRev.map(({ key, data }) => Pill({ key, name: data.name ?? key, kind: "pl" }))}</Entry>
            )}
            {implementsRev.length > 0 && (
              <Entry title="Implementations">{implementsRev.map(({ key, data }) => Pill({ key, name: data.name ?? key, kind: "pl" }))}</Entry>
            )}
            {implements_.length > 0 && (
              <Entry title="Standard For">{implements_.map(({ key, data }) => Pill({ key, name: data.name ?? key, kind: "pl" }))}</Entry>
            )}
            {licenses.length > 0 && (
              <Entry title="Licenses">{licenses.map(({ key, data }) => Pill({ key, name: data.name ?? key, kind: "lic" }))}</Entry>
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
