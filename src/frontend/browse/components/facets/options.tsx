import { useEffect, useState } from "preact/hooks";
import { toggle } from "../../../../util";
import type { Filter } from "../../../shared/state/query";

import "./options.css";

export type OptionsFacetProps = {
  title: string;
  options: [string, string][];
  onChange?: (filter: Filter) => void;
};

export function OptionsFacet({ title, options, onChange }: OptionsFacetProps) {
  const [filter, setFilter] = useState<Filter>({
    enabled: true,
    filterMode: "include",
    valuesMode: "any-of",
    values: new Set(),
  });

  const tgEnabled = () => setFilter({ ...filter, enabled: !filter.enabled });
  const tgFilterMode = (mode: Filter["filterMode"]) => setFilter({ ...filter, filterMode: mode });
  const tgValuesMode = (mode: Filter["valuesMode"]) => setFilter({ ...filter, valuesMode: mode });
  const tgValue = (id: string) => setFilter({ ...filter, values: toggle(filter.values, id) });

  useEffect(() => {
    onChange?.(filter);
  }, [onChange, filter]);

  const input = (label: string, name: string, type: "radio" | "checkbox", checked: boolean, action: () => void) => (
    <label>
      <input
        {...{ name, type, checked }}
        onClick={action}
        onKeyPress={(e) => {
          if (e.key === "Enter" || e.key === " ") action();
        }}
      />
      {label}
    </label>
  );

  return (
    <div class="browse-facet options-facet">
      <div class="title">{title}</div>
      <div class="options">
        <div style="border: 1px solid gray; margin: .25rem; border-radius: .25rem;">
          {input("Enabled", "enabled", "radio", filter.enabled, tgEnabled)}
          {input("Disabled", "enabled", "radio", !filter.enabled, tgEnabled)}
        </div>
        <div style="border: 1px solid gray; margin: .25rem; border-radius: .25rem;">
          {input("Include", "filterMode", "radio", filter.filterMode === "include", () => tgFilterMode("include"))}
          {input("Exclude", "filterMode", "radio", filter.filterMode === "exclude", () => tgFilterMode("exclude"))}
        </div>
        <div style="border: 1px solid gray; margin: .25rem; border-radius: .25rem;">
          {input("Any of", "valuesMode", "radio", filter.valuesMode === "any-of", () => tgValuesMode("any-of"))}
          {input("All of", "valuesMode", "radio", filter.valuesMode === "all-of", () => tgValuesMode("all-of"))}
        </div>
        {options.map(([id, name]) => input(name, id, "checkbox", filter.values.has(id), () => tgValue(id)))}
      </div>
    </div>
  );
}
