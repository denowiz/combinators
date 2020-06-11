import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import curry from "./curry.js";

Deno.test('curry', () => {
  const sum = (x, y) => x + y;

  const add1 = curry(sum)(1);

  assertEquals(add1(3), 4);
})