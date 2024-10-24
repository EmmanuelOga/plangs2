import { type ComponentChildren, h } from "preact";

import { stripes } from "@plangs/frontend/auxiliar/styles";
import { script, tw } from "@plangs/frontend/auxiliar/utils";
import type { NPlang } from "@plangs/plangs";

import { MainNav } from "./main-nav";
import { PlangsLogo } from "./plangs-logo";

export type TAB = "about" | "apps" | "blog" | "libs" | "licenses" | "paradigms" | "pl" | "plangs" | "platforms" | "tags" | "tools" | "tsys" | "NA";

type LayoutProps = {
  children: ComponentChildren;
  description?: string;
  mainClasses?: string;
  pl?: NPlang;
  tab: TAB;
  title: string;
};

export function Layout({ title, description, tab, pl, mainClasses, children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Plangs! - {title}</title>
        <meta name="description" content={description ?? title} />

        {pl && script(`localStorage.setItem("last-plang", ${JSON.stringify(JSON.stringify({ key: pl.key, data: pl.data }))});`)}
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

        <header class={tw("px-2 sm:px-4", "flex flex-row", "items-end justify-between", "bg-linear-to-b from-secondary to-background")}>
          <div class={tw("flex flex-row", "gap-4", "-translate-y-3 sm:-translate-y-5")}>
            {h("input-toggle", { action: "hamburger", class: "text-primary" })}
            {tab === "plangs" && h("input-toggle", { action: "facets", class: "text-primary" })}
          </div>

          <PlangsLogo class={tw("mb-4 sm:mb-8", "mt-2 sm:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6", "h-12 sm:h-16 lg:h-20 xl:h-24 2xl:h-28")} />

          <div class={tw("-translate-y-3 sm:-translate-y-5")}>{h("icon-button", { class: "text-primary", action: "lights" })}</div>
        </header>

        <div class={tw("flex-1", "flex flex-row", "overflow-y-auto")}>
          <MainNav tab={tab} class={tw("hidden sm:static", "z-20", "w-[12rem]", "overflow-hidden overflow-y-auto")} />
          <main class={tw("flex-1", mainClasses)}>{children}</main>
        </div>
      </body>
    </html>
  );
}
