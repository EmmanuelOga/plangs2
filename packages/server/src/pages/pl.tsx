import { type ComponentChildren, Fragment } from "preact";

import { Anchor } from "@plangs/frontend/src/components/misc/anchor";
import { PlInfo } from "@plangs/frontend/src/components/pl-info/pl-info";
import { tw } from "@plangs/frontend/utils";
import type { NApp, NBundle, NLibrary, NPlang, NTool, PlangsGraph } from "@plangs/plangs";

export function Pl({ pg, pl }: { pg: PlangsGraph; pl: NPlang }) {
  return (
    <Fragment>
      <PlInfo pl={pl} pg={pg} />
      <PlBody pl={pl} />
    </Fragment>
  );
}

export function PlBody({ pl }: { pl: NPlang }) {
  return (
    <article id="lang-page" class={tw("readable dark:prose-invert")}>
      <PlNews pl={pl} />
      <PlApps pl={pl} />
      <PlLibs pl={pl} />
      <PlTools pl={pl} />
    </article>
  );
}

function PlNews({ pl: { relPosts } }: { pl: NPlang }) {
  const posts = relPosts.values.map(({ post }) => post);
  return posts.length === 0 ? null : (
    <Fragment>
      <h2>News</h2>
      {posts.map(
        post =>
          post?.link && (
            <p key={post.key}>
              {post.date}
              <Anchor link={post.link} />
            </p>
          ),
      )}
    </Fragment>
  );
}

function PlApps({ pl }: { pl: NPlang }) {
  const apps = pl.relApps.values.map(({ app }) => app).filter((v): v is NApp => !!v);
  const thead = (
    <tr>
      <th>App</th>
      <th>Keywords</th>
      <th>Description</th>
    </tr>
  );
  const tbody = apps.map(app => (
    <tr key={app.key}>
      <td>
        {app.websites.map(link => (
          <Anchor key={link.href} link={link} />
        ))}
      </td>
      <td>{app.keywords.join(", ")}</td>
      <td>{app.description}</td>
    </tr>
  ));
  return apps.length === 0 ? null : (
    <Fragment>
      <h2>Applications</h2>
      <p>Example open source applications created with {pl.name}.</p>
      <Table thead={thead} tbody={tbody} />
    </Fragment>
  );
}

function PlLibs({ pl }: { pl: NPlang }) {
  const libs = pl.relLibs.values.map(({ lib }) => lib).filter((v): v is NLibrary => !!v);
  const thead = (
    <tr>
      <th>Lib</th>
      <th>Keywords</th>
      <th>Description</th>
    </tr>
  );
  const tbody = libs.map(lib => (
    <tr key={lib.key}>
      <td>
        {lib.websites.map(link => (
          <Anchor key={link.href} link={link} />
        ))}
      </td>
      <td>{lib.keywords.join(", ")}</td>
      <td>{lib.description}</td>
    </tr>
  ));
  return libs.length === 0 ? null : (
    <Fragment>
      <h2>Libraries</h2>
      <p>Example open source libraries that can be used with {pl.name}.</p>
      <Table thead={thead} tbody={tbody} />
    </Fragment>
  );
}

function PlTools({ pl }: { pl: NPlang }) {
  const tools = pl.relTools.values.map(({ tool }) => tool).filter((v): v is NTool => !!v);
  const thead = (
    <tr>
      <th>Tool</th>
      <th>Keywords</th>
      <th>Description</th>
    </tr>
  );
  const tbody = tools.map(tool => (
    <tr key={tool.key}>
      <td>
        {tool.websites.map(link => (
          <Anchor key={link.href} link={link} />
        ))}
      </td>
      <td>{tool.keywords.join(", ")}</td>
      <td>{tool.description}</td>
    </tr>
  ));
  return tools.length === 0 ? null : (
    <Fragment>
      <h2>Tooling</h2>
      <p>Additional tooling available for {pl.name}.</p>
      <Table thead={thead} tbody={tbody} />
      <PlBundles pl={pl} />
    </Fragment>
  );
}

function PlBundles({ pl }: { pl: NPlang }) {
  const bundles = pl.relPlBundles.values.map(({ bundle }) => bundle).filter((v): v is NBundle => !!v);
  return bundles.length === 0 ? null : (
    <Fragment>
      <h2>Tool Bundles</h2>
      <p>A "bundle" is a set of tools that work well together.</p>
      {bundles.map(bundle => (
        <Fragment key={bundle.key}>
          <p>{bundle.relTools.values.map(({ tool }) => tool && <div key={tool.key}>{tool.name}</div>)}</p>
          <p>{bundle.description}</p>
        </Fragment>
      ))}
    </Fragment>
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
