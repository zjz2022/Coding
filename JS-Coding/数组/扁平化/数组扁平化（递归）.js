// 扁平化
// 数组的扁平化，就是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组。

// 举个例子，假设有个名为 flatten 的函数可以做到数组扁平化，效果就会如下：

// var arr = [1, [2, [3, 4]]];
// console.log(flatten(arr)) // [1, 2, 3, 4]
// 知道了效果是什么样的了，我们可以去尝试着写这个 flatten 函数了

// 递归
// 我们最一开始能想到的莫过于循环数组元素，如果还是一个数组，就递归调用该方法：

// 方法 1
var nums = [1, [2, 3, [4, 5]]]
function flatten(arr) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]))
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(flatten(nums))
