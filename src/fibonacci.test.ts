import { expect, test } from "bun:test";
import { fibonacci } from "./fibonacci";

test("fibonacci(-1) throws an error", () => {
  expect(() => fibonacci(-1)).toThrow();
});

test("fibonacci(0.1) throws an error", () => {
  expect(() => fibonacci(0.1)).toThrow();
});

test("fibonacci(0)", () => {
  expect(fibonacci(0)).toBe(0n);
});

test("fibonacci(1)", () => {
  expect(fibonacci(1)).toBe(1n);
});

test("fibonacci(2)", () => {
  expect(fibonacci(2)).toBe(1n);
});

test("fibonacci(5)", () => {
  expect(fibonacci(5)).toBe(5n);
});

test("fibonacci(10)", () => {
  expect(fibonacci(10)).toBe(55n);
});

test("fibonacci(-1n) throws an error", () => {
  expect(() => fibonacci(-1n)).toThrow();
});

test("fibonacci(0n)", () => {
  expect(fibonacci(0n)).toBe(0n);
});

test("fibonacci(1n)", () => {
  expect(fibonacci(1n)).toBe(1n);
});

test("fibonacci(2n)", () => {
  expect(fibonacci(2n)).toBe(1n);
});

test("fibonacci(5n)", () => {
  expect(fibonacci(5n)).toBe(5n);
});

test("fibonacci(10n)", () => {
  expect(fibonacci(10n)).toBe(55n);
});
