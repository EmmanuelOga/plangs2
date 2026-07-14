import { useSelector } from "@xstate/store-react";
import { useEffect, useRef, useState } from "react";
import { type FacetsContext, facetsStore } from "../stores/facets";

interface Props {
  /** Canonical page URL. */
  canonical: string;
  /** Markdown-twin URL for this page, if it has one. */
  markdownHref?: string;
  /** What the page is about, e.g. "Nim" or "programming languages". */
  subject: string;
}

/** "paradigms: functional, logic; tags: games (matching all)" — plain English. */
function describeFilters(ctx: FacetsContext): string {
  const parts = Object.entries(ctx.selected)
    .filter(([, v]) => v.length)
    .map(([dim, values]) => `${dim}: ${values.join(", ")}`);
  if (!parts.length) return "";
  return `${parts.join("; ")} (matching ${ctx.mode === "all" ? "all" : "any"})`;
}

export default function PromptMenu({ canonical, markdownHref, subject }: Props) {
  const ctx = useSelector(facetsStore, s => s.context);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Prefer the live URL (it carries the user's current filters) over the
  // build-time canonical, so a shared prompt reproduces what they're looking at.
  const pageUrl = typeof window === "undefined" ? canonical : window.location.href;
  const dataUrl = markdownHref ? new URL(markdownHref, canonical).href : pageUrl;
  const filters = describeFilters(ctx);

  const prompt = [
    `Using the data at ${dataUrl}`,
    filters ? ` (the page is filtered to ${filters})` : "",
    `, tell me about ${subject}.`,
    ` The human-readable page is ${pageUrl}.`,
    " Plangs! publishes a markdown twin of every page (append .md to any URL) and a dataset overview at https://plangs.page/llms.txt.",
  ].join("");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const q = encodeURIComponent(prompt);
  const item = "block w-full px-3 py-2 text-left text-sm hover:bg-primary/10 no-underline";

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Ask an AI about this page"
        className="min-h-11 rounded border border-primary px-2 text-primary @3xl:min-h-0">
        ✨<span className="ml-1 hidden sm:inline">Ask</span>
      </button>
      {open && (
        <div role="menu" className="absolute right-0 z-50 mt-1 w-56 overflow-hidden rounded border border-primary/40 bg-background shadow-lg">
          <button type="button" role="menuitem" className={item} onClick={copy}>
            {copied ? "Copied!" : "Copy prompt"}
          </button>
          <a role="menuitem" className={item} href={`https://claude.ai/new?q=${q}`} target="_blank" rel="noreferrer">
            Open in Claude
          </a>
          <a role="menuitem" className={item} href={`https://chatgpt.com/?q=${q}`} target="_blank" rel="noreferrer">
            Open in ChatGPT
          </a>
          {markdownHref && (
            <a role="menuitem" className={item} href={markdownHref}>
              View markdown twin
            </a>
          )}
        </div>
      )}
    </div>
  );
}
