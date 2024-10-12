import { type ComponentChildren, h } from "preact";

import { NOWRAP_TEXT, stripes } from "@plangs/frontend/styles";
import { script, tw } from "@plangs/frontend/utils";
import type { NPlang } from "@plangs/plangs";

import { cl, id } from "../elements";

export type TAB = "plangs" | "blog" | "about" | "pl" | "tools" | "apps" | "libs" | "tsys" | "paradigms" | "platforms" | "tags" | "licenses" | "NA";

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
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        style={stripes()}
        class={tw("h-dvh w-full", "flex flex-col flex-nowrap", "bg-background text-foreground", "overflow-hidden")}
        data-tab={tab}>
        {script("window.restoreLightMode();")}

        <noscript>
          <em>Note!</em>
          <p>This site is fully static and requires JavaScript for the best experience.</p>
          <p>In particular, the search feature will not work without JavaScript.</p>
        </noscript>

        <header
          class={tw(
            "px-2 sm:px-4",
            "flex flex-row",
            "items-end justify-between",
            "border-primary border-b-1 border-dotted",
            "bg-linear-to-b from-secondary to-background",
          )}>
          <div class={tw("flex flex-row", "gap-4", "-translate-y-3 sm:-translate-y-5")}>
            {h("input-toggle", { action: "hamburger" })}
            {tab === "plangs" && h("input-toggle", { action: "filters" })}
          </div>

          <PlangsLogo class={tw("mx-auto", "mb-4 sm:mb-8", "mt-2 sm:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6", "h-12 sm:h-16 lg:h-20 xl:h-24 2xl:h-28")} />

          <div class={tw("-translate-y-3 sm:-translate-y-5")}>{h("input-toggle", { action: "lights" })}</div>
        </header>

        <div class={tw("flex-1", "flex flex-row", "overflow-y-auto")}>
          <aside
            id={id("mainNav")}
            class={tw(
              "hidden sm:static",
              "z-20",
              "w-[12rem]",
              "overflow-hidden overflow-y-auto",
              "bg-linear-to-t from-secondary to-background",
              "border-primary border-r-1 border-dotted",
            )}>
            {script("window.restoreHamburguer();")}

            <NavSection
              tab={tab}
              title="Explore"
              links={[
                { title: "Plangs!", href: "/", forTab: "plangs" },
                { title: "Python", href: "/python", nested: true, forTab: "pl" },
                { title: "Tools", href: "/tools", forTab: "tools" },
                { title: "Apps", href: "/apps", forTab: "apps" },
                { title: "Libraries", href: "/libs", forTab: "libs" },
              ]}
            />

            <NavSection tab={tab} title="Blog" links={[{ title: "All Posts", href: "/blog", forTab: "blog" }]} />

            <NavSection
              tab={tab}
              title="Website"
              links={[
                { title: "About", href: "/about", forTab: "about" },
                { title: "Source Code", href: "https://github.com/EmmanuelOga/plangs2", forTab: "NA" },
              ]}
            />

            <NavSection
              tab={tab}
              title="Reference"
              links={[
                { title: "Type Systems", href: "/tsys", forTab: "tsys" },
                { title: "Paradigms", href: "/paradigms", forTab: "paradigms" },
                { title: "Platforms", href: "/platforms", forTab: "platforms" },
                { title: "Tags", href: "/tags", forTab: "tags" },
                { title: "Licenses", href: "/licenses", forTab: "licenses" },
              ]}
            />
          </aside>

          <main class={tw("flex-1", mainClasses)}>{children}</main>
        </div>
      </body>
    </html>
  );
}

function PlangsLogo({ class: cssClass }: { class?: string }) {
  return (
    <div style="aspect-ratio: 16 / 4.5;" class={tw("overflow-hidden", cssClass)}>
      <a
        href="/"
        class={tw(
          "block h-full w-full",
          "text-[clamp(2.5rem,5vw,7rem)]",
          "text-transparent",
          "bg-contain bg-left bg-no-repeat",
          "bg-[url('/images/plangs-light.svg')] dark:bg-[url('/images/plangs.svg')]",
        )}>
        Plangs!
      </a>
    </div>
  );
}

type NavLink = { title: string; href: string; nested?: boolean; forTab: TAB };

function NavSection({ title, links, tab }: { tab: TAB; title: string; links: NavLink[] }) {
  return (
    <nav class={tw("mb-1 pt-5 sm:mb-8", "border-primary/25 border-t-1 border-dotted first:border-t-0")}>
      <header class={tw("ml-4 sm:mb-4", "uppercase", "text-primary")}>{title}</header>
      <ul>
        {links.map(({ title, href, nested, forTab }) => (
          <li
            key={href}
            class={tw(
              "px-4 py-2 sm:mb-1",

              tab === forTab && "bg-primary/85 text-background",
              tab !== forTab && "hover:bg-primary/25",
            )}>
            <a
              data-tab={forTab}
              data-current={tab === forTab ? "1" : undefined}
              class={tw(cl("navLink"), "block cursor-pointer", NOWRAP_TEXT, nested ? "pl-10" : "pl-4")}
              href={href}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
