import { type ComponentChildren, type JSX, h } from "preact";

import type { PlangsGraph } from "@plangs/graph";
import type { V_Plang } from "@plangs/graph/schema";

type LayoutProps = {
  pageId: string;
  children?: ComponentChildren;
};

export function Layout({ pageId, children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Plangs</title>
        <link rel="stylesheet" href="/index.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        <div id="main-wrapper">
          <header id="plangs-header">
            <a id="plangs" href="/">
              Plangs
            </a>
            <a id="about" href="/about">
              about
            </a>
          </header>
          <noscript>
            <em>Note!</em>
            This site is fully static and requires JavaScript for the best experience.
            In particular, the search feature will not work without JavaScript.
          </noscript>
          <main id={pageId}>{children}</main>
        </div>
      </body>
    </html>
  );
}

export function HomePage({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout pageId="home">
      <Home pg={pg} />
    </Layout>
  );
}

export function Home({ pg }: { pg: PlangsGraph }) {
  return (
    <>
      <link rel="stylesheet" href="/facets-nav.css" />
      <script src="/facets-nav.js" defer />
      <nav id="home-nav">
        <Facet title="General">
          <FacetInput type="search" label="Language Name" name="plang-name" />
          <FacetInput type="checkbox" label="Known Releases" name="has-releases" />
          <FacetInput type="date" label="Released After" name="release-min-date" cssClasses="hide" />
        </Facet>
        <Facet title="Type System">
          <FacetInput type="compl" source="tsys" label="Type System" name="type-system" />
        </Facet>
        <Facet title="Paradigm">
          <FacetInput type="compl" source="para" label="Paradigm" name="paradigm" />
        </Facet>
        <Facet title="Platform">
          <FacetInput type="compl" source="platf" label="Platform" name="platform" />
        </Facet>
        <Facet title="Lineage">
          <FacetInput type="compl" source="plang" label="Influenced By" name="influenced-by" />
          <FacetInput type="compl" source="plang" label="Dialect Of" name="dialect-of" />
          <FacetInput type="compl" source="plang" label="Implements" name="implements" />
          <div class="separator" />
          <FacetInput type="compl" source="plang" label="Influenced" name="influenced" />
          <FacetInput type="compl" source="plang" label="Standard For" name="standard-for" />
          <FacetInput type="compl" source="plang" label="Implemented With" name="implemented-with" />
        </Facet>
        <Facet title="People">
          <FacetInput type="compl" source="people" label="Person Name" name="person" />
        </Facet>
        <Facet title="License">
          <FacetInput type="compl" source="license" label="License" name="license" />
        </Facet>
        <Facet title="Misc">
          <FacetInput type="search" sel={true} label="File Extension" name="plang-ext" />
          <FacetInput type="checkbox" label="Source-to-Source" name="transpiler" />
          <FacetInput type="checkbox" label="Has Logo" name="has-logo" />
          <FacetInput type="checkbox" label="Has Website" name="has-website" />
          <FacetInput type="checkbox" label="Has Wikipedia" name="has-wikipedia" />
        </Facet>
      </nav>
      <article id="home-plangs">
        <PlangsList pg={pg} />
      </article>
      <nav id="home-side">
        <Facet title="Language">{h("plang-info", {})}</Facet>
      </nav>
    </>
  );
}

type FacetProps = {
  title: string;
  children: ComponentChildren;
};

function Facet({ title, children }: FacetProps) {
  return (
    <div class="facet">
      <div class="title">{title}</div>
      <div class="controls">{children}</div>
    </div>
  );
}

type FacetInputProps = {
  cssClasses?: string;
  label: string;
  name: string;
  /** Data source for completions. */
  sel?: boolean;
  source?: "tsys" | "para" | "platf" | "plang" | "people" | "license";
  type: "compl" | "search" | "checkbox" | "date";
  value?: string;
};

function FacetInput({ cssClasses, label, name, sel, source, type, value }: FacetInputProps) {
  let input: JSX.Element;

  const id = value ? `${name}-${value}` : name;

  if (type === "checkbox") {
    input = (
      <>
        <input id={id} name={name} type="checkbox" value={value} />
        <span class="inner-label-checkbox">{label}</span>
      </>
    );
  } else if (type === "compl") {
    input = (
      <>
        <span class="inner-label">{label}</span>
        {
          // @ts-ignore: Preact TS types for `h` don't support data- attributes here.
          h("input-compl", { id, name, "data-source": source })
        }
      </>
    );
  } else {
    input = (
      <>
        <span class="inner-label">{label}</span>
        <input id={id} name={name} type={type} />
      </>
    );
  }

  return (
    <>
      <label class={cssClasses} for={id}>
        {input}
      </label>
      {sel || type === "compl" ? h("input-sel", { name: name }) : null}
    </>
  );
}

type PlangsListProps = {
  pg: PlangsGraph;
};

function PlangsList({ pg }: PlangsListProps) {
  return (
    <>
      {[...pg.v_plang].map(([vid, pl]) => (
        <div class="plang-thumb" data-vid={vid} key={vid}>
          <span class="name">{pl.name}</span>
          <PlangLogo pl={pl} />
        </div>
      ))}
    </>
  );
}

type PlangLogoProps = {
  pl: Partial<V_Plang>;
};

function PlangLogo({ pl }: PlangLogoProps) {
  const logo = pl.images?.find((img) => img.kind === "logo");

  return (
    <div class="logo">
      {logo ? <img class="logo" src={logo.url} alt="Logo" /> : <div class="placeholder">{pl.name ?? "No Logo"}</div>}
    </div>
  );
}
