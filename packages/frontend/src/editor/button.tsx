import { tw } from "@plangs/frontend/auxiliar/styles";

export function EditorButton({
  label,
  isCurrent,
  onClick,
  class: klass,
}: { label: string; class?: string; isCurrent?: () => boolean; onClick: () => void }) {
  const current = !!isCurrent?.();
  return (
    <button
      type="button"
      class={tw(
        "my-1 px-1",
        "inline-flex",
        "border-1",
        current ? "border-primary" : "border-primary/75",
        current ? "current bg-primary/90 text-hilitef" : "bg-background",
        "cursor-pointer hover:bg-hiliteb hover:text-hilitef",
        klass,
      )}
      onClick={onClick}>
      <span class={tw("p-1 px-2", "inline-block w-full", "truncate")}>{label}</span>
    </button>
  );
}
