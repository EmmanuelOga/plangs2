import type { FunctionComponent } from "preact";

import { Map2 } from "@plangs/auxiliar/map2";
import { type AnyValue, deserializeValue } from "@plangs/auxiliar/value";
import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { $ } from "@plangs/frontend/auxiliar/dom";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { updateLocalStorage } from "@plangs/frontend/auxiliar/storage";
import type { ToggleClearFacets } from "@plangs/frontend/components/icon-button/state";
import { AppsFacetsState } from "@plangs/frontend/facets/kind/apps";
import { LibrariesFacetsState } from "@plangs/frontend/facets/kind/libraries";
import { PlangsFacetsState } from "@plangs/frontend/facets/kind/plangs";
import { ToolsFacetsState } from "@plangs/frontend/facets/kind/tools";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TAB } from "@plangs/server/components/layout";

import { updateThumbns } from "./grid_util";

export type SerializedFacets<FacetKey extends string> = Partial<Record<FacetKey, ReturnType<AnyValue["serializable"]>>>;

/** Generic state so components can work with any group and facet key. */
export type AnyFacetsMainState = FacetsMainState<string, string>;

export function useFacetState(tab: TAB, pg: PlangsGraph): AnyFacetsMainState | undefined {
  let state: AnyFacetsMainState | undefined;

  if (tab === "plangs") state = useDispatchable(() => PlangsFacetsState.initial(pg) as AnyFacetsMainState);
  if (tab === "tools") state = useDispatchable(() => ToolsFacetsState.initial(pg) as AnyFacetsMainState);
  if (tab === "apps") state = useDispatchable(() => AppsFacetsState.initial(pg) as AnyFacetsMainState);
  if (tab === "libs") state = useDispatchable(() => LibrariesFacetsState.initial(pg) as AnyFacetsMainState);

  if (!state) {
    console.error("Unknown tab", tab);
    return;
  }

  return state.updateClearFacets();
}

export abstract class FacetsMainState<GroupKey extends string, FacetKey extends string> extends Dispatchable<{
  pg: PlangsGraph;
  currentGroupKey: GroupKey;
  values: Map2<GroupKey, FacetKey, AnyValue>;
}> {
  /** Attempt to reconstruct the state from a serialized value (ex: a value coming from the URL fragment). */
  // biome-ignore lint/suspicious/noExplicitAny: this data is the result of a de/serialization process and is not typed.
  static deserialize<GK extends string, FK extends string>(groupsByFacetKey: Map<FK, GK>, genericData: any): Map2<GK, FK, AnyValue> {
    const result = new Map2<GK, FK, AnyValue>();
    if (!genericData) return result;
    for (const [facetKey, rawValue] of Object.entries(genericData)) {
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

  doSetCurrentGroup(groupKey: GroupKey): void {
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
  // biome-ignore lint/suspicious/noExplicitAny: coming from deserialize we'll have to deal with it.
  doResetAll(values?: any): void {
    if (values) {
      this.data.values = FacetsMainState.deserialize<GroupKey, FacetKey>(this.gkByFk, values);
    } else {
      this.values.clear();
    }
    this.doSetCurrentGroup(this.nav.default);
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
    for (const v of this.values.getMap(groupKey)?.values() ?? []) {
      if (v.isPresent) return true;
    }
    return false;
  }

  groupTitle(key: GroupKey) {
    return this.groupsConfig.get(key)?.title ?? key;
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
    try {
      super.dispatch();

      const data = this.serialized;
      window.fragment.pushState(FragmentTracker.serialize(data));
      updateLocalStorage(this.tab, "inputs", data);
      updateThumbns(this.results);

      this.updateClearFacets();
    } catch (err) {
      console.error(err);
    }
    return this;
  }

  /** Abstract Methods. */

  /** Tab displaying the filters. */
  abstract readonly tab: TAB;

  /** Navigation configuration. */
  abstract readonly nav: { groupKeys: GroupKey[][]; default: GroupKey };

  /** Which group a facet key belongs to. */
  abstract readonly gkByFk: Map<FacetKey, GroupKey>;

  /** Configuration of the groups. */
  abstract readonly groupsConfig: Map<GroupKey, { title: string }>;

  /** The component that defines the content of a facet group. */
  abstract readonly groupsComponent: FunctionComponent<{ currentFacetGroup: string }>;

  /** A set of vertex keys that are the result of applying the filters. */
  abstract get results(): Set<string>;
}
