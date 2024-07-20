import { walkUpBindingElementsAndPatterns } from "typescript";

export function Home() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Plangs</title>
        <link rel="stylesheet" href="/index.css" />
        <link rel="stylesheet" href="/browser.css" />
        <script src="/browser.js" defer />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        <header id="plangs-header">
          <a id="plangs" href="/">
            Plangs ~ $ _
          </a>
          <a id="about" href="/about">
            about
          </a>
        </header>
        <noscript>
          <em>Note!</em>
          This site is fully static and requires JavaScript for the best experience. In particular, the search feature
          will not work without JavaScript.
        </noscript>
        <main>@content</main>
      </body>
    </html>
  );
}
