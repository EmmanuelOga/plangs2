import type { ComponentChildren } from "preact";
import { useState } from "preact/hooks";

import { type PRResult, generateCodeDiff, initiateGitHubAuth } from "@plangs/frontend/app/github";
import { getStore } from "@plangs/frontend/auxiliar/storage";
import { PROSE_BASIC, tw } from "@plangs/frontend/auxiliar/styles";
import { Pill } from "@plangs/frontend/components/misc/pill";
import type { PlangsGraph } from "@plangs/plangs/graph";

import { toggleLocalEdits, updateLocalEdits } from ".";
import { EditorButton } from "./button";

export function Status({ pg, pullreq }: { pg: PlangsGraph; pullreq?: PRResult }) {
  const store = getStore("_any_page_");
  const [modeMsg, setModeMsg] = useState<string | undefined>();
  const [resetMsg, setResetMsg] = useState<string | undefined>();
  const [exportMsg, setExportMsg] = useState<string | undefined>();

  let pullreqMsg: ComponentChildren;
  if (pullreq?.kind === "error") {
    pullreqMsg = `Error creating PR: ${pullreq.data}`;
  } else if (pullreq?.kind === "success") {
    pullreqMsg = (
      <>
        <a href={pullreq.data}>Pull Request</a> created!
      </>
    );
  } else if (pullreq?.kind === "nodiff") {
    pullreqMsg = "No changes to create PR.";
  }

  const diffKeys = Object.keys(generateCodeDiff(pg) ?? {});
  return (
    <div class={tw(PROSE_BASIC, "p-2", "overflow-y-auto")}>
      <h3 class="mt-0!">Local Edits</h3>
      <p>Local edits are saved to localStorage, and can be used locally for testing.</p>
      <p>
        Consider checking this{" "}
        <a href="https://www.loom.com/share/bfd54381f2b34b05b6fda84d4282e632?sid=797df9aa-9995-456b-800f-90df4f70bd2d">
          introduction to how the editor works
        </a>
        .
      </p>

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

      {diffKeys.length > 0 && (
        <div class="mt-4">
          Local definitions:
          <div class={tw("flex flex-row flex-wrap", "mt-2 bg-secondary/10 p-4 ring-1 ring-primary/15")}>
            {diffKeys.map(key => (
              <Pill key={key} class="text-primary" children={key} />
            ))}
          </div>
        </div>
      )}

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

      <h3>Pull Requests</h3>
      <p>If you have made any changes to the graph, you can create a pull request to add them back to the project.</p>
      <p>This will require Github authentication the first time (we only request access to public repositories).</p>

      <div class="flex flex-row gap-4">
        <EditorButton label="Create Pull Request" onClick={() => initiateGitHubAuth("https://plangs.page/edit")} />
        {pullreqMsg && <div class="text-primary">{pullreqMsg}</div>}
      </div>

      <h3>Export</h3>
      <p>Instead of creating a pull request through the button above, you can export the complete local data manually if you prefer.</p>

      <ol>
        <li>
          <div class="flex flex-row gap-4">
            <EditorButton
              label="Export Local Data"
              onClick={() => {
                const data = store.load("local-edits");
                if (data) {
                  downloadJSON("plangs.json", data);
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
