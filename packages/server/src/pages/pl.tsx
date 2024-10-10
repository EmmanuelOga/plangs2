import type { ComponentChildren } from "preact";

import { Anchor } from "@plangs/frontend/components/misc/anchor";
import { Pill } from "@plangs/frontend/components/misc/pill";
import { PlInfo } from "@plangs/frontend/components/pl-info/pl-info";
import { tw } from "@plangs/frontend/utils";
import type { NPlang } from "@plangs/plangs";

import { id } from "../elements";
import { Layout } from "./layout";
import { SCROLL } from "./plangs";

export function Pl({ pl }: { pl: NPlang }) {
  return (
    <Layout
      pl={pl}
      tab="pl"
      title={`${pl.name} at https://plangs.page`}
      description={`${pl.name} at https://plangs.page: A language is much more than just a syntax. It's an ecosystem of tools, libraries, and applications.`}
      overflow="overflow-auto">
      <div class={tw("h-full w-full flex-1", "lg:flex lg:flex-row-reverse", "lg:overflow-hidden", "gap-6")}>
        <div class={tw(SCROLL, "lg:w-[33dvw] lg:max-w-[40rem]")}>
          <div id={id("plInfo")}>
            <PlInfo pl={pl} open={true} tab="pl" />
          </div>
        </div>

        <div class={tw("flex-1", "p-4", "flex flex-col lg:items-center", "overflow-auto")}>
          <PlBody pl={pl} />
        </div>
      </div>
    </Layout>
  );
}

export function PlBody({ pl, class: cssClass }: { class?: string; pl: NPlang }) {
  return (
    <article class={tw("prose prose-green dark:prose-invert max-w-[80rem]", cssClass)}>
      <PlNews pl={pl} />
      <PlApps pl={pl} />
      <PlLibs pl={pl} />
      <PlTools pl={pl} />
    </article>
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
  const apps = pl.relApps.values.map(({ nodeTo }) => nodeTo).existing;
  const thead = (
    <tr>
      <th>App</th>
      <th>Keywords</th>
      <th>Description</th>
    </tr>
  );
  const tbody = apps.map(app => (
    <tr key={app.key}>
      <td>{app.websites.map(link => <Anchor key={link.href} link={link} />).existing}</td>
      <td>{app.keywords.join(", ")}</td>
      <td>{app.description}</td>
    </tr>
  ));
  return (
    <>
      <h1>Applications</h1>
      <p>Example open source applications created with {pl.name}.</p>
      {apps.length === 0 ? <p>No applications just yet!</p> : <Table thead={thead} tbody={tbody} />}
    </>
  );
}

function PlLibs({ pl }: { pl: NPlang }) {
  const libs = pl.relLibs.values.map(({ nodeTo }) => nodeTo).existing;
  const thead = (
    <tr>
      <th>Lib</th>
      <th>Keywords</th>
      <th>Description</th>
    </tr>
  );
  const tbody = libs.map(lib => (
    <tr key={lib.key}>
      <td>{lib.websites.map(link => <Anchor key={link.href} link={link} />).existing}</td>
      <td>{lib.keywords.join(", ")}</td>
      <td>{lib.description}</td>
    </tr>
  ));
  return (
    <>
      <h1>Libraries</h1>
      <p>Example open source libraries that can be used with {pl.name}.</p>
      {libs.length === 0 ? <p>No libraries just yet!</p> : <Table thead={thead} tbody={tbody} />}
    </>
  );
}

function PlTools({ pl }: { pl: NPlang }) {
  const tools = pl.relTools.values.map(({ nodeTo }) => nodeTo).existing;
  const thead = (
    <tr>
      <th>Tool</th>
      <th>Keywords</th>
      <th>Description</th>
    </tr>
  );
  const tbody = tools.map(tool => (
    <tr key={tool.key}>
      <td>{tool.websites.map(link => <Anchor key={link.href} link={link} />).existing}</td>
      <td>{tool.keywords.join(", ")}</td>
      <td>{tool.description}</td>
    </tr>
  ));
  return (
    <>
      <h1>Tooling</h1>
      <p>Additional tooling available for {pl.name}.</p>
      {tools.length === 0 ? (
        <p>No tools just yet!</p>
      ) : (
        <>
          <Table thead={thead} tbody={tbody} />
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
        <div
          key={bundle.key}
          class={tw(
            "bg-linear-to-b from-background to-secondary/50",
            "shadow-lg shadow-primary/20",
            "border-b-1 border-b-primary border-dotted",
            "my-8",
          )}>
          <h1>{bundle.name}</h1>
          <p>{bundle.relTools.values.map(({ nodeTo }) => nodeTo && <Pill name={nodeTo.name} nodeKey={nodeTo.key} kind={nodeTo.kind} />).existing}</p>
          <p>{bundle.description}</p>
        </div>
      ))}
    </>
  );
}

function Table({ thead, tbody }: { tbody: ComponentChildren; thead: ComponentChildren }) {
  return (
    <table>
      <thead>{thead}</thead>
      <tbody>{tbody}</tbody>
    </table>
  );
}
