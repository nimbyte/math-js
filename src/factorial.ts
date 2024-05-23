/** This function computes the factorial of the given integer */
export function factorial(n: number | bigint): bigint {
  if (typeof n === "number") {
    if (!Number.isInteger(n)) {
      throw new RangeError("Factorial of non-integer numbers is not defined.");
    }
    return factorialBigint(BigInt(n));
  } else {
    return factorialBigint(n);
  }
}

function factorialBigint(n: bigint): bigint {
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
