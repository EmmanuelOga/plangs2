// biome-ignore lint/style/useImportType: h is not just a type, is used for JSX rendering.
import { h, render } from "preact";
import { useEffect, useState } from "preact/hooks";

import { Plangs, loadPlangs, type PlangsContext } from "./state/context";

function ContextWrapper({ children }) {
  const [pg, setPg] = useState<PlangsContext | "error">();
  useEffect(() => {
    if (pg) return;
    loadPlangs().then((pg) => setPg(pg));
  });
  return <Plangs.Provider value={pg}>{children}</Plangs.Provider>;
}

export function start(cssId: string, app: h.JSX.Element) {
  const elem = document.getElementById(cssId);
  if (!elem) throw new Error(`Element not found: ${cssId}`);
  render(<ContextWrapper>{app}</ContextWrapper>, elem);
}
