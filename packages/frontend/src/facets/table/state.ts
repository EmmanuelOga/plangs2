import { Filter } from "@plangs/auxiliar/filters";
import { Dispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { AnyFacetsMainState } from "@plangs/frontend/facets/main/use_state";

import { type Column, type Entry, type Order, type Val, opposite, sortEntries } from "./entries";
import type { FacetTableProps } from "./facet-table";

type StateData<GroupKey extends string, FacetKey extends string> = Pick<FacetTableProps<GroupKey, FacetKey>, "config" | "facetKey" | "groupKey"> & {
  main: AnyFacetsMainState;
  entries: Entry[];
  order: Order;
  filter: string;
};

export class FacetTableState<GroupKey extends string, FacetKey extends string> extends Dispatchable<StateData<GroupKey, FacetKey>> {
  /** Actions */

  doSetValue(val: Filter<Val>): "changed" | "unchanged" {
    const { main, data } = this;
    return main.doSetValue(data.groupKey, data.facetKey, val);
  }

  doToggle(val: Val) {
    const { value } = this;
    value.has(val) ? value.delete(val) : value.add(val);
    this.doSetValue(value);
  }

  doSetMode(mode: "all" | "any"): void {
    const { value } = this;
    if (value.mode === mode) return;
    this.value.mode = mode === "all" ? "all" : "any";
    this.doSetValue(value);
  }

  // Note that this is the only place where we dispatch locally instead of through the main state.
  doToggleOrder(col: Column) {
    const { order } = this.data;
    this.data.order = opposite(col, order);
    sortEntries(this.data.entries, this.data.order, entry => this.value.has(entry.value));
    this.dispatch();
  }

  doResetSelection() {
    this.value.clear();
    this.doSetValue(this.value);
  }

  doSetFilter(value: string): void {
    this.data.filter = value;
    this.dispatch();
  }

  /** Queries */

  get main() {
    return this.data.main;
  }

  get filter() {
    return this.data.filter;
  }

  /** Selected values. */
  get value() {
    const { main, groupKey, facetKey } = this.data;
    return main.values.getOrSet(groupKey, facetKey, () => new Filter("any")) as Filter<Val>;
  }

  /** All entries. */
  get filteredEntries() {
    if (this.filter === "") return this.data.entries;
    const pattern = this.filter.toLowerCase();
    return this.data.entries.filter(entry => entry.label.toLowerCase().includes(pattern));
  }

  get order() {
    return this.data.order;
  }
}
