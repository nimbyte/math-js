import { expect, test } from "bun:test";
import { factorial } from "./factorial";

test("factorial(-1) throws an error", () => {
  expect(() => factorial(-1)).toThrow();
});

test("factorial(0.1) throws an error", () => {
  expect(() => factorial(0.1)).toThrow();
});

test("factorial(0) throws an error", () => {
  expect(factorial(0)).toBe(1n);
});

test("factorial(1) throws an error", () => {
  expect(factorial(1)).toBe(1n);
});

test("factorial(5) throws an error", () => {
  expect(factorial(5)).toBe(120n);
});

test("factorial(-1n) throws an error", () => {
  expect(() => factorial(-1n)).toThrow();
});

test("factorial(0n)", () => {
  expect(factorial(0n)).toBe(1n);
});

test("factorial(1n)", () => {
  expect(factorial(1n)).toBe(1n);
});

test("factorial(5n)", () => {
  expect(factorial(5n)).toBe(120n);
});
