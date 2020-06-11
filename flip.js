/**
 * Flip the arguments of the given function
 * 
 * Example:
 *  const div = (x, y) => x / y
 *  flip(div)(1, 2) //=> 2 / 1
 * 
 * @param {function} fn Function 
 */
export default function flip(fn) {
  return function flipped(...args) {
    return fn(...args.reverse())
  }
}