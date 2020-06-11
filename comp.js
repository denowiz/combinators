/**
 * Compose functions to make a new function that takes
 * the arguments and apply to the last function then
 * chain the function application from right to left.
 * 
 * Example:
 *  comp(f1, f2, f3) //=> (x) => f1(f2(f3(x)))
 * 
 * @param  {...function} fns Functions
 */
export default function comp(...fns) {
  return function composed(arg) {
    return fns.reduceRight((res, fn) => fn(res), arg);
  }
}