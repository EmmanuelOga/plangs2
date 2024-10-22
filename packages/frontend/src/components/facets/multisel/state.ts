import { Dispatchable } from "@plangs/frontend/dispatchable";

export class FacetMultiState extends Dispatchable<{
  selected: Set<string>; // Set preserves insertion order.
}> {
  static initial(): FacetMultiState {
    return new FacetMultiState({ selected: new Set() });
  }

  /** Actions */

  doAdd(values: (string | undefined)[]): boolean {
    let added = false;
    const { selected } = this.data;
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
    const { selected } = this.data;
    for (const [i, value] of values.entries()) {
      if (!value || !selected.has(value)) continue;
      selected.delete(value);
      removed = true;
    }
    if (removed) this.dispatch();
    return removed;
  }

  /** Queries */

  get values() {
    return this.data.selected;
  }

  get hasSelection(): boolean {
    return this.values.size > 0;
  }
}
