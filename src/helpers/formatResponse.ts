export function formatResponse<T, U>(data: T, error: U, status: number = 200) {
   return {
      data,
      error,
      status,
   }
}
