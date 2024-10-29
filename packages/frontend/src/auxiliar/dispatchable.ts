import { type Dispatch, useState } from "preact/hooks";

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
    if (this.dispatcher) {
      this.dispatcher(this.clone());
    }
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
