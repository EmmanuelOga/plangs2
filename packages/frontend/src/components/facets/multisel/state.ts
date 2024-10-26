import { Dispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { Filter } from "packages/auxiliar/src/filters";

export class FacetMultiState extends Dispatchable<{
  value: Filter<string>; // Set preserves insertion order.
}> {
  static initial({ value }: { value: Filter<string> }): FacetMultiState {
    return new FacetMultiState({ value });
  }

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
    this.value.mode = mode === "all" ? "all" : "any";
  }

  /** Queries */

  get value() {
    return this.data.value;
  }

  get hasSelection(): boolean {
    return this.value.size > 0;
  }
}
