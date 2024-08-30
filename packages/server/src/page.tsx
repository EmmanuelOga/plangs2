import type { ComponentChildren, VNode } from "preact";

import type { NPlang, PlangsGraph } from "@plangs/plangs";

import { PlangsData } from "./context";
import { Layout, type LayoutProps } from "./pages/layout";
import { Browse } from "./pages/browse";
import { About } from "./pages/about";
import { Blog } from "./pages/blog";
import { Lang } from "./pages/lang";
import { blogPosts } from "./blog";

type PageProps = {
  pg: PlangsGraph;
  pageId: LayoutProps["pageId"];
  children: ComponentChildren;
  plNid?: string;
  plName?: string;
};

export function Page({ pageId, pg, children, plName, plNid: plVid }: PageProps) {
  return (
    <PlangsData.Provider value={pg}>
      <Layout pageId={pageId} plName={plName} plVid={plVid}>
        {children}
      </Layout>
    </PlangsData.Provider>
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
    content = <Blog posts={await blogPosts()} />;
  } else if (path.startsWith("/pl/") && path.length < 64) {
    const nid: NPlang["key"] = `pl+${path.slice(4)}`;
    const pl = pg.n_plang.get(nid);
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
