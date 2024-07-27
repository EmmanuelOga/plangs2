import type { PlangsGraph } from "@plangs/plangs/graph";

import { PlangsData } from "./context";
import { About } from "./pages/about";
import { Browse } from "./pages/browse";
import { Layout, type LayoutProps } from "./pages/layout";
import { Universe } from "./pages/universe";
import { Blog } from "./pages/blog";
import { Lang } from "./pages/lang";

type PageProps = {
  pg: PlangsGraph;
  pageId: LayoutProps['pageId'];
};

export function Page({ pageId, pg }: PageProps) {
  return (
    <PlangsData.Provider value={pg}>
      <Layout pageId={pageId}>
        {pageId === "about" ? (
          <About />
        ) : pageId === "blog" ? (
          <Blog />
        ) : pageId === "home" ? (
          <Browse />
        ) : pageId === "lang" ? (
          <Lang />
        ) : pageId === "universe" ? (
          <Universe />
        ) : null}
      </Layout>
    </PlangsData.Provider>
  );
}
