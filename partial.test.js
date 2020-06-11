import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import partial from "./partial.js";

Deno.test('partial', () => {
  const sum = (x, y, z) => x + y + z;
  const sum2 = partial(sum, 2);

  assertEquals(sum2(3, 4), 9);
})