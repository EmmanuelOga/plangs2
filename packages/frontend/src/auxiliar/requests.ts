/** Attempt to fetch request, return JSON data if the request went OK, otherwise return the error message. */
export async function tryFetch<T, E>(fetchReq: () => Promise<Response>, success: (data: any) => T, error: (error: string) => E) {
  try {
    const res = await fetchReq();
    if (res.ok) return success(await res.json());
    return error(await res.text());
  } catch (err) {
    if (err instanceof Error) return error(err.message);
    return error(`${err}`);
  }
}
