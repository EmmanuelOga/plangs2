import { type Any, AnyVidP, type VID } from "./vertex";

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

// biome-ignore lint/complexity/noBannedTypes: we need to provide an interface for additional properties, but many times the interface is just empty since the edge key already has enough information.
export type  E_Empty = {};

/**
 * Reverse a string key back to an EdgeKey.
 * Note that the Edge key from/to types cannot be inferred.
 */
export function fromStr(ek: string): EdgeKey | { errors: string[] } {
    const [d, from, to, type, suffix] = ek.split('~');

    const errors: string[] = [];
    if (d !== 'd' && d !== 'u') errors.push(`invalid direction '${d}' in '${ek}'`);
    if (!AnyVidP.test(from)) errors.push(`invalid from id '${from}' in '${ek}'`);
    if (!AnyVidP.test(to)) errors.push(`invalid to id '${to}' in '${ek}'`);
    if (errors.length) return { errors };

    return { from, to, d: d === 'd', type: type || undefined, suffix: suffix || undefined } as EdgeKey;
}
