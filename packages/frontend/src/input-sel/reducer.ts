import type { Item } from "../input-compl/reducer";
export type { Item } from "../input-compl/reducer";

export type State = {
  selected: Item[];
  onAdd: (item: Item) => void;
  onRemove: (data: ItemRemoved) => void;
};

export type ItemRemoved = {
  by: "click" | "enterKey";
  index: number;
  item: Item;
  itemsLeft: number;
};

export type ActionAdd = { kind: "add"; item: Item };
export type ActionRemove = { kind: "remove"; key: Item[0]; by: ItemRemoved["by"] };
export type Actions = ActionAdd | ActionRemove;

export function reducer(state: State, action: Actions): State {
  const { selected } = state;

  if (action.kind === "add") {
    const existing = selected.find(([key]) => key === action.item[0]);
    if (existing) return state;
    state.onAdd(action.item);
    return { ...state, selected: [...selected, action.item] };
  }

  if (action.kind === "remove") {
    let idx: number | undefined;
    const filtered = selected.filter(([key], index) => {
      if (key !== action.key) return true;
      idx = index;
      return false;
    });
    if (idx === undefined) return state;
    state.onRemove({ index: idx, item: selected[idx], itemsLeft: filtered.length, by: action.by });
    return { ...state, selected: filtered };
  }

  return state;
}
