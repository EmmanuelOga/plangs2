import { useEffect, useState } from "preact/hooks";

import { elem } from "@plangs/server/elements";
import { CLOSE, FILTER, MENU, MOON, SUN } from "./icons";

export const TAG_NAME = "input-toggle";

export type InputToggleProps = {
  action: "filters" | "hamburger" | "lights";
};

const ICONS = {
  lights: [SUN, MOON],
  filters: [FILTER, FILTER],
  hamburger: [CLOSE, MENU],
};

/** Display a PL information, if the key is known. */
export function InputToggle({ action }: InputToggleProps) {
  const [mode, setState] = useState(0);

  const toggle = () => {
    const newMode = mode === 0 ? 1 : 0;

    setState(newMode);

    if (action === "lights") {
      document.body.classList.toggle("dark", newMode === 0);
    } else if (action === "hamburger") {
      elem("mainNav")?.classList.toggle("hidden", newMode === 1);
    }
  };

  return (
    <div
      class="text-primary"
      onClick={toggle}
      onKeyDown={({ key }) => {
        if (key === "Enter") toggle();
      }}>
      {ICONS[action][mode]}
    </div>
  );
}

export const EVENTS = {} as const;
