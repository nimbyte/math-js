/**
 * Computes the n-th Fibonacci number.
 *
 * @param {number | bigint} n - The index of the Fibonacci number to compute.
 * @returns {bigint} - The n-th Fibonacci number.
 *
 * @throws {RangeError} - If n is negative.
 * @throws {RangeError} - If n is not an integer.
 */
export function fibonacci(n: number | bigint): bigint {
  if (n < 0) {
    throw new RangeError("Index must be non-negative");
  }

  if (typeof n === "number") {
    if (!Number.isInteger(n)) {
      throw new RangeError("Index must be an integer");
    }
    return fibonacciBigInt(BigInt(n));
  } else {
    return fibonacciBigInt(n);
  }
}

function fibonacciBigInt(n: bigint): bigint {
  let a = 0n;
  let b = 1n;
  let temp: bigint;

  while (n > 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return a;
}
