/**
 * Insert elements in the array if they are not already present.
 */
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
