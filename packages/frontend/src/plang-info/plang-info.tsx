import type { Ref } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import type { PlangsGraph } from "@plangs/plangs";
import type { VID_Plang } from "@plangs/plangs/schema";
import { on, off } from "../utils";

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
    const handler = ({ detail }: CustomEvent) => setPg(detail as PlangsGraph);
    on(root, IN_EVENT_SETUP, handler);
    return () => off(root, IN_EVENT_SETUP, handler);
  });

  if (!vid) {
    return <p>Select a language to show more information.</p>;
  }

  if (!pg) {
    return <p>Loading...</p>;
  }

  return <div ref={self as Ref<HTMLDivElement>}>TODO: {vid}</div>;
}

/** Incoming event: request to setup the data source. */
export const IN_EVENT_SETUP = "input-sel:add";

export function createSetupEvent(pg: PlangsGraph): CustomEvent<PlangsGraph> {
  return new CustomEvent(IN_EVENT_SETUP, { detail: pg, bubbles: true, composed: true });
}
