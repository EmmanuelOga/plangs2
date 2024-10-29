import { render } from "preact";

import { elems } from "@plangs/frontend/auxiliar/dom";
import { classesExcept, tw } from "@plangs/frontend/auxiliar/styles";
import { type CLKey, cssClass } from "@plangs/server/elements";

import { IconButton, type IconButtonProps } from "./icon-button";

const CL: CLKey = "iconButton";

/** Server side container for the Component. */
export function iconButton(action: IconButtonProps["action"]) {
  return <div data-action={action} class={tw(cssClass(CL), "text-primary")} />;
}

/** Find all component containers and render them. */
export function activateIconButtons() {
  for (const elem of elems("iconButton")) {
    if (elem.dataset.action) {
      const props: IconButtonProps = {
        action: elem.dataset.action as IconButtonProps["action"],
        class: classesExcept(elem, cssClass("iconButton")),
      };
      render(<IconButton {...props} />, elem);
    } else {
      console.error("Missing prop for IconButton component.");
    }
  }
}
