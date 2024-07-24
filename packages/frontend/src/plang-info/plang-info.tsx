import type { Ref } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import type { PlangsGraph } from "@plangs/plangs";
import type { VID_Plang } from "@plangs/plangs/schema";
import { on, off, customEvent } from "../utils";

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
    const handler = ({ detail }: CustomEvent) => setPg(detail as PlangsGraph);
    return on(root, EVENTS.inSetup.type, handler);
  });

  if (!vid) {
    return <p>Select a language to show more information.</p>;
  }

  if (!pg) {
    return <p>Loading...</p>;
  }

  return <div ref={self as Ref<HTMLDivElement>}>TODO: {vid}</div>;
}

export const EVENTS = {
  inSetup: {
    type: `${TAG_NAME}:setup`,
    create: (pg: PlangsGraph) => customEvent(EVENTS.inSetup.type, pg),
  },
};
