import type { ComponentChildren } from "preact";

export function Layout({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <html lang="en" class="dark bg-background text-foreground">
      <head>
        <meta charset="utf-8" />
        <title>Plangs! - {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/index.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body class="flex flex-wrap">
        <noscript>
          <em>Note!</em>
          <p>This site is fully static and requires JavaScript for the best experience.</p>
          <p>In particular, the search feature will not work without JavaScript.</p>
        </noscript>

        <header class="flex w-full flex-col bg-secondary">
          <h1 class="p-4 font-black text-4xl text-primary">
            <a href="/">Plangs!</a>
          </h1>

          <nav class="self-center *:p-3">
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

          <div class="hidden" />
        </header>

        <main class="w-full p-4">{children}</main>

        <footer class="w-full bg-secondary">Plangs!</footer>
      </body>
      <script src="/app.js" />
    </html>
  );
}
