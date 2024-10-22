import { Dispatchable, useDispatchable } from "@plangs/frontend/dispatchable";

import type { JSX } from "preact/jsx-runtime";
import type { FacetsMainProps } from "./facets-main";
import { PLANGS_DEFAULT_FACET, PLANGS_FACET_GROUPS, PLANGS_NAV } from "./plangs";

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

  doSetCurrent(key: string): void {
    this.data.current = key;
    this.dispatch();
  }

  isCurrent(key: string): boolean {
    return this.data.current === key;
  }

  /** Get the title of the group from its component. */
  groupTitle(key: string): string {
    return this.groupsByKey[key]?.props.title ?? key;
  }

  /** Navigation to facet groups. */
  get nav(): string[][] {
    return [];
  }

  /** Facet groups for the entity type. */
  get groupsByKey(): Record<string, JSX.Element> {
    return {};
  }

  /** This should return all the groups, with adjusted visibility according to `this.data.current`.  */
  get groups(): JSX.Element[] {
    return [];
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
    return new PlangsFacetsState({ ...props, current: PLANGS_DEFAULT_FACET });
  }

  get nav(): string[][] {
    return PLANGS_NAV;
  }

  /** Facet groups for the entity type. */
  override get groupsByKey(): Record<string, JSX.Element> {
    return PLANGS_FACET_GROUPS;
  }

  get groups(): JSX.Element[] {
    const groups = Object.entries(this.groupsByKey).map(([key, group]) => {
      const show = this.isCurrent(key);
      if (group.props.visible === show) return group;
      group.key = `${key}-${show}`;
      group.props.visible = show;
      group.props.pg = this.data.pg;
      return group;
    });

    return groups;
  }
}
