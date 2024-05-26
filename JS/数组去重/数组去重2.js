let arr = [1, 1, '1', '1', true, true, 'true', {}, {}, '{}', null, null, undefined, undefined]
// 方法2
let uniqueTwo = (arr) => {
  let map = new Map() //或者用空对象 let obj = {} 利用对象属性不能重复得特性
  let brr = []
  arr.forEach((item) => {
    if (!map.has(item)) {
      //如果是对象得话就判断 !obj[item]
      map.set(item, true) //如果是对象得话就obj[item] =true 其他一样
      brr.push(item)
    }
  })
  return brr
}
console.log(uniqueTwo(arr))
