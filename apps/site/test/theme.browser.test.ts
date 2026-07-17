import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { type LoadedPage, loadPage, waitForHydration } from "./helpers";

/**
 * Theme is the one piece of state that must survive a full page load. Astro
 * ships no client router here, so every navigation is a fresh document: the
 * theme lives in localStorage and is re-applied by an inline head script.
 *
 * That script is the whole mechanism, and it is invisible to `pnpm build` — a
 * typo in it yields a site that is light-on-reload with a green build.
 */
let pg: LoadedPage | undefined;

const clearTheme = () => {
  try {
    localStorage.removeItem("theme");
  } catch {
    // ignore
  }
};

beforeEach(clearTheme);
afterEach(() => {
  pg?.dispose();
  pg = undefined;
  clearTheme();
});

const isDark = (p: LoadedPage) => p.doc.documentElement.classList.contains("dark");
const themeToggle = (p: LoadedPage) => p.$$("button").find(b => /Switch to (dark|light) mode/.test(b.getAttribute("aria-label") ?? ""));

/**
 * Click the toggle and wait for React to re-render.
 *
 * The DOM class flips synchronously inside the handler, but `aria-pressed` and
 * the handler's own `theme` closure only update on the next render. Clicking
 * twice in the same task therefore reads a stale `theme` and toggles to the
 * same value twice — a test artifact (real clicks are seconds apart), but one
 * that looks exactly like a product bug if you don't wait.
 */
async function clickToggle(p: LoadedPage): Promise<HTMLElement> {
  const btn = themeToggle(p);
  if (!btn) throw new Error("no theme toggle");
  const before = btn.getAttribute("aria-pressed");
  btn.click();
  for (let i = 0; i < 50 && btn.getAttribute("aria-pressed") === before; i++) {
    await new Promise(r => setTimeout(r, 10));
  }
  return btn;
}

describe("theme toggle", () => {
  it("flips the document class and records the choice", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    await waitForHydration(pg);
    expect(isDark(pg), "should start light with no stored preference").toBe(false);

    const btn = await clickToggle(pg);

    expect(isDark(pg)).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
    // The button reports state to assistive tech; a silent toggle is a bug.
    expect(btn.getAttribute("aria-pressed")).toBe("true");
  });
});

describe("theme persistence across navigation", () => {
  it("stays dark on the next page, applied before paint", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    await waitForHydration(pg);
    await clickToggle(pg);
    expect(isDark(pg)).toBe(true);
    pg.dispose();

    // A *different* page, loaded fresh — the real navigation, not a re-render.
    pg = await loadPage("/nim/index.html", 1440, 900);
    expect(isDark(pg), "theme did not survive navigation").toBe(true);

    // Applied before paint means: an INLINE, render-blocking script in <head>.
    // Deferred or module scripts run after first paint and produce the flash
    // this mechanism exists to avoid, so assert the shape, not just the class.
    const setter = [...pg.doc.head.querySelectorAll("script")].find(s => !s.src && s.textContent?.includes("theme"));
    expect(setter, "no inline theme script in <head>").toBeTruthy();
    expect((setter as HTMLScriptElement).defer, "theme script must not be deferred").toBe(false);
    expect((setter as HTMLScriptElement).async, "theme script must not be async").toBe(false);
    expect((setter as HTMLScriptElement).type, "a module script is deferred by default").not.toBe("module");
  });

  it("actually repaints dark, not just re-adds the class", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    await waitForHydration(pg);
    const light = pg.styleOf("html").backgroundColor;
    await clickToggle(pg);
    pg.dispose();

    pg = await loadPage("/nim/index.html", 1440, 900);
    expect(pg.styleOf("html").backgroundColor, "dark class applied but paints the light background").not.toBe(light);
  });

  it("returns to light when the stored choice is light", async () => {
    pg = await loadPage("/plangs/index.html", 1440, 900);
    await waitForHydration(pg);
    await clickToggle(pg);
    await clickToggle(pg);
    expect(localStorage.getItem("theme")).toBe("light");
    pg.dispose();

    pg = await loadPage("/nim/index.html", 1440, 900);
    expect(isDark(pg)).toBe(false);
  });
});
