import { type Dispatch, type MutableRef, useState } from "preact/hooks";

export abstract class Dispatchable<T> {
  dispatcher?: Dispatch<this>;

  constructor(protected data: T) {
    // NOTE: we can't use private #data because we want to subclass. Protected is a good compromise.
    // Protected will ensure, at least in TypeScritp land, that data is only accessed through getters.
  }

  clone(): this {
    const Ctor = this.constructor as new (data: T) => this;
    const clone = new Ctor(this.data);
    clone.dispatcher = this.dispatcher;
    return clone;
  }

  dispatch(): this {
    if (!this.dispatcher) console.error("No dispatcher. Did you forget to call useDispatchable?");
    return this.maybeDispatch();
  }

  /**
   * If we are aware and intentional,
   * attempting to dispatch without a dispatcher may be ok.
   */
  maybeDispatch(): this {
    if (this.dispatcher) this.dispatcher(this.clone());
    return this;
  }
}

/**
 * Setup a {@link Dispatchable} instance with a {@link useState} dispatcher.
 */
// biome-ignore lint/suspicious/noExplicitAny: accept any kind of Dispatchable.
export function useDispatchable<T extends Dispatchable<any>>(factory: () => T): T {
  const [state, dispatcher] = useState(factory);
  state.dispatcher = dispatcher;
  return state;
}

/**
 * Utility to allow accessing the state when using web components.
 * {@returns} The customElement, if it is a {@link T}.
 */
export function setComponentState<T extends HTMLElement & { state?: S }, S>(
  reactRoot: MutableRef<HTMLElement | undefined>,
  isComponent: (el?: HTMLElement) => el is T,
  state: S,
): T | undefined {
  // The preact element is the direct child of the custom element.
  const wrapper = reactRoot.current?.parentElement;
  if (!wrapper) {
    console.error("No container found for:", reactRoot);
    return;
  }
  // We only need to set the state if the compoent is being used as a custom element.
  if (!customElements.get(wrapper.tagName.toLowerCase())) return;
  if (isComponent(wrapper)) {
    wrapper.state = state;
    return wrapper;
  }
  console.warn("Failed to set state, wrapper doesn't type check", { self: reactRoot, typeChecker: isComponent, state });
}
