import { useState } from "preact/hooks";

import { getStore } from "@plangs/frontend/auxiliar/storage";
import { PROSE_BASIC, tw } from "@plangs/frontend/auxiliar/styles";
import { PlangsGraph } from "@plangs/plangs/graph";

import { toggleLocalEdits, updateLocalEdits } from ".";
import { EditorButton, VerticesEditor } from "./vertices-editor";

/** Top level of the editor: information, editing and exporting. */
export function EditorMain({ pg }: { pg: PlangsGraph }) {
  const [tab, setTab] = useState<"status" | "edit">("status");

  // The editor always works with a local copy of the graph.
  const store = getStore("_any_page_");
  let localJSON = store.load("local-edits");
  if (!localJSON) {
    localJSON = pg.toJSON();
    store.update("local-edits", localJSON);
  }
  const localPg = new PlangsGraph().loadJSON(localJSON);

  return (
    <div class={tw("p-4", "flex-1", "flex flex-col gap-4", "overflow-hidden")}>
      <div class={tw("p-2", "flex flex-row gap-4", "bg-secondary/25 text-primary", "border-secondary border-b-1", "shadow-secondary/25 shadow-sm")}>
        <EditorButton class="w-[8rem]" label="STATUS" isCurrent={() => tab === "status"} onClick={() => setTab("status")} />
        <EditorButton class="w-[8rem]" label="EDIT" isCurrent={() => tab === "edit"} onClick={() => setTab("edit")} />
      </div>
      {tab === "status" && <Status />}
      {tab === "edit" && <VerticesEditor pg={localPg} />}
    </div>
  );
}

function Status() {
  const store = getStore("_any_page_");
  const [modeMsg, setModeMsg] = useState<string | undefined>();
  const [resetMsg, setResetMsg] = useState<string | undefined>();
  const [exportMsg, setExportMsg] = useState<string | undefined>();

  return (
    <div class={tw(PROSE_BASIC, "p-2", "overflow-y-auto")}>
      <h3 class="mt-0!">Local Edits</h3>
      <p>Local edits are saved to localStorage, and can be used locally for testing.</p>

      <div class="flex flex-row gap-4">
        <label class="flex flex-row items-center">
          <input
            type="checkbox"
            checked={!!store.load("enable-local-edits")}
            onChange={({ target }) => {
              toggleLocalEdits((target as HTMLInputElement).checked);
              setModeMsg(`${new Date().toLocaleTimeString()}: mode updated.`);
            }}
          />
          <span class="ml-2">Use localStorage data site-wide.</span>
        </label>
        {modeMsg && <div class="text-primary">{modeMsg}</div>}
      </div>

      <h3>Reset</h3>
      <p>Go back to a clean slate: you will lose your edits.</p>
      <div class="flex flex-row gap-4">
        <EditorButton
          label="Reset and Erase Edits"
          onClick={() => {
            updateLocalEdits("");
            setResetMsg(`${new Date().toLocaleTimeString()}: Local edits erased.`);
          }}
        />
        {resetMsg && <div class="text-primary">{resetMsg}</div>}
      </div>

      <h3>Exports and Contributions</h3>
      <p>Adding any edits back to the project requires a pull request. For now, this process involves a few steps:</p>

      <ol>
        <li>
          <div class="flex flex-row gap-4">
            <EditorButton
              label="Export Local Data"
              onClick={() => {
                const data = store.load("local-edits");
                if (data) {
                  exportData(data);
                  setExportMsg(`${new Date().toLocaleTimeString()}: Local data exported.`);
                } else {
                  setExportMsg(`${new Date().toLocaleTimeString()}: No local data to export.`);
                }
              }}
            />
            {exportMsg && <div class="text-primary">{exportMsg}</div>}
          </div>
        </li>
        <li>
          Fork <a href="https://github.com/emmanueloga/plangs2">Plangs! source repository</a>.
        </li>
        <li>
          Regenerate the TypeScript definitions through the command:
          <br />
          <code>$ bun regenerate path/to/plangs.json</code>
          <br />
        </li>
      </ol>
      <p>Now you should be ready to send a pull request. Thanks in advance!.</p>
    </div>
  );
}

/** Export the local data as a JSON object. */
function exportData(data: any) {
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "plangs.json";
  a.click();
  URL.revokeObjectURL(url);
}
