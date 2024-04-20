// 扁平化
// 数组的扁平化，就是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组。

// 举个例子，假设有个名为 flatten 的函数可以做到数组扁平化，效果就会如下：

// var arr = [1, [2, [3, 4]]];
// console.log(flatten(arr)) // [1, 2, 3, 4]
// 知道了效果是什么样的了，我们可以去尝试着写这个 flatten 函数了

// reduce
// 既然是对数组进行处理，最终返回一个值，我们就可以考虑使用 reduce 来简化代码：

// 方法3
var arr = [1, [2, [3, 4]]]

function flatten(arr) {
  return arr.reduce(function (prev, next) {
    return prev.concat(Array.isArray(next) ? flatten(next) : next)
  }, [])
}

console.log(flatten(arr))
