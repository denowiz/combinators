import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import flip from "./flip.js";

Deno.test('flip', () => {
  const fn = (x, y) => `fn(${x}, ${y})`;
  const flipped = flip(fn);

  assertEquals(flipped(1, 2), 'fn(2, 1)');

  assertEquals(flip(flipped)(1, 2), 'fn(1, 2)');
})