/**
 * State for InputCompl component.
 */
export type State = {
  candidates: number[];
  complData?: [unknown, string][];
  onSelect?: (data: unknown) => void;
  query: string;
  selected: number;
  showPopup: boolean;
};

export type ActionKey = { kind: "key"; from: "input" | "list" | "item"; key: string };
export type ActionPopup = { kind: "popup"; show: boolean };
export type ActionQuery = { kind: "updateQuery"; query: string };
export type ActionSelectIndex = { kind: "selectIndex"; index: number };
export type Actions = ActionKey | ActionPopup | ActionQuery | ActionSelectIndex;

// biome-ignore format: do not add new lines.
export function reducer(state: State, action: Actions): State {
  switch (action.kind) {
    case "key": return handleKey(state, action);
    case "popup": return handlePopup(state, action);
    case "updateQuery": return handleUpdateQuery(state, action);
    case "selectIndex": return handleSelectIndex(state, action);
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

function handleKey(state: State, { from, key }: ActionKey): State {
  const { showPopup, candidates } = state;

  if (key === "ArrowDown" || key === "ArrowUp") {
    if (from === "input" && !showPopup && candidates.length > 0) {
      return handlePopup({ ...state, selected: 0 }, { kind: "popup", show: true });
    }
    return adjustSelection(state, key === "ArrowDown" ? 1 : -1);
  }

  if (key !== "Enter") return state;
  if (!state.showPopup) return handlePopup(state, { kind: "popup", show: true });

  if (state.onSelect) {
    const elem = state.complData?.[state.candidates[state.selected]];
    if (elem) state.onSelect(elem);
  }

  return handleUpdateQuery({ ...state, showPopup: false }, { kind: "updateQuery", query: "" });
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

function handleUpdateQuery(state: State, { query }: ActionQuery): State {
  const { query: prevQuery, showPopup } = state;
  if (query === prevQuery) return state;

  const candidates: number[] = [];

  const q = query.toLowerCase();
  state.complData?.forEach(([_, val], idx) => {
    if (val.toLowerCase().includes(q)) candidates.push(idx);
  });

  return {
    ...state,
    candidates,
    query,
    selected: 0,
    showPopup: showPopup && q.length > 0,
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
