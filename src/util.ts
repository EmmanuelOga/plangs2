/**
 * Type assertion for {@link RegExp}
 */
export function isRegExp(val: unknown): val is RegExp {
    return Object.prototype.toString.call(val) === '[object RegExp]';
}