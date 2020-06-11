import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import pipe from "./pipe.js";

Deno.test('pipe', () => {
  const f1 = x => `f1(${x})`;
  const f2 = x => `f2(${x})`;
  const f3 = x => `f3(${x})`;

  const fn = pipe(f1, f2, f3);

  assertEquals(fn('x'), 'f3(f2(f1(x)))');
})