import { type Dispatch, useState } from "preact/hooks";

export abstract class Dispatchable<T> {
  dispatcher!: Dispatch<this>;

  constructor(public data: T) {}

  clone(): this {
    const Ctor = this.constructor as new (data: T) => this;
    const clone = new Ctor(this.data);
    clone.dispatcher = this.dispatcher;
    return clone;
  }

  dispatch(): this {
    if (!this.dispatcher) throw new Error("No dispatcher. Did you forget to call useDispatchable?");
    this.dispatcher(this.clone());
    return this;
  }

  /**
   * Normally attempting Dispatch without having a dispatcher is an error,
   * but if we are being intentional, sometimes we we want to dispath *if* we are already setup:
   * for axample, if we use the same method in a factory function and for prop updates in useEffect hook.
   */
  maybeDispatch(): this {
    if (this.dispatcher) this.dispatcher(this.clone());
    return this;
  }
}

/**
 * Allows using a class for state, this way we can just call methods instead
 * of manually implementing method dispatch as with reducers.
 *
 * The instance needs to call `update` to notify the component of changes.
 */
// biome-ignore lint/suspicious/noExplicitAny: we want to accept any kind of Dispatchable.
export function useDispatchable<T extends Dispatchable<any>>(instance: T): T {
  const [state, dispatcher] = useState(instance);
  instance.dispatcher = dispatcher;
  return state;
}
