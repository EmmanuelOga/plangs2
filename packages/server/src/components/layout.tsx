import type { ComponentChildren } from "preact";

import { background, gradLinear, tw } from "@plangs/frontend/auxiliar/styles";
import { iconButton } from "@plangs/frontend/components/icon-button";
import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";
import { cssID } from "@plangs/server/elements";
import { script } from "@plangs/server/utils/html";

import { EDIT, NEWS } from "@plangs/frontend/auxiliar/icons";
import { IconWrapper } from "@plangs/frontend/components/icon-button/icon-button";
import { MainNav } from "./main-nav";

export type PageType = "grid" | "other";
export type PlangsPage =
  | TPlangsVertexName
  | "_any_page_"
  | "about"
  | "apps"
  | "blog"
  | "communities"
  | "edit"
  | "learnings"
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

export const GRID_PAGES: Set<PlangsPage> = new Set(["plangs", "tools", "apps", "libraries", "subsystems", "communities", "learnings"]);

type LayoutProps = {
  page: PlangsPage;
  pageType?: "grid" | "other";
  title?: string;
  desc?: string;
  mainClasses?: string;
  children: ComponentChildren;
};

export const LAYOUT_DEFAULTS = {
  jsBundle: "/app.js",
  cssBundle: "/app.css",
};

export function Layout({ page, pageType, title, desc, mainClasses, children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>{title ? `Plangs! - ${title}` : "Plangs!"}</title>
        <meta name="description" content={desc ?? title} />
        <meta name="theme-color" content="#609" />

        <script src={LAYOUT_DEFAULTS.jsBundle} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={LAYOUT_DEFAULTS.cssBundle} />
        <link type="image/png" rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link type="image/png" rel="icon" sizes="192x192" href="/icons/icon-192x192.png" />
        <link type="image/png" rel="icon" sizes="72x72" href="/icons/icon-72x72.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:title" content="Plangs!" />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content="https://plangs.page" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://plangs.page/images/plangs-1200x630.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body
        data-page={page}
        style={background()}
        class={tw("dark", "h-dvh w-full", "flex flex-col flex-nowrap", "bg-background text-foreground", "overflow-hidden")}>
        {script("window.restoreLightMode()")}

        <noscript class={tw("border-primary border-b-1", "p-2 text-center")}>
          <strong>Note!</strong>
          This site requires JavaScript for the best experience. In particular, the search feature will not work without JavaScript.
        </noscript>

        {page !== "edit" && (
          <header id={cssID("localEditWarning")} class={tw("hidden", "border-primary border-b-1", "p-2 text-center")}>
            <span class="text-foreground">Using localStorage data.</span>{" "}
            <a class="text-primary" href="/edit">
              Go to the editor
            </a>{" "}
            <span class="text-foreground">to reset.</span>{" "}
          </header>
        )}

        <header
          style={background({ bgs: [gradLinear()], backdrop: "" })}
          class={tw("short:hidden", "pb-2 sm:pt-4 sm:pb-8", "text-center text-primary")}>
          <a class="inline-block pt-4" href="/" title="Plangs!">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="16 13 218 56"
              class="inline-block h-[clamp(2.25rem,min(8dvh,8dvw),8rem)] w-auto fill-primary drop-shadow-lg">
              <title>Plangs!</title>
              <path d="M214.7 45.51h11.41l-2.94 11.8h-11.41l2.94-11.8Zm7.9-31.7h11.41l-7.06 28.3h-11.41l7.06-28.3ZM41.16 41.91c-.11.46-.39 1.3-.54 1.63-.38.98-1.86 2.22-4.21 2.22h-3.2l2.39-9.59H24.19L15.88 69.5h11.41l2.98-11.94h9c5.09 0 9.89-3.59 11.24-9l3.09-12.39H42.58l-1.43 5.74ZM54.33 22.15c-1.46-1.89-3.75-1.96-4.17-1.97-7.51 0-15.01.01-22.52.02l-.16.7-.21.91-.16.7-.24 1.05-.14.61-.23.99-.13.57-.36 1.55-.06.25-.24 1.05-.08.34-.88 3.78h29.41c.25-.85.49-1.77.71-2.74.19-.84.34-1.65.47-2.42h.02l.1-.7c.06-.42.31-2.84-1.11-4.68ZM53.44 57.57h11.42l5.33-21.4H58.78l-5.34 21.4zM93.37 45.76h-3.33c-2.87 0-3.93-1.5-3.21-4.37l1.3-5.22H76.26L73.19 48.5c-1.35 5.41 1.72 9.07 6.81 9.07h22.3l5.33-21.39H95.76l-2.39 9.59ZM108.69 31l-.25 1.03h.01l-.16.69h-.01v.04H76.72s.06-.69.29-1.76h31.68ZM109.53 27.41l-.04.15-.24 1.05h.01l-.14.6H77.48c.17-.57.38-1.18.63-1.8h31.43ZM110.37 23.82l-.11.46h-.01l-.21.9-.11.44H78.94c.03-.06.06-.13.1-.19.04-.08.08-.14.11-.19.29-.49.61-.97.97-1.42h30.24ZM111.19 20.23h.01l-.16.7h-.01l-.21.9h.01l-.05.19H81.91c1.18-.93 2.64-1.6 4.43-1.79.11-.02.22-.03.33-.04h24.53v.04ZM107.63 57.57h11.41l5.35-21.46h-11.41l-5.35 21.46zM125.5 57.57h11.41l5.35-21.46h-11.41l-5.35 21.46zM142.98 22.02h-26.86l.04-.19.21-.9h-.01l.16-.7h.01v-.04h22.8s.15 0 .4.04c.69.1 2.15.47 3.24 1.79ZM114.04 31h29.59c-.15.55-.33 1.14-.54 1.76h-29.47v-.04l.17-.69.25-1.03ZM144.28 27.41c-.04.56-.12 1.16-.24 1.8h-29.6l.14-.6h.01l.25-1.05h-.01l.03-.15h29.42ZM144.28 25.62h-29l.1-.44h.01l.21-.9h-.01l.11-.46h28.24c.17.52.29 1.12.34 1.8ZM166 40.16c-.39 1.57-2.13 3.07-3.76 3.07h-1.3c-1.83 0-2.79-1.37-2.27-3.46l.93-3.72h-11.41l-2.31 9.26c-1.35 5.41 1.72 9.07 6.8 9.07h5.48c2.54 0 3.77-.72 4.4-2.48.03-.13.19-.26.33-.26.26 0 .13.52.1.65l-.58 2.35c-.41 1.63-2.18 3-4.33 3h-15.26l-2.94 11.8h21.13c5.48 0 10.09-3.85 11.36-8.94l6.1-24.46h-11.41l-1.02 4.11ZM148.84 31h30.64l-.45 1.76h-30.42s.04-.69.23-1.76ZM180.4 27.41c-.16.6-.31 1.2-.46 1.8h-30.7c.15-.57.35-1.18.59-1.8h30.57ZM181.31 23.82c-.15.6-.3 1.2-.46 1.8h-30.21c.34-.62.73-1.23 1.18-1.8h29.49ZM182.24 20.19v.04c-.15.6-.3 1.19-.46 1.79h-28.13c1.25-.95 2.81-1.62 4.75-1.79.13-.02.26-.03.39-.04h23.46ZM202.65 36.17h-15.72l6.62 9.52h-12.19l-2.94 11.81h17.93c6.2 0 10.56-3.65 11.77-8.48.58-2.35.33-4.24-.9-6.07l-4.57-6.78ZM185.43 31h25.35l-.42 1.76h-24.85l-.07-.68h.01c-.02-.33-.03-.69-.02-1.08ZM186 27.41h25.65c-.15.6-.29 1.2-.43 1.8h-25.64c.06-.39.17-1.03.42-1.8ZM187.88 23.82h24.63c-.14.6-.28 1.2-.43 1.8h-25.36c.29-.59.67-1.2 1.16-1.8ZM213.39 20.19s-.01.03-.01.04c-.14.6-.29 1.19-.43 1.79h-23.16a9.99 9.99 0 0 1 4.76-1.79c.21-.02.39-.03.51-.04h18.33ZM59.65 31h11.59l-.44 1.76H59.21l.44-1.76zM72.15 27.41l-.45 1.8H60.11l.45-1.8h11.59zM73.06 23.82l-.46 1.8H61.01l.46-1.8h11.59zM73.96 20.23l-.45 1.79H61.92l.45-1.79h11.59zM74.82 16.82l-.4 1.61H62.83l.4-1.61h11.59zM75.72 13.27l-.44 1.75H63.69l.44-1.75h11.59z" />
              <path d="M86.67 20.19h24.53v.04H86.34c.11-.02.22-.03.33-.04ZM139.34 20.19s.15 0 .4.04h-23.2v-.04h22.8ZM158.78 20.19h23.46v.04H158.4c.13-.02.26-.03.39-.04ZM213.39 20.19s-.01.03-.01.04h-18.83c.21-.02.39-.03.51-.04h18.33Z" />
            </svg>
          </a>
        </header>

        <div class="h-[1px] bg-primary/25" />

        <div class={tw("flex-1", "flex portrait:flex-col landscape:flex-row", "overflow-hidden")}>
          <div
            class={tw(
              "flex gap-4 p-2 portrait:flex-row landscape:flex-col",
              "overflow-hidden",
              "bg-secondary/25 text-primary",
              "border-secondary border-b-1",
              "shadow-secondary/25 shadow-sm",
            )}>
            {iconButton("hamburger")}
            {pageType === "grid" && iconButton("facets")}
            {page === "plangs" && iconButton("gridOrder")}
            {pageType === "grid" && iconButton("clearFacets")}
            <div class="flex-1" />
            <IconWrapper class="hidden sm:block" children={<a href="/edit" title="Edit" children={EDIT} />} />
            <IconWrapper children={<a href="/blog" title="News!" children={NEWS} />} />
            {iconButton("lights")}
          </div>
          <div class="flex flex-1 flex-row overflow-hidden">
            <MainNav page={page} class={tw("bg-linear-to-r from-secondary/50 to-transparent")} />
            <main id={cssID("mainContent")} class={tw("flex-1", "overflow-hidden", mainClasses)}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
