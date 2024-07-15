export type Item = [unknown, string];

export type State = {
  selected: Item[];
};

export type ActionAdd = { kind: "add"; item: Item };
export type ActionRemove = { kind: "remove"; key: Item[0] };
export type Actions = ActionAdd | ActionRemove;

export function reducer(state: State, action: Actions): State {
  const { selected } = state;

  if (action.kind === "add") {
    const existing = selected?.find(([key]) => key === action.item[0]);
    if (existing) return state;
    return { selected: [...(selected || []), action.item] };
  }

  if (action.kind === "remove") {
    return { selected: selected?.filter(([key]) => key !== action.key) };
  }

  return state;
}
