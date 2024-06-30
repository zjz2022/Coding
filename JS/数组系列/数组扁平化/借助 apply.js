// 3. 借助 apply/call
function flatten(arr) {
  while (arr.some((res) => Array.isArray(res))) {
    arr = Function.apply.call([].concat, [], arr)
  }
  return arr
}
