import { useState } from "preact/hooks";

import type { PRResult } from "@plangs/frontend/app/github";
import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { tw } from "@plangs/frontend/auxiliar/styles";
import { PlangsGraph } from "@plangs/plangs/graph";

import { LAST_EDIT_TIME, localEditsData } from ".";
import { Status } from "./status";
import { EditorButton, VerticesEditor } from "./vertices-editor";
import { type AnyRel, VerticesEditorState } from "./vertices-editor-state";

/** Top level of the editor: information, editing and exporting. */
export function EditorMain({ pg, pullreq }: { pg: PlangsGraph; pullreq?: PRResult }) {
  const [tab, setTab] = useState<"status" | "edit">("status");

  const editorState = useDispatchable(() => {
    // The editor always works with a local copy of the graph.
    const pgCopy = new PlangsGraph().loadJSON(localEditsData(pg));
    const py = pgCopy.plang.get("pl+python");
    return new VerticesEditorState({
      pg: pgCopy,
      currentKind: "plang",
      currentVertex: py,
      currentRel: !py ? undefined : ["relInfluencedBy", py?.relations.get("relInfluencedBy") as AnyRel],
      tab: "relations",
    });
  });

  return (
    <div class={tw("p-4", "flex-1", "flex flex-col gap-4", "overflow-hidden", "relative")}>
      {pullreq?.kind === "loading" && (
        <div class="absolute inset-0 z-10 flex flex-col bg-background/85 backdrop-blur-lg">
          <div class="flex-1" />
          <div class="flex flex-row items-center justify-center">
            <div class="h-8 w-8 animate-spin rounded-full border-primary border-t-2" />
            <div class="ml-2">Creating Pull Request...</div>
          </div>
          <div class="flex-1" />
        </div>
      )}

      <div
        class={tw(
          "hidden sm:flex",
          "flex-row gap-4",
          "bg-secondary/25 text-primary",
          "border-secondary border-b-1",
          "shadow-secondary/25 shadow-sm",
        )}>
        <EditorButton class="w-[8rem]" label="STATUS" isCurrent={() => tab === "status"} onClick={() => setTab("status")} />
        <EditorButton class="w-[8rem]" label="EDIT" isCurrent={() => tab === "edit"} onClick={() => setTab("edit")} />
      </div>
      {tab === "status" && <Status pullreq={pullreq} />}
      {tab === "edit" && <VerticesEditor state={editorState} key={LAST_EDIT_TIME} />}
    </div>
  );
}
