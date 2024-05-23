import { expect, test } from "bun:test";
import { harmonic } from "./harmonic";

test("harmonic(-1) throws an error", () => {
  expect(() => harmonic(-1)).toThrow();
});

test("harmonic(0.1) throws an error", () => {
  expect(() => harmonic(0.1)).toThrow();
});

test("harmonic(0)", () => {
  expect(harmonic(0)).toBe(0);
});

test("harmonic(1)", () => {
  expect(harmonic(1)).toBe(1);
});

test("harmonic(2)", () => {
  expect(harmonic(2)).toBe(1.5);
});
