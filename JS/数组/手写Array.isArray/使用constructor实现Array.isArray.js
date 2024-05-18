Array.myIsArray = function (obj) {
  return obj.constructor === Array
}
console.log(Array.myIsArray([])) // true
