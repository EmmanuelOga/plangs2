import { getFragment } from "./utils";

/**
 * All fragment updates should go to a single instance of this class to ensure we can distinguish
 * between user initiated and app initiated URL Fragment changes:
 *
 * * Use instance.pushState to change the fragment and only trigger a "user change" event.
 * * Use instance.update to change the fragment and trigger both a "user change" and a "change" event.
 */
export class FragmentTracker extends EventTarget {
  #fragment: string;
  #previous?: string;

  /** Keep a reference so we can remove it if needed (with {@link destroy}). */
  #boundedHandler: (ev: HashChangeEvent) => void;

  constructor() {
    super();
    this.#fragment = window.location.hash.slice(1);
    this.#boundedHandler = this.#hashChangeHandler.bind(this);
    window.addEventListener("hashchange", this.#boundedHandler);
  }

  destroy() {
    window.removeEventListener("hashchange", this.#boundedHandler);
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
  pushState(fragmentOrURL: string | URL) {
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
    window.location.hash = getFragment(fragmentOrURL);
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
}
