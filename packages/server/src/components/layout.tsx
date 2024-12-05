import type { ComponentChildren } from "preact";

import { stripes, tw } from "@plangs/frontend/auxiliar/styles";
import { iconButton } from "@plangs/frontend/components/icon-button";
import type { PlangsGraph, VPlang } from "@plangs/plangs/graph";
import { script } from "@plangs/server/utils/html";

import { MainNav } from "./main-nav";
import { PlangsLogo } from "./plangs-logo";

export type TAB =
  | "any_tab"
  | "about"
  | "apps"
  | "blog"
  | "libs"
  | "learning"
  | "licenses"
  | "paradigms"
  | "pl"
  | "plangs"
  | "platforms"
  | "tags"
  | "tools"
  | "tsys"
  | "learning"
  | "communities"
  | "NA";

export const GRID_TABS: Set<TAB> = new Set(["plangs", "tools", "apps", "libs", "learning", "communities"]);

type LayoutProps = {
  children: ComponentChildren;
  description?: string;
  mainClasses?: string;
  tab: TAB;
  title: string;
};

export function Layout({ title, description, tab, mainClasses, children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Plangs! - {title}</title>
        <meta name="description" content={description ?? title} />
        <script src="/bundle/app.js" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/bundle/app.css" />
        <link type="image/png" rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link type="image/png" rel="icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link type="image/png" rel="icon" sizes="72x72" href="/icons/icon-72x72.png" />
        <link rel="icon" href="/icons/icon-72x72.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        data-tab={tab}
        style={stripes()}
        class={tw("h-dvh w-full", "flex flex-col flex-nowrap", "bg-background text-foreground", "overflow-hidden")}>
        {script("window.restoreLightMode()")}

        <noscript>
          <em>Note!</em>
          <p>This site is fully static and requires JavaScript for the best experience.</p>
          <p>In particular, the search feature will not work without JavaScript.</p>
        </noscript>

        <header class={tw("pt-4 pb-2", "flex flex-col", "bg-linear-to-b from-secondary to-background")}>
          <PlangsLogo class={tw("sm:mt-4", "h-12 sm:h-16 lg:h-20 xl:h-24")} />
          <div class={tw("px-2 sm:px-4", "flex flex-row", "gap-4", "items-center justify-between")}>
            {iconButton("hamburger")}
            {tab === "plangs" && iconButton("facets")}
            {tab === "plangs" && iconButton("clearFacets")}
            {tab === "plangs" && iconButton("gridOrder")}
            <div class="flex-1" />
            {iconButton("lights")}
          </div>
        </header>

        <div class={tw("flex-1", "flex flex-row", "overflow-y-auto")}>
          <MainNav tab={tab} class={tw("hidden sm:static", "z-20", "w-[12rem]", "overflow-hidden overflow-y-auto")} />
          <main class={tw("flex-1", mainClasses)}>{children}</main>
        </div>
      </body>
    </html>
  );
}
