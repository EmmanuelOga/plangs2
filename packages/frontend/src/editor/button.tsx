import { HOVER, tw } from "@plangs/frontend/auxiliar/styles";

export function EditorButton({
  label,
  isCurrent,
  onClick,
  class: klass,
}: { label: string; class?: string; isCurrent?: () => boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      class={tw("px-4", "inline-flex items-center align-middle", HOVER, "ring-1 ring-primary", isCurrent?.() && "current bg-secondary", klass)}
      onClick={onClick}>
      <span class={tw("mx-1 px-1 py-0.5", "inline-block w-full", "truncate")}>{label}</span>
    </button>
  );
}
