import { RISON } from "rison2";

import { isEmpty } from "@plangs/auxiliar/misc";

import { on } from "./events";

// Bun loads this code so we need to define a valid window (even if it is not defined).
const win = (typeof window === "undefined" ? undefined : window) as Window;

/**
 * Returns the fragment (possible empty): the string after the first '#' of a URL or HREF.
 * Returns the input string if it has no '#' character.
 */
export function getFragment(fragmentOrURL: URL | Location | string | undefined = win.location): string {
  if (!fragmentOrURL) return "";
  if (fragmentOrURL instanceof URL || fragmentOrURL instanceof Location) return fragmentOrURL.hash.slice(1);
  const hashIndex = fragmentOrURL.indexOf("#");
  return hashIndex !== -1 ? fragmentOrURL.slice(hashIndex + 1) : fragmentOrURL;
}

/**
 * All fragment updates should go to a single instance of this class to ensure we can distinguish
 * between user initiated and app initiated URL Fragment changes:
 *
 * * Use instance.pushState to change the fragment and only trigger a "user change" event.
 * * Use instance.update to change the fragment and trigger both a "user change" and a "change" event.
 */
export class FragmentTracker extends EventTarget {
  #fragment: string = win.location.hash.slice(1);
  #previous?: string;

  /** Keep a reference so we can remove it if needed (with {@link destroy}). */
  #boundedHandler?: (ev: HashChangeEvent) => void;

  // biome-ignore lint/suspicious/noExplicitAny: Return of RISON.parse is any.
  static deserialize(fragment = win.location.hash): any {
    try {
      const data = fragment.slice(fragment.indexOf("#") + 1).trim();
      if (data.length > 2 && data.startsWith("(") && data.endsWith(")")) return RISON.parse(data);
    } catch (e) {
      console.warn("Failed to parse RISON:", fragment, e);
    }
  }

  // biome-ignore lint/suspicious/noExplicitAny: RISON.stringify can serialize any data.
  static serialize(data: any): string | undefined {
    try {
      if (isEmpty(data)) return undefined;
      return RISON.stringify(data);
    } catch (e) {
      console.error("Failed to serialize data", e);
    }
  }

  /** Call this to bind the tracker to the hashchange event of the window. */
  bind(): this {
    this.destroy();
    this.#boundedHandler = this.#hashChangeHandler.bind(this);
    win.addEventListener("hashchange", this.#boundedHandler);
    return this;
  }

  /** Remove the hashchange event listener off the window. */
  destroy() {
    if (this.#boundedHandler) {
      win.removeEventListener("hashchange", this.#boundedHandler);
      this.#boundedHandler = undefined;
    }
  }

  get fragment(): string {
    return this.#fragment;
  }

  get previous(): string | undefined {
    return this.#previous;
  }

  /**
   * Handler for 'hashchange': this must come from user action (or 3rd party code :-/) since
   * updates through this class use history.pushState, which doesn't trigger hashchange.
   */
  #hashChangeHandler({ newURL, oldURL }: HashChangeEvent) {
    const newFragment = getFragment(newURL);
    if (newFragment !== this.#fragment) {
      this.#previous = getFragment(oldURL);
      this.#fragment = newFragment;
      this.dispatchEvent(this.#createEvent(FRAGMENT_USER_CHANGE));
      this.dispatchEvent(this.#createEvent(FRAGMENT_CHANGE));
    }
  }

  /**
   * This method will use history.pushState, so it won't trigger a {@link FRAGMENT_USER_CHANGE}.
   * https://developer.mozilla.org/en-US/docs/Web/API/History/pushState#description
   */
  pushState(fragmentOrURL: string | URL | undefined) {
    const newFragment = getFragment(fragmentOrURL);
    if (newFragment !== this.#fragment) {
      this.#previous = this.#fragment;
      this.#fragment = newFragment;
      history.pushState(null, "", `#${newFragment}`);
      this.dispatchEvent(this.#createEvent(FRAGMENT_CHANGE));
    }
  }

  /**
   * Updates fragment using window.location.hash,
   * which will trigger both {@link FRAGMENT_USER_CHANGE} and {@link FRAGMENT_CHANGE}.
   * Useful for programmatically simulating user navigation.
   */
  update(fragmentOrURL: string | URL): void {
    win.location.hash = getFragment(fragmentOrURL);
  }

  onUserChange(callback: (ev: FragmentChangeEvent) => void): (() => void) | undefined {
    return on(this, FRAGMENT_USER_CHANGE, callback);
  }

  #createEvent(type: FragmentEventType): FragmentChangeEvent {
    return new FragmentChangeEvent(type, { fragment: this.#fragment, previous: this.#previous });
  }
}

export const FRAGMENT_CHANGE = "fragmentchange" as const;
export const FRAGMENT_USER_CHANGE = "fragmentuserchange" as const;
export type FragmentEventType = typeof FRAGMENT_CHANGE | typeof FRAGMENT_USER_CHANGE;

export interface FragmentChangeEventDetail {
  fragment: string;
  previous: string | undefined;
}

export class FragmentChangeEvent extends CustomEvent<FragmentChangeEventDetail> {
  constructor(
    type: FragmentEventType,
    detail: FragmentChangeEventDetail,
    options: CustomEventInit<FragmentChangeEventDetail> = { bubbles: true, cancelable: undefined, composed: true },
  ) {
    super(type, { ...options, detail });
  }

  get fragment(): string {
    return this.detail.fragment;
  }

  get previous(): string | undefined {
    return this.detail.previous;
  }

  /** Attempt to deserialize RISON data. */
  // biome-ignore lint/suspicious/noExplicitAny: RISON data can be anything.
  get deserFrag(): any {
    return FragmentTracker.deserialize(this.detail.fragment);
  }

  /** Attempt to deserialize RISON data. */
  // biome-ignore lint/suspicious/noExplicitAny: RISON data can be anything.
  get deserPrev(): any {
    const { previous } = this.detail;
    return previous ? FragmentTracker.deserialize(previous) : undefined;
  }
}
