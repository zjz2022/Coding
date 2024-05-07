// 使用Object.prototype.toString.call()
function checkTypeObjectToString(data) {
  if (Object.prototype.toString.call(data) === '[object Array]') {
    return 'Array'
  } else if (Object.prototype.toString.call(data) === '[object Object]') {
    return 'Object'
  } else {
    return 'Neither array nor object'
  }
}
let arrayData = [1, 2, 3]
let objectData = { a: 1, b: 2, c: 3 }
let stringData = 'Hello!'
let numberData = 123
let undefinedData
let nullData = null
console.log(checkTypeObjectToString(arrayData)) // 输出："Array"
console.log(checkTypeObjectToString(objectData)) // 输出："Object"
console.log(checkTypeObjectToString(stringData)) // 输出："Neither array nor object"
console.log(checkTypeObjectToString(numberData)) // 输出："Neither array nor object"
