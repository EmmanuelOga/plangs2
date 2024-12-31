import type { FunctionComponent } from "preact";

import { debounce } from "@plangs/auxiliar/debounce";
import { Map2 } from "@plangs/auxiliar/map2";
import { type AnyValue, deserializeValue } from "@plangs/auxiliar/value";
import { Dispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { $, elems } from "@plangs/frontend/auxiliar/dom";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { getStore } from "@plangs/frontend/auxiliar/storage";
import { iconButonId } from "@plangs/frontend/components/icon-button";
import type { ToggleClearFacets } from "@plangs/frontend/components/icon-button/state";
import type { Vertices } from "@plangs/graphgen/library";
import { matchVerticesFromGroups } from "@plangs/plangs/facets";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";
import type { PlangsPage } from "@plangs/server/components/layout";

/** State for the facets browser, extended by each specific Facet Browser for each Vertex. */
export abstract class FacetsMainState<GroupKey extends string, FacetKey extends string> extends Dispatchable<{
  pg: PlangsGraph;
  currentGroupKey: GroupKey;
  values: Map2<GroupKey, FacetKey, AnyValue>;
  mode: "all" | "any";
}> {
  /** Attempt to reconstruct the state from a serialized value (ex: a value coming from the URL fragment). */
  static deserialize<GK extends string, FK extends string>(
    groupsByFacetKey: Map<FK, GK>,
    genericData: any,
  ): [{ mode: "all" | "any" }, Map2<GK, FK, AnyValue>] {
    const map2 = new Map2<GK, FK, AnyValue>();
    const mode: { mode: "all" | "any" } = { mode: "any" };
    if (!genericData) return [mode, map2];
    for (const [facetKey, rawValue] of Object.entries(genericData)) {
      if (facetKey === "mode" && (rawValue === "all" || rawValue === "any")) {
        mode.mode = rawValue;
        continue;
      }
      const groupKey = groupsByFacetKey.get(facetKey as FK);
      if (!groupKey) {
        console.error("missing group for facet", facetKey);
        continue;
      }
      const value = deserializeValue(rawValue);
      if (value?.isPresent) {
        map2.set(groupKey, facetKey as FK, value);
      } else {
        console.error("failed to deserialize value", facetKey, rawValue);
      }
    }
    return [mode, map2];
  }

  doSetCurrentGroup(groupKey: GroupKey): void {
    this.data.currentGroupKey = groupKey;
    getStore(this.page).update("facets-last-group", groupKey);
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
      const [{ mode }, map2] = FacetsMainState.deserialize<GroupKey, FacetKey>(this.gkByFk, values);
      this.data.values = map2;
      this.data.mode = mode;
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
      if (!values.has(groupKey, facetKey) || !value.equalTo(values.get(groupKey, facetKey))) {
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

  doSetMode(mode: "all" | "any"): void {
    this.data.mode = mode;
    this.dispatch();
  }

  /** Queries */

  get pg(): PlangsGraph {
    return this.data.pg;
  }

  get values() {
    return this.data.values;
  }

  get mode() {
    return this.data.mode;
  }

  get serialized(): Record<string, any> {
    const data: Record<string, any> = { mode: this.data.mode };
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

  get anyValues(): boolean {
    return this.values.values().some(v => v.isPresent);
  }

  groupTitle(key: GroupKey) {
    return this.groupsConfig.get(key)?.title ?? key;
  }

  /** Helpers */

  /** A static thumbnail grid will be render server side, we just need to show or hide each element.  */
  _updateThumbs() {
    const selection = this.values.filter((g, f, v) => v.isPresent);

    // Don't bother filtering if there are no values.
    const vertexKeys = selection.isEmpty
      ? undefined
      : // biome-ignore lint/suspicious/noExplicitAny: the loop up next can handle any kind of key returned.
        matchVerticesFromGroups(this.pg[this.vertexName] as Vertices<any>, selection, this.data.mode);

    for (const div of elems("vertexThumbn")) {
      const vkey = div.dataset.vertexKey;
      if (!vkey) continue;
      const visible = vertexKeys === undefined || vertexKeys.has(vkey);
      div.classList.toggle("hidden", !visible);
    }
  }

  updateThumbns = debounce(this._updateThumbs.bind(this), 30);

  /**
   * Run any side effects without dispatching.
   * Useful for instance on start, for instance: where we don't want to dispatch
   * (hence render twice) but we do want to setup a clean state.
   */
  runEffects(persist: "persist" | "" = ""): this {
    if (persist === "persist") {
      const data = this.serialized;
      this.pushState(data);
      getStore(this.page).update("facet-value", data);
    }
    this.updateThumbns();
    this.updateClearFacets();
    return this;
  }

  /** Update the clear facets button on the toolbar. */
  private updateClearFacets() {
    // This needs to be delayed to give preact time to render and setup the state of the button on an effect.
    // TODO: refactor this into a more straightforward solution.
    setTimeout(() => {
      const clearAll = $<HTMLElement & { state?: ToggleClearFacets }>(`#${iconButonId("clearFacets")}`);
      clearAll?.state?.doToggleMode(this.anyValues ? "clearFacets" : "");
    }, 100);
  }

  /** Push state to the history, but debounced. */
  private pushState = debounce(
    ((data: typeof this.serialized) => {
      window.fragment.pushState(FragmentTracker.serialize(data));
    }).bind(this),
    50,
  );

  override dispatch(): this {
    try {
      super.dispatch();
      this.runEffects("persist");
    } catch (err) {
      console.error(err);
    }
    return this;
  }

  /** Abstract Methods. */

  /** Page displaying the filters. */
  abstract readonly page: PlangsPage;

  /** Navigation configuration. */
  abstract readonly nav: { groupKeys: GroupKey[][]; default: GroupKey };

  /** Which group a facet key belongs to. */
  abstract readonly gkByFk: Map<FacetKey, GroupKey>;

  /** Configuration of the groups. */
  abstract readonly groupsConfig: Map<GroupKey, { title: string }>;

  /** The component that defines the content of a facet group. */
  abstract readonly groupsComponent: FunctionComponent<{ currentFacetGroup: string }>;

  abstract readonly vertexName: TPlangsVertexName;
}
