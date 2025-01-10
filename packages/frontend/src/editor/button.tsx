import { tw } from "@plangs/frontend/auxiliar/styles";

export function EditorButton({
  label,
  isCurrent,
  onClick,
  class: klass,
}: { label: string; class?: string; isCurrent?: () => boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      class={tw(
        "inline-flex items-start align-middle",
        "cursor-pointer",
        "hover:bg-hiliteb hover:text-hilitef",
        "m-0.5 ring-1 ring-primary",
        isCurrent?.() && "current bg-secondary",
        klass,
      )}
      onClick={onClick}>
      <span class={tw("mx-1 px-1 py-0.5", "inline-block w-full", "truncate")}>{label}</span>
    </button>
  );
}
