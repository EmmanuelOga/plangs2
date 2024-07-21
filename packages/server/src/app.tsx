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
        <link rel="stylesheet" href="/browser.css" />
        <script src="/browser.js" defer />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
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
          This site is fully static and requires JavaScript for the best experience. In particular, the search feature
          will not work without JavaScript.
        </noscript>
        <main id={pageId}>{children}</main>
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
      <nav id="home-nav">
        <Facet title="General">
          <FacetInput type="search" label="Language Name" name="plang-name" />
          <FacetInput type="checkbox" label="Known Releases" name="has-releases" />
          <FacetInput type="date" label="Released After" name="release-min-date" cssClasses="hide" />
        </Facet>
        <Facet title="Type System">
          {[...pg.v_tsystem].map(([vid, data]) => (
            <FacetInput key={vid} type="checkbox" label={data.name ?? vid} name="type-system" value={vid} />
          ))}
        </Facet>
        <Facet title="Paradigm">
          {[...pg.v_paradigm].map(([vid, data]) => (
            <FacetInput key={vid} type="checkbox" label={data.name ?? vid} name="paradigm" value={vid} />
          ))}
        </Facet>
        <Facet title="Platform">
          {[...pg.v_platform].map(([vid, data]) => (
            <FacetInput key={vid} type="checkbox" label={data.name ?? vid} name="platform" value={vid} />
          ))}
        </Facet>
        <Facet title="Lineage">
          <FacetInput type="compl" label="Influenced By" name="influenced-by" />
          <FacetInput type="compl" label="Dialect Of" name="dialect-of" />
          <FacetInput type="compl" label="Implements" name="implements" />
          <div class="separator" />
          <FacetInput type="compl" label="Influenced" name="influenced" />
          <FacetInput type="compl" label="Standard For" name="standard-for" />
          <FacetInput type="compl" label="Implemented With" name="implemented-with" />
        </Facet>
        <Facet title="People">
          <FacetInput type="compl" label="Person Name" name="person" />
        </Facet>
        <Facet title="License">
          {[...pg.v_license].map(([vid, data]) => (
            <FacetInput key={vid} type="checkbox" label={data.name ?? vid} name="license" value={vid} />
          ))}
        </Facet>
        <Facet title="Misc">
          <FacetInput type="checkbox" label="Source-to-Source" name="plang-transpiler" />
          <FacetInput type="checkbox" label="Has Logo" name="has-logo" />
          <FacetInput type="checkbox" label="Has Website" name="has-website" />
          <FacetInput type="checkbox" label="Has Wikipedia" name="has-wikipedia" />
          <FacetInput type="search" sel={true} label="File Extension" name="plang-ext" />
        </Facet>
      </nav>
      <article id="home-plangs">
        <PlangsList pg={pg} />
      </article>
      <nav id="home-side">
        <Facet title="Language">
          <p>Select a language to show more information.</p>
        </Facet>
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
  sel?: boolean;
  type: "compl" | "search" | "checkbox" | "date";
  value?: string;
};

function FacetInput({ cssClasses, label, name, sel, type, value }: FacetInputProps) {
  let input: JSX.Element;

  const id = value ? `${name}-${value}` : name;

  if (type === "checkbox") {
    input = (
      <>
        <input id={id} name={name} type="checkbox" />
        <span class="inner-label-checkbox">{label}</span>
      </>
    );
  } else if (type === "compl") {
    input = (
      <>
        <span class="inner-label">{label}</span>
        {h("input-compl", { id, name })}
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
