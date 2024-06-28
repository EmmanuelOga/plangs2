// https://stackoverflow.com/questions/58806883/how-to-use-set-with-reacts-usestate?answertab=modifieddesc#tab-top
import { useMemo, useRef, useState } from "preact/hooks";

export function useSet<T>(initialValue: T[]):
    [number, Set<T>] {
    const [version, setVersion] = useState(0);
    const set = useRef(new Set<T>(initialValue))

    const memo = useMemo(() => ({
        add(item: T) {
            if (set.current.has(item)) return
            set.current.add(item)
            setVersion(i => i + 1)
        },
        delete(item: T) {
            if (!set.current.has(item)) return
            set.current.delete(item)
            setVersion(i => i + 1)
        },
        has: (item: T) => set.current.has(item),
        clear() {
            if (set.current.size === 0) return
            set.current.clear()
            setVersion(i => i + 1)
        },
        keys: () => set.current.keys(),
        values: () => set.current.values(),
        get size() { return set.current.size },
        [Symbol.iterator]: () => set.current.values(),
    }), []);

    // TODO: return is not really castable to Set<T>, it is missing some methods.
    // For now is ok, users of missing methods will just see a null pointer exception.
    return [version, memo as Set<T>];
}

export function setToggle<T>(set: Set<T>, item: T) {
    if (set.has(item)) {
        set.delete(item);
    } else {
        set.add(item);
    }
}
