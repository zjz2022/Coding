// 4. ES6 拓展运算符
function flatten(arr) {
  while (arr.some((res) => Array.isArray(res))) {
    arr = [].concat(...arr)
  }
  return arr
}
