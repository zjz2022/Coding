Array.myIsArray = function (obj) {
  return Object.prototype.toString.call(Object(obj)) === '[object Array]'
}
console.log(Array.myIsArray([])) // true
