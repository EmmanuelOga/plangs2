import type { FunctionComponent } from "preact";

import type { Map2 } from "@plangs/auxiliar/map2";
import { type AnyValue, deserializeValue } from "@plangs/auxiliar/value";
import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { NPlang, PlangsGraph } from "@plangs/plangs";
import type { PlangFacetKey } from "@plangs/plangs/facets/plangs";
import type { TAB } from "@plangs/server/components/layout";

import { updateThumbns } from "./grid";
import { DEFAULT_GROUP, GROUPS, GROUP_FOR_FACET_KEY, NAV, type PlangFacetGroupKey, PlangsFacetGroups } from "./plangs";
import { loadFacets, updateFragment, updateLocalStorage } from "./storage";

/** Generic state so components can work with any group and facet key. */
export type AnyFacetsMainState = FacetsMainState<string, string>;

export type SerializedFacets<FacetKey extends string> = Partial<Record<FacetKey, ReturnType<AnyValue["serializable"]>>>;

export function useFacetState(tab: TAB, pg: PlangsGraph): AnyFacetsMainState | undefined {
  if (tab === "plangs") return useDispatchable(() => PlangsFacetsState.initial(pg, tab) as AnyFacetsMainState);
  console.error("Unknown tab", tab);
}

export abstract class FacetsMainState<GroupKey extends string, FacetKey extends string> extends Dispatchable<{
  tab: TAB;
  pg: PlangsGraph;
  currentGroupKey: GroupKey;
  values: Map2<GroupKey, FacetKey, AnyValue>;
}> {
  doSetCurrent(groupKey: GroupKey): void {
    this.data.currentGroupKey = groupKey;
    this.dispatch();
  }

  /** This dispatches since we want to change the indicator of active state. */
  doSetValue(groupKey: GroupKey, facetKey: FacetKey, value: AnyValue): "changed" | "unchanged" {
    const { values } = this.data;

    let result: "changed" | "unchanged";

    if (value.isPresent) {
      if (!value.equalTo(values.get(groupKey, facetKey))) {
        values.set(groupKey, facetKey, value);
        result = "changed";
      } else {
        result = "unchanged";
      }
    } else {
      result = values.delete(groupKey, facetKey) ? "changed" : "unchanged";
    }

    this.sideEffects();
    this.dispatch();

    return result;
  }

  sideEffects() {
    const data = this.serialized;
    updateFragment(data);
    updateLocalStorage(this.tab, data);
    updateThumbns(this.results);
  }

  /** Queries */

  get tab(): TAB {
    return this.data.tab;
  }

  get pg(): PlangsGraph {
    return this.data.pg;
  }

  get values() {
    return this.data.values;
  }

  get serialized(): SerializedFacets<FacetKey> {
    const data: SerializedFacets<FacetKey> = {};
    for (const [_, facetKey, value] of this.values.flatEntries()) {
      if (value.isPresent) data[facetKey] = value.serializable();
    }
    return data;
  }

  get currentGroupKey(): GroupKey {
    return this.data.currentGroupKey;
  }

  isActive(groupKey: GroupKey): boolean {
    return (
      this.values
        .getMap(groupKey)
        ?.values()
        .some(v => v.isPresent) ?? false
    );
  }

  /** Abstract Methods. */

  /** Links to FacetGroups appear in groups. */
  abstract get nav(): GroupKey[][];

  abstract groupTitle(groupKey: GroupKey): string;

  /** The component that defines the content of a facet group. */
  abstract get facetGroupsComponent(): FunctionComponent<{ currentFacetGroup: string }>;

  /** A set of node keys that are the result of applying the filters. */
  abstract get results(): Set<string>;
}

/** Implementation of the state for Faceted search of Programming Languages. */
export class PlangsFacetsState extends FacetsMainState<PlangFacetGroupKey, PlangFacetKey> {
  static initial(pg: PlangsGraph, tab: TAB): PlangsFacetsState {
    return new PlangsFacetsState({ pg, tab, values: loadFacets(GROUP_FOR_FACET_KEY), currentGroupKey: DEFAULT_GROUP });
  }

  override get nav() {
    return NAV;
  }

  override groupTitle(key: PlangFacetGroupKey) {
    return GROUPS.get(key)?.label ?? key;
  }

  override get facetGroupsComponent() {
    return PlangsFacetGroups as FunctionComponent<{ currentFacetGroup: string }>;
  }

  override get results(): Set<NPlang["key"]> {
    if (!this.pg) return new Set();
    return this.pg.plangs(this.values.getMap2());
  }
}
