import type { PlangsGraph } from "@plangs/plangs/index";

export const TAG_NAME = "input-facet";

export type InputFacetProps = {
  pg?: PlangsGraph;
};

export function InputFacet({ pg }: InputFacetProps) {
  return <div>{pg ? "ready" : "..."}</div>;
}

export const EVENTS = {};
