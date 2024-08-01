import type { ComponentChildren, JSX, Ref } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import type { PlangsGraph } from "@plangs/plangs";
import type { VID_License, VID_Person, VID_Plang, VID_Platform, VID_TypeSystem } from "@plangs/plangs/schema";
import { customEvent, on } from "../utils";

export const TAG_NAME = "plang-info";

export type PlangInfoProps = {
  vid?: VID_Plang;
};

/** Display a PL information, if the vid is known. */
export function PlangInfo({ vid }: PlangInfoProps) {
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

  if (!vid) {
    content = <p>Select a language to show more information.</p>;
  } else {
    const pl = pg?.v_plang.get(vid);
    if (!pl || !pg) {
      content = <p>Loading...</p>;
    } else {
      /** Go from set of vids to their data. */
      function collect<T>(vids: Set<string>, getter: (vid: string) => Partial<T> | undefined): T[] {
        return [...vids].map((vid) => getter(vid)).filter(Boolean) as T[];
      }

      const people = collect(pg.e_person_plang.adjacentTo(vid), (vid) => pg.v_person.get(vid as VID_Person));
      const platforms = collect(pg.e_supports_platf.adjacentFrom(vid), (vid) => pg.v_platform.get(vid as VID_Platform));
      const tsys = collect(pg.e_plang_tsys.adjacentFrom(vid), (vid) => pg.v_tsystem.get(vid as VID_TypeSystem));
      const licenses = collect(pg.e_has_license.adjacentFrom(vid), (vid) => pg.v_license.get(vid as VID_License));

      const influencedBy = collect(pg.e_l_influenced_l.adjacentTo(vid), (vid) => pg.v_plang.get(vid as VID_Plang));
      const influenced = collect(pg.e_l_influenced_l.adjacentFrom(vid), (vid) => pg.v_plang.get(vid as VID_Plang));

      const dialectOf = collect(pg.e_dialect_of.adjacentFrom(vid), (vid) => pg.v_plang.get(vid as VID_Plang));
      const children = collect(pg.e_dialect_of.adjacentTo(vid), (vid) => pg.v_plang.get(vid as VID_Plang));

      const impls = collect(pg.e_implements.adjacentTo(vid), (vid) => pg.v_plang.get(vid as VID_Plang));
      const standards = collect(pg.e_implements.adjacentFrom(vid), (vid) => pg.v_plang.get(vid as VID_Plang));

      function Entry<T>({ title, children }: { title: string; children: ComponentChildren }) {
        return (
          <div class="entry">
            <dt>{title}</dt>
            <dd>{children}</dd>
          </div>
        );
      }

      function Pill({ vid, name, kind }: { vid: string; kind: string; name: string }) {
        const cssClasses = kind === "pl" ? "pill pl-pill" : "pill";
        return (
          <div class={cssClasses} key={vid} data-vid={vid} data-kind={kind}>
            {name}
          </div>
        );
      }

      content = (
        <>
          <h2>{pl.name}</h2>
          <dl>
            {pl.description && <Entry title="Description">{pl.description}</Entry>}
            {people.length > 0 && (
              <Entry title="People">{people.map((data) => Pill({ ...data, kind: "person" }))}</Entry>
            )}
            {pl.scoping && (
              <Entry title="Scoping">
                {pl.scoping.map((data) => Pill({ vid: data, name: data, kind: "scoping" }))}
              </Entry>
            )}
            {pl.extensions && (
              <Entry title="Extensions">
                {pl.extensions.map((data) => Pill({ vid: data, name: data, kind: "ext" }))}
              </Entry>
            )}
            {tsys.length > 0 && (
              <Entry title="Type Systems">{tsys.map((data) => Pill({ ...data, kind: "tsys" }))}</Entry>
            )}
            {platforms.length > 0 && (
              <Entry title="Platforms">{platforms.map((data) => Pill({ ...data, kind: "platf" }))}</Entry>
            )}
            {influencedBy.length > 0 && (
              <Entry title="Influenced By">{influencedBy.map((data) => Pill({ ...data, kind: "pl" }))}</Entry>
            )}
            {influenced.length > 0 && (
              <Entry title="Influenced">{influenced.map((data) => Pill({ ...data, kind: "pl" }))}</Entry>
            )}
            {dialectOf.length > 0 && (
              <Entry title="Dialect Of">{dialectOf.map((data) => Pill({ ...data, kind: "pl" }))}</Entry>
            )}
            {children.length > 0 && (
              <Entry title="Implemented By">{children.map((data) => Pill({ ...data, kind: "pl" }))}</Entry>
            )}
            {impls.length > 0 && (
              <Entry title="Implementations">{impls.map((data) => Pill({ ...data, kind: "pl" }))}</Entry>
            )}
            {standards.length > 0 && (
              <Entry title="Standard For">{standards.map((data) => Pill({ ...data, kind: "pl" }))}</Entry>
            )}
            {licenses.length > 0 && (
              <Entry title="Licenses">{licenses.map((data) => Pill({ ...data, kind: "lic" }))}</Entry>
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
