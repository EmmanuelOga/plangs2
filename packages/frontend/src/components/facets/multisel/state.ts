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
    const { value: selected } = this.data;
    for (const value of values) {
      if (!value || selected.has(value)) continue;
      selected.add(value);
      added = true;
    }
    if (added) this.dispatch();
    return added;
  }

  /** Returns the nth next button to focus, if there still values. */
  doRemove(values: (string | undefined)[]): boolean {
    let removed = false;
    const { value: selected } = this.data;
    for (const [i, value] of values.entries()) {
      if (!value || !selected.has(value)) continue;
      selected.delete(value);
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
