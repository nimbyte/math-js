/**
 * Computes the n-th harmonic number.
 *
 * @param {number} n - The position in the harmonic number sequence (must be a non-negative integer).
 * @returns {number} - The n-th harmonic number.
 *
 * @throws {RangeError} - If n is not a non-negative integer.
 */

export function harmonic(n: number): number {
  if (n < 0 || !Number.isInteger(n)) {
    throw new RangeError("n must be a non-negative integer");
  }

  let result = 0;

  while (n > 0) {
    result += 1 / n;
    n--;
  }

  return result;
}
