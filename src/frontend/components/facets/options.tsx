// biome-ignore lint/style/useImportType: h is a function needed for TSX to work.
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import { VSet } from "../../state/vset";
import "./options.css";

export class Filter {
  constructor(
    public enabled = false,
    public mode: "all-of" | "any-of" = "any-of",
    public values = new VSet<string>(),
  ) {}

  toggleMode(mode: Filter["mode"]): Filter {
    return new Filter(this.enabled, mode, this.values);
  }

  toggleValue(id: string): Filter {
    return new Filter(this.enabled, this.mode, this.values.toggle(id));
  }

  toggleEnabled(): Filter {
    return new Filter(!this.enabled, this.mode, this.values);
  }
}

export type OptionsFacetProps = {
  title: string;
  options: [string, string][];
  onChange?: (filter: Filter) => void;
};

export function OptionsFacet({ title, options, onChange }: OptionsFacetProps) {
  const [expanded, setExpanded] = useState(false);
  const [filter, setFilter] = useState(new Filter());

  const tgExpand = () => setExpanded(!expanded);
  const tgEnabled = () => setFilter(filter.toggleEnabled());
  const tgMode = (mode: Filter["mode"]) => setFilter(filter.toggleMode(mode));
  const tgVal = (id: string) => setFilter(filter.toggleValue(id));

  useEffect(() => {
    onChange?.(filter);
  }, [onChange, filter]);

  const input = (label: string, name: string, type: "radio" | "checkbox", checked: boolean, action: () => void) => (
    <label>
      <input {...{ name, type, checked }} onClick={action} onKeyDown={action} />
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
        {input("Any of", "mode", "radio", filter.mode === "any-of", () => tgMode("any-of"))}
        {input("All of", "mode", "radio", filter.mode === "all-of", () => tgMode("all-of"))}
      </div>,
    );
    for (const [id, name] of options) {
      out.push(input(name, id, "checkbox", filter.values.has(id), () => tgVal(id)));
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
