/**
 * A vertext id format is a string with format: `type+id`.
 * Examples: `pl+python`, `person+guido`, `plts+oop`, etc.
 * See {@link AnyVidP} for the matching pattern.
 */
export type VID<Type extends string> = `${Type}+${string}`

/**
 * An alias such that we can say: VID<Any> to match any vertex id.
 */
export type Any = string;

/**
 * An alias for the most generic vertex id.
 */
export type ID_V_Any = VID<Any>;

/**
 * RegExp Pattern for string literals matching {@link VID } (see {@link isAnyVid}).
 */
export const AnyVidP = /^[^\+]+\+[a-z-A-Z0-9\-_]+$/;

/**
 * @returns true if the string is a valid {@link VID} (that is, matches {@link AnyVidP}).
 */
export const isAnyVid = (s: string): s is VID<Any> => AnyVidP.test(s);

/**
 * In vertex tables, at minimal, a vertex is expected to have a name.
 */
export interface V {
    name: string;
}
