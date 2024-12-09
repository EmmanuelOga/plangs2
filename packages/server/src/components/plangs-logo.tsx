import { tw } from "@plangs/frontend/auxiliar/styles";

export function PlangsLogo({ class: cssClass }: { class?: string }) {
  return (
    <div style="aspect-ratio: 16 / 4.5;" class={tw("overflow-hidden text-center", cssClass)}>
      <a
        href="/"
        style="color: transparent;"
        class={tw(
          "inline-block h-full",
          "text-[clamp(2.5rem,5vw,7rem)]",
          "bg-center bg-contain bg-no-repeat",
          "bg-[url('/images/plangs-light.svg')] dark:bg-[url('/images/plangs-dark.svg')]",
        )}>
        Plangs!
      </a>
    </div>
  );
}
