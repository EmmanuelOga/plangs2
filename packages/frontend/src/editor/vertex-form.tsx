import type { ComponentChildren } from "preact";

import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";
import { type FormField, VertexFormState } from "./vertex-form-state";

import { EditorButton } from "./vertices-editor";

/** Form to edit the _data_ of the Vertex. */
export function VertexForm({ vertex }: { vertex: TPlangsVertex }) {
  const state = useDispatchable(() => VertexFormState.create(vertex));

  return (
    <div class={tw("w-full", "flex flex-col gap-4 justify-self-center", "bg-secondary/25")}>
      <header class={tw("px-4 py-2", "flex flex-row gap-4", "items-center align-middle", "bg-secondary/50", "text-center text-xl")}>
        <div children={`${vertex.name}: ${vertex.vertexName} (${vertex.key})`} />
        <div class="flex-1" />
        {EditorButton({ label: "Reload", onClick: () => state.doReload() })}
        {EditorButton({ label: "Save", onClick: () => state.doSave() })}
      </header>
      <div class="text-center">{state.status}</div>
      <div class="m-auto max-w-[120ch] overflow-hidden overflow-y-auto">
        {[...Object.entries(state.fields)].map(([key, field]) => formField(state, key, field))}
      </div>
    </div>
  );
}

function formField(state: VertexFormState, key: string, field: FormField): ComponentChildren {
  const { label, kind, desc, validator } = field;

  const cssid = `field-${label}`;
  const value = state.values[key];
  const error = validator(value);

  return (
    <div class="px-4">
      <label class="block" for={cssid}>
        {label}
      </label>
      {desc && <div class="text-foreground/80 text-sm italic">{desc}</div>}
      <div class="py-2">
        {kind === "bool" && (
          <input id={cssid} type="checkbox" checked={!!value} onInput={({ target }) => state.doUpdate(key, (target as HTMLInputElement).checked)} />
        )}
        {kind === "string" && (
          <input
            id={cssid}
            type="text"
            class={tw(INPUT, "w-full")}
            value={(value as string) ?? ""}
            onInput={({ target }) => state.doUpdate(key, (target as HTMLInputElement).value)}
          />
        )}
        {kind === "text" && (
          <textarea
            id={cssid}
            value={value ? `${value}` : ""}
            class={tw(INPUT, "text-xl", "w-full", "min-h-[10rem]")}
            style={"font-family: monospace;"}
            onInput={({ target }) => state.doUpdate(key, (target as HTMLTextAreaElement).value)}
          />
        )}
      </div>
      <div class={tw("mb-4 p-1", "text-gray-800", error && "bg-linear-to-b from-red-200 to-red-300")}>{error ?? ""}</div>
    </div>
  );
}
