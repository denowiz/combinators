import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import id from "./id.js";


Deno.test('id', () => {
  const x = id('x');

  assertEquals(x, 'x');
});
