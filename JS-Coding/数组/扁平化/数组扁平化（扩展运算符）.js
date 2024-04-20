// 扁平化
// 数组的扁平化，就是将一个嵌套多层的数组 array (嵌套可以是任何层数)转换为只有一层的数组。

// 举个例子，假设有个名为 flatten 的函数可以做到数组扁平化，效果就会如下：

// var arr = [1, [2, [3, 4]]];
// console.log(flatten(arr)) // [1, 2, 3, 4]
// 知道了效果是什么样的了，我们可以去尝试着写这个 flatten 函数了

// ...
// ES6 增加了扩展运算符，用于取出参数对象的所有可遍历属性，拷贝到当前对象之中：

// var arr = [1, [2, [3, 4]]];
// console.log([].concat(...arr)); // [1, 2, [3, 4]]
// 我们用这种方法只可以扁平一层，但是顺着这个方法一直思考，我们可以写出这样的方法：

// 方法4
var arr = [1, [2, [3, 4]]]

function flatten(arr) {
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr)
  }

  return arr
}

console.log(flatten(arr))
