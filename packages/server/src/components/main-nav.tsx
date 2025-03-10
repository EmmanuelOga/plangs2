import { VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import { cssID } from "@plangs/server/elements";
import { script } from "@plangs/server/utils/html";

import { ret } from "@plangs/auxiliar/misc";
import type { PlangsPage } from "./layout";

export function MainNav({ page, class: cssClass }: { page: PlangsPage; class?: string }) {
  return (
    <aside id={cssID("mainNav")} class={tw(VSCROLL, "sm:pt-2", cssClass)}>
      {script("window.restoreHamburguer();")}

      <NavSection
        page={page}
        title="Explore"
        links={[
          { title: "Plangs!", href: "/", forPages: ["plangs", "plang"] },
          { title: "Tools", href: "/tools", forPages: ["tools", "tool"] },
          { title: "Apps", href: "/apps", forPages: ["apps", "app"] },
          { title: "Libraries", href: "/libraries", forPages: ["library", "libraries"] },
          { title: "Subsystems", href: "/subsystems", forPages: ["subsystem", "subsystems"] },
          { title: "Learning", href: "/learning", forPages: ["learning"] },
          { title: "Communities", href: "/communities", forPages: ["communities", "community"] },
        ]}
      />

      <NavSection
        page={page}
        title="Website"
        links={[
          { title: "News!️", href: "/blog", forPages: ["blog"] },
          { title: "About", href: "/about", forPages: ["about"] },
          { title: "Editor", href: "/edit", forPages: ["edit"], mobileHidden: true },
          { title: "Source Code", href: "https://github.com/EmmanuelOga/plangs2", forPages: ["NA"] },
        ]}
      />

      <NavSection
        page={page}
        title="Reference"
        links={[
          { title: "Tags", href: "/tags", forPages: ["tags", "tag"] },
          { title: "Platforms", href: "/platforms", forPages: ["platforms", "platform"] },
          { title: "Paradigms", href: "/paradigms", forPages: ["paradigms", "paradigm"] },
          { title: "Type Systems", href: "/typesystems", forPages: ["typesystems", "typeSystem"] },
          { title: "Licenses", href: "/licenses", forPages: ["licenses", "license"] },
        ]}
      />
    </aside>
  );
}

type NavLink = { title: string; href: string; forPages: PlangsPage[]; mobileHidden?: boolean };

function NavSection({ title, links, page }: { title: string; links: NavLink[]; page: PlangsPage }) {
  return (
    <nav class={tw("mb-2 sm:mb-4")}>
      <header class={tw("p-2", "uppercase", "text-primary")}>{title}</header>
      <ul>
        {links.map(({ title, href, forPages, mobileHidden }) =>
          ret(forPages.includes(page), isCurrent => (
            <li
              key={href}
              class={tw(
                "px-4 py-1.5 sm:px-8 sm:py-2",
                isCurrent ? "bg-primary/85 text-background" : "hover:bg-primary/25",
                mobileHidden && "hidden md:block",
              )}>
              <a href={href} class={tw("block cursor-pointer", "truncate", "prefetch")}>
                {title}
              </a>
            </li>
          )),
        )}
      </ul>
    </nav>
  );
}
