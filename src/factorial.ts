/**
 * Computes the factorial of a non-negative integer.
 *
 * @param {number | bigint} n - The non-negative integer for which to compute the factorial.
 * @returns {bigint} - The factorial of the given integer.
 *
 * @throws {RangeError} - If n is negative.
 * @throws {RangeError} - If n is not an integer.
 */
export function factorial(n: number | bigint): bigint {
  if (typeof n === "number") {
    if (!Number.isInteger(n)) {
      throw new RangeError("Factorial of non-integer numbers is not defined.");
    }
    return factorialBigInt(BigInt(n));
  } else {
    return factorialBigInt(n);
  }
}

function factorialBigInt(n: bigint): bigint {
  if (n < 0) {
    throw new RangeError("Factorial of negative numbers is not defined.");
  }

  let result = 1n;

  while (n > 0) {
    result *= n;
    n--;
  }

  return result;
}
