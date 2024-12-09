import { tw } from "@plangs/frontend/auxiliar/styles";
import { cssID } from "@plangs/server/elements";
import { script } from "@plangs/server/utils/html";

import { ret } from "@plangs/auxiliar/misc";
import type { PlangsPage } from "./layout";

export function MainNav({ page, class: cssClass }: { page: PlangsPage; class?: string }) {
  return (
    <aside id={cssID("mainNav")} class={tw("bg-linear-to-t from-secondary to-background", cssClass)}>
      {script("window.restoreHamburguer();")}

      <NavSection
        page={page}
        title="Explore"
        links={[
          { title: "Plangs!", href: "/", forPages: ["plangs", "pl"] },
          { title: "Tools", href: "/tools", forPages: ["tools", "tool"] },
          { title: "Apps", href: "/apps", forPages: ["apps", "app"] },
          { title: "Libraries", href: "/libs", forPages: ["libs", "library"] },
          { title: "Learning", href: "/learning", forPages: ["learning"] },
          { title: "Communities", href: "/communities", forPages: ["communities", "community"] },
        ]}
      />

      <NavSection page={page} title="Blog" links={[{ title: "Blog Posts", href: "/blog", forPages: ["blog"] }]} />

      <NavSection
        page={page}
        title="Website"
        links={[
          { title: "About", href: "/about", forPages: ["about"] },
          { title: "Source Code", href: "https://github.com/EmmanuelOga/plangs2", forPages: ["NA"] },
        ]}
      />

      <NavSection
        page={page}
        title="Reference"
        links={[
          { title: "Type Systems", href: "/typeSystems", forPages: ["tsys", "typeSystem"] },
          { title: "Paradigms", href: "/paradigms", forPages: ["paradigms", "paradigm"] },
          { title: "Platforms", href: "/platforms", forPages: ["platforms", "platform"] },
          { title: "Tags", href: "/tags", forPages: ["tags", "tag"] },
          { title: "Licenses", href: "/licenses", forPages: ["licenses", "license"] },
        ]}
      />
    </aside>
  );
}

type NavLink = { title: string; href: string; nested?: boolean; forPages: PlangsPage[] };

function NavSection({ title, links, page }: { title: string; links: NavLink[]; page: PlangsPage }) {
  return (
    <nav class={tw("mb-1 sm:mb-8")}>
      <header class={tw("ml-4 sm:mb-4", "uppercase", "text-primary")}>{title}</header>
      <ul>
        {links.map(({ title, href, nested, forPages }) =>
          ret(forPages.includes(page), isCurrent => (
            <li key={href} class={tw("mb-1 px-4 py-2", isCurrent ? "bg-primary/85 text-background" : "hover:bg-primary/25")}>
              <a href={href} class={tw("block cursor-pointer", "truncate", nested ? "pl-10" : "pl-4")}>
                {title}
              </a>
            </li>
          )),
        )}
      </ul>
    </nav>
  );
}
