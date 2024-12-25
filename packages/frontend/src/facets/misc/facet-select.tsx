import { useContext } from "preact/hooks";

import { ValString } from "@plangs/auxiliar/value";
import { INPUT, tw } from "@plangs/frontend/auxiliar/styles";
import { type AnyFacetsMainState, FacetsMainContext } from "@plangs/frontend/facets/main/use_state";

export function FacetSelect<GroupKey extends string, FacetKey extends string>({
  groupKey,
  facetKey,
  options,
  label,
}: { groupKey: GroupKey; facetKey: FacetKey; label: string; options: { label: string; value: string }[] }) {
  const main = useContext(FacetsMainContext) as AnyFacetsMainState; // It exists, since it spawned this component.
  const current = main.values.get(groupKey, facetKey)?.value ?? "";
  return (
    <label class={tw("m-2", "flex", "items-center", "gap-2")}>
      <span class="inline-block min-w-[5rem]">{label}</span>
      <select
        class={tw(INPUT, "flex-1")}
        onChange={ev => {
          const select = ev.target as HTMLSelectElement;
          main.doSetValue(groupKey, facetKey, new ValString(select.value));
        }}
        value={current}>
        {options.map(({ label, value }) => (
          <option key={value} value={value} selected={value === current} class="text-pink-400">
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}
