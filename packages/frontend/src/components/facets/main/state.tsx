import type { JSX } from "preact/jsx-runtime";

import { Dispatchable, useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { Map2 } from "@plangs/graph/map2";
import type { PlangsGraph } from "@plangs/plangs/index";

import type { AnyValue } from "@plangs/graph/value";
import type { Ref } from "preact";
import type { FacetsMainProps } from "./facets-main";
import { DEFAULT_GROUP, GROUP_LABELS, NAV, PlangsFacetGroups } from "./plangs";

export type FacetsMainState = DummyFacetsState | PlangsFacetsState;

export function useFacetState(props: FacetsMainProps & { thumbns: Ref<HTMLDivElement[]> }): FacetsMainState {
  if (props.tab === "plangs") return useDispatchable(PlangsFacetsState.initial(props));
  return DummyFacetsState.initial(props);
}

type GroupKey = string;
type FacetKey = string;

export abstract class BaseState extends Dispatchable<
  FacetsMainProps & { currentGroupKey: GroupKey; values: Map2<GroupKey, FacetKey, AnyValue>; thumbns: Ref<HTMLDivElement[]> }
> {
  /** Update the props, dispatch as necessary. */
  update(props: FacetsMainProps): void {
    if (this.data.pg === props.pg && this.data.tab === props.tab) return;
    Object.assign(this.data, props);

    if (!this.dispatcher) return;

    if (this.data.tab === "plangs" && !(this instanceof PlangsFacetsState)) {
      // Switch to the correct state, instead of dispatching a clone of this.
      this.dispatcher(new PlangsFacetsState(this.data) as this);
    } else {
      this.dispatch(); // if the instance is correct, just dispatch.
    }
  }

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
    console.log("UPDATE:", this.thumbns);
    this.dispatch();
  }

  /** Queries */

  get thumbns(): HTMLDivElement[] {
    const { thumbns } = this.data;
    return thumbns && "current" in thumbns ? (thumbns.current ?? []) : [];
  }

  get values() {
    return this.data.values;
  }

  get pg(): PlangsGraph | undefined {
    return this.data.pg;
  }

  get currentGroupKey(): GroupKey {
    return this.data.currentGroupKey;
  }

  groupTitle(groupKey: GroupKey): string {
    return groupKey;
  }

  /** Links to FacetGroups appear in groups. */
  get nav(): GroupKey[][] {
    return [];
  }

  /** Return a component to render the facet groups. */
  get facetGroupsComponent(): FacetsGroupComponent {
    return () => null;
  }

  isActive(groupKey: GroupKey): boolean {
    return this.values.size2(groupKey) > 0;
  }
}

/** A p/react function component to render a facet group. */
type FacetsGroupComponent = ({ currentFacetGroup }: { currentFacetGroup: string }) => JSX.Element | null;

/** The dummy state is a catcher for the error of supplying the wrong TAB prop. */
export class DummyFacetsState extends BaseState {
  static initial(props: FacetsMainProps): DummyFacetsState {
    return new DummyFacetsState({ ...props, currentGroupKey: "", values: new Map2(), thumbns: { current: null } });
  }
}

export class PlangsFacetsState extends BaseState {
  static initial(props: FacetsMainProps & { thumbns: Ref<HTMLDivElement[]> }): PlangsFacetsState {
    return new PlangsFacetsState({ ...props, currentGroupKey: DEFAULT_GROUP, values: new Map2() });
  }

  get nav(): GroupKey[][] {
    return NAV;
  }

  override groupTitle(key: GroupKey): string {
    return GROUP_LABELS[key as keyof typeof GROUP_LABELS] ?? key;
  }

  override get facetGroupsComponent(): FacetsGroupComponent {
    return PlangsFacetGroups;
  }
}
