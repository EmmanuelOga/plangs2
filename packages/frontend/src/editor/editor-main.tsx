import { useState } from "preact/hooks";

import { PROSE, PROSE_BASIC, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { EditorButton, VerticesEditor } from "./vertices-editor";

/** Top level of the editor: information, editing and exporting. */
export function EditorMain({ pg }: { pg: PlangsGraph }) {
  const [tab, setTab] = useState<"info" | "edit">("info");

  return (
    <div class={tw("p-4", "flex-1", "flex flex-col gap-4", "overflow-hidden")}>
      <div class="flex flex-row gap-4">
        <div>{EditorButton({ label: "INFO", isCurrent: () => tab === "info", onClick: () => setTab("info") })}</div>
        <div>{EditorButton({ label: "EDIT", isCurrent: () => tab === "edit", onClick: () => setTab("edit") })}</div>
      </div>
      <div class="flex-1 justify-center overflow-hidden overflow-y-auto">
        {tab === "info" && <Info pg={pg} />}
        {tab === "edit" && <VerticesEditor pg={pg} />}
      </div>
    </div>
  );
}

function Info({ pg }: { pg: PlangsGraph }) {
  return (
    <div class={tw(PROSE_BASIC, "p-4")}>
      <h2 class="m-0! pb-8">Plangs Graph Editor</h2>
      <h3>Site Wide Mode</h3>
      <p>When you edit the data, it gets saved to localStorage. You can choose to use the local storage data site-wide for testing your changes.</p>
      <label>
        <input type="checkbox" checked={true} />
        <span class="ml-2">Use localStorage data site-wide.</span>
      </label>
      <h3>Reset</h3>
      <p>To go back to a clean slate, use the following button, which resets any local changes (you will lose your edits).</p>
      {EditorButton({ label: "Reset and Erase Edits", onClick: () => console.log("TODO") })}
      <h3>Exports and Contributions</h3>
      <p>
        To contribute your edits back to the project, you will need to generate a pull request. We may automate this at some point, but for now this
        process involves a few steps:
        <ol>
          <li>{EditorButton({ label: "Export Local Data", onClick: () => console.log("TODO") })}</li>
          <li>
            Fork <a href="https://github.com/emmanueloga/plangs2">Plangs! source repository</a>.
          </li>
          <li>
            Regenerate the TypeScript definitions through the command:
            <br />
            <code>$ bun regenerate path/to/plangs.json</code>
            <br />
            Now you should be ready to send a pull request (thanks in advance!).
          </li>
        </ol>
      </p>
    </div>
  );
}

function Export({ pg }: { pg: PlangsGraph }) {
  return "TODO";
}
