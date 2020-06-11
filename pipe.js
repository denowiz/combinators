/**
 * Combine functions by piping the the applications
 * from left to right.
 * 
 * Example:
 *  pipe(f1, f2, f3) //=> (x) => f3(f2(f1(x)))
 * 
 * @param  {...function} fns Functions to pipe
 */
export default function pipe(...fns) {
  return function piped(arg) {
    return fns.reduce((res, fn) => fn(res), arg);
  } 
}
