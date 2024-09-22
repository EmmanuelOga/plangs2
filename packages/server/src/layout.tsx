import { tw } from "@plangs/frontend/utils";
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
      <body
        class={tw("h-dvh w-full", "flex flex-col flex-nowrap", "bg-background text-foreground")}
        data-tab={tab}>
        <noscript>
          <em>Note!</em>
          <p>This site is fully static and requires JavaScript for the best experience.</p>
          <p>In particular, the search feature will not work without JavaScript.</p>
        </noscript>

        <header
          class={tw(
            "flex flex-row items-end justify-between",
            "sticky top-0 z-10",
            "border-background border-b-3 bg-secondary",
          )}>
          <h1 class={tw("px-4 py-2", "font-black text-primary", "text-lg italic")}>
            <a href="/">Plangs!</a>
          </h1>

          <nav class="text-sm">
            <NavTab href="/" title="Browse" current={tab === "browse"} />
            <NavTab href="/blog" title="News" current={tab === "blog"} />
            <NavTab href="/about" title="About" current={tab === "about"} />
          </nav>

          <Hamb class={tw("mx-4 h-full pt-1", "text-foreground", "hover:text-primary")} />
        </header>

        {children}

        <footer class={tw("px-4 py-2", "text-center", "bg-secondary")}>Plangs!</footer>
      </body>
      <script src="/app.js" />
    </html>
  );
}

function NavTab({ href, title, current }: { href: string; title: string; current: boolean }) {
  return (
    <a
      href={href}
      class={tw(
        "inline-block",
        "mx-1 min-w-16 px-2.5 pt-1 pb-1",
        "text-center text-xs",
        "rounded-t-lg",
        "border-background border-t-1",
        current ? "bg-background" : "bg-background/25 text-foreground/75",
      )}>
      <span
        class={tw(
          "pb-0.5",
          current ? "border-primary border-b-2" : "hover:border-yellow-200 hover:border-b-2",
        )}>
        {title}
      </span>
    </a>
  );
}

function Hamb(props: { class: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      class={`size-6 ${props.class}`}>
      <title>Filter</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
      />
    </svg>
  );
}
