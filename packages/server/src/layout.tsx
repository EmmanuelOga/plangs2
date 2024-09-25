import type { ComponentChildren } from "preact";

import { tw } from "@plangs/frontend/utils";

import { id } from "./pages/dom";

export type LayoutProps = {
  title: string;
  tab: "browse" | "blog" | "about" | "pl";
  children: ComponentChildren;
};

export function Layout({ title, children, tab }: LayoutProps) {
  return (
    <html lang="en" class="dark">
      <head>
        <meta charset="utf-8" />
        <title>Plangs! - {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/index.css" />
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
            // ---
            "px-4 py-1",
            "font-black text-lg italic",
            "bg-secondary text-primary",
          )}>
          <h1>
            <a href="/">Plangs!</a>
          </h1>
        </header>

        <nav
          class={tw(
            // ---
            "px-1",
            "sticky top-0",
            "flex flex-row items-end justify-end",
            "bg-secondary",
            "border-background border-b-6",
            "shadow-background/75 shadow-md",
          )}
          style="outline-top-width: 0;">
          <NavTab href="/" title="Browse" current={tab === "browse"} />
          <NavTab href="/blog" title="News" current={tab === "blog"} />
          <NavTab href="/about" title="About" current={tab === "about"} />
          <NavTab class={tw("mr-4 ml-6", tab !== "browse" && "invisible")} title="Filter" id={id("filterToggle")} />
        </nav>

        {children}

        <footer class={tw("mt-1 px-4 py-1", "text-center", "bg-secondary", "border-1 border-foreground/50")}>Plangs!</footer>
      </body>
      <script src="/app.js" />
    </html>
  );
}

function NavTab({ id, class: cssClass, href, title, current }: { id?: string; class?: string; href?: string; title: string; current?: boolean }) {
  return (
    <a
      id={id}
      href={href}
      class={tw(
        "mx-2 px-3 pt-0.5 pb-1",
        "text-center text-sm",
        "rounded-t-lg",
        "border-background border-t-1",
        "*:border-background/25 *:border-b-2",
        href && "*:hover:border-yellow-200",
        !href && "hover:bg-background",
        current ? "bg-background" : "bg-background/25 text-foreground/75",
        cssClass,
      )}>
      <span class={tw("inline-block", href && "min-w-12", current && "border-primary")}>{href ? title : FILTER_ICON}</span>
    </a>
  );
}

const FILTER_ICON = <span class={tw("relative top-1", "block size-4", "cursor-pointer", "bg-[url('/images/filter.svg')]")} children="&nbsp;" />;
