# Combinators

Simple functions to combine with another functions.

## How to use

Just import the whole module:

```javascript
import { comb, curry, flip, id, partial, pipe } from 'https://raw.githubusercontent.com/denowiz/combinators/master/mod.js'
```

Then use the functions.

## Documentation

#### comp

Compose functions into a new function:

```javascript
const f1 = x => `f1(${x})`;
const f2 = x => `f2(${x})`;
const f3 = x => `f3(${x})`;

const fn = comp(f1, f2, f3);

fn('x') //=> f1(f2(f3(x)))
```

#### curry

Creates an curried function that takes one argument at the time

```javascript
const sum = (x, y) => x + y;
curry(sum)(1)(2) //=> 3
```

#### flip

Reverse the order of arguments of the given function.

```javascript
const strConcat = (s1, s2) => s1 + ' ' + s2
flip(strConcat)("hello", "world") //=> "world hello"
```

#### id

The identity function

```javascript
id('x') //=> x
```

#### partial

Applies the arguments partially into the function. Then return
another function that receives the rest of arguments. If the given
arguments are the same that the function needs, then it will be applied to it.

```javascript
const sum = (x, y, z) => x + y + z;
const sum2 = partial(sum, 2);

sum2(3, 4) //=> 9
```

#### pipe

Does the same of `comp` function, but in the reversed order

```javascript
const f1 = x => `f1(${x})`;
const f2 = x => `f2(${x})`;
const f3 = x => `f3(${x})`;

const fn = pipe(f1, f2, f3);

fn('x') //=> f3(f2(f1(x)))
```
