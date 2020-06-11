export default function curry(fn) {
  switch (fn.length) {
    case 1:
      return (a) => fn(a)
    case 2:
      return (a) => (b) => fn(a, b)
    case 3:
      return (a) => (b) => (c) => fn(a, b, c)
    case 4:
      return (a) => (b) => (c) => (d) => fn(a, b, c, d)
    case 5:
      return (a) => (b) => (c) => (d) => (e) => fn(a, b, c, d, e)
    default:
      throw new Error('Function arity is too long.');
  }
}