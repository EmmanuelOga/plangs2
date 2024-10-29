import { type Dispatch, useState } from "preact/hooks";

export abstract class Dispatchable<T> {
  dispatcher?: Dispatch<this>;

  constructor(protected data: T) {}

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
    this.runDispatcher();
    return this;
  }

  /**
   * Actually run the dispatcher. Subclasses can override to do something different:
   * for example, to trigger the dispatcher of a parent element.
   */
  protected runDispatcher(): void {
    this.dispatcher?.(this.clone());
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
