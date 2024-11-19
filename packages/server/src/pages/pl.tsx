import { BORDER, PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import { NodeInfo } from "@plangs/frontend/components/node-info/node-info";
import type { NPlang, PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";
import { Table } from "@plangs/server/components/table";
import { cssClass } from "@plangs/server/elements";

export function Pl({ pl, pg }: { pl: NPlang; pg: PlangsGraph }) {
  return (
    <Layout
      pg={pg}
      pl={pl}
      tab="pl"
      title={`${pl.name} at https://plangs.page`}
      description={`${pl.name} at https://plangs.page: A language is much more than just a syntax. It's an ecosystem of tools, libraries, and applications.`}
      mainClasses={tw("overflow-y-scroll")}>
      <article class={tw(PROSE, "p-4")}>
        <div class={tw(cssClass("nodeInfo"), "mb-8")}>
          <NodeInfo node={pl} open={false} tab="pl" />
        </div>

        <PlNews pl={pl} />
        <PlApps pl={pl} />
        <PlLibs pl={pl} />
        <PlTools pl={pl} />
      </article>
    </Layout>
  );
}

function PlNews({ pl: { relPosts } }: { pl: NPlang }) {
  const posts = relPosts.values.map(({ nodeTo }) => nodeTo);
  return (
    <>
      <h1>News</h1>
      {posts.isEmpty ? (
        <p>No news just yet!</p>
      ) : (
        posts.existing.map(post => (
          <p key={post.key}>
            <a href={post.href} title={post.name} children={post.name} />
            <span class="pl-2">{post.date}</span>
          </p>
        ))
      )}
    </>
  );
}

function PlApps({ pl }: { pl: NPlang }) {
  const apps = pl.relApps.values.map(({ nodeTo }) => nodeTo);
  return (
    <>
      <h1>Applications</h1>
      <p>Example open source applications created with {pl.name}.</p>
      {apps.isEmpty ? (
        <p>No applications just yet!</p>
      ) : (
        <Table headers={["App", "Keywords", "Description"]}>
          {apps.existing.map(app => (
            <tr key={app.key}>
              <td>
                <a href={app.urlHome} title={app.name} children={app.name} />
              </td>
              <td>{app.keywords.join(", ")}</td>
              <td>{app.description}</td>
            </tr>
          ))}
        </Table>
      )}
    </>
  );
}

function PlLibs({ pl }: { pl: NPlang }) {
  const libs = pl.relLibs.values.map(({ nodeTo }) => nodeTo);
  return (
    <>
      <h1>Libraries</h1>
      <p>Example open source libraries that can be used with {pl.name}.</p>
      {libs.isEmpty ? (
        <p>No libraries just yet!</p>
      ) : (
        <Table headers={["Lib", "Keywords", "Description"]}>
          {libs.existing.map(lib => (
            <tr key={lib.key}>
              <td>
                <a href={lib.urlHome} title={lib.name} children={lib.name} />
              </td>
              <td>{lib.keywords.join(", ")}</td>
              <td>{lib.description}</td>
            </tr>
          ))}
        </Table>
      )}
    </>
  );
}

function PlTools({ pl }: { pl: NPlang }) {
  const tools = pl.relTools.values.map(({ nodeTo }) => nodeTo);
  return (
    <>
      <h1>Tooling</h1>
      <p>Additional tooling available for {pl.name}.</p>
      {tools.isEmpty ? (
        <p>No tools just yet!</p>
      ) : (
        <>
          <Table headers={["Tool", "Keywords", "Description"]}>
            {tools.existing.map(tool => (
              <tr key={tool.key}>
                <td>
                  <a href={tool.urlHome} title={tool.name} children={tool.name} />
                </td>
                <td>{tool.keywords.join(", ")}</td>
                <td>{tool.description}</td>
              </tr>
            ))}
          </Table>
          <PlBundles pl={pl} />
        </>
      )}
    </>
  );
}

function PlBundles({ pl }: { pl: NPlang }) {
  const bundles = pl.relPlBundles.values.map(({ nodeTo }) => nodeTo).existing;
  return bundles.length === 0 ? null : (
    <>
      {bundles.map(bundle => (
        <div key={bundle.key} class={tw("bg-linear-to-b to-secondary/50", "shadow-lg shadow-primary/20", tw(BORDER, "border-b-1"), "-mx-4 mb-4 p-4")}>
          <h3>
            Bundle:{" "}
            {bundle.relTools.values
              .map(({ nodeTo }) => nodeTo)
              .existing.map(n => n.name)
              .join(", ")}
          </h3>
          <p>{bundle.description}</p>
        </div>
      ))}
    </>
  );
}
