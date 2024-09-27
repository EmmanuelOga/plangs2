import type { ComponentChildren } from "preact";

import { tw } from "@plangs/frontend/utils";

import { id } from "../elements";

type TAB = "browse" | "blog" | "about" | "pl";

export function Layout({
  title,
  children,
  tab,
  overflow = "overflow-hidden",
}: {
  title: string;
  tab: TAB;
  children: ComponentChildren;
  overflow?: "overflow-hidden" | "overflow-y-auto";
}) {
  return (
    <html lang="en" class="dark">
      <head>
        <meta charset="utf-8" />
        <title>Plangs! - {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/bundle/app.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        class={tw(
          "h-dvh w-full",
          "flex flex-col flex-nowrap",

          "bg-background text-foreground",
        )}
        data-tab={tab}>
        <noscript>
          <em>Note!</em>
          <p>This site is fully static and requires JavaScript for the best experience.</p>
          <p>In particular, the search feature will not work without JavaScript.</p>
        </noscript>

        <header class={tw("px-2 py-3", "bg-secondary text-primary")}>
          <h1 class={tw("text-lg sm:text-3xl", "font-black italic")}>
            <a href="/">Plangs!</a>
          </h1>
        </header>

        <nav
          class={tw(
            "sticky top-0",
            "flex flex-row",
            "gap-3 px-1 sm:px-4",
            "justify-center sm:justify-end",

            "text-sm lg:text-lg",
            "bg-secondary",
            "border-background border-b-2",
            "shadow-background/75 shadow-md",
          )}>
          <NavTab id={id("filterToggle")} class={tw("mr-auto", tab !== "browse" && "hidden")} title="Filter" />
          <NavTab href="/" title="Browse" current={tab === "browse"} />
          <NavTab href="/pl/python" title="Python" current={tab === "pl"} />
          <NavTab href="/blog" title="News" current={tab === "blog"} />
          <NavTab href="/about" title="About" current={tab === "about"} />
        </nav>

        <main class={tw("flex-1", "flex flex-col", "items-center", overflow)}>{children}</main>
      </body>
      <script src="/bundle/app.js" />
    </html>
  );
}

function NavTab({ id, class: cssClass, href, title, current }: { id?: string; class?: string; href?: string; title: string; current?: boolean }) {
  const isIcon = !href;
  return (
    <a
      id={id}
      href={isIcon ? "#" : href}
      class={tw(
        "user-select-none cursor-pointer",
        "px-2 pt-1 sm:px-4",
        "text-center",
        "rounded-t-md",
        "border-primary/50 border-t-1",
        !isIcon && "*:border-foreground/50 *:border-b-2",
        !isIcon && "*:hover:border-yellow-200",
        isIcon && "hover:bg-background",
        current ? "bg-background" : "bg-background/25 text-foreground/75",
        cssClass,
      )}>
      <span
        class={tw(
          "inline-block max-w-[5rem]",
          "overflow-hidden text-ellipsis whitespace-nowrap",
          !isIcon && "min-w-12",
          current && "border-primary",
        )}>
        {isIcon ? FILTER_ICON : title}
      </span>
    </a>
  );
}

const FILTER_ICON = <span class={tw("relative top-1", "block size-5 sm:size-6", "bg-[url('/images/filter.svg')]")} children="&nbsp;" />;
