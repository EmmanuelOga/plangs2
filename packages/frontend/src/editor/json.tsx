import type { ComponentChildren } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";

import { INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";

import { updateLocalEdits } from ".";
import { EditorButton } from "./button";

export function JsonEditor({ vertex }: { vertex: TPlangsVertex }): ComponentChildren {
  const vertexJson = () => JSON.stringify(vertex.data, null, 2);

  const textarea = useRef<HTMLTextAreaElement>(null);
  const [status, setStatus] = useState("");

  const reload = () => {
    if (textarea.current) textarea.current.value = vertexJson();
    setStatus("");
  };

  const save = () => {
    try {
      const newData = JSON.parse(textarea.current?.value ?? "");
      Object.assign(vertex.clearData().data, newData);
      updateLocalEdits(vertex.graph.toJSON());
      setStatus(`Saved at ${new Date().toLocaleTimeString()}`);
    } catch (e) {
      setStatus(`Error: ${e}`);
    }
  };

  // TODO: not sure why I'm using an effect here, it should be a simple assignment.
  // biome-ignore lint/correctness/useExhaustiveDependencies: This effect should only run once.
  useEffect(() => {
    if (textarea.current) textarea.current.value = vertexJson();
  }, []);

  return (
    <div class={tw("size-full", "flex flex-col gap-4 justify-self-center", "bg-secondary/25")}>
      <header class={tw("px-2 sm:py-2", "flex flex-row gap-4", "items-center align-middle", "bg-secondary/50")}>
        <div class="text-xl" children={`${vertex.key}: JSON`} />
        <div class="flex-1" />
        <EditorButton label="Reload" onClick={reload} />
        <EditorButton label="Save" onClick={save} />
      </header>
      {status && <div class="text-center">{status}</div>}
      <textarea ref={textarea} class={tw(INPUT, "m-4 mt-0", "text-xl", "flex-1 overflow-hidden overflow-y-auto")} style={"font-family: monospace;"} />
    </div>
  );
}
