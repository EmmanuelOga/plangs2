import type { PlangsGraph } from "@plangs/plangs/graph";
import type { VID_Plang } from "@plangs/plangs/schema";

import type { ComponentChildren, VNode } from "preact";
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
  plVid?: string;
  plName?: string;
};

export function Page({ pageId, pg, children, plName, plVid }: PageProps) {
  return (
    <PlangsData.Provider value={pg}>
      <Layout pageId={pageId} plName={plName} plVid={plVid}>{children}</Layout>
    </PlangsData.Provider>
  );
}

export async function resolvePage(path: string, pg: PlangsGraph): Promise<VNode | undefined> {
  let pageId: LayoutProps["pageId"];
  let content: VNode;
  let plVid: string | undefined;
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
  } else if (path.startsWith('/pl/') && path.length < 64) {
    const vid = `pl+${path.slice(4)}`;
    const pl = pg.v_plang.get(vid as VID_Plang);
    if (!pl) return undefined;
    plVid = vid;
    plName = pl.name;
    pageId = "lang";
    content = <Lang />;
  } else {
    return undefined;
  }

  return (
    <Page pageId={pageId} pg={pg} plVid={plVid} plName={plName}>
      {content}
    </Page>
  );
}
