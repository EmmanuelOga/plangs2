/**
 * A vertext id format is a string with format: `type+id`.
 *
 * Examples: `pl+python`, `person+guido`, `paradigm+oop`, etc.
 *
 * See {@link PVIDAny} for the matching pattern.
 */
export type VID<T extends string> = `${T}+${string}`;

/**
 * An alias such that we can say: VID<Any> to match any vertex id.
 */
export type Any = string;

/**
 * An alias for the most generic vertex id.
 */
export type VID_Any = VID<Any>;

/**
 * Sooner or later we will want to know which vertex some vertex data belongs to,
 * without having to go through a {@link VertexTable}.
 */
export interface VData<T extends string> {
	vid: VID<T>;
}

const NON_PLUS_ID_CHARS = "[a-z-0-9\\-\\(\\)\\[\\]_.]+$";
const NON_PLUS_ID_PATTERN = new RegExp(NON_PLUS_ID_CHARS);

export function validChars(s: string): boolean {
	return NON_PLUS_ID_PATTERN.test(s);
}

export function isAnyVID(s: string): s is VID<Any> {
	const parts = s.split("+");
	return parts.length === 2 && validChars(parts[0]) && validChars(parts[1]);
}

export function vIDPattern(vtype: string): RegExp {
	if (!validChars(vtype))
		throw new Error(`'${vtype}' is not valid as a vid prefix.`);
	return new RegExp(`^${vtype}\\+${NON_PLUS_ID_CHARS}`);
}
