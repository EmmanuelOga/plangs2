import type { ComponentChildren } from "preact";

import { VSCROLL, stripes, tw } from "@plangs/frontend/auxiliar/styles";
import { iconButton } from "@plangs/frontend/components/icon-button";
import { cssID } from "@plangs/server/elements";
import { script } from "@plangs/server/utils/html";

import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";
import { MainNav } from "./main-nav";
import { PlangsLogo } from "./plangs-logo";

export type PageType = "grid" | "other";
export type PlangsPage =
  | TPlangsVertexName
  | "_any_page_"
  | "about"
  | "apps"
  | "blog"
  | "communities"
  | "libraries"
  | "licenses"
  | "paradigms"
  | "plangs"
  | "platforms"
  | "subsystem"
  | "subsystems"
  | "tags"
  | "tools"
  | "typesystems"
  | "NA";

export const GRID_PAGES: Set<PlangsPage> = new Set(["plangs", "tools", "apps", "libraries", "subsystems", "communities", "learning"]);

type LayoutProps = {
  page: PlangsPage;
  pageType?: "grid" | "other";
  title?: string;
  desc?: string;
  mainClasses?: string;
  children: ComponentChildren;
};

export function Layout({ page, pageType, title, desc, mainClasses, children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>{title ? `Plangs! - ${title}` : "Plangs!"}</title>
        <meta name="description" content={desc ?? title} />
        <script src="/bundle/app.js" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/bundle/app.css" />
        <link type="image/png" rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link type="image/png" rel="icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link type="image/png" rel="icon" sizes="72x72" href="/icons/icon-72x72.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        data-page={page}
        style={stripes()}
        class={tw("dark", "h-dvh w-full", "flex flex-col flex-nowrap", "bg-background text-foreground", "overflow-hidden")}>
        {script("window.restoreLightMode()")}

        <noscript class={tw("border-primary border-b-1", "bg-background", "p-2 text-center")}>
          <strong>Note!</strong>
          This site requires JavaScript for the best experience. In particular, the search feature will not work without JavaScript.
        </noscript>

        <header
          style={stripes(false)}
          class={tw("p-4", "flex flex-row gap-4", "items-center", "text-primary", "bg-linear-to-b from-secondary to-background")}>
          {iconButton("hamburger")}
          {pageType === "grid" && iconButton("facets")}
          {page === "plangs" && iconButton("gridOrder")}
          {pageType === "grid" && iconButton("clearFacets")}
          <PlangsLogo class="flex-1" />
          {iconButton("lights")}
        </header>

        <div class={tw("flex-1", "flex flex-row", "overflow-y-auto")}>
          <MainNav page={page} class={tw("sm:static", "z-20", "w-[12rem]", VSCROLL)} />
          <main id={cssID("mainContent")} class={tw("flex-1", mainClasses)}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
