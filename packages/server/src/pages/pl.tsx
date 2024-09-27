import type { ComponentChildren } from "preact";

import { Anchor } from "@plangs/frontend/src/components/misc/anchor";
import { PlInfo } from "@plangs/frontend/src/components/pl-info/pl-info";
import { tw } from "@plangs/frontend/utils";
import type { NPlang, PlangsGraph } from "@plangs/plangs";

import { Pill } from "@plangs/frontend/components/misc/pill";
import { READABLE_CLASSES } from "../elements";
import { Layout } from "./layout";

export function Pl({ pg, pl }: { pg: PlangsGraph; pl: NPlang }) {
  return (
    <Layout title={`${pl.name} details`} tab="pl">
      <div class={tw("overflow-y-auto", "w-full", "sm:flex sm:flex-row-reverse", "gap-2")}>
        <PlInfo pg={pg} pl={pg.nodes.pl.get("pl+python")} class={tw("w-[33%] overflow-y-auto p-4")} />
        <PlBody pg={pg} pl={pl} class={tw("flex-1", "p-4", "sm:overflow-y-auto")} />
      </div>
    </Layout>
  );
}

export function PlBody({ pg, pl, class: cssClass }: { class: string; pl: NPlang; pg: PlangsGraph }) {
  return (
    <article class={tw(READABLE_CLASSES, cssClass)}>
      <PlNews pg={pg} pl={pl} />
      <PlApps pl={pl} />
      <PlLibs pl={pl} />
      <PlTools pl={pl} />
    </article>
  );
}

function PlNews({ pg, pl: { relPosts } }: { pl: NPlang; pg: PlangsGraph }) {
  const posts = relPosts.values.map(({ post }) => post);
  return posts.isEmpty ? null : (
    <>
      <h1>News</h1>
      {
        posts.map(
          post =>
            post?.link && (
              <p key={post.key}>
                {post.date}
                <Anchor link={post.link} />
              </p>
            ),
        ).existing
      }
    </>
  );
}

function PlApps({ pl }: { pl: NPlang }) {
  const apps = pl.relApps.values.map(({ app }) => app).existing;
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
  return apps.length === 0 ? null : (
    <>
      <h1>Applications</h1>
      <p>Example open source applications created with {pl.name}.</p>
      <Table thead={thead} tbody={tbody} />
    </>
  );
}

function PlLibs({ pl }: { pl: NPlang }) {
  const libs = pl.relLibs.values.map(({ lib }) => lib).existing;
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
  return libs.length === 0 ? null : (
    <>
      <h1>Libraries</h1>
      <p>Example open source libraries that can be used with {pl.name}.</p>
      <Table thead={thead} tbody={tbody} />
    </>
  );
}

function PlTools({ pl }: { pl: NPlang }) {
  const tools = pl.relTools.values.map(({ tool }) => tool).existing;
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
  return tools.length === 0 ? null : (
    <>
      <h1>Tooling</h1>
      <p>Additional tooling available for {pl.name}.</p>
      <Table thead={thead} tbody={tbody} />
      <PlBundles pl={pl} />
    </>
  );
}

function PlBundles({ pl }: { pl: NPlang }) {
  const bundles = pl.relPlBundles.values.map(({ bundle }) => bundle).existing;
  return bundles.length === 0 ? null : (
    <>
      <h1>Tool Bundles</h1>
      <p>A "bundle" is a set of tools that work well together.</p>
      {bundles.concat(bundles).map(bundle => (
        <div
          key={bundle.key}
          class={tw(
            "bg-linear-to-b from-background to-primary/20",
            "shadow-lg shadow-primary/20",
            "border-b-1 border-b-primary border-dotted",
            "my-8",
          )}>
          <h1>{bundle.name}</h1>
          <p>{bundle.relTools.values.map(({ tool }) => tool && <Pill name={tool.name} />).existing}</p>
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
