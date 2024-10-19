import { h } from "preact";

import { INPUT } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import { cl, id } from "@plangs/server/elements";

import { PL_INPUTS, type PlInputKey } from "./pl_inputs";

export function FacetInput<T extends PlInputKey>({ inputKey }: { inputKey: T }) {
  const { kind, label, ...rest } = PL_INPUTS[inputKey];
  const baseProps = { id: id(inputKey), name: inputKey, "data-facet-input": kind };

  if (kind === "multiple") return h("input-sel", { ...baseProps, placeholder: label });

  if (kind === "facet") {
    if (!("jsonconf" in rest)) throw new Error("Facet input must have a jsonconf prop");
    // @ts-ignore need to define the props on input-facet on global namespace.
    return h("input-facet", { ...baseProps, jsonconf: JSON.stringify(rest.jsonconf) });
  }

  const inputElem = (
    <input {...baseProps} type={kind} placeholder={label} class={tw(cl("facetInput"), kind === "checkbox" ? "-mt-1" : "w-full", INPUT)} />
  );

  if (kind === "checkbox")
    return (
      <label for={baseProps.id} class={tw("block", "px-2")}>
        {inputElem}
        <span class="ml-2">{label}</span>
      </label>
    );

  return inputElem;
}
