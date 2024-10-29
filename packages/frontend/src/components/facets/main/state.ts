import type { JSX } from "preact/jsx-runtime";

import { Map2 } from "@plangs/auxiliar/map2";
import type { AnyValue } from "@plangs/auxiliar/value";
import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { NPlang, PlangsGraph } from "@plangs/plangs";
import type { PlangFacetKey } from "@plangs/plangs/facets";
import type { TAB } from "@plangs/server/components/layout";

import { updateThumbns } from "./grid";
import { DEFAULT_GROUP, GROUP_LABELS, NAV, type PlangFacetGroupKey, PlangsFacetGroups } from "./plangs";

/** Generic state so components can work with any group and facet key. */
export type AnyFacetsMainState = FacetsMainState<string, string>;

export function useFacetState(tab: TAB, pg: PlangsGraph): AnyFacetsMainState | undefined {
  if (tab === "plangs") return useDispatchable(() => PlangsFacetsState.initial(pg) as AnyFacetsMainState);
  console.error("Unknown tab", tab);
}

export abstract class FacetsMainState<GroupKey extends string, FacetKey extends string> extends Dispatchable<{
  currentGroupKey: GroupKey;
  values: Map2<GroupKey, FacetKey, AnyValue>;
  pg: PlangsGraph;
}> {
  /** Actions */

  doSetCurrent(groupKey: GroupKey): void {
    this.data.currentGroupKey = groupKey;
    this.dispatch();
  }

  /** This dispatches since we want to change the indicator of active state. */
  doSetValue(groupKey: GroupKey, facetKey: FacetKey, value: AnyValue): void {
    const { values } = this.data;
    if (value.isPresent) {
      if (value.equalTo(values.get(groupKey, facetKey))) return;
      values.set(groupKey, facetKey, value);
    } else {
      values.delete(groupKey, facetKey);
    }
    this.sideEffects();
    this.dispatch();
  }

  sideEffects() {
    // localStorage.setItem("plangs-filters", JSON.stringify(facets.serializable()));
    // updateFragment(facets);
    updateThumbns(this.results);
  }

  /** Queries */

  get pg(): PlangsGraph {
    return this.data.pg;
  }

  get values() {
    return this.data.values;
  }

  get currentGroupKey(): GroupKey {
    return this.data.currentGroupKey;
  }

  isActive(groupKey: GroupKey): boolean {
    return this.values.size2(groupKey) > 0;
  }

  /** Abstract Methods. */

  /** Links to FacetGroups appear in groups. */
  abstract get nav(): GroupKey[][];

  abstract groupTitle(groupKey: GroupKey): string;

  /** The component that defines the content of a facet group. */
  abstract get facetGroupsComponent(): FacetsGroupComponent;

  /** A set of node keys that are the result of applying the filters. */
  abstract get results(): Set<string>;
}

/** A preact function component to render a facet group. */
type FacetsGroupComponent = ({ currentFacetGroup }: { currentFacetGroup: string }) => JSX.Element | null;

/** Implementation of the state for Faceted search of Programming Languages. */
export class PlangsFacetsState extends FacetsMainState<PlangFacetGroupKey, PlangFacetKey> {
  static initial(pg: PlangsGraph): PlangsFacetsState {
    return new PlangsFacetsState({ currentGroupKey: DEFAULT_GROUP, values: new Map2(), pg });
  }

  override get nav() {
    return NAV;
  }

  override groupTitle(key: PlangFacetGroupKey) {
    return GROUP_LABELS[key as keyof typeof GROUP_LABELS] ?? key;
  }

  override get facetGroupsComponent() {
    return PlangsFacetGroups as FacetsGroupComponent;
  }

  override get results(): Set<NPlang["key"]> {
    if (!this.pg) return new Set();
    return this.pg.plangs(this.values.getMap2());
  }
}
