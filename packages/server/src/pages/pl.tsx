import { BORDER, PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import { Anchor } from "@plangs/frontend/components/misc/anchor";
import { Pill } from "@plangs/frontend/components/misc/pill";
import { PlInfo } from "@plangs/frontend/components/pl-info/pl-info";
import type { NPlang } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";
import { Table } from "@plangs/server/components/table";
import { cssID } from "@plangs/server/elements";

export function Pl({ pl }: { pl: NPlang }) {
  return (
    <Layout
      pl={pl}
      tab="pl"
      title={`${pl.name} at https://plangs.page`}
      description={`${pl.name} at https://plangs.page: A language is much more than just a syntax. It's an ecosystem of tools, libraries, and applications.`}
      mainClasses={tw("overflow-y-scroll")}>
      <article class={tw(PROSE, "p-4")}>
        <div id={cssID("plInfo")} class="mb-8">
          <PlInfo pl={pl} open={false} tab="pl" />
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
        posts.map(
          post =>
            post?.link && (
              <p key={post.key}>
                {post.date}
                <Anchor link={post.link} />
              </p>
            ),
        ).existing
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
              <td>{app.websites.map(link => <Anchor key={link.href} link={link} />).existing}</td>
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
              <td>{lib.websites.map(link => <Anchor key={link.href} link={link} />).existing}</td>
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
                <td>{tool.websites.map(link => <Anchor key={link.href} link={link} />).existing}</td>
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
      <h1>Tool Bundles</h1>
      <p>A "bundle" is a set of tools that work well together.</p>
      {bundles.map(bundle => (
        <div key={bundle.key} class={tw("bg-linear-to-b to-secondary/50", "shadow-lg shadow-primary/20", tw(BORDER, "border-b-1"), "-mx-4 my-8 p-4")}>
          <h1>{bundle.name}</h1>
          <p>{bundle.relTools.values.map(({ nodeTo }) => nodeTo && <Pill name={nodeTo.name} nodeKey={nodeTo.key} kind={nodeTo.kind} />).existing}</p>
          <p>{bundle.description}</p>
        </div>
      ))}
    </>
  );
}
