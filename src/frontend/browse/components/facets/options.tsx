// biome-ignore lint/style/useImportType: h is a function needed for TSX to work.
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import { toggle } from "src/util";
import "./options.css";

export type Filter = {
  enabled: boolean;
  filterMode: "include" | "exclude";
  valuesMode: "all-of" | "any-of";
  values: Set<string>;
};

export type OptionsFacetProps = {
  title: string;
  options: [string, string][];
  onChange?: (filter: Filter) => void;
};

export function OptionsFacet({ title, options, onChange }: OptionsFacetProps) {
  const [expanded, setExpanded] = useState(true);
  const tgExpand = () => setExpanded(!expanded);

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

  const inputs = () => {
    const out: h.JSX.Element[] = [];
    out.push(
      <div style="border: 1px solid gray; margin: .25rem; border-radius: .25rem;">
        {input("Enabled", "enabled", "radio", filter.enabled, tgEnabled)}
        {input("Disabled", "enabled", "radio", !filter.enabled, tgEnabled)}
      </div>,
      <div style="border: 1px solid gray; margin: .25rem; border-radius: .25rem;">
        {input("Include", "filterMode", "radio", filter.filterMode === "include", () => tgFilterMode("include"))}
        {input("Exclude", "filterMode", "radio", filter.filterMode === "exclude", () => tgFilterMode("exclude"))}
      </div>,
      <div style="border: 1px solid gray; margin: .25rem; border-radius: .25rem;">
        {input("Any of", "valuesMode", "radio", filter.valuesMode === "any-of", () => tgValuesMode("any-of"))}
        {input("All of", "valuesMode", "radio", filter.valuesMode === "all-of", () => tgValuesMode("all-of"))}
      </div>,
    );
    for (const [id, name] of options) {
      out.push(input(name, id, "checkbox", filter.values.has(id), () => tgValue(id)));
    }
    return out;
  };

  return (
    <div class="options-facet">
      <div class="title" onClick={tgExpand} onKeyDown={tgExpand}>
        {title}
      </div>
      <div class="options">{expanded ? inputs() : null}</div>
    </div>
  );
}
