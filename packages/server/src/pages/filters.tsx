import { tw } from "@plangs/frontend/utils";
import type { N } from "@plangs/plangs/index";
import { type ComponentChildren, h } from "preact";
import { id } from "../elements";

export function PlFilters({ class: cssClass }: { class: string }) {
  const inputs = (group: Group[], cssClass: string) => (
    <div class={tw("m-1 flex flex-col gap-4", cssClass)}>
      {group.map(({ title, keys }) => (
        <InputGroup key={title} title={title}>
          {keys.map(key => (
            <Input key={key} inputKey={key} />
          ))}
        </InputGroup>
      ))}
    </div>
  );

  const [group1, group2, group3, group4] = INPUT_GROUPS.map((group, i) => inputs(group, `pl-bg-${i}`));

  return (
    <aside id={id("filters")} class={tw("grid grid-cols-2 gap-2 md:grid-cols-4", cssClass)}>
      {group1}
      {group2}
      {group3}
      {group4}
    </aside>
  );
}

function InputGroup({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <details
      open={true}
      class={tw(
        "group",
        "cursor-pointer select-none",

        "shadow-md shadow-secondary hover:shadow-primary/50",
        "bg-white/95 text-slate-950",
      )}>
      <summary
        class={tw(
          "px-1.5 py-1",
          "overflow-hidden text-ellipsis whitespace-nowrap",
          "text-xs sm:text-lg",

          "bg-secondary group-hover:bg-primary",
          "text-foreground/90 group-hover:text-background",
          "border-1 border-foreground/50 group-hover:border-bacground/50",
        )}>
        {title}
      </summary>
      <div class="flex flex-col gap-3 p-1.5">{children}</div>
    </details>
  );
}

function Input({ inputKey: key }: { inputKey: keyof typeof INPUT_PROPS }) {
  const { label, input } = INPUT_PROPS[key];

  const inputTextColor = "placeholder:text-background/50";
  const inputProps = {
    name: key,
    id: id(key),
    class: tw(inputTextColor, input.kind === "checkbox" ? "-mt-1" : "w-full"),
    value: "value" in input ? input.value : undefined,
    placeholder: label,
  };

  let inputElem = <input {...inputProps} type={input.kind} />;
  if (input.kind === "checkbox") inputElem = <input {...inputProps} type="checkbox" />;
  if (input.kind === "compl") inputElem = h("input-compl", { ...inputProps, "data-kind": input.node } as Record<string, string>);

  const showSel = input.kind === "compl" || (input.kind === "search" && "inputSel" in input && input.inputSel);
  return (
    <>
      <label for={inputProps.id} class={tw("block", "p-0")}>
        {input.kind === "checkbox" ? inputElem : <div>{label}</div>}
        {input.kind === "checkbox" ? label : inputElem}
      </label>
      {showSel && h("input-sel", { name: key, class: tw("w-full", inputTextColor) })}
    </>
  );
}

const search = (label: string, sel?: "trackSelection") => ({ label, input: { kind: "search", inputSel: sel === "trackSelection" } }) as const;
const month = (label: string) => ({ label, input: { kind: "month" } }) as const;
const checkbox = (label: string, value?: string) => ({ label, input: { kind: "checkbox", value } }) as const;
const compl = (label: string, node: N) => ({ label, input: { kind: "compl", node } }) as const;

export const INPUT_PROPS = {
  plangName: search("Lang Name"),
  extensions: search("File Extension", "trackSelection"),

  appearedAfter: month("Appeared After"),
  releasedAfter: month("Released After"),

  hasLogo: checkbox("Has Logo", "1"),
  hasReleases: checkbox("Any Known Release"),
  hasWikipedia: checkbox("Has Wikipedia"),
  isMainstream: checkbox("Is Mainstream"),
  isTranspiler: checkbox("Is Transpiler"),

  compilesTo: compl("Compiles To", "pl"),
  dialectOf: compl("Dialect Of", "pl"),
  implements: compl("Implements", "pl"),
  influenced: compl("Influenced", "pl"),
  influencedBy: compl("Influenced By", "pl"),
  licenses: compl("Licenses", "license"),
  paradigms: compl("Paradigms", "paradigm"),
  platforms: compl("Platforms", "plat"),
  tags: compl("Tags", "tag"),
  typeSystems: compl("Type System", "tsys"),
  writtenIn: compl("Written In", "pl"),
} as const;

type Group = { title: string; keys: (keyof typeof INPUT_PROPS)[] };
const group = (title: string, keys: (keyof typeof INPUT_PROPS)[]) => ({ title, keys }) as const;

const INPUT_GROUPS = [
  [
    group("Name", ["plangName"]),
    group("Creation Date", ["appearedAfter"]),
    group("Releases", ["hasReleases", "releasedAfter"]),
    group("File Extensions", ["extensions"]),
  ],
  [group("Popular", ["isMainstream"]), group("Has Logo", ["hasLogo"]), group("Has Wikipedia", ["hasWikipedia"]), group("Licenses", ["licenses"])],

  [
    group("Dialect Of", ["dialectOf"]),
    group("Implements", ["implements"]),
    group("Influenced By", ["influencedBy"]),
    group("Influenced", ["influenced"]),
    group("Written In", ["writtenIn"]),
  ],
  [
    group("Transpiler", ["isTranspiler", "compilesTo"]),
    group("Paradigms", ["paradigms"]),
    group("Platforms", ["platforms"]),
    group("Type Systems", ["typeSystems"]),
    group("Tags", ["tags"]),
  ],
] as Group[][];
