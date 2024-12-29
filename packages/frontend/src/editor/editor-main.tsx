import { useState } from "preact/hooks";

import { PROSE, PROSE_BASIC, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { VerticesEditor, button } from "./vertices-editor";

/** Top level of the editor: information, editing and exporting. */
export function EditorMain({ pg }: { pg: PlangsGraph }) {
  const [tab, setTab] = useState<"info" | "edit" | "export">("info");

  return (
    <div class={tw("p-4", "flex-1", "flex flex-col gap-4", "bg-secondary/25", "overflow-hidden")}>
      <div class="flex flex-row gap-4">
        <div>{button({ label: "INFO", isCurrent: () => tab === "info", onClick: () => setTab("info") })}</div>
        <div>{button({ label: "EDIT", isCurrent: () => tab === "edit", onClick: () => setTab("edit") })}</div>
        <div>{button({ label: "EXPORT", isCurrent: () => tab === "export", onClick: () => setTab("export") })}</div>
      </div>
      <div class="flex-1 justify-center overflow-hidden overflow-y-auto">
        {tab === "info" && <Info pg={pg} />}
        {tab === "edit" && <VerticesEditor pg={pg} />}
        {tab === "export" && <Export pg={pg} />}
      </div>
    </div>
  );
}

function Info({ pg }: { pg: PlangsGraph }) {
  return (
    <div class={tw(PROSE_BASIC, "py-4")}>
      <h2 class="m-0! pb-8">Plangs Graph Editor</h2>

      <h3>Editor Features</h3>
      <p>
        Designed for quick edits, the editor can access the most important fields and relationships but may lack support for some parameters, like
        releases.
      </p>
      <p>
        For unsupported fields, direct vertex data editing is available but should be used carefully to avoid breaking the structure.{" "}
        <em class="text-primary">For full customization, fork the repo and edit TypeScript in the definitions package.</em>
      </p>

      <h3>Data Model</h3>
      <p>
        Plangs uses JSON data generated via TypeScript. The site is <em class="text-primary">fully static</em>, with{" "}
        <em class="text-primary">no backend</em> for processing edits.
      </p>
      <p>
        The editor modifies JSON directly and can save it to local storage. Users can preview changes via the <em class="text-primary">EXPORT tab</em>
        . To make edits permanent, export the JSON and submit a <em class="text-primary">pull request</em>. See below for more instructions.
      </p>

      <h3>Pull Requests</h3>
      <p>Export JSON data, then run:</p>
      <code>$ bun rebuild ~/path/to/plangs.json</code>
      <p>This generates TypeScript for submission via pull request.</p>

      <h3>Future Improvements</h3>
      <p>
        Future plans include streamlining pull requests with the <em class="text-primary">GitHub API</em>, allowing changes directly from the editor.
        A lightweight backend like Cloudflare Workers may enable this.
      </p>
    </div>
  );
}

function Export({ pg }: { pg: PlangsGraph }) {
  return "TODO";
}
