/**
 * This module contains mathematical functions.
 * @module
 *
 * @example
 * ```ts
 * import { factorial } from "@nimbyte/math-js";
 *
 * factorial(5n) // 120
 * ```
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
