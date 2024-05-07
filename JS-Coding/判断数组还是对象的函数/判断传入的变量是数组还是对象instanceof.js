// 使用instanceof
function checkTypeInstanceof(data) {
  if (data instanceof Array) {
    return 'Array'
  } else if (data instanceof Object) {
    return 'Object'
  } else {
    return 'Neither array nor object'
  }
}
let arrayData = [1, 2, 3]
let objectData = { a: 1, b: 2, c: 3 }
let stringData = 'Hello!'
let numberData = 123

console.log(checkTypeInstanceof(arrayData)) // 输出："Array"
console.log(checkTypeInstanceof(objectData)) // 输出："Object"
console.log(checkTypeInstanceof(stringData)) // 输出："Neither array nor object"
console.log(checkTypeInstanceof(numberData)) // 输出："Neither array nor object"
