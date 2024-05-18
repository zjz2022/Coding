/**
 * https://q.shanyue.tech/fe/js/428
 */
// 这是一个关于懒计算的函数，使用 sum 收集所有累加项，使用 valueOf 进行计算

// sum 返回一个函数，收集所有的累加项，使用递归实现
// 返回函数带有 valueOf 属性，用于统一计算
function sum(...args) {
  const f = (...rest) => sum(...args, ...rest)
  f.valueOf = () => args.reduce((x, y) => x + y, 0)
  return f
}

console.log(sum(1, 2, 3).valueOf())
console.log(sum(1)(2)(3)(4)(5)(6).valueOf())
