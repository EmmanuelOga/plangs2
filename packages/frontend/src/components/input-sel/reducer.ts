import { Dispatchable } from "@plangs/frontend/dispatchable";

export type Item = {
  value: unknown;
  label: string;
};

export type ItemRemoved = {
  by: "click" | "enterKey";
  index: number;
  inputName: string;
  removed: Item;
  itemsLeft: number;
};

export class InputSelState extends Dispatchable<{
  cssClass?: string;
  inputName: string;
  onAdd: (item: Item) => void;
  onRemove: (data: ItemRemoved) => void;
  selected: Item[];
}> {
  add(item: Item) {
    if (this.has(item.value)) return;
    this.selected.push(item);
    this.data.onAdd(item);
    this.dispatch();
  }

  remove(value: Item["value"], by: ItemRemoved["by"]) {
    const { removed, index, filtered } = this.selectedWithout(value);
    if (!removed) return;
    this.data.selected = filtered;
    this.data.onRemove({ by, removed, index, inputName: this.data.inputName, itemsLeft: filtered.length });
    this.dispatch();
  }

  update(inputName: string, cssClass?: string) {
    this.data.inputName = inputName;
    this.data.cssClass = cssClass;
    this.dispatch();
  }

  get selected(): Item[] {
    return this.data.selected;
  }

  has(value: Item["value"]): boolean {
    return this.selected.some(item => item.value === value);
  }

  selectedWithout(value: Item["value"]): { index: number; removed?: Item; filtered: Item[] } {
    const result = { index: -1, removed: undefined as Item | undefined, filtered: [] as Item[] };
    result.filtered = this.selected.filter((item, index) => {
      if (item.value !== value) return true;
      result.removed = item;
      result.index = index;
      return false;
    });
    return result;
  }
}
