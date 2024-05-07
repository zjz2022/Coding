// 使用Array.isArray()
function checkTypeIsArray(data) {
  if (Array.isArray(data)) {
    return 'Array'
    // typeof 返回字符串，所以要'object'
  } else if (typeof data === 'object' && data !== null) {
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
console.log(checkTypeIsArray(arrayData)) // 输出："Array"
console.log(checkTypeIsArray(objectData)) // 输出："Object"
console.log(checkTypeIsArray(stringData)) // 输出："Neither array nor object"
console.log(checkTypeIsArray(numberData)) // 输出："Neither array nor object"
