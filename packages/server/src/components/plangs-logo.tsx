import { tw } from "@plangs/frontend/utils";

export function PlangsLogo({ class: cssClass }: { class?: string }) {
  return (
    <div style="aspect-ratio: 16 / 4.5;" class={tw("overflow-hidden", cssClass)}>
      <a
        href="/"
        class={tw(
          "block h-full w-full",
          "text-[clamp(2.5rem,5vw,7rem)]",
          "text-transparent",
          "bg-contain bg-left bg-no-repeat",
          "bg-[url('/images/plangs-light.svg')] dark:bg-[url('/images/plangs.svg')]",
        )}>
        Plangs!
      </a>
    </div>
  );
}
