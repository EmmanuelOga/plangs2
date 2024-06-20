/**
 * A vertext id format is a string with format: `type+id`.
 *
 * Examples: `pl+python`, `person+guido`, `paradigm+oop`, etc.
 *
 * See {@link PVIDAny} for the matching pattern.
 */
export type T_VId<T_V_Prefix extends string> = `${T_V_Prefix}+${string}`;

/**
 * An alias such that we can say: VID<Any> to match any vertex id.
 */
export type Any = string;

/**
 * An alias for the most generic vertex id.
 */
export type T_VId_Any = T_VId<Any>;

const NON_PLUS_ID_CHARS = "[a-z-A-Z0-9-_.]+";
const NON_PLUS_ID_PATTERN = new RegExp(NON_PLUS_ID_CHARS);

export function validChars(s: string): boolean {
	return NON_PLUS_ID_PATTERN.test(s);
}

export function isAnyVid(s: string): s is T_VId<Any> {
	const parts = s.split("+");
	return parts.length === 2 && validChars(parts[0]) && validChars(parts[1]);
}

export function vIdPattern(vtype: string): RegExp {
	if (!validChars(vtype))
		throw new Error(`'${vtype}' is not valid as a vid prefix.`);
	return new RegExp(`^${vtype}\\+${NON_PLUS_ID_CHARS}`);
}
