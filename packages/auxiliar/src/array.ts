/** Insert elements in the array if they are not already present. */
export function arrayMerge<T>(
  target: T[],
  newData: T[],
  similar: (l1: T, l2: T) => boolean = (l1, l2) => l1 === l2,
  onDuplicate?: (prevElem: T, newElem: T) => void,
) {
  for (const newElem of newData) {
    const prevElem = target.find((elem: T) => similar(elem, newElem));
    if (prevElem) {
      onDuplicate?.(prevElem, newElem);
    } else {
      target.push(newElem);
    }
  }
}

/** Delete in-place the given indexes of an array. Sorts the array in descending order to delete the proper elements. */
export function arrayDelete<T>(array: T[], indexes: Set<number>) {
  // Delete indexes starting with the last one to avoid shifting elements.
  for (const idx of [...indexes].sort((a, b) => b - a)) array.splice(idx, 1);
}

/** In place removal of array elements. */
export function removeIf<T>(array: T[], predicate: (value: T) => boolean, onRemove?: (value: T) => void): T[] {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i])) {
      onRemove?.(array[i]);
      array.splice(i, 1);
    }
  }
  return array;
}
