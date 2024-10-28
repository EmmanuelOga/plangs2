import type { Ref } from "preact";
import type { JSX } from "preact/jsx-runtime";

import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { NPlang, PlangsGraph } from "@plangs/plangs";
import { Map2 } from "packages/auxiliar/src/map2";

import type { PlangFacetKey } from "@plangs/plangs/facets";
import type { TAB } from "@plangs/server/components/layout";
import type { AnyValue } from "packages/auxiliar/src/value";

import type { FacetsMainProps } from "./facets-main";
import { updateThumbns } from "./grid";
import { DEFAULT_GROUP, GROUP_LABELS, NAV, type PlangFacetGroupKey, PlangsFacetGroups } from "./plangs";

export type FacetsMainState = PlangsFacetsState;

export function useFacetState(tab: TAB): FacetsMainState | undefined {
  if (tab === "plangs") return useDispatchable(() => PlangsFacetsState.initial());
}

export abstract class BaseState<GroupKey, FacetKey extends string> extends Dispatchable<
  FacetsMainProps & { currentGroupKey: GroupKey; values: Map2<GroupKey, FacetKey, AnyValue> }
> {
  /** Actions */

  doSetGraph(pg: PlangsGraph | undefined): void {
    this.data.pg = pg;
    this.dispatch();
  }

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

  get ready(): boolean {
    return this.pg !== undefined;
  }

  get pg(): PlangsGraph | undefined {
    return this.data.pg;
  }

  get values() {
    return this.data.values;
  }

  get currentGroupKey(): GroupKey {
    return this.data.currentGroupKey;
  }

  /** Links to FacetGroups appear in groups. */
  get nav(): GroupKey[][] {
    return [];
  }

  /** Return a component to render the facet groups. */
  get facetGroupsComponent(): FacetsGroupComponent {
    return () => null;
  }

  /** Results is a set of node keys that are the result of applying the filters. */
  get results(): Set<string> {
    return new Set();
  }

  groupTitle(groupKey: GroupKey): string {
    return groupKey as string;
  }

  isActive(groupKey: GroupKey): boolean {
    return this.values.size2(groupKey) > 0;
  }
}

/** A p/react function component to render a facet group. */
type FacetsGroupComponent = ({ currentFacetGroup }: { currentFacetGroup: string }) => JSX.Element | null;

export class PlangsFacetsState extends BaseState<PlangFacetGroupKey, PlangFacetKey> {
  static initial(): PlangsFacetsState {
    return new PlangsFacetsState({ currentGroupKey: DEFAULT_GROUP, values: new Map2() });
  }

  override get nav() {
    return NAV;
  }

  override groupTitle(key: PlangFacetGroupKey) {
    return GROUP_LABELS[key as keyof typeof GROUP_LABELS] ?? key;
  }

  override get facetGroupsComponent() {
    return PlangsFacetGroups;
  }

  override get results(): Set<NPlang["key"]> {
    if (!this.pg) return new Set();
    return this.pg.plangs(this.values.getMap2());
  }
}
