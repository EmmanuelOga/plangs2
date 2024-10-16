import { tw } from "@plangs/frontend/utils";

import { h } from "preact";
import { cl, id } from "../elements";
import { PL_INPUTS, type PlInputKey } from "./pl_config";

export function FacetInput<T extends PlInputKey>({ inputKey }: { inputKey: T }) {
  const baseProps = { id: id(inputKey), name: inputKey };

  const { label, input } = PL_INPUTS[inputKey];

  if (input.kind === "facet") {
    return h("input-facet", {
      ...baseProps,
      class: tw("relative", "flex-1"),
      dir: input.dir,
      edge: input.edge,
      node: input.node,
      // pg needs to assigned on the frontend.
    } as Record<string, string>);
  }

  const withInputSel = input.kind === "search" && "inputSel" in input && input.inputSel;
  const inputTextColor = "bg-background text-foreground placeholder:text-foreground/50";
  const inputElem = (
    <input
      {...baseProps}
      class={tw(cl("facetInput"), inputTextColor, input.kind === "checkbox" ? "-mt-1" : "w-full")}
      value={"value" in input ? input.value : undefined}
      placeholder={label}
      type={input.kind}
    />
  );

  return (
    <>
      {input.kind === "checkbox" ? (
        <label for={baseProps.id} class={tw("block", "px-2")}>
          {inputElem}
          <span class="ml-2">{label}</span>
        </label>
      ) : (
        inputElem
      )}
      {withInputSel && h("input-sel", { name: inputKey, class: tw("w-full", inputTextColor) })}
    </>
  );
}
