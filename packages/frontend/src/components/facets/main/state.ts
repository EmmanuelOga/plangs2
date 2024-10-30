import type { JSX } from "preact/jsx-runtime";

import { Map2 } from "@plangs/auxiliar/map2";
import { type AnyValue, deserializeValue } from "@plangs/auxiliar/value";
import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { NPlang, PlangsGraph } from "@plangs/plangs";
import type { PlangFacetKey } from "@plangs/plangs/facets/plangs";
import type { TAB } from "@plangs/server/components/layout";

import { updateThumbns } from "./grid";
import { DEFAULT_GROUP, GROUP_LABELS, NAV, type PlangFacetGroupKey, PlangsFacetGroups } from "./plangs";
import { facetsFromFragment, facetsFromLocalStorage, updateFragment, updateLocalStorage } from "./storage";

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
  initialValues?: SerializedFacets<FacetKey>;
}> {
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

    // We want to hold-off dispatch and side effects until child components have used these values.
    if (this.data.initialValues) return;

    this.sideEffects();
    this.dispatch();
  }

  sideEffects() {
    const data = this.serialized;
    updateFragment(data);
    updateLocalStorage(this.tab, data);
    updateThumbns(this.results);
  }

  /**
   * This should be called once after the first render:
   * The presence of initial values is used to hold-off rendering and sideEffects
   * while the components are loading the initial values.
   */
  doRemoveInitialValues() {
    if (!this.data.initialValues) return;
    this.data.initialValues = undefined;
    this.sideEffects();
    this.dispatch();
  }

  /** Queries */

  /** Return an initial value. If any, it will only be available on first render. */
  initialValue(key: FacetKey): ReturnType<AnyValue["serializable"]> {
    return this.data.initialValues?.[key];
  }

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
  static initial(pg: PlangsGraph, tab: TAB): PlangsFacetsState {
    return new PlangsFacetsState({
      pg,
      tab,
      values: new Map2(),
      currentGroupKey: DEFAULT_GROUP,
      initialValues: facetsFromFragment() ?? facetsFromLocalStorage(tab),
    });
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

/** Compare the state values to serialized values, used whatever is current state as reference. */
// biome-ignore lint/suspicious/noExplicitAny: The serialized data is not strictly typed.
function isEqualData(reference: Map2<string, string, AnyValue>, serialized: Partial<Record<string, any>> | undefined): boolean {
  if (serialized === undefined) return reference.size === 0;
  for (const [_, fk, value] of reference.flatEntries()) {
    const other = deserializeValue(serialized[fk]);
    if (!other || !other.isPresent || !other.equalTo(value)) return false;
  }
  return true;
}
