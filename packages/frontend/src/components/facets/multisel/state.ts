import { Dispatchable } from "@plangs/frontend/dispatchable";

export class FacetMultiState extends Dispatchable<{
  value: Set<string>; // Set preserves insertion order.
}> {
  static initial(): FacetMultiState {
    return new FacetMultiState({ value: new Set() });
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

  /** Queries */

  get value() {
    return this.data.value;
  }

  get hasSelection(): boolean {
    return this.value.size > 0;
  }
}
