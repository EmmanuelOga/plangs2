import { render } from "preact";

import { elems } from "@plangs/frontend/auxiliar/dom";
import { type CLKey, cssClass } from "@plangs/server/elements";

import { IconButton, type IconButtonProps } from "./icon-button";

const CL: CLKey = "iconButton";

/** Server side container for the Component. */
export function iconButton(action: IconButtonProps["action"]) {
  return (
    <div id={`icon-button-${action}`} data-action={action} class={cssClass("iconButton")}>
      {/* Render the icon server-side to reduce flickering when enabling the icons. */}
      <IconButton action={action} />
    </div>
  );
}

/** Find all component containers and render them. */
export function activateIconButtons() {
  for (const elem of elems("iconButton")) {
    if (elem.dataset.action) {
      const action = elem.dataset.action as IconButtonProps["action"];
      render(<IconButton action={action} />, elem);
    } else {
      console.error("Missing prop for IconButton component.");
    }
  }
}
