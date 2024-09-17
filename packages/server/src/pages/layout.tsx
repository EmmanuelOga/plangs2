import type { ComponentChildren } from "preact";

export type LayoutProps = {
  pageId: "about" | "blog" | "blogPost" | "home" | "lang" | "universe";
  plVid?: string;
  plName?: string;
  children?: ComponentChildren;
};

export function Layout({ pageId, children, plVid, plName }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Plangs! - Programming Languages Database</title>
        <link rel="stylesheet" href="/index.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="stylesheet" href="/browse.css" />
      </head>
      <body>
        <div id="main-wrapper">
          <noscript>
            <em>Note!</em>
            This site is fully static and requires JavaScript for the best experience. In particular, the search feature will not work without
            JavaScript.
          </noscript>
          <header id="top-header">
            <h1 class="logo">
              <a href="/">Plangs!</a>
            </h1>

            <nav id="top-nav">
              <a href="/" class={pageId === "home" ? "current" : ""}>
                <span>Browse</span>
              </a>
              <a href={plVid ? `/pl/${plVid.split("+")[1]}` : "/"} class={`lang ${pageId === "lang" ? "current" : ""}${plVid ? "" : "hide"}`}>
                <span>{plName ?? "Lang"}</span>
              </a>
              <a href="/blog" class={pageId === "blog" ? "current" : ""}>
                <span>News</span>
              </a>
              <a href="/about" class={pageId === "about" ? "current" : ""}>
                <span>About</span>
              </a>
            </nav>

            <div />
          </header>
          <main id={pageId}>{children}</main>
        </div>
        <script src="/browse.js" />
      </body>
    </html>
  );
}
