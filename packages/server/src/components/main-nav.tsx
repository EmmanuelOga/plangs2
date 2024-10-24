import { BORDER } from "@plangs/frontend/auxiliar/styles";
import { script, tw } from "@plangs/frontend/auxiliar/utils";
import { cl, id } from "@plangs/server/elements";

import type { TAB } from "./layout";

export function MainNav({ tab, class: cssClass }: { tab: TAB; class?: string }) {
  return (
    <aside id={id("mainNav")} class={tw("bg-linear-to-t from-secondary to-background", cssClass)}>
      {script("window.restoreHamburguer();")}

      <NavSection
        tab={tab}
        title="Explore"
        border={false}
        links={[
          { title: "Plangs!", href: "/", forTab: "plangs" },
          { title: "Tools", href: "/tools", forTab: "tools" },
          { title: "Apps", href: "/apps", forTab: "apps" },
          { title: "Libraries", href: "/libs", forTab: "libs" },
        ]}
      />

      <NavSection tab={tab} title="Blog" links={[{ title: "Blog Posts", href: "/blog", forTab: "blog" }]} />

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
  );
}

type NavLink = { title: string; href: string; nested?: boolean; forTab: TAB };

function NavSection({ title, links, tab, border }: { tab: TAB; title: string; links: NavLink[]; border?: boolean }) {
  return (
    <nav class={tw("mb-1 pt-5 sm:mb-8", (border === undefined || border) && tw(BORDER, "border-t-1"))}>
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
              class={tw(cl("navLink"), "block cursor-pointer", "truncate", nested ? "pl-10" : "pl-4")}
              href={href}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
