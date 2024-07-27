import type { PlangsGraph } from "@plangs/plangs/graph";

import { PlangsData } from "./context";
import { About } from "./pages/about";
import { Browse } from "./pages/browse";
import { Layout, type LayoutProps } from "./pages/layout";

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
          <About />
        ) : pageId === "home" ? (
          <Browse />
        ) : pageId === "lang" ? (
          <About />
        ) : pageId === "universe" ? (
          <About />
        ) : null}
      </Layout>
    </PlangsData.Provider>
  );
}
