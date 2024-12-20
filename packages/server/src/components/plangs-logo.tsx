import { tw } from "@plangs/frontend/auxiliar/styles";

export function PlangsLogo({ class: klass }: { class?: string }) {
  return (
    <div class={tw("text-center", klass)}>
      <a
        href="/"
        style="color: transparent;"
        class={tw(
          "inline-block h-full",
          "text-[clamp(2.5rem,10vh,8rem)]",
          "bg-center bg-contain bg-no-repeat",
          "bg-[url('/images/plangs-light.svg')] dark:bg-[url('/images/plangs-dark.svg')]",
        )}>
        Plangs!
      </a>
    </div>
  );
}
