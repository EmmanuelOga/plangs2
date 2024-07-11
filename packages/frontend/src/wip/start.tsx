// biome-ignore lint/style/useImportType: h is not just a type, is used for JSX rendering.
import { h, render } from "preact";
import { useEffect, useState } from "preact/hooks";

import { Plangs, loadContext, type PlangsContext } from "./state/context";

function ContextWrapper({ children, onContextLoad }) {
  const [pg, setPg] = useState<PlangsContext | "error">();
  useEffect(() => {
    if (pg) return;
    loadContext().then((pg) => {
      setPg(pg);
      onContextLoad?.(pg);
    });
  });
  return <Plangs.Provider value={pg}>{children}</Plangs.Provider>;
}

export function start(cssId: string, app: h.JSX.Element, onContextLoad?: (ctx: PlangsContext) => void) {
  const elem = document.getElementById(cssId);
  if (!elem) throw new Error(`Element not found: ${cssId}`);
  render(<ContextWrapper onContextLoad={onContextLoad}>{app}</ContextWrapper>, elem);
}
