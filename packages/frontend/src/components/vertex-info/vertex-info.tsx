import { useEffect, useRef } from "preact/hooks";

import { ret } from "@plangs/auxiliar/misc";
import { GITHUB, HOME, REDDIT, STACKOV, WIKIPEDIA } from "@plangs/frontend/auxiliar/icons";
import { BORDER, PROSE_BASIC, VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";
import { GRID_PAGES, type PlangsPage } from "@plangs/server/components/layout";
import { VertexThumbn } from "@plangs/server/components/vertex-thumbn";
import type { ComponentChildren, JSX } from "preact";

export type VertexInfoProps = {
  page: PlangsPage;
  open?: boolean;
  vertex?: TPlangsVertex;
};

/** Display Vertex. */
export function VertexInfo({ vertex, open, page }: VertexInfoProps) {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => h1Ref.current?.scrollIntoView({ behavior: "smooth", block: "end" }));
  const forGrid = GRID_PAGES.has(page);
  const rels = relations(vertex);
  return (
    <div class={tw(VSCROLL, forGrid && "p-4", !forGrid && "sm:mb-16", PROSE_BASIC, "max-w-[unset]")}>
      {!vertex && (
        <div>
          <h2 class={tw("mt-0!")}>Information</h2>
          <p>
            <strong class="text-primary">Click</strong> a thumbnail for more info.
          </p>
        </div>
      )}
      {vertex && (
        <div>
          <div class="flex flex-row gap-4">
            <h2 ref={h1Ref} class={tw("m-0!", forGrid && "inline sm:block")}>
              <a class="text-primary" href={vertex.href}>
                {vertex.name}
              </a>
            </h2>
            <div class="flex-1" />
            {ret(vertex.urlHome, url => url && <ExternalLink href={url} icon={HOME} />)}
            {ret(vertex.urlGithub, url => url && <ExternalLink href={url} icon={GITHUB} />)}
            {ret(vertex.urlStackov, url => url && <ExternalLink href={url} icon={STACKOV} />)}
            {ret(vertex.urlReddit, url => url && <ExternalLink href={url} icon={REDDIT} />)}
            {ret(vertex.urlWikipedia, url => url && <ExternalLink href={url} icon={WIKIPEDIA} />)}
          </div>
          <p class={tw(forGrid && "inline sm:block", "hyphens-auto")}>
            {!forGrid && (
              <div class={tw("float-right ml-2 p-4", tw(BORDER, "border-1"))}>
                <VertexThumbn vertex={vertex} onlyImg={true} class="h-[6.5rem] w-[6.5rem]" />
              </div>
            )}
            {forGrid ? vertex.shortDesc : vertex.description}
          </p>
        </div>
      )}
      {vertex && rels.length > 0 && (
        <details
          class={tw(forGrid && "hidden sm:block", "overflow-hidden", !forGrid && tw("p-4", tw("border-foreground/25 border-dotted", "border-1")))}
          open={open}>
          <summary class="cursor-pointer text-primary">Details</summary>
          <div class={tw(!forGrid ? "flex flex-col" : "grid grid-cols-[auto_1fr]", "sm:gap-4", "sm:p-4")}>
            <DetailCell title="General">
              {vertex.created.value && <Pill children={`Appeared ${vertex.created.year}`} />}
              {"releases" in vertex && ret(vertex.releases.last, rel => rel && <Pill children={`Released ${rel.date ?? rel.version}`} />)}
              {"isTranspiler" in vertex && vertex.isTranspiler && <Pill children="Transpiler" />}
              {"isPopular" in vertex && vertex.isPopular && <Pill children="Popular" />}
            </DetailCell>
            {relations(vertex).map(([title, vertices]) => (
              <DetailCell key={title} title={title}>
                {vertices.map(vertex => (
                  <Pill key={vertex.key}>
                    <a href={vertex.href}>{vertex.name}</a>
                  </Pill>
                ))}
              </DetailCell>
            ))}
          </div>
        </details>
      )}
    </div>
  );
}

function ExternalLink({ href, icon }: { href: string; icon: JSX.Element }) {
  return (
    <a href={href} class={tw("text-primary hover:text-hiliteb")}>
      {icon}
    </a>
  );
}

function DetailCell({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <div class={tw("col-span-2 grid grid-cols-subgrid", tw("border-foreground/25 border-dotted sm:border-t-1", "pt-4"))} key={title}>
      <header class="p-1 text-foreground/75">{title}</header>
      <div class="p-1 ">{children}</div>
    </div>
  );
}

function Pill({ children }: { children: ComponentChildren }) {
  return (
    // shadow-md inset-shadow-sm inset-shadow-white/20 ring ring-blue-600 inset-ring inset-ring-white/15
    <div
      class={tw(
        "inline-flex items-center",
        "m-1 px-1.5",
        "border-1 border-foreground/25",
        "rounded-tl-2xl rounded-br-2xl",
        "bg-secondary/75 text-foreground",
        "overflow-ellipsis whitespace-nowrap",
      )}>
      {children}
    </div>
  );
}

function relations(vertex?: TPlangsVertex): [string, TPlangsVertex[]][] {
  const result: [string, TPlangsVertex[]][] = [];
  if (!vertex) return result;
  for (const rel of vertex.relations.values()) {
    const relValues = rel.values.filter(related => related.key !== vertex.key);
    if (relValues.length > 0) result.push([rel.desc, relValues]);
  }
  return result;
}

export const EVENTS = {} as const;
