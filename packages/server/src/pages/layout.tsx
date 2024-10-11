import type { ComponentChildren } from "preact";

import { NOWRAP_TEXT } from "@plangs/frontend/styles";
import { script, style, tw } from "@plangs/frontend/utils";
import type { NPlang } from "@plangs/plangs";

export type TAB = "plangs" | "blog" | "about" | "pl" | "filter";

type LayoutProps = {
  children: ComponentChildren;
  description?: string;
  overflow?: "overflow-hidden" | "overflow-y-auto" | "overflow-auto";
  pl?: NPlang;
  tab: TAB;
  title: string;
};

export function Layout({ title, description, tab, pl, overflow = "overflow-hidden", children }: LayoutProps) {
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
      <body class={tw("h-dvh w-full", "flex flex-row flex-nowrap", "bg-background text-foreground")} data-tab={tab}>
        <noscript>
          <em>Note!</em>
          <p>This site is fully static and requires JavaScript for the best experience.</p>
          <p>In particular, the search feature will not work without JavaScript.</p>
        </noscript>

        <aside class={tw("w-[22rem]", "bg-linear-to-b from-secondary/75 to-background")}>
          <header class={tw("mb-4 p-4", "flex flex-row items-center")}>
            <a
              href="/"
              style="background: url('/images/plangs.svg') no-repeat left/contain"
              class={tw("inline-block flex-1", "text-transparent", "h-[4rem]")}>
              Plangs!
            </a>
            <div>D/L</div>
          </header>

          <NavSection
            title="Explore"
            links={[
              { title: "Plangs!", href: "/" },
              { title: "Python", href: "/plangs/python", nested: true, current: true },
              { title: "Tools", href: "/tools" },
              { title: "Apps", href: "/apps" },
              { title: "Libraries", href: "/libs" },
            ]}
          />

          <NavSection title="Blog" links={[{ title: "All Posts", href: "/blog" }]} />

          <NavSection
            title="Website"
            links={[
              { title: "About", href: "/about" },
              { title: "Source Code", href: "/about", current: true },
            ]}
          />

          <NavSection
            title="Reference"
            links={[
              { title: "Type Systems", href: "/tsys" },
              { title: "Paradigms", href: "/paradigms" },
              { title: "Platforms", href: "/platforms" },
              { title: "Tags", href: "/tags" },
              { title: "Licenses", href: "/licenses" },
            ]}
          />
        </aside>

        <main class={tw("flex-1", "flex flex-col", "items-center", overflow)}>{children}</main>
      </body>
    </html>
  );
}

type NavLink = { title: string; href: string; nested?: boolean; current?: boolean };

function NavSection({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <nav class={tw("mb-8 pt-6", "border-primary/25 border-t-1 border-dotted")}>
      <header class={tw("mb-4 ml-4", "uppercase", "text-primary")}>{title}</header>
      <ul>
        {links.map(({ title, href, nested, current }) => (
          <li
            key={href}
            class={tw(
              "mb-1 p-2",

              current && "bg-primary text-background shadow-lg shadow-secondary",
              !current && "hover:bg-primary/25",
            )}>
            <a class={tw("block cursor-pointer", NOWRAP_TEXT, nested ? "pl-10" : "pl-4")} href={href}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
