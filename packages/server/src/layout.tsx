import type { ComponentChildren } from "preact";

export function Layout({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <html lang="en" class="bg-background text-foreground">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Plangs! - {title}</title>
        <link rel="stylesheet" href="/index.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        <div>
          <noscript>
            <em>Note!</em>
            This site is fully static and requires JavaScript for the best experience. In particular, the search feature will not work without
            JavaScript.
          </noscript>

          <header>
            <h1 class="text-primary">
              <a href="/">Plangs!</a>
            </h1>

            <nav>
              <a href="/">
                <span>Browse</span>
              </a>
              <a href="/pl/Python">
                <span>Python</span>
              </a>
              <a href="/blog">
                <span>News</span>
              </a>
              <a href="/about">
                <span>About</span>
              </a>
            </nav>
          </header>

          <main>{children}</main>
        </div>

        <script src="/app.js" />
      </body>
    </html>
  );
}
