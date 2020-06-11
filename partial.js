/**
 * Partially applies the arguments to the function
 * then return a new function that receives the other arguments.
 * If provided all arguments that the fn needs, then it will be
 * called with these arguments.
 * 
 * @param {function} fn 
 * @param  {...*} args 
 */
export default function partial(fn, ...args) {
  if (args.length < fn.length) {
    return function partial(...newArgs) {
      args //?
      newArgs //?
      return fn(...args, ...newArgs);
    }
  }

  return fn(...args);
}
