import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import comp from "./comp.js";

Deno.test('comp', () => {
  const f1 = x => `f1(${x})`;
  const f2 = x => `f2(${x})`;
  const f3 = x => `f3(${x})`;

  const fn = comp(f1, f2, f3);

  assertEquals(fn('x'), 'f1(f2(f3(x)))');
})