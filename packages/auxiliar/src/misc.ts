/**
 * Ret (short for "returning") is a combinator that takes an item and a function,
 * and applies the function to the item.
 *
 * Useful to avoid assigning a value to a variable, also creates a new scope around the item,
 * so the value can be reused multiple times (good if the value is expensive to compute).
 *
 * From:
 * ```
 * const thing = expensiveComputation();
 * doSomething(thing);
 * doSomethingElse(thing);
 * ```
 *
 * To:
 * ```
 * ret(expensiveComputation(), thing => {
 *  doSomething(thing);
 *  doSomethingElse(thing);
 * });
 * ```
 *
 * This is great for instance in TSX where you can't define a variable in the middle of a TSX block.
 *
 * There's a similar combinator (tap), whose purpose is to make a value available for a block of code in the middle of a chain.
 *
 * Aka aka "K combinator" aka "Kestrel" .
 * https://leanpub.com/combinators/read#leanpub-auto-kestrels
 */
export const ret = <T, R>(item: T, action: (item: T) => R): R => action(item);

export const tap = <T>(item: T, action: (item: T) => void): T => {
  action(item);
  return item;
};

// https://stackoverflow.com/a/32108184
// biome-ignore lint/suspicious/noExplicitAny: checks if _any_ object is empty.
export function isEmpty(obj: any) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) return false;
  }
  return true;
}

// Maintain an order of keys, with priority for some keys.
const PRIORITY_KEYS = ["name", "description", "shortDesc", "created"];

/** Cleanup data: return a new object with sorted keys, and remove some blank values. */
export function cleanup(data: Record<string, any>) {
  const entries = Object.entries(data);
  entries.sort(([keyA], [keyB]) => {
    const indexA = PRIORITY_KEYS.indexOf(keyA);
    const indexB = PRIORITY_KEYS.indexOf(keyB);

    if (indexA !== -1 && indexB !== -1) return indexA - indexB;
    if (indexA !== -1) return -1;
    if (indexB !== -1) return 1;

    return keyA.localeCompare(keyB);
  });

  const result: Record<string, any> = {};
  for (const [k, v] of entries) {
    if (Array.isArray(v)) {
      if (v.length > 0) result[k] = [...v].sort();
    } else if ((v !== null && v !== undefined) || v !== "") {
      result[k] = v;
    }
  }

  return result;
}
