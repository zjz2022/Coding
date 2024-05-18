//https://www.nowcoder.com/practice/5d7e0cf4634344c98e6ae4eaa2336bed?tpId=271&tqId=39560&rp=1&ru=/exam/oj&qru=/exam/oj&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26pageSize%3D50%26search%3D%26tab%3D%25E5%2589%258D%25E7%25AB%25AF%25E7%25AF%2587%26topicId%3D271&difficulty=undefined&judgeStatus=undefined&tags=&title=
//未知长度数组的扁平化
const _flatten = (arr) => {
  // 补全代码
  let res = arr
  function hasArray(arr) {
    let res = false
    arr.forEach((item) => {
      Array.isArray(item) && (res = true)
    })
    return res
  }
  while (hasArray(res)) {
    res = res.flat()
  }
  return res
}
console.log(_flatten([1, [2, [3, [4]]]]))

console.log(
  (function () {
    var result = JSON.stringify(_flatten([1, [2, 3, [4, 5]]])) == JSON.stringify([1, 2, 3, 4, 5])
    return result
  })()
)
