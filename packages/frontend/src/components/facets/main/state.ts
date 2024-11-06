import type { FunctionComponent } from "preact";

import { Map2 } from "@plangs/auxiliar/map2";
import { type AnyValue, deserializeValue } from "@plangs/auxiliar/value";
import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { NPlang, PlangsGraph } from "@plangs/plangs";
import type { PlangFacetKey } from "@plangs/plangs/facets/plangs";
import type { TAB } from "@plangs/server/components/layout";

import { $ } from "@plangs/frontend/auxiliar/dom";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { loadLocalStorage, updateLocalStorage } from "@plangs/frontend/auxiliar/storage";
import type { ToggleClearFacets } from "../../icon-button/state";
import { updateThumbns } from "./grid";
import { DEFAULT_GROUP, GROUPS, GROUP_FOR_FACET_KEY, NAV, type PlangFacetGroupKey, PlangsFacetGroups } from "./plangs";

/** Generic state so components can work with any group and facet key. */
export type AnyFacetsMainState = FacetsMainState<string, string>;

export type SerializedFacets<FacetKey extends string> = Partial<Record<FacetKey, ReturnType<AnyValue["serializable"]>>>;

export function useFacetState(tab: TAB, pg: PlangsGraph): AnyFacetsMainState | undefined {
  if (tab === "plangs") return useDispatchable(() => PlangsFacetsState.initial(pg) as AnyFacetsMainState);
  console.error("Unknown tab", tab);
}

export abstract class FacetsMainState<GroupKey extends string, FacetKey extends string> extends Dispatchable<{
  tab: TAB;
  pg: PlangsGraph;
  defaultGroup: GroupKey;
  currentGroupKey: GroupKey;
  values: Map2<GroupKey, FacetKey, AnyValue>;
}> {
  doSetCurrent(groupKey: GroupKey): void {
    this.data.currentGroupKey = groupKey;
    updateLocalStorage(this.tab, "lastGroup", groupKey);
    this.dispatch();
  }

  /** Removes any and all values for the given group.  */
  doResetGroup(groupKey: GroupKey): void {
    this.values.delete1(groupKey);
    this.dispatch();
  }

  /** Removes any and all values for the given group.  */
  doResetAll(): void {
    this.values.clear();
    this.doSetCurrent(this.defaultGroup);
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

    this.dispatch();
    return result;
  }

  /** Queries */

  get tab(): TAB {
    return this.data.tab;
  }

  get defaultGroup() {
    return this.data.defaultGroup;
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

  groupHasValues(groupKey: GroupKey): boolean {
    return (
      this.values
        .getMap(groupKey)
        ?.values()
        .some(v => v.isPresent) ?? false
    );
  }

  /** Helpers */

  /** Update the clear facets button on the toolbar. */
  updateClearFacets(): this {
    const clearAll = $<HTMLElement & { state?: ToggleClearFacets }>("#icon-button-clearFacets");
    if (!clearAll?.state) return this;
    clearAll.state.doToggleMode(this.values.isEmpty ? "" : "clearFacets");
    return this;
  }

  override dispatch(): this {
    super.dispatch();

    const data = this.serialized;
    window.fragment.pushState(FragmentTracker.serialize(data));
    updateLocalStorage(this.tab, "inputs", data);
    updateThumbns(this.results);

    this.updateClearFacets();

    return this;
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
  static initial(pg: PlangsGraph): PlangsFacetsState {
    const tab: TAB = "plangs";
    return new PlangsFacetsState({
      pg,
      tab,
      values: loadFacets(tab, GROUP_FOR_FACET_KEY),
      defaultGroup: DEFAULT_GROUP,
      currentGroupKey: loadLocalStorage(tab, "lastGroup") ?? DEFAULT_GROUP,
    }).updateClearFacets();
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

/** Attempt to reconstruct the value structure from  fragment or local storage. */
export function loadFacets<GK, FK>(tab: TAB, groupsByFacetKey: Map<FK, GK>): Map2<GK, FK, AnyValue> {
  const result = new Map2<GK, FK, AnyValue>();

  const values = FragmentTracker.deserialize() ?? loadLocalStorage(tab, "inputs");
  if (!values) return result;

  for (const [facetKey, rawValue] of Object.entries(values)) {
    const groupKey = groupsByFacetKey.get(facetKey as FK);
    if (!groupKey) {
      console.error("missing group for facet", facetKey);
      continue;
    }
    const value = deserializeValue(rawValue);
    if (value?.isPresent) {
      result.set(groupKey, facetKey as FK, value);
    } else {
      console.error("failed to deserialize value", facetKey, rawValue);
    }
  }

  return result;
}
