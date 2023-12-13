/**
 * ? a generator is a special type of function that can pause its execution and later resume from the same point.
 * 
 * !With the help of generators, one can control an asynchronous call outside the code. Most importantly, though, the next value can come in only when needed; all values do not need to come back at once
 * 
 * 
 * 
 */

function* idGenerator() {
  let id = 0;
  while (id < 5) {
    yield ++id;
  }
}

/**
 *? Generator Object
 * * When you call a generator function, it doesn't execute its code immediately. Instead, it returns a generator object that conforms to both the iterable protocol and the iterator protocol.
 *
 *
 *  */
const gen = idGenerator();

/**
 *? Generator object contains the next() method.
 ** It has {
 **  value: which contains the yielded value,
 **  done: boolean indicating the status of execution,
 ** }
 */

while (true) {
  const value = gen.next().value;
  if (value <= 5) {
    console.log("🚀 ~ file: generator.js:12 ~ value:", value);
  } else {
    gen.next().done;
    console.log(
      "🚀 ~ file: generator.js:15 ~ gen.next().done:",
      gen.next().done
    );
    return;
  }
}
