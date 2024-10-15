import { tw } from "@plangs/frontend/utils";

import { h } from "preact";
import { cl, id } from "../elements";
import { PL_INPUTS, type PlInputKey } from "./pl_config";

export function FacetInput<T extends PlInputKey>({ inputKey: key }: { inputKey: T }) {
  const baseProps = { id: id(key), name: key };

  const { label, input } = PL_INPUTS[key];

  if (input.kind === "facet") {
    return h("input-facet", {
      ...baseProps,
      name: input.edge,
      "data-edge": input.edge,
      "data-node": input.node,
      "data-dir": input.dir,
      class: tw("relative", "flex-1"),
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
      {withInputSel && h("input-sel", { name: key, class: tw("w-full", inputTextColor) })}
    </>
  );
}
