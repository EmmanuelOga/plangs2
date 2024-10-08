import type { ComponentChildren } from "preact";

import { script, tw } from "@plangs/frontend/utils";

import type { NPlang } from "@plangs/plangs/index";
import { cl, id } from "../elements";

export type TAB = "plangs" | "blog" | "about" | "pl" | "filter";

export function Layout({
  children,
  description,
  overflow = "overflow-hidden",
  pl,
  tab,
  title,
}: {
  children: ComponentChildren;
  description?: string;
  overflow?: "overflow-hidden" | "overflow-y-auto" | "overflow-auto";
  pl?: NPlang;
  tab: TAB;
  title: string;
}) {
  return (
    <html lang="en" class="dark">
      <head>
        {pl && script(`localStorage.setItem("last-plang", ${JSON.stringify(JSON.stringify({ key: pl.key, data: pl.data }))});`)}
        <script src="/bundle/app.js" />
        <meta name="description" content={description} />
        <meta charset="utf-8" />
        <title>Plangs! - {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/bundle/app.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body class={tw("h-dvh w-full", "flex flex-col flex-nowrap", "bg-background text-foreground")} data-tab={tab}>
        <noscript>
          <em>Note!</em>
          <p>This site is fully static and requires JavaScript for the best experience.</p>
          <p>In particular, the search feature will not work without JavaScript.</p>
        </noscript>

        <header
          class={tw(
            "px-2 py-3",
            "text-primary",

            "bg-linear-to-b from-secondary to-background",
          )}>
          <h1 class={tw("text-center text-lg sm:text-3xl", "font-black italic")}>
            <a
              href="/"
              style="background: url('/images/plangs.svg') no-repeat center/contain"
              class={tw(
                "inline-block",
                "text-transparent",

                "h-[3rem] w-[20rem] sm:mt-3 sm:h-[6rem]",
              )}>
              Plangs!
            </a>
          </h1>
        </header>

        <nav
          class={tw(
            "sticky top-0",
            "flex flex-row justify-evenly",
            "gap-3 px-1 sm:px-4",

            "text-sm lg:text-lg",
            "bg-background",
            "border-primary border-b-1",
          )}>
          <NavTab tab="filter" id={id("filterToggle")} class={tw("mr-auto", tab !== "plangs" && "invisible")} title="Toggle Filters" />
          <NavTab tab="pl" id={id("plTab")} href={pl ? `/${pl.plainKey}` : "#"} title={pl?.name ?? "Plang"} current={tab === "pl"} />
          <NavTab tab="plangs" href="/" title="Plangs" current={tab === "plangs"} />
          {!pl && script("window.restorePlTab()")}
          <NavTab tab="blog" href="/blog" title="News" current={tab === "blog"} />
          <NavTab tab="about" href="/about" title="About" current={tab === "about"} />
        </nav>

        <main class={tw("flex-1", "flex flex-col", "items-center", overflow)}>{children}</main>
      </body>
    </html>
  );
}

function NavTab({
  id,
  class: cssClass,
  href,
  title,
  current,
  tab,
}: { id?: string; class?: string; href?: string; title: string; current?: boolean; tab: TAB }) {
  const isIcon = tab === "filter";
  return (
    <a
      id={id}
      data-tab={tab}
      data-current={current ? "1" : undefined}
      href={isIcon ? "#" : href}
      title={title}
      class={tw(
        cl("navLink"),
        "user-select-none cursor-pointer",
        "px-2 pt-1 sm:px-4",
        "text-center",
        "rounded-t-md",
        "border-primary/50 border-t-1",
        "hover:bg-linear-to-b hover:from-background hover:to-secondary",
        current ? "bg-linear-to-b from-background to-primary/50" : "bg-background/25 text-foreground/75",
        cssClass,
      )}>
      <span class={tw("inline-block max-w-[5rem] sm:max-w-[unset]", "overflow-hidden text-ellipsis whitespace-nowrap", !isIcon && "min-w-12")}>
        {isIcon ? FILTER_ICON : title}
      </span>
    </a>
  );
}

const FILTER_ICON = <span class={tw("relative top-1", "block size-5 sm:size-6", "bg-[url('/images/filter.svg')]")} children="&nbsp;" />;
