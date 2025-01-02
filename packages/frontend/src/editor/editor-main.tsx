import { useState } from "preact/hooks";

import { getStore } from "@plangs/frontend/auxiliar/storage";
import { PROSE_BASIC, tw } from "@plangs/frontend/auxiliar/styles";
import { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";

import { LAST_EDIT_TIME, localEditsData, toggleLocalEdits, updateLocalEdits } from ".";
import { EditorButton, VerticesEditor } from "./vertices-editor";

/** Top level of the editor: information, editing and exporting. */
export function EditorMain({ pg }: { pg: PlangsGraph }) {
  const [tab, setTab] = useState<"status" | "edit">("status");

  return (
    <div class={tw("p-4", "flex-1", "flex flex-col gap-4", "overflow-hidden")}>
      <div
        class={tw(
          "hidden sm:block",
          "p-2",
          "flex flex-row gap-4",
          "bg-secondary/25 text-primary",
          "border-secondary border-b-1",
          "shadow-secondary/25 shadow-sm",
        )}>
        <EditorButton class="w-[8rem]" label="STATUS" isCurrent={() => tab === "status"} onClick={() => setTab("status")} />
        <EditorButton class="w-[8rem]" label="EDIT" isCurrent={() => tab === "edit"} onClick={() => setTab("edit")} />
      </div>
      {tab === "status" && <Status pg={pg} />}
      {tab === "edit" && <VerticesEditor pg={pg} key={LAST_EDIT_TIME} />}
    </div>
  );
}

function Status({ pg }: { pg: PlangsGraph }) {
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
          label="Reset local Edits"
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
                  downloadJSON("plangs.json", data);
                  // const diff = generateCodeDiff(pg); if (diff) downloadJSON("code.json", diff);
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
          <code>$ bun import path/to/plangs.json</code>
          <br />
        </li>
      </ol>
      <p>Now you should be ready to send a pull request. Thanks in advance!</p>
    </div>
  );
}

/** Export the local data as a JSON object. */
function downloadJSON(name: string, data: any) {
  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

/** Generate code for a pull request.  */
export function generateCodeDiff(pg: PlangsGraph): Record<string, string> | undefined {
  try {
    const result: Record<string, string> = {};
    let hasChanges = false;

    // Iterate through all vertices of the edited graph.
    const editedPG = new PlangsGraph().loadJSON(localEditsData(pg));
    for (const [name, vertices] of Object.entries(editedPG.vertices)) {
      for (const vertex of vertices.values) {
        // Attempt to find the original vertex in the original graph, if it exists.
        const original = pg.vertices[name as TPlangsVertexName]?.get(vertex.key as any);
        const newCode = vertex.toCode();
        // If the vertex is new or has changed, add it to the result.
        if (!original || newCode !== original.toCode()) {
          hasChanges = true;
          result[vertex.tsName] = newCode;
        }
      }
    }

    return hasChanges ? result : undefined;
  } catch (e) {
    console.error("Error exporting code diff:", e);
  }
}
