/** Data for an `onSelect` callback. */
export type ItemSelected = {
  /** Name attribute of the `<input-compl/>` element. */
  inputName: string;
  value: unknown;
  label: string;
};

export type CompletionItem = {
  value: unknown;
  label: string;
  /** Pattern to match on keypress, typically the lower-case version of the label. */
  pattern: string;
};

/**
 * State for InputCompl component.
 */
export type State = {
  /** The candidates will be an array of indices into completions. */
  candidates: number[];
  /** Built from the provided completions props. */
  completions: CompletionItem[];
  /** Name assigned to the `<input-compl/>` element. */
  name: string;
  cssClass?: string;
  onSelect: (data: ItemSelected) => void;
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

/** Update anything: mostly used to update state from `props` changes. */
function handleUpdate(state: State, { state: newState }: ActionUpdate): State {
  // The dummy query ensures the candidates are updated.
  return handleUpdateQuery({ ...state, query: "[DUMMY]", ...newState }, { kind: "updateQuery", query: "" });
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

    const offset = key === "ArrowDown" ? 1 : -1;
    const newSelected = (state.selected + candidates.length + offset) % candidates.length;
    if (state.selected !== newSelected) return { ...state, selected: newSelected };
    return state;
  }

  if (key !== "Enter") return state;

  if (!state.showPopup) return handlePopup(state, { kind: "popup", show: true });

  const elem = state.completions[state.candidates[state.selected]];
  state.onSelect({ inputName: state.name, value: elem.value, label: elem.label });

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

function handleUpdateQuery(state: State, { query }: ActionQuery): State {
  const { query: prevQuery } = state;
  if (query === prevQuery) return state;

  const candidates: number[] = [];

  const q = query.trim().toLowerCase();
  state.completions.forEach(({ pattern }, idx) => {
    if (q.length === 0 || pattern.includes(q)) candidates.push(idx);
  });

  candidates.sort((a, b) => {
    const aLabel = state.completions[a].pattern;
    const bLabel = state.completions[b].pattern;

    const aMatchStart = aLabel.startsWith(q);
    const bMatchStart = bLabel.startsWith(q);

    if (aMatchStart && bMatchStart) return aLabel.localeCompare(bLabel);
    if (aMatchStart) return -1;
    if (bMatchStart) return 1;
    if (aLabel.length < bLabel.length) return -1;
    return aLabel.localeCompare(bLabel);
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
