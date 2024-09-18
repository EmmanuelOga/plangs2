import { Fragment } from "preact";
import { useContext } from "preact/hooks";

import { PlangInfo } from "@plangs/frontend/plang-info/plang-info";
import type { NPlang } from "@plangs/plangs";

import { PlangsContext } from "../context";
import { toAnchor } from "../util";
import { domId } from "./dom";

type LangProps = {
  pl: NPlang;
};

export function Lang({ pl }: LangProps) {
  const pg = useContext(PlangsContext);
  if (!pg) throw new Error("PlangsGraph should be in the context already.");

  return (
    <Fragment>
      <article id="lang-page" class="common-content readable">
        <h1>{pl.name}</h1>

        {pl.websites.tap(websites => (
          <p>{websites.map(link => toAnchor(link))}</p>
        ))}

        <p>{pl.description}</p>

        {pl.relPosts.tap(posts => (
          <Fragment>
            <h2>News</h2>
            {posts.values.map(
              ({ post }) =>
                post?.link && (
                  <p key={post.key}>
                    {post.date} {toAnchor(post.link)}
                  </p>
                ),
            )}
          </Fragment>
        ))}

        {pl.relApps.tap(apps => (
          <Fragment>
            <h2>Applications</h2>
            <p>Example open source applications created with {pl.name}.</p>

            <table>
              <thead>
                <tr>
                  <th>App</th>
                  <th>Keywords</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {apps.values.map(
                  ({ app }) =>
                    app && (
                      <tr key={app.key}>
                        <td>{app.websites.map(link => toAnchor(link))}</td>
                        <td>{app.keywords.join(", ")}</td>
                        <td>{app.description}</td>
                      </tr>
                    ),
                )}
              </tbody>
            </table>
          </Fragment>
        ))}

        {pl.relLibs.tap(libraries => (
          <Fragment>
            <h2>Libraries</h2>
            <p>Example open source libraries that can be used with {pl.name}.</p>

            <table>
              <thead>
                <tr>
                  <th>Lib</th>
                  <th>Keywords</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {libraries.values.map(
                  ({ lib }) =>
                    lib && (
                      <tr key={lib.key}>
                        <td>{lib.websites.map(link => toAnchor(link))}</td>
                        <td>{lib.keywords.join(", ")}</td>
                        <td>{lib.description}</td>
                      </tr>
                    ),
                )}
              </tbody>
            </table>
          </Fragment>
        ))}

        {pl.relTools.tap(tools => (
          <Fragment>
            <h2>Tooling</h2>
            <p>Additional tooling available for {pl.name}.</p>

            <table>
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Keywords</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {tools.values.map(
                  ({ tool }) =>
                    tool && (
                      <tr key={tool.key}>
                        <td>{tool.websites.map(link => toAnchor(link))}</td>
                        <td>{tool.keywords.join(", ")}</td>
                        <td>{tool.description}</td>
                      </tr>
                    ),
                )}
              </tbody>
            </table>

            {pl.relPlBundles.tap(plBundles =>
              plBundles.values.tap(bundles => (
                <Fragment>
                  <h2>Tool Bundles</h2>
                  <p>A "bundle" is a set of tools that work well together.</p>

                  {bundles.map(
                    ({ bundle }) =>
                      bundle && (
                        <Fragment>
                          <p key={bundle.key} style="margin-bottom: 1rem">
                            {bundle.relTools.values.map(
                              ({ tool }) =>
                                tool && (
                                  <div
                                    key={tool.key}
                                    style="border: 2px solid green; background-color: #141; padding: .5rem 1rem; margin-right: .5rem; display: inline-block;">
                                    {tool.name}
                                  </div>
                                ),
                            )}
                          </p>
                          <p>{bundle.description}</p>
                        </Fragment>
                      ),
                  )}
                </Fragment>
              )),
            )}
          </Fragment>
        ))}
      </article>

      <nav id={domId("side")}>
        <div id="server-side-plang-info">
          <PlangInfo graph={pg} plangKey={pl.key} description={false} />
        </div>
      </nav>
    </Fragment>
  );
}
