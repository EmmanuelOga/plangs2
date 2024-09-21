import type { PlangsGraph } from "@plangs/plangs";

import { loadContent } from "./content";
import { Layout } from "./layout";
import { Blog } from "./pages/blog";
import { Browse } from "./pages/browse";
import { HtmlContent } from "./pages/html_content";
import { Pl } from "./pages/pl";

export async function resolvePage(path: string, pg: PlangsGraph) {
  if (path === "/") {
    return (
      <Layout title="Find your next favorite programming language!" tab="browse">
        <Browse pg={pg} />
      </Layout>
    );
  }

  if (path === "/about") {
    const md = await loadContent("2024_09_20_about.md");
    return (
      <Layout title={md.title} tab="about">
        <HtmlContent content={md} />
      </Layout>
    );
  }

  if (path === "/blog") {
    return (
      <Layout title="Read our latest news" tab="blog">
        <Blog pg={pg} />
      </Layout>
    );
  }

  if (path.startsWith("/blog/") && path.length < 512) {
    const post = pg.nodes.post.get(`post+${path.slice(6)}`);
    if (!post?.path) {
      console.warn(`Blog post not found: ${path}`);
      return;
    }

    const md = await loadContent(`posts/${post.path}`);
    return (
      <Layout title={md.title} tab="blog">
        <HtmlContent content={md} />
      </Layout>
    );
  }

  if (path.startsWith("/pl/") && path.length < 64) {
    const pl = pg.nodes.pl.get(`pl+${path.slice(4)}`);
    if (!pl) {
      console.warn(`PL not found: ${path}`);
      return;
    }
    return (
      <Layout title={`${pl.name} details`} tab="pl">
        <Pl pg={pg} pl={pl} />
      </Layout>
    );
  }
}
