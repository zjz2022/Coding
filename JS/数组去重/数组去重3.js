let arr = [1, 1, '1', '1', true, true, 'true', {}, {}, '{}', null, null, undefined, undefined]

let uniqueThree = (arr) => {
  let brr = []
  arr.forEach((item) => {
    // 使用indexOf 返回数组是否包含某个值 没有就返回-1 有就返回下标
    if (brr.indexOf(item) === -1) brr.push(item)
    // 或者使用includes 返回数组是否包含某个值 没有就返回false 有就返回true
    // if (!brr.includes(item)) brr.push(item)
  })
  return brr
}
console.log(uniqueThree(arr))
