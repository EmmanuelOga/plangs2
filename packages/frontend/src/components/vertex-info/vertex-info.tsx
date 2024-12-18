import type { ComponentChildren, JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { ret } from "@plangs/auxiliar/misc";
import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { EXTERN, GITHUB, REDDIT, STACKOV, WIKIPEDIA } from "@plangs/frontend/auxiliar/icons";
import { getCurrentPageStore } from "@plangs/frontend/auxiliar/storage";
import { BORDER, PROSE_BASIC, VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import type { VertexDetail } from "@plangs/plangs/graph/vertex_base";
import { GRID_PAGES, type PlangsPage } from "@plangs/server/components/layout";
import { VertexThumbn } from "@plangs/server/components/vertex-thumbn";
import { cssClass } from "@plangs/server/elements";

export type VertexInfoProps = {
  page: PlangsPage;
  open?: boolean;
  detail?: VertexDetail;
};

/** Display Vertex. */
export function VertexInfo({ detail, open, page }: VertexInfoProps) {
  const self = useRef<HTMLDivElement>(null);

  // Remember the open state.
  const store = getCurrentPageStore();
  const updateOpen = () => {
    const elem = self.current?.querySelector<HTMLDetailsElement>("details");
    // The event happens before the default action of the element, so we need to invert the value.
    if (elem) store.update("vertex-detail-open", !elem.open);
  };

  useEffect(() => {
    if (!self.current) return;

    // Make sure the title is visible.
    self.current.querySelector("h2")?.scrollIntoView({ behavior: "smooth", block: "end" });

    const links = self.current.querySelectorAll(`.${cssClass("externalLink")}`);
    if (links.length === 0) return;
    for (const [i, el] of links.entries()) {
      el.classList.add("scale-0");
      setTimeout(() => el.classList.remove("scale-0"), 50 + (links.length - i) * 50);
    }
  });

  const forGrid = GRID_PAGES.has(page);
  return (
    <div ref={self} class={tw(VSCROLL, forGrid && "p-4", !forGrid && "sm:mb-16", PROSE_BASIC, "max-w-[unset]")}>
      {!detail && (
        <div>
          <h2 class={tw("mt-0!")}>Information</h2>
          <p>
            <strong class="text-primary">Click</strong> a thumbnail for more info.
          </p>
        </div>
      )}
      {detail && (
        <div>
          <div class="flex flex-row gap-5 align-middle">
            <h2 class={tw("m-0!", forGrid && "inline sm:block")}>
              <a class="text-primary" href={detail.href}>
                {detail.name}
              </a>
            </h2>
            <div class="flex-1" />
            {ret(detail.urlHome, url => url && <ExternalLink href={url} icon={EXTERN} />)}
            {ret(detail.urlGithub, url => url && <ExternalLink href={url} icon={GITHUB} />)}
            {ret(detail.urlStackov, url => url && <ExternalLink href={url} icon={STACKOV} />)}
            {ret(detail.urlReddit, url => url && <ExternalLink href={url} icon={REDDIT} />)}
            {ret(detail.urlWikipedia, url => url && <ExternalLink href={url} icon={WIKIPEDIA} />)}
          </div>
          <p class={tw(forGrid && "inline sm:block", "hyphens-auto")}>
            {!forGrid && (
              <div class={tw("float-right ml-2 p-4", tw(BORDER, "border-1"))}>
                <VertexThumbn detail={detail} onlyImg={true} class="h-[6.5rem] w-[6.5rem]" />
              </div>
            )}
            {forGrid ? detail.shortDesc : detail.description}
          </p>
        </div>
      )}
      {detail && detail.relations.length > 0 && (
        <details class={tw(forGrid && "hidden sm:block", "overflow-hidden", !forGrid && tw("p-4"))} open={open}>
          <summary class="cursor-pointer text-primary" {...onClickOnEnter(updateOpen)}>
            Details
          </summary>
          <div class={tw(forGrid ? "flex flex-col" : "grid grid-cols-[auto_1fr]", "sm:gap-4", "sm:p-4")}>
            {detail.general.length > 0 && (
              <RelationCell title="General">
                {detail.general.map(value => (
                  <Pill key={value}>{value}</Pill>
                ))}
              </RelationCell>
            )}
            {detail.relations.map(([title, vertices]) => (
              <RelationCell key={title} title={title}>
                {vertices.map(vertex => (
                  <Pill key={vertex.name}>
                    <a href={vertex.href}>{vertex.name}</a>
                  </Pill>
                ))}
              </RelationCell>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

function ExternalLink({ href, icon }: { href: string; icon: JSX.Element }) {
  return (
    <a href={href} class={tw(cssClass("externalLink"), "transition-transform", "text-primary hover:text-hiliteb")}>
      {icon}
    </a>
  );
}

function RelationCell({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <div
      class={tw("col-span-2 grid grid-cols-subgrid", tw("border-foreground/25 border-dotted sm:border-t-1", "pt-4"), tw("hover:bg-hiliteb/10"))}
      key={title}>
      <header class="p-1 text-foreground/75">{title}</header>
      <div>{children}</div>
    </div>
  );
}

function Pill({ children }: { children: ComponentChildren }) {
  return (
    // shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-blue-600 inset-ring inset-ring-white/15
    <div
      class={tw(
        "inline-flex items-center",
        "m-2 px-2",
        "border-1 border-foreground/25",
        "rounded-tl-2xl rounded-br-2xl",
        "bg-secondary/75 text-foreground",
        "overflow-ellipsis whitespace-nowrap",
      )}>
      {children}
    </div>
  );
}
