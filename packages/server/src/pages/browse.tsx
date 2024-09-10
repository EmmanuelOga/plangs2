import { type ComponentChildren, type JSX, h } from "preact";
import { useContext } from "preact/hooks";

import type { NPlang } from "@plangs/plangs";

import { PlangsData } from "../context";

export const INPUTS_MARKUP = {
  plangName: <FacetInput type="search" label="Language Name" name="plangName" />,

  firstAppearedMinDate: <FacetInput type="date" label="First Appeared" name="firstAppearedMinDate" cssClasses="hide" />,
  releaseMinDate: <FacetInput type="date" label="Released After" name="releaseMinDate" cssClasses="hide" />,

  hasLogo: <FacetInput type="checkbox" label="Has Logo" name="has-logo" />,
  hasReleases: <FacetInput type="checkbox" label="Known Releases" name="hasLogo" />,
  hasWikipedia: <FacetInput type="checkbox" label="Has Wikipedia" name="hasReleases" />,
  isMainstream: <FacetInput type="checkbox" label="Source-to-Source" name="hasWikipedia" />,
  isTranspiler: <FacetInput type="checkbox" label="Source-to-Source" name="isTranspiler" />,

  dialectOf: <FacetInput type="compl" source="plang" label="Dialect Of" name="dialectOf" />,
  extensions: <FacetInput type="search" isInputSel={true} label="File Extension" name="extensions" />,
  implements: <FacetInput type="compl" source="plang" label="Implements" name="implements" />,
  influenced: <FacetInput type="compl" source="plang" label="Influenced" name="influenced" />,
  influencedBy: <FacetInput type="compl" source="plang" label="Influenced By" name="influencedBy" />,
  licenses: <FacetInput type="compl" source="license" label="License" name="licenses" />,
  paradigms: <FacetInput type="compl" source="para" label="Paradigm" name="paradigms" />,
  platforms: <FacetInput type="compl" source="platf" label="Platform" name="platforms" />,
  tags: <FacetInput type="compl" source="tags" label="Type System" name="tags" />,
  typeSystems: <FacetInput type="compl" source="tsys" label="Type System" name="typeSystems" />,
  writtenIn: <FacetInput type="compl" source="plang" label="Written In" name="writtenIn" />,
};

export function Browse() {
  return (
    <>
      <nav id="home-nav">
        <div id="facets">
          <Facet title="General"></Facet>

          <Facet title="Type System"></Facet>

          <Facet title="Paradigm"></Facet>

          <Facet title="Platform"></Facet>

          <Facet title="License"></Facet>

          <Facet title="Lineage"></Facet>
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
  name: keyof typeof INPUTS_MARKUP;
  /** Data source for completions. */
  isInputSel?: boolean;
  source?: "tsys" | "para" | "platf" | "plang" | "tags" | "license";
  type: "compl" | "search" | "checkbox" | "date";
  value?: string;
};

function FacetInput({ cssClasses, label, name, isInputSel, source, type, value }: FacetInputProps) {
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
      {isInputSel || type === "compl" ? h("input-sel", { name: name }) : null}
    </>
  );
}

function PlangsList() {
  const pg = useContext(PlangsData);
  if (!pg) return null;

  return (
    <>
      {[...pg.n_plangs].map(([nid, pl]) => (
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
  const logo = pl.logoOrImage;
  const content = logo ? <img class="logo" src={logo.url} alt="Logo" /> : <div class="placeholder">{pl.data.name ?? "No Logo"}</div>;
  return <div class="logo">{content}</div>;
}
