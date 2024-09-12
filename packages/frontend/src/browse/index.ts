import { debounce } from "lodash-es";
import "preact/debug";

import { type N, type NPlang, PlangsGraph } from "@plangs/plangs";

import { type CompletionItem, type InputComplElement, registerInputCompl } from "../input-compl";
import { matchingInputSelByName, registerInputSel } from "../input-sel";
import { type PlangInfoElement, registerPlangInfo } from "../plang-info";

import { $, $$, on } from "../utils";

import { getDom } from "./dom";
import { getFilters } from "./filters";

function startBrowseNav(pg: PlangsGraph, dom: ReturnType<typeof getDom>) {
  function updatePlangs() {
    const filters = getFilters(dom.inputs);
    const keys = pg.plangs(filters);

    for (const div of dom.elems.plThumb) {
      const nodeId = div.dataset.key as NPlang["key"];
      div.classList.toggle("hide", !keys.has(nodeId));
    }
    // if (status) status.innerText = `Displaying ${keys.size} languages of ${pg.n_plang.size}.`;
  }

  updatePlangs();

  const debouncedUpdatePlangs = debounce(updatePlangs, 30);

  // Release data.

  on(dom.inputs.hasReleases, "input", (ev) => {
    const checked = (ev.target as HTMLInputElement).checked;
    dom.inputs.releasedAfter.classList.toggle("hide", !checked);
  });

  function completions(nodeKind: N): CompletionItem[] {
    const data: CompletionItem[] = [];
    for (const [key, node] of pg.nodes[nodeKind]) {
      data.push({ value: key, label: node.data.name ?? key, pattern: (node.data.name ?? key).toLowerCase() });
    }
    return data;
  }

  for (const compl of $$<InputComplElement>("input-compl")) {
    const [inputSel, source] = [matchingInputSelByName(compl), compl.dataset.kind as N];
    if (!inputSel) continue;
    if (!pg.nodes[source]) {
      console.warn("wrong source name (should be a kind of node):", source);
      continue;
    }
    compl.completions = completions(source);
    compl.onSelect((item) => inputSel.addItem(item));
    inputSel.onRemove(({ by, itemsLeft }) => {
      if (by === "enterKey" && itemsLeft === 0) compl.focus();
    });
  }

  // File Extension

  const extensions = dom.inputs.extensions as HTMLInputElement;
  const extensionsSel = matchingInputSelByName(extensions);

  if (extensions && extensionsSel) {
    on(extensions, "keypress", ({ key }: KeyboardEvent) => {
      if (key !== "Enter") return;
      const value = extensions.value.trim();
      if (value === "") return;
      const name = (value[0] === "." ? value : `.${value}`).toLowerCase();
      extensionsSel.addItem({ value: name, label: name });
      extensions.value = "";
    });
    extensionsSel.onRemove(({ by, itemsLeft }) => {
      if (by !== "enterKey" || itemsLeft !== 0) return;
      extensions.focus();
    });
  }

  // On input change, re-filter the list of languages.

  on(dom.elem.nav, "input", ({ target }) => {
    if ((target as HTMLInputElement)?.matches("input[name=plang-ext]")) return;
    debouncedUpdatePlangs();
  });

  // On lang click, display more information.

  function getPl(target: EventTarget | null): NPlang | undefined {
    const keyHolder = (target as Element).closest("[data-key]") as HTMLElement;
    if (!keyHolder || !keyHolder.dataset.key) return;
    return pg.nodes.pl.get(keyHolder.dataset.key as NPlang["key"]);
  }

  const plangInfo = dom.elem.plangInfo as PlangInfoElement;
  const langTab = document.querySelector("#top-nav lang") as HTMLDivElement;
  if (plangInfo && langTab) {
    on(dom.elem.plangs, "click", ({ target }) => {
      const pl = getPl(target);
      if (!pl) return;
      plangInfo.key = pl.key;
      langTab.classList.toggle("hide", false);
      langTab.setAttribute("href", `/${pl.plainKey}`);
      langTab.innerText = pl.name;
    });
  }

  // On double-click, open the language page.

  on(dom.elem.plangs, "dblclick", ({ target }) => {
    const pl = getPl(target);
    if (pl) window.location.href = `/${pl.plainKey}`;
  });

  // On click on a pl-pill in the infobox, update the infobox.

  on(dom.elem.plangInfo, "click", ({ target }) => {
    const pl = getPl(target);
    if (pl) plangInfo.key = pl.key;
  });
}

// Register the web components.
registerPlangInfo();
registerInputCompl();
registerInputSel();

// Do not use top level await.
(async () => {
  const data = await (await fetch("/plangs.json")).json();
  const pg = new PlangsGraph().loadJSON(data);

  $<PlangInfoElement>("plang-info")?.setDataSource(pg);

  const dom = getDom();

  startBrowseNav(pg, dom);

  try {
    // SSE listener to reload the page on changes.
    const es = new EventSource("/sse", { withCredentials: false });
    es.onmessage = ({ data: json }) => {
      const data = JSON.parse(json);
      if (data.event !== "info") window.location.reload();
    };
    es.onerror = (err) => {
      // TODO: for some reason we started getting this error after switching to newer bun.js:
      // GET http://localhost:5000/sse net::ERR_INCOMPLETE_CHUNKED_ENCODING 200 (OK)
      // console.error("SSE connection error.", err);
      // es.close();
    };
  } catch (err) {
    // console.warn(err);
  }
})();
