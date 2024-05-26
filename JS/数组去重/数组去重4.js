let arr = [1, 1, '1', '1', true, true, 'true', {}, {}, '{}', null, null, undefined, undefined]

let uniqueFour = (arr) => {
  // 使用 filter 返回符合条件的集合
  // filter() 是 JavaScript 中的一种数组方法，它用于创建一个新的数组，新数组中的元素是原始数组中通过某种操作符合指定条件的那些元素。filter() 不改变原始数组，只是返回一个新的子集数组。
  // filter创建一个数组的子集，用法就是
  // arr.filter((item,index)=>{
  // return 规则
  // })
  let brr = arr.filter((item, index) => {
    // arr.indexOf(item) 表示在数组 arr 中首次出现 item 的位置的索引。index 则是 filter 方法当前处理的元素 item 在数组 arr 中的位置。
    return arr.indexOf(item) === index
  })
  return brr
}
console.log(uniqueFour(arr))
