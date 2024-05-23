/**
 * Returns the triangular number of n.
 *
 * @param {number | bigint} n - The position in the triangular number sequence (must be a non-negative integer).
 * @returns {bigint} - The n-th triangular number.
 *
 * @throws {RangeError} - If n is negative.
 * @throws {RangeError} - If n is not an integer.
 */
export function triangular(n: number | bigint): bigint {
  if (n < 0) {
    throw new RangeError("n must be non-negative");
  }

  if (typeof n === "number") {
    if (!Number.isInteger(n)) {
      throw new RangeError("n must be an integer");
    }
    return triangularBigInt(BigInt(n));
  } else {
    return triangularBigInt(n);
  }
}

export function triangularBigInt(n: bigint): bigint {
  return (n * (n + 1n)) / 2n;
}
