import { BORDER, tw } from "@plangs/frontend/auxiliar/styles";
import { cssID } from "@plangs/server/elements";
import { script } from "@plangs/server/utils/html";

import type { PlangsPage } from "./layout";

export function MainNav({ page, class: cssClass }: { page: PlangsPage; class?: string }) {
  return (
    <aside id={cssID("mainNav")} class={tw("bg-linear-to-t from-secondary to-background", cssClass)}>
      {script("window.restoreHamburguer();")}

      <NavSection
        page={page}
        title="Explore"
        border={false}
        links={[
          { title: "Plangs!", href: "/", forPage: "plangs" },
          { title: "Tools", href: "/tools", forPage: "tools" },
          { title: "Apps", href: "/apps", forPage: "apps" },
          { title: "Libraries", href: "/libs", forPage: "libs" },
          { title: "Learning", href: "/learning", forPage: "learning" },
          { title: "Communities", href: "/communities", forPage: "communities" },
        ]}
      />

      <NavSection page={page} title="Blog" links={[{ title: "Blog Posts", href: "/blog", forPage: "blog" }]} />

      <NavSection
        page={page}
        title="Website"
        links={[
          { title: "About", href: "/about", forPage: "about" },
          { title: "Source Code", href: "https://github.com/EmmanuelOga/plangs2", forPage: "NA" },
        ]}
      />

      <NavSection
        page={page}
        title="Reference"
        links={[
          { title: "Type Systems", href: "/typeSystems", forPage: "tsys" },
          { title: "Paradigms", href: "/paradigms", forPage: "paradigms" },
          { title: "Platforms", href: "/platforms", forPage: "platforms" },
          { title: "Tags", href: "/tags", forPage: "tags" },
          { title: "Licenses", href: "/licenses", forPage: "licenses" },
        ]}
      />
    </aside>
  );
}

type NavLink = { title: string; href: string; nested?: boolean; forPage: PlangsPage };

function NavSection({ title, links, page, border }: { page: PlangsPage; title: string; links: NavLink[]; border?: boolean }) {
  return (
    <nav class={tw("mb-1 sm:mb-8", (border === undefined || border) && tw(BORDER, "border-t-1"))}>
      <header class={tw("ml-4 sm:mb-4", "uppercase", "text-primary")}>{title}</header>
      <ul>
        {links.map(({ title, href, nested, forPage }) => (
          <li key={href} class={tw("px-4 py-2 sm:mb-1", page === forPage ? "bg-primary/85 text-background" : "hover:bg-primary/25")}>
            <a
              data-page={forPage}
              data-current={page === forPage ? "1" : undefined}
              class={tw("block cursor-pointer", "truncate", nested ? "pl-10" : "pl-4")}
              href={href}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
