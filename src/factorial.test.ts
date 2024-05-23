import { expect, test } from "bun:test";
import { factorial } from "./factorial";

test("factorial(0)", () => {
  expect(factorial(0n)).toBe(1n);
});

test("factorial(1)", () => {
  expect(factorial(1n)).toBe(1n);
});

test("factorial(5)", () => {
  expect(factorial(5n)).toBe(120n);
});
