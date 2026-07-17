/**
 * Load pages from the BUILT site (apps/site/dist, served at /__dist__ by a
 * plugin in vitest.config.ts) into a nested iframe.
 *
 * Why an iframe rather than driving the top-level document: the test document
 * belongs to Vitest, and replacing it reloads the runner. An iframe also gives
 * exact, deterministic control of the layout viewport — resize the iframe and
 * the page's container queries respond to *its* width, with no dependence on
 * the OS window or the headless default size.
 */
const DIST_BASE = "/__dist__";

export interface LoadedPage {
  win: Window;
  doc: Document;
  /** The iframe itself — the element a pixel snapshot is taken of. */
  frame: HTMLIFrameElement;
  /** Resize the layout viewport and let queries settle. */
  resize(width: number, height: number): Promise<void>;
  /** Computed style of the first match, from inside the iframe. */
  styleOf(selector: string): CSSStyleDeclaration;
  $(selector: string): HTMLElement | null;
  $$(selector: string): HTMLElement[];
  dispose(): void;
}

let current: HTMLIFrameElement | undefined;

export async function loadPage(path: string, width = 1440, height = 900): Promise<LoadedPage> {
  current?.remove();

  const url = `${DIST_BASE}${path.startsWith("/") ? path : `/${path}`}`;
  // Fail loudly and usefully if the site hasn't been built.
  const probe = await fetch(url);
  if (!probe.ok) throw new Error(`Cannot load ${url} (${probe.status}). Run: pnpm -F @plangs/site build`);

  const iframe = document.createElement("iframe");
  iframe.style.border = "0";
  iframe.style.width = `${width}px`;
  iframe.style.height = `${height}px`;
  iframe.src = url;
  document.body.appendChild(iframe);
  current = iframe;

  await new Promise<void>((resolve, reject) => {
    iframe.addEventListener("load", () => resolve(), { once: true });
    iframe.addEventListener("error", () => reject(new Error(`iframe failed: ${url}`)), { once: true });
    setTimeout(() => reject(new Error(`iframe timed out: ${url}`)), 15_000);
  });

  const win = iframe.contentWindow;
  const doc = iframe.contentDocument;
  if (!win || !doc) throw new Error(`No iframe document for ${url}`);

  await waitForStyles(doc);
  await settle(win);

  const api: LoadedPage = {
    win,
    doc,
    frame: iframe,
    async resize(w, h) {
      iframe.style.width = `${w}px`;
      iframe.style.height = `${h}px`;
      await settle(win);
    },
    styleOf(selector) {
      const el = doc.querySelector(selector);
      if (!el) throw new Error(`No element matches ${selector}`);
      return win.getComputedStyle(el);
    },
    $: selector => doc.querySelector<HTMLElement>(selector),
    $$: selector => [...doc.querySelectorAll<HTMLElement>(selector)],
    dispose() {
      iframe.remove();
      if (current === iframe) current = undefined;
    },
  };
  return api;
}

/** Computed styles are meaningless until stylesheets have actually applied. */
async function waitForStyles(doc: Document): Promise<void> {
  const links = [...doc.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')];
  await Promise.all(
    links.map(
      l =>
        new Promise<void>(resolve => {
          try {
            if (l.sheet) return resolve();
          } catch {
            // cross-origin or not ready; fall through to events
          }
          l.addEventListener("load", () => resolve(), { once: true });
          l.addEventListener("error", () => resolve(), { once: true });
          setTimeout(resolve, 3000);
        }),
    ),
  );
}

/** Two rAFs: let style/layout (and container queries) recompute. */
function settle(win: Window): Promise<void> {
  return new Promise(resolve => {
    win.requestAnimationFrame(() => win.requestAnimationFrame(() => resolve()));
  });
}

/**
 * Make a page byte-stable so a pixel snapshot means something.
 *
 * A screenshot taken before fonts swap in, before logos decode, or mid-
 * transition differs run to run, and a flaky baseline gets deleted rather than
 * trusted. Each step below removes one source of non-determinism:
 *
 *  - **Fonts.** Text rasterized in the fallback face and re-rasterized in
 *    Nunito are different pixels. `document.fonts.ready` is per-document, so it
 *    must be awaited on the IFRAME's document, not the runner's.
 *  - **Images.** Node logos decode asynchronously; a card with a missing logo
 *    lays out differently from one with it.
 *  - **Animation.** Transitions and the caret are time-dependent by definition.
 *  - **Scroll.** An element screenshot of the iframe captures whatever is
 *    scrolled into view.
 */
export async function stabilize(pageObj: LoadedPage): Promise<void> {
  const { doc, win } = pageObj;

  const style = doc.createElement("style");
  style.textContent = `*, *::before, *::after {
    animation-duration: 0s !important;
    animation-delay: 0s !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
    caret-color: transparent !important;
    scroll-behavior: auto !important;
  }`;
  doc.head.appendChild(style);

  await (doc as Document & { fonts?: FontFaceSet }).fonts?.ready;

  await Promise.all(
    [...doc.querySelectorAll("img")].map(img =>
      img.complete
        ? Promise.resolve()
        : new Promise<void>(r => {
            img.addEventListener("load", () => r(), { once: true });
            img.addEventListener("error", () => r(), { once: true });
            setTimeout(r, 3000);
          }),
    ),
  );

  win.scrollTo(0, 0);
  await settle(win);
  await settle(win);
}

/**
 * Wait until islands are actually INTERACTIVE, not merely "hydrated".
 *
 * `astro-island` drops its `ssr` attribute before React attaches event
 * handlers, so waiting on that alone races hydration: clicks land on dead
 * elements and tests fail intermittently. Pages with a facets island expose
 * `data-facets-ready` from the component's effect, which is the real signal.
 */
export async function waitForHydration(pageObj: LoadedPage, timeout = 10_000): Promise<void> {
  const start = Date.now();
  const hasFacets = pageObj.$$("aside[aria-label^='Filter']").length > 0;
  while (Date.now() - start < timeout) {
    const islandsDone = pageObj.$$("astro-island[ssr]").length === 0;
    const facetsDone = !hasFacets || pageObj.doc.documentElement.dataset.facetsReady === "1";
    if (islandsDone && facetsDone) return;
    await new Promise(r => setTimeout(r, 50));
  }
  throw new Error("Islands did not become interactive in time");
}
