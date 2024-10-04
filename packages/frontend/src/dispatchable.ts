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

  dispatch() {
    if (!this.dispatcher) throw new Error("No dispatcher. Did you forget to call useDispatchable?");
    this.dispatcher(this.clone());
  }
}

/**
 * Allows using a class for state, this way we can just call methods instead
 * of manually implementing method dispatch as with reducers.
 *
 * The instance needs to call `update` to notify the component of changes.
 */
export function useDispatchable<T extends Dispatchable<D>, D>(instance: T): T {
  const [state, dispatcher] = useState(instance);
  instance.dispatcher = dispatcher;
  return state;
}
