import type { ComponentChildren } from "preact";

export type LayoutProps = {
  title: string;
  tab: "browse" | "blog" | "about" | "pl";
  children: ComponentChildren;
};

export function Layout({ title, children, tab }: LayoutProps) {
  return (
    <html lang="en" class="dark">
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
      <body class="flex min-h-screen flex-col flex-nowrap bg-background text-foreground" data-tab={tab}>
        <noscript>
          <em>Note!</em>
          <p>This site is fully static and requires JavaScript for the best experience.</p>
          <p>In particular, the search feature will not work without JavaScript.</p>
        </noscript>

        <header class="sticky top-0 z-10 flex flex-row items-end justify-between border-background border-b-8 bg-secondary">
          <h1 class="px-4 py-2 font-black text-lg text-primary italic lg:text-2xl">
            <a href="/">Plangs!</a>
          </h1>

          <nav class="text-sm">
            <NavTab href="/" title="Browse" current={tab === "browse"} />
            <NavTab href="/blog" title="News" current={tab === "blog"} />
            <NavTab href="/about" title="About" current={tab === "about"} />
          </nav>
          <div />
        </header>

        <main class="flex-1 self-center p-4">{children}</main>

        <footer class="bg-secondary px-4 py-2 text-center">Plangs!</footer>
      </body>
      <script src="/app.js" />
    </html>
  );
}

function NavTab({ href, title, current }: { href: string; title: string; current: boolean }) {
  return (
    <a
      href={href}
      class={`mx-1 inline-block min-w-16 rounded-t border-background border-t-1 px-2.5 pt-1 pb-1 text-center text-xs ${current ? "bg-background" : "bg-background/25 text-foreground/75"}`}>
      <span class={`pb-0.5 ${current ? "border-primary border-b-2" : "hover:border-yellow-200 hover:border-b-2"}`}>{title}</span>
    </a>
  );
}
