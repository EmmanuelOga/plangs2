import { Dispatchable, useDispatchable } from "@plangs/frontend/dispatchable";

import type { JSX } from "preact/jsx-runtime";
import type { FacetsMainProps } from "./facets-main";
import { DEFAULT_GROUP, GROUP_LABELS, NAV, PlangsFacetGroups } from "./plangs";

export type FacetsMainState = DummyFacetsState | PlangsFacetsState;

export function useFacetState(props: FacetsMainProps): FacetsMainState {
  if (props.tab === "plangs") return useDispatchable(PlangsFacetsState.initial(props));
  return DummyFacetsState.initial(props);
}

export abstract class BaseState extends Dispatchable<FacetsMainProps & { current: string }> {
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

  doSetCurrent(key: string): void {
    this.data.current = key;
    this.dispatch();
  }

  /** Queries */

  get current(): string {
    return this.data.current;
  }

  isCurrent(key: string): boolean {
    return this.data.current === key;
  }

  /** Get the title of the group from its component. */
  groupTitle(key: string): string {
    return key;
  }

  /** Navigation to facet groups. */
  get nav(): string[][] {
    return [];
  }

  /** Return a component to render the facet groups. */
  get facetGroupsComponent(): ({ current }: { current: string }) => JSX.Element | null {
    return () => null;
  }
}

/** The dummy state is a catcher for the error of supplying the wrong TAB prop. */
export class DummyFacetsState extends BaseState {
  static initial(props: FacetsMainProps): DummyFacetsState {
    return new DummyFacetsState({ ...props, current: "" });
  }
}

export class PlangsFacetsState extends BaseState {
  static initial(props: FacetsMainProps): PlangsFacetsState {
    return new PlangsFacetsState({ ...props, current: DEFAULT_GROUP });
  }

  get nav(): string[][] {
    return NAV;
  }

  override groupTitle(key: string): string {
    return GROUP_LABELS[key as keyof typeof GROUP_LABELS] ?? key;
  }

  override get facetGroupsComponent(): ({ current }: { current: string }) => JSX.Element | null {
    return PlangsFacetGroups;
  }
}
