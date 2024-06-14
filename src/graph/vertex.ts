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
 * RegExp Pattern for string literals matching any valid {@link VID }.
 */
export const AnyVidP = /^[^\+]+\+[a-z-A-Z0-9\-_]+$/;

/**
 * In vertex tables, at minimal, a vertex is expected to have a name.
 */
export interface V {
    name: string;
}
