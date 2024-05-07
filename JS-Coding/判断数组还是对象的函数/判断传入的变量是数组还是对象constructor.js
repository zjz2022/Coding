// 使用.constructor
function checkTypeConstructor(data) {
  if (data.constructor === Array) {
    return 'Array'
  } else if (data.constructor === Object) {
    return 'Object'
  } else {
    return 'Neither array nor object'
  }
}

let arrayData = [1, 2, 3]
let objectData = { a: 1, b: 2, c: 3 }
let stringData = 'Hello!'
let numberData = 123

console.log(checkTypeConstructor(arrayData)) // 输出："Array"
console.log(checkTypeConstructor(objectData)) // 输出："Object"
console.log(checkTypeConstructor(stringData)) // 输出："Neither array nor object"
console.log(checkTypeConstructor(numberData)) // 输出："Neither array nor object"
