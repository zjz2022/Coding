let arr = [1, 1, '1', '1', true, true, 'true', {}, {}, '{}', null, null, undefined, undefined]

// 方法1
let uniqueOne = Array.from(new Set(arr))
console.log(uniqueOne)
