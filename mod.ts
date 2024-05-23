/**
 * This module contains mathematical functions.
 * @module
 */

/** This function computes the factorial of the given integer */
export function factorial(n: bigint): bigint {
  let result = 1n;

  while (n > 0) {
    result *= n;
    n--;
  }

  return result;
}
