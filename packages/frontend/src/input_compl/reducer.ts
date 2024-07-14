/** A completion item has a value and a label. */
export type Item = [unknown, string];

/**
 * State for InputCompl component.
 */
export type State = {
  /** The candidates will be an array of indices into completions. */
  candidates: number[];
  completions: Item[];
  onSelect?: (item: Item) => void;
  query: string;
  selected: number;
  showPopup: boolean;
};

export type ActionKeyPress = { kind: "keypress"; from: "input" | "list" | "item"; key: string };
export type ActionPopup = { kind: "popup"; show: boolean };
export type ActionQuery = { kind: "updateQuery"; query: string };
export type ActionSelectIndex = { kind: "selectIndex"; index: number };
export type ActionUpdate = { kind: "update"; state: Partial<State> };
export type Actions = ActionKeyPress | ActionPopup | ActionQuery | ActionSelectIndex | ActionUpdate;

// biome-ignore format: do not add new lines.
export function reducer(state: State, action: Actions): State {
  switch (action.kind) {
    case "keypress": return handleKeypress(state, action);
    case "popup": return handlePopup(state, action);
    case "selectIndex": return handleSelectIndex(state, action);
    case "update": return handleUpdate(state, action);
    case "updateQuery": return handleUpdateQuery(state, action);
    default: return state;
  }
}

////////////////////////////////////////////////////////////////////////////////

function adjustSelection(state: State, offset: 1 | -1): State {
  const { candidates, selected } = state;
  if (!candidates) return state;
  const newSelected = (state.selected + candidates.length + offset) % candidates.length;
  if (selected !== newSelected) return { ...state, selected: newSelected };
  return state;
}

function handleKeypress(state: State, { from, key }: ActionKeyPress): State {
  const { showPopup, candidates } = state;

  if (key === "Escape") {
    if (showPopup) return handlePopup(state, { kind: "popup", show: false });
    return state;
  }

  if (key === "ArrowDown" || key === "ArrowUp") {
    if (from === "input" && !showPopup && candidates.length > 0) {
      return handlePopup({ ...state, selected: 0 }, { kind: "popup", show: true });
    }
    return adjustSelection(state, key === "ArrowDown" ? 1 : -1);
  }

  if (key !== "Enter") return state;

  if (!state.showPopup) return handlePopup(state, { kind: "popup", show: true });

  if (state.onSelect) {
    const elem = state.completions[state.candidates[state.selected]];
    if (elem) state.onSelect(elem);
  }

  const queryLess = handleUpdateQuery(state, { kind: "updateQuery", query: "" });
  return handlePopup(queryLess, { kind: "popup", show: false });
}

function handlePopup(state: State, { show }: ActionPopup): State {
  const { candidates, showPopup } = state;
  const popupShowable = candidates.length > 0;
  if (!popupShowable) {
    if (showPopup) return { ...state, showPopup: false };
    return state;
  }
  if (showPopup === show) return state;
  return { ...state, showPopup: show };
}

function handleUpdate(state: State, { state: newState }: ActionUpdate): State {
  // The dummy query ensures the candidates are updated.
  return handleUpdateQuery({ ...state, query: "[DUMMY]", ...newState }, { kind: "updateQuery", query: "" });
}

function handleUpdateQuery(state: State, { query }: ActionQuery): State {
  const { query: prevQuery } = state;
  if (query === prevQuery) return state;

  const candidates: number[] = [];

  const q = query.trim().toLowerCase();
  state.completions.forEach(([_, val], idx) => {
    if (q.length === 0 || val.toLowerCase().includes(q)) candidates.push(idx);
  });

  return {
    ...state,
    candidates,
    query,
    selected: 0,
    showPopup: query.length > 0,
  };
}

function handleSelectIndex(state: State, { index }: ActionSelectIndex): State {
  const { candidates, selected } = state;
  if (!candidates) {
    if (selected !== 0) return { ...state, selected: 0 };
    return state;
  }
  if (index < 0 || index >= candidates.length || index === selected) return state;
  return { ...state, selected: index };
}
