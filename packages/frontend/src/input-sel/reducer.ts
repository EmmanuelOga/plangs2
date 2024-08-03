export type State = {
  inputName: string;
  selected: Item[];
  onAdd: (item: Item) => void;
  onRemove: (data: ItemRemoved) => void;
};

export type Item = {
  value: unknown;
  label: string;
};

export type ItemRemoved = {
  by: "click" | "enterKey";
  index: number;
  inputName: string;
  item: Item;
  itemsLeft: number;
};

export type ActionUpdate = { kind: "update"; inputName: string };
export type ActionAdd = { kind: "add"; item: Item };
export type ActionRemove = { kind: "remove"; value: Item["value"]; by: ItemRemoved["by"] };
export type Actions = ActionAdd | ActionRemove | ActionUpdate;

export function reducer(state: State, action: Actions): State {
  const { selected } = state;

  if (action.kind === "add") {
    const existing = selected.find(({ value }) => value === action.item.value);
    if (existing) return state;
    state.onAdd(action.item);
    return { ...state, selected: [...selected, action.item] };
  }

  if (action.kind === "remove") {
    let idx: number | undefined;
    const filtered = selected.filter(({ value }, index) => {
      if (value !== action.value) return true;
      idx = index;
      return false;
    });
    if (idx === undefined) return state;
    state.onRemove({
      index: idx,
      item: selected[idx],
      itemsLeft: filtered.length,
      by: action.by,
      inputName: state.inputName,
    });
    return { ...state, selected: filtered };
  }

  if (action.kind === "update") {
    if (state.inputName === action.inputName) return state;
    return { ...state, inputName: action.inputName };
  }

  return state;
}
