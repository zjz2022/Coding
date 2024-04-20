Array.myIsArray = function (obj) {
  return obj instanceof Array
}
console.log(Array.myIsArray([])) // true
