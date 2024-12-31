import type { ComponentChildren, JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { ret } from "@plangs/auxiliar/misc";
import { onClickOnEnter } from "@plangs/frontend/auxiliar/dom";
import { EXTERN, GITHUB, LANGUISH, REDDIT, STACKOV, WIKIPEDIA } from "@plangs/frontend/auxiliar/icons";
import { getCurrentPageStore } from "@plangs/frontend/auxiliar/storage";
import { HOVER_ICON, PROSE_BASIC, VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import { Pill } from "@plangs/frontend/components/misc/pill";
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
  const forGrid = GRID_PAGES.has(page);

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
      setTimeout(() => el.classList.remove("scale-0"), 50 + (i + 1) * 50);
    }
  });

  const iconLinks = detail && (
    <div class="flex flex-row flex-nowrap items-center gap-3 align-middle">
      {ret(detail.urlHome, url => url && <IconLink href={url} icon={EXTERN} />)}
      {ret(detail.urlLanguish, url => url && <IconLink href={url} icon={LANGUISH} title={`#${detail.ranking} on Languish`} />)}
      {ret(detail.urlGithub, url => url && <IconLink href={url} icon={GITHUB} />)}
      {ret(detail.urlWikipedia, url => url && <IconLink href={url} icon={WIKIPEDIA} />)}
      {ret(detail.urlStackov, url => url && <IconLink href={url} icon={STACKOV} />)}
      {ret(detail.urlReddit, url => url && <IconLink href={url} icon={REDDIT} />)}
    </div>
  );

  const header = (
    <header class="flex flex-wrap items-center align-middle">
      <h2 class={tw("m-0!", "truncate")}>{detail ? <a class="prefetch pr-2" href={detail.href} children={detail.name} /> : "Information"}</h2>
      <div class="flex-1" />
      {iconLinks}
    </header>
  );

  const info = detail ? (
    <div class={tw(forGrid && "pb-2 text-xs sm:text-base", VSCROLL, !forGrid && "py-4", "short:hidden")}>
      {!forGrid && detail.thumbUrl && <VertexThumbn detail={detail} onlyImg={true} class="float-right m-1 ml-6 size-24" />}
      <div class={tw("hyphens-auto", !forGrid && "text-justify")}>{forGrid ? detail.shortDesc : detail.description}</div>
    </div>
  ) : (
    <p>
      <strong class="text-primary">Click</strong> a thumbnail for more info.
    </p>
  );

  let i = 1;
  const relations = detail && detail.relations.length > 0 && (
    <details class={tw(forGrid && "hidden short:hidden sm:block", "overflow-hidden")} open={open}>
      <summary class="cursor-pointer pb-4 text-primary" {...onClickOnEnter(updateOpen)}>
        Details
      </summary>
      <div class={tw("flex flex-col")}>
        {detail.general.length > 0 && (
          <RelationCell title="General" class={tw(i++ % 2 === 0 ? "bg-primary/6" : "bg-primary/12")}>
            {detail.general.map(item => (
              <Pill title={item.title} key={item}>
                {item.kind === "text" ? (
                  <span>{item.value}</span>
                ) : (
                  <a href={item.href} class={tw("inline-flex")}>
                    <span>{item.value}</span>
                    <span class="scale-50">{EXTERN}</span>
                  </a>
                )}
              </Pill>
            ))}
          </RelationCell>
        )}
        {detail.relations.map(([title, vertices]) => (
          <RelationCell key={title} title={title} class={tw(i++ % 2 === 0 ? "bg-primary/6" : "bg-primary/12")}>
            {vertices.map(vertex => (
              <Pill key={vertex.name}>
                <a href={vertex.href}>{vertex.name}</a>
              </Pill>
            ))}
          </RelationCell>
        ))}
      </div>
    </details>
  );

  return (
    <div
      ref={self}
      class={tw(
        "flex flex-col",
        tw(PROSE_BASIC, "max-w-[unset]"),
        forGrid && "px-2 short:py-0 pt-1 sm:p-4",
        forGrid && "border-primary/50 landscape-narrow:border-t-1",
        "overflow-hidden",
      )}>
      {header}
      {info}
      {relations}
    </div>
  );
}

function IconLink({ href, icon, title }: { href: string; icon: JSX.Element; title?: string }) {
  return (
    <a {...(title ? { title } : {})} href={href} class={tw(cssClass("externalLink"), "inline-block aspect-square", "transition-transform", "sm:p-1")}>
      <div class={tw("inline-block", HOVER_ICON)}>{icon}</div>
    </a>
  );
}

function RelationCell({ title, children, class: klass }: { title: string; children: ComponentChildren; class?: string }) {
  return (
    <div class={tw("hover:bg-hiliteb/10", klass)} key={title}>
      <header class="mb-2 p-2 text-foreground text-sm uppercase">{title}</header>
      <div class="ml-2 flex flex-row flex-wrap">{children}</div>
    </div>
  );
}
