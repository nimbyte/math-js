export function factorial(n: bigint): bigint {
  let result = 1n;

  while (n > 0) {
    result *= n;
    n--;
  }

  return result;
}
