import { expect, test } from "bun:test";
import { triangular } from "./triangular";

test("triangular(-1) throws an error", () => {
  expect(() => triangular(-1)).toThrow();
});

test("triangular(0.1) throws an error", () => {
  expect(() => triangular(0.1)).toThrow();
});

test("triangular(0)", () => {
  expect(triangular(0)).toBe(0n);
});

test("triangular(1)", () => {
  expect(triangular(1)).toBe(1n);
});

test("triangular(5)", () => {
  expect(triangular(5)).toBe(15n);
});

test("triangular(-1n) throws an error", () => {
  expect(() => triangular(-1n)).toThrow();
});

test("triangular(0n)", () => {
  expect(triangular(0n)).toBe(0n);
});

test("triangular(1n)", () => {
  expect(triangular(1n)).toBe(1n);
});

test("triangular(5n)", () => {
  expect(triangular(5n)).toBe(15n);
});
