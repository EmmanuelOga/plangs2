import type { ComponentChildren } from "preact";

import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import { INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";
import { type FormField, VertexFormState } from "./vertex-form-state";

import { button } from "./vertices-editor";

/** Form to edit the _data_ of the Vertex. */
export function VertexForm({ vertex }: { vertex: TPlangsVertex }) {
  const state = useDispatchable(() => VertexFormState.create(vertex));

  function formField(key: string, field: FormField): ComponentChildren {
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
        <div class={tw("p-1", "text-gray-800", error && "bg-linear-to-b from-red-200 to-red-300")}>{error ?? "_"}</div>
      </div>
    );
  }

  return (
    <div class={tw("flex flex-col gap-4 justify-self-center", "min-w-[50%] max-w-[160ch]", "bg-secondary/25")}>
      <header class={tw("px-4 py-2", "flex flex-row gap-4", "justify-end", "bg-secondary/50", "text-center text-xl")}>
        {button({ label: "Reload", onClick: () => state.doReload() })}
        {button({ label: "Save", onClick: () => state.doSave() })}
      </header>
      <div class="text-center">{state.status}</div>
      <div class="overflow-hidden overflow-y-auto">{[...Object.entries(state.fields)].map(([key, field]) => formField(key, field))}</div>
    </div>
  );
}