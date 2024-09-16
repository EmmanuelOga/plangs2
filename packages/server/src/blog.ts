import { Glob } from "bun";

import YAML from "yaml";

import { marked } from "marked";
import { packagesPath } from "./util";

async function postPaths(): Promise<string[]> {
  const glob = new Glob("**/*.md");
  const postPaths: string[] = [];
  for await (const path of glob.scan(packagesPath("server/posts"))) {
    postPaths.push(path);
  }
  return postPaths.sort((a, b) => b.localeCompare(a));
}

export type BlogPost = {
  path: string;
  date: string;
  title: string;
  html: string;
};

export async function blogPosts(): Promise<BlogPost[]> {
  const posts = [];

  for (const path of await postPaths()) {
    const src = await Bun.file(packagesPath("server/posts", path)).text();
    const [_, yaml, md] = src.toString().split("---");

    const header = YAML.parse(yaml);

    if (!header.title) {
      throw new Error(`Post ${path} is missing a title.`);
    }

    // Remove the most common zerowidth characters from the start of the file.
    // biome-ignore lint/suspicious/noMisleadingCharacterClass: it is ok.
    const html = marked.parse(md.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, ""));

    posts.push({ ...header, path, html });
  }

  return posts;
}
