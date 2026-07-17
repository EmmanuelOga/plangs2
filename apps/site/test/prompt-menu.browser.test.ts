import { afterEach, describe, expect, it } from "vitest";
import { type LoadedPage, loadPage, waitForHydration } from "./helpers";

/**
 * The prompt menu is the site's one outbound integration: it hands a generated
 * prompt to Claude/ChatGPT through a query param. Nothing else asserts that the
 * prompt is well-formed, and a broken one fails silently — the link still opens,
 * it just arrives empty or truncated.
 *
 * The prefill URLs themselves are verified separately (ROADMAP 2d); this suite
 * covers the parts that are ours: the menu opens, the prompt describes the page,
 * and the live filter state reaches it.
 */
let pg: LoadedPage | undefined;
afterEach(() => {
  pg?.dispose();
  pg = undefined;
});

const askButton = (p: LoadedPage) => p.$$("button").find(b => b.getAttribute("aria-label") === "Ask an AI about this page");
const menu = (p: LoadedPage) => p.$("[role='menu']");
const itemNamed = (p: LoadedPage, label: string) => p.$$("[role='menuitem']").find(el => el.textContent?.trim() === label);

async function openMenu(p: LoadedPage): Promise<void> {
  const btn = askButton(p);
  if (!btn) throw new Error("no Ask button");
  btn.click();
  for (let i = 0; i < 50 && !menu(p); i++) await new Promise(r => setTimeout(r, 10));
  if (!menu(p)) throw new Error("menu did not open");
}

/** The `q` param of a menu link, decoded — i.e. what the AI actually receives. */
const promptFrom = (el: HTMLElement): string => new URL((el as HTMLAnchorElement).href).searchParams.get("q") ?? "";

describe("prompt menu", () => {
  it("opens on click and reports its state", async () => {
    pg = await loadPage("/nim/index.html", 1440, 900);
    await waitForHydration(pg);
    const btn = askButton(pg) as HTMLElement;
    expect(btn.getAttribute("aria-expanded"), "should start closed").toBe("false");
    expect(menu(pg), "menu should not be in the DOM until opened").toBeNull();

    await openMenu(pg);
    expect(btn.getAttribute("aria-expanded")).toBe("true");
    expect(menu(pg)).toBeTruthy();
  });

  it("offers Claude, ChatGPT, copy and the markdown twin", async () => {
    pg = await loadPage("/nim/index.html", 1440, 900);
    await waitForHydration(pg);
    await openMenu(pg);

    for (const label of ["Copy prompt", "Open in Claude", "Open in ChatGPT", "View markdown twin"]) {
      expect(itemNamed(pg, label), `menu item "${label}" is missing`).toBeTruthy();
    }
  });

  it("builds a prompt that names the page and its markdown twin", async () => {
    pg = await loadPage("/nim/index.html", 1440, 900);
    await waitForHydration(pg);
    await openMenu(pg);

    const prompt = promptFrom(itemNamed(pg, "Open in Claude") as HTMLElement);
    // An empty or unencoded `q` is the silent failure mode this guards.
    expect(prompt.length, "prompt is empty").toBeGreaterThan(50);
    expect(prompt, "prompt should name its subject").toContain("Nim");
    expect(prompt, "prompt should point at the markdown twin, not the HTML page").toContain("/nim.md");
    expect(prompt).toContain("llms.txt");
  });

  it("sends the same prompt to ChatGPT as to Claude", async () => {
    pg = await loadPage("/nim/index.html", 1440, 900);
    await waitForHydration(pg);
    await openMenu(pg);
    const claude = promptFrom(itemNamed(pg, "Open in Claude") as HTMLElement);
    const chatgpt = promptFrom(itemNamed(pg, "Open in ChatGPT") as HTMLElement);
    expect(chatgpt).toBe(claude);
  });

  it("closes on Escape", async () => {
    pg = await loadPage("/nim/index.html", 1440, 900);
    await waitForHydration(pg);
    await openMenu(pg);
    // The handler is bound to the island's own window — the iframe's, not the
    // runner's. Dispatching on the wrong window is a silently passing test.
    pg.win.dispatchEvent(new pg.win.KeyboardEvent("keydown", { key: "Escape" }));
    for (let i = 0; i < 50 && menu(pg); i++) await new Promise(r => setTimeout(r, 10));
    expect(menu(pg), "Escape should close the menu").toBeNull();
  });

  it("closes on a click outside", async () => {
    pg = await loadPage("/nim/index.html", 1440, 900);
    await waitForHydration(pg);
    await openMenu(pg);
    pg.doc.body.dispatchEvent(new pg.win.MouseEvent("mousedown", { bubbles: true }));
    for (let i = 0; i < 50 && menu(pg); i++) await new Promise(r => setTimeout(r, 10));
    expect(menu(pg), "clicking outside should close the menu").toBeNull();
  });

  it("carries the live filter selection into the prompt", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    await waitForHydration(pg);

    // Pick a real facet, then ask: the prompt must describe what the user sees,
    // not the unfiltered build-time page.
    const box = pg.$$("input[type='checkbox']")[0];
    expect(box, "no facet checkboxes rendered").toBeTruthy();
    const facetLabel = box.closest("label")?.textContent?.trim() ?? "";
    box.click();
    await new Promise(r => setTimeout(r, 200));

    await openMenu(pg);
    const prompt = promptFrom(itemNamed(pg, "Open in Claude") as HTMLElement);
    expect(prompt, "prompt ignored the active filters").toContain("filtered to");
    const facetName = facetLabel
      .replace(/\s*\d+$/, "")
      .trim()
      .toLowerCase();
    expect(prompt.toLowerCase(), `prompt should mention the picked facet (${facetName})`).toContain(facetName);
  });
});
