import { Any, AnyVidP, VID } from "./vertex";

/**
 * Key to uniquely identify an edge of a graph.
 */
export type EdgeKey<
    TVIdFrom extends string = VID<Any>,
    TVIdTo extends string = VID<Any>
> = {
    from: TVIdFrom;
    to: TVIdTo;

    /**
     * If true, the edge is directed from `from` to `to`.
     * If false or undefined, the edge is undirected.
     */
    d?: boolean;

    /**
     * Useful to quickly distinguish between edge types.
     */
    type?: string;

    /**
     * A suffix can be used to distinguish between parallel edges.
     */
    suffix?: string;
}

/**
 * Edges tables can store additional data, but the EdgeKey may carry enough information.
 */
export type E_Empty = {};

/**
 * @returns true only if both from and to keys match the respective patterns.
 */
export function validateEdgeKey(ek: EdgeKey, fromPattern = AnyVidP, toPattern = AnyVidP): boolean {
    return fromPattern.test(ek.from) && toPattern.test(ek.to);
}

/**
 * Convert an edge key to a string, for use as a key in a Map.
 */
export function toStr({ d, from, to, suffix, type }: EdgeKey, defaults?: Partial<EdgeKey>): string {
    if (defaults) {
        d = d ?? defaults.d;
        from = from ?? defaults.from;
        to = to ?? defaults.to;
        type = type ?? defaults.type;
        suffix = suffix ?? defaults.suffix;
    }
    return `${d ? 'd' : 'u'}~${from}~${to}~${type ?? ''}~${suffix ?? ''}`;
}

/**
 * Reverse a string key back to an EdgeKey.
 * Note that the Edge key from/to types cannot be inferred.
 */
export function toEdge(ek: string): EdgeKey | { errors: string[] } {
    const [d, from, to, type, suffix] = ek.split('~');

    const errors: string[] = [];
    if (d !== 'd' && d !== 'u') errors.push(`invalid direction '${d}' in '${ek}'`);
    if (!AnyVidP.test(from)) errors.push(`invalid from id '${from}' in '${ek}'`);
    if (!AnyVidP.test(to)) errors.push(`invalid to id '${to}' in '${ek}'`);
    if (errors.length) return { errors };

    return { from, to, d: d === 'd', type: type || undefined, suffix: suffix || undefined } as EdgeKey;
}