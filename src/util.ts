/**
 * Type assertion for {@link RegExp}
 */
export function isRegExp(val: unknown): val is RegExp {
	return Object.prototype.toString.call(val) === "[object RegExp]";
}

/**
 * Avoids nested `Partial<Partial<Partial<...>>>` which are redundant.
 */
export type NN_Partial<T> = T extends Partial<infer U> ? T : Partial<T>;

/**
 * Convert the string to something usable as vertex id.
 */
export function toAlphaNum(s: string) {
	return (
		s
			.trim()
			// biome-ignore lint/suspicious/noMisleadingCharacterClass: removes accents/diacritics.
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, "")
			.replace(/\s+/g, " ")
			.replace(/\s/g, "-")
			.split(/[\*]/g)
			.join("-Star")
			.split(/\#/g)
			.join("-Sharp")
			.split(/\+/g)
			.join("-Plus")
			.split(/\//g)
			.join("-Slash")
			.split(/\\/g)
			.join("-Backslash")
			.replace(/[\/\:]/g, "-")
			.replace(/[^a-zA-Z0-9\.]/g, "-")
	);
}

// Print caller line:no for debugging.
// https://stackoverflow.com/a/3806596/855105
export function caller(): string {
	function getErrorObject() {
		try {
			throw Error("");
		} catch (err) {
			return err;
		}
	}

	const err = getErrorObject();
	const caller_line = err.stack.split("\n")[4];
	const index = caller_line.indexOf("at ");
	const clean = caller_line.slice(index + 2, caller_line.length);

	return clean;
}
