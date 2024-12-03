// biome-ignore lint/suspicious/noExplicitAny: We want to debounce any function.
type AnyFunc = (...args: any[]) => any;

export function debounce<T extends AnyFunc>(callback: T, millies: number): (...args: Parameters<T>) => void {
  let timeout: Timer | undefined;
  return (...args: Parameters<AnyFunc>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), millies);
  };
}
