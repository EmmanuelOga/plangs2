import type { ComponentChildren, VNode } from "preact";

import type { NPlang, NPost, PlangsGraph } from "@plangs/plangs";

import { loadBlogPost } from "./blog";
import { PlangsContext } from "./context";
import { About } from "./pages/about";
import { Blog, BlogPost } from "./pages/blog";
import { Browse } from "./pages/browse";
import { Layout, type LayoutProps } from "./pages/layout";
import { Lang } from "./pages/plang";

type PageProps = {
  pg: PlangsGraph;
  pageId: LayoutProps["pageId"];
  children: ComponentChildren;
  plNid?: string;
  plName?: string;
};

export function Page({ pageId, pg, children, plName, plNid: plVid }: PageProps) {
  return (
    <PlangsContext.Provider value={pg}>
      <Layout pageId={pageId} plName={plName} plVid={plVid}>
        {children}
      </Layout>
    </PlangsContext.Provider>
  );
}

export async function resolvePage(path: string, pg: PlangsGraph): Promise<VNode | undefined> {
  let pageId: LayoutProps["pageId"];
  let content: VNode;
  let plNid: string | undefined;
  let plName: string | undefined;

  if (path === "/") {
    pageId = "home";
    content = <Browse />;
  } else if (path === "/about") {
    pageId = "about";
    content = <About />;
  } else if (path === "/blog") {
    pageId = "blog";
    content = <Blog />;
  } else if (path.startsWith("/blog/") && path.length < 256) {
    const key: NPost["key"] = `post+${path.slice(6)}`;
    const post = pg.nodes.post.get(key);
    if (!post?.path) {
      console.warn(`Post not found: ${key}`);
      return undefined;
    }
    pageId = "blogPost";
    const { htmlContent } = await loadBlogPost(post.path);
    content = <BlogPost post={post} content={htmlContent} />;
  } else if (path.startsWith("/pl/") && path.length < 64) {
    const nid: NPlang["key"] = `pl+${path.slice(4)}`;
    const pl = pg.nodes.pl.get(nid);
    if (!pl) return undefined;
    plNid = nid;
    plName = pl.data.name;
    pageId = "lang";
    content = <Lang pl={pl} />;
  } else {
    return undefined;
  }

  return (
    <Page pageId={pageId} pg={pg} plNid={plNid} plName={plName}>
      {content}
    </Page>
  );
}
