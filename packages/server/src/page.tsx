import type { PlangsGraph } from "@plangs/plangs/graph";

import type { ComponentChildren, VNode } from "preact";
import { PlangsData } from "./context";
import { Layout, type LayoutProps } from "./pages/layout";
import { Browse } from "./pages/browse";
import { About } from "./pages/about";
import { Blog } from "./pages/blog";
import { Lang } from "./pages/lang";
import { Universe } from "./pages/universe";
import { blogPosts } from "./blog";

type PageProps = {
  pg: PlangsGraph;
  pageId: LayoutProps["pageId"];
  children: ComponentChildren;
};

export function Page({ pageId, pg, children }: PageProps) {
  return (
    <PlangsData.Provider value={pg}>
      <Layout pageId={pageId}>{children}</Layout>
    </PlangsData.Provider>
  );
}

export async function resolvePage(path: string, pg: PlangsGraph): Promise<VNode | undefined> {
  let pageId: LayoutProps["pageId"];
  let content: VNode;

  if (path === "/") {
    pageId = "home";
    content = <Browse />;
  } else if (path === "/about") {
    pageId = "about";
    content = <About />;
  } else if (path === "/universe") {
    pageId = "universe";
    content = <Universe />;
  } else if (path === "/blog") {
    pageId = "blog";
    content = <Blog posts={await blogPosts()} />;
  } else if (path === "/lang") {
    pageId = "lang";
    content = <Lang />;
  } else {
    return undefined;
  }

  return (
    <Page pageId={pageId} pg={pg}>
      {content}
    </Page>
  );
}
