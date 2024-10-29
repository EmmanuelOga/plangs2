import { Dispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { Filter } from "packages/auxiliar/src/filters";
import type { AnyFacetsMainState } from "../main/state";

export class FacetMultiState extends Dispatchable<{
  facetKey: string;
  groupKey: string;
  main: AnyFacetsMainState;
  value: Filter<string | number | boolean>; // Set preserves insertion order.
}> {
  /** Actions */

  doAdd(values: (string | undefined)[]): boolean {
    let added = false;
    const { value } = this.data;
    for (const item of values) {
      if (!item || value.has(item)) continue;
      value.add(item);
      added = true;
    }
    if (added) this.dispatch();
    return added;
  }

  /** Returns the nth next button to focus, if there still values. */
  doRemove(values: (string | undefined)[]): boolean {
    let removed = false;
    const { value } = this.data;
    for (const [i, item] of values.entries()) {
      if (!item || !value.has(item)) continue;
      value.delete(item);
      removed = true;
    }
    if (removed) this.dispatch();
    return removed;
  }

  doSetMode(mode: "all" | "any"): void {
    if (this.value.mode === mode) return;
    this.value.mode = mode === "all" ? "all" : "any";
    this.dispatch();
  }

  /** Queries */

  get value() {
    return this.data.value;
  }

  get hasSelection(): boolean {
    return this.value.size > 0;
  }

  /** Dispatching on the the parent will trigger a render here too, so no need to dispatch twice. */
  override runDispatcher(): this {
    const { main, groupKey, facetKey, value } = this.data;
    main.doSetValue(groupKey, facetKey, value.clone());
    return this;
  }
}
