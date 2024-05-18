function getType(obj) {
  if (obj === null) return String(obj)
  // 对象类型 "[object XXX]"-&gt;XXX的小写 简单类型typeof obj
  return typeof obj === 'object' ? Object.prototype.toString.call(obj).replace('[object ', '').replace(']', '').toLowerCase() : typeof obj
}

// 调用
console.log(getType(null)) // -&gt; null
console.log(getType(undefined)) // -&gt; undefined
console.log(getType({})) // -&gt; object
console.log(getType([])) // -&gt; array
console.log(getType(123)) // -&gt; number
console.log(getType(true)) // -&gt; boolean
console.log(getType('123')) // -&gt; string
console.log(getType(/123/)) // -&gt; regexp
console.log(getType(new Date())) // -&gt; date
