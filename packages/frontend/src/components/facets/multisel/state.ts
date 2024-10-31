import { Filter } from "@plangs/auxiliar/filters";
import { Dispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { AnyFacetsMainState } from "@plangs/frontend/components/facets/main/state";

type Val = string | number | boolean;

/** NOTE: we don't need to dispatch when calling actions of the main state. */
export class FacetMultiState extends Dispatchable<{
  facetKey: string;
  groupKey: string;
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
    return main.values.getOrSet(groupKey, facetKey, () => new Filter("any")) as Filter<string | number | boolean>;
  }

  get hasSelection(): boolean {
    return this.value.size > 0;
  }
}
