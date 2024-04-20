// 手撕2
// 请你编写一个函数，它接收一个其他的函数，并返回该函数的 柯里化 后的形式
function curry(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args)
  } else {
    return (...newArgs) => curry(fn, ...args, ...newArgs)
  }
}

// 示例函数
function sum(a, b, c) {
  return a + b + c
}

const curriedSum = curry(sum)

console.log(curriedSum(1)(2)(3)) // 输出：6
console.log(curriedSum(1, 2)(3)) // 输出：6
console.log(curriedSum(1)(2, 3)) // 输出：6
console.log(curriedSum(1, 2, 3)) // 输出：6
