import { Filter } from "@plangs/auxiliar/filters";
import { Dispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { AnyFacetsMainState } from "@plangs/frontend/facets/main/use_state";

type Val = string | number | boolean;

/** NOTE: we don't need to dispatch when calling actions of the main state. */
export class FacetMultiState<GroupKey extends string, FacetKey extends string> extends Dispatchable<{
  groupKey: GroupKey;
  facetKey: FacetKey;
  main: AnyFacetsMainState;
}> {
  /** Actions */

  doSetValue(val: Filter<Val>): "changed" | "unchanged" {
    const { main, data } = this;
    return main.doSetValue(data.groupKey, data.facetKey, val);
  }

  doAdd(val: Val): boolean {
    if (!val) return false;
    const { value } = this;
    if (value.has(val)) return false;
    value.add(val);
    return this.doSetValue(value) === "changed";
  }

  doRemove(val: string | undefined): boolean {
    if (!val) return false;
    const { value } = this;
    if (!value.has(val)) return false;
    value.delete(val);
    return this.doSetValue(value) === "changed";
  }

  doSetMode(mode: "all" | "any"): void {
    const { value } = this;
    if (value.mode === mode) return;
    this.value.mode = mode === "all" ? "all" : "any";
    this.doSetValue(value);
  }

  /** Queries */

  get main() {
    return this.data.main;
  }

  get value() {
    const { main, groupKey, facetKey } = this.data;
    return main.values.getOrSet(groupKey, facetKey, () => new Filter("any")) as Filter<Val>;
  }
}
