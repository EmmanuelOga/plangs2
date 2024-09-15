import type { Link, NPlang } from "@plangs/plangs";

import { PlangInfo } from "@plangs/frontend/plang-info/plang-info";
import { domId } from "./dom";
import { useContext } from "preact/hooks";
import { PlangsData } from "../context";
import { toAnchor } from "../util";

type LangProps = {
  pl: NPlang;
};

export function Lang({ pl }: LangProps) {
  const pg = useContext(PlangsData);
  if (!pg) throw new Error("PlangsGraph should be in the context already.");

  return (
    <>
      <nav id={domId("nav")}>{/*Same as Browse, but empty.*/}</nav>

      <article id="lang-page" class="common-content">
        <h1>{pl.name}</h1>

        {pl.websites.tap((websites) => (
          <p>{websites.map((link) => toAnchor(link))}</p>
        ))}

        <p>{pl.description}</p>

        {pl.websites.tap((websites) => (
          <>
            <h2>News</h2>
            {websites.map((link) => (
              <p key={link.href}>{toAnchor(link)}</p>
            ))}
          </>
        ))}

        <h2>Tooling</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tags</th>
              <th>Description</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>BuildMaster</td>
              <td>build</td>
              <td>Description</td>
              <td>Periquin.com</td>
            </tr>
          </tbody>
        </table>

        <h2>Tool Bundles</h2>
        <p>A "bundle" is a set of tools that work well together. Here are some recommended ones.</p>
        <dl>
          <dt>Bundle 1</dt>
          <dd>
            <p>Description of the bundle.</p>
            <ul>
              <li>Tool 1</li>
              <li>Tool 2</li>
              <li>Tool 3</li>
            </ul>
          </dd>
        </dl>

        <h2>{pl.name} Libraries</h2>
        <dl>
          <dt>Library 1</dt>
          <dd>
            <p>
              Description of the Library.
              <a href=".">Link</a>
            </p>
          </dd>
        </dl>

        <h2>Built with {pl.name}</h2>
        <p>Example applications built with {pl.name}.</p>
        <dl>
          <dt>Application 1</dt>
          <dd>
            <p>
              Description of the app.
              <a href=".">Link</a>
            </p>
          </dd>
        </dl>
      </article>

      <nav id={domId("side")}>
        <div id="server-side-plang-info">
          <PlangInfo graph={pg} plangKey={pl.key} description={false} />
        </div>
      </nav>
    </>
  );
}
