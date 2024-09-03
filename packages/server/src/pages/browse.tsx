import { type ComponentChildren, type JSX, h } from "preact";
import { useContext } from "preact/hooks";

import type { NPlang } from "@plangs/plangs";

import { PlangsData } from "../context";

export function Browse() {
  return (
    <>
      <nav id="home-nav">
        <div id="facets">
          <Facet title="General">
            <FacetInput type="search" label="Language Name" name="plang-name" />
            <FacetInput type="search" sel={true} label="File Extension" name="plang-ext" />
            <FacetInput type="checkbox" label="Source-to-Source" name="transpiler" />
            <FacetInput type="checkbox" label="Has Logo" name="has-logo" />
            <FacetInput type="checkbox" label="Has Website" name="has-website" />
            <FacetInput type="checkbox" label="Has Wikipedia" name="has-wikipedia" />
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
          <Facet title="Lineage (incoming)">
            <FacetInput type="compl" source="plang" label="Influenced By" name="influenced-by" />
            <FacetInput type="compl" source="plang" label="Dialect Of" name="dialect-of" />
            <FacetInput type="compl" source="plang" label="Implements" name="implements" />
          </Facet>
          <Facet title="Lineage (outgoing)">
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
        </div>
      </nav>
      <article id="home-plangs">
        <PlangsList />
      </article>
      <nav id="home-side">
        {
          // @ts-ignore: TODO: figure out how to type this.
          h("plang-info")
        }
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
    <div class="facet" title={title}>
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

function PlangsList() {
  const pg = useContext(PlangsData);
  if (!pg) return null;

  return (
    <>
      {[...pg.n_plang].map(([nid, pl]) => (
        <div class="plang-thumb" data-vid={nid} key={nid}>
          <span class="name">{pl.data.name}</span>
          <PlangLogo pl={pl} />
        </div>
      ))}
    </>
  );
}

type PlangLogoProps = {
  pl: NPlang;
};

function PlangLogo({ pl }: PlangLogoProps) {
  const logo = pl.logoOrImage();

  return <div class="logo">{logo ? <img class="logo" src={logo.url} alt="Logo" /> : <div class="placeholder">{pl.data.name ?? "No Logo"}</div>}</div>;
}
