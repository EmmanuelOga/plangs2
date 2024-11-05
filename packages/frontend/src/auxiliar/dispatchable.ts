import type { RefObject } from "preact";
import { type Dispatch, useEffect, useRef, useState } from "preact/hooks";

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
    this.dispatcher?.(this.clone());
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
 * Saves the state of the component on the HTML wrapper element of a preact component.
 * Returns a ref that should be attached to the root element of the component.
 */
export function useRootState<Container extends HTMLElement, T>(state: T): RefObject<Container | undefined> {
  const ref = useRef<Container | undefined>();
  useEffect(() => {
    const root = ref.current?.parentElement as Container & { state?: T };
    if (root && state) root.state = state;
  }, [state]);
  return ref as RefObject<Container | undefined>;
}
