import { tw } from "@plangs/frontend/utils";
import type { N } from "@plangs/plangs/index";
import { type ComponentChildren, h } from "preact";
import { id } from "../elements";

export function PlFilters({ class: cssClass }: { class: string }) {
  return (
    <aside
      id={id("filters")}
      class={tw(
        "grid",

        "mr-1.5 pt-5 pr-3 pl-6",
        "overflow-y-auto overflow-x-hidden",

        "gap-5 p-5",
        "grid-cols-2",
        "sm:grid-cols-[repeat(auto-fit,minmax(15rem,1fr))]",
        "grid-flow-row-dense",

        "max-h-[35%]",

        cssClass,
      )}>
      {INPUT_GROUPS.map(({ title, keys }) => (
        <InputGroup key={title} title={title}>
          {keys.map(key => (
            <Input key={key} inputKey={key} />
          ))}
        </InputGroup>
      ))}
    </aside>
  );
}

function InputGroup({ title, children }: { title: string; children: ComponentChildren }) {
  return (
    <div>
      <details
        class={tw(
          "cursor-pointer select-none",
          "hover:outline-1 hover:outline-secondary",
          "shadow-lg shadow-secondary hover:shadow-primary/75",
          "bg-white/95 text-slate-950",
        )}>
        <summary
          class={tw(
            "px-1.5 py-1",
            "overflow-hidden text-ellipsis whitespace-nowrap",
            "text-xs sm:text-lg",

            "bg-secondary hover:bg-primary",
            "text-foreground/90 hover:text-background",
            "border-1 hover:border-secondary",
          )}>
          {title}
        </summary>
        <div class="flex flex-col gap-3 p-1.5">{children}</div>
      </details>
    </div>
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
  };

  let inputElem = <input {...inputProps} type={input.kind} />;
  if (input.kind === "checkbox") inputElem = <input {...inputProps} type="checkbox" />;
  if (input.kind === "compl") inputElem = h("input-compl", { ...inputProps, "data-kind": input.node } as Record<string, string>);

  const showSel = input.kind === "compl" || (input.kind === "search" && "inputSel" in input && input.inputSel);
  return (
    <div class={tw("[&_select]:text-center")}>
      <label for={inputProps.id} class={tw("block", "p-0")}>
        {input.kind === "checkbox" ? inputElem : <div>{label}</div>}
        {input.kind === "checkbox" ? label : inputElem}
      </label>
      {showSel &&
        h("input-sel", {
          name: key,
          class: tw("w-full text-center", inputTextColor, "[&_.item]:text-left"),
        })}
    </div>
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
  hasReleases: checkbox("Known Releases"),
  hasWikipedia: checkbox("Has Wikipedia"),
  isMainstream: checkbox("Is Mainstream"),
  isTranspiler: checkbox("Is Transpiler"),

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

const group = (title: string, keys: (keyof typeof INPUT_PROPS)[]) => ({ title, keys }) as const;

const INPUT_GROUPS = [
  group("Creation Date", ["appearedAfter"]),
  group("Dialect Of", ["dialectOf"]),
  group("Extensions", ["extensions"]),
  group("Implements", ["implements"]),
  group("Influenced By", ["influencedBy"]),
  group("Influenced", ["influenced"]),
  group("Licenses", ["licenses"]),
  group("Logo", ["hasLogo"]),
  group("Name", ["plangName"]),
  group("Paradigms", ["paradigms"]),
  group("Platforms", ["platforms"]),
  group("Popular", ["isMainstream"]),
  group("Releases", ["hasReleases", "releasedAfter"]),
  group("Tags", ["tags"]),
  group("Transpiler", ["isTranspiler"]),
  group("Type Systems", ["typeSystems"]),
  group("Wikipedia", ["hasWikipedia"]),
  group("Written In", ["writtenIn"]),
] as const;
