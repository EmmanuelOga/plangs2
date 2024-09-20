import { Fragment } from "preact";

import type { NPlang, PlangsGraph } from "@plangs/plangs";

import { Anchor } from "@plangs/frontend/components/misc/anchor";
import { PlInfo } from "@plangs/frontend/components/pl-info/pl-info";

export function Pl({ pg, pl }: { pg: PlangsGraph; pl: NPlang }) {
  return (
    <Fragment>
      <article id="lang-page" class="readable">
        <h1>{pl.name}</h1>

        <p>{pl.description}</p>

        {pl.relPosts.tap(posts => (
          <Fragment>
            <h2>News</h2>
            {posts.values.map(
              ({ post }) =>
                post?.link && (
                  <p key={post.key}>
                    {post.date}
                    <Anchor link={post.link} />
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
                        <td>
                          {app.websites.map(link => (
                            <Anchor key={link.href} link={link} />
                          ))}
                        </td>
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
                        <td>
                          {lib.websites.map(link => (
                            <Anchor key={link.href} link={link} />
                          ))}
                        </td>
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
                        <td>
                          {tool.websites.map(link => (
                            <Anchor key={link.href} link={link} />
                          ))}
                        </td>
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
                        <Fragment key={bundle.key}>
                          <p>{bundle.relTools.values.map(({ tool }) => tool && <div key={tool.key}>{tool.name}</div>)}</p>
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

      <nav>
        <PlInfo graph={pg} pl={pl} header={false} />
      </nav>
    </Fragment>
  );
}
