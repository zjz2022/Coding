Function.prototype.myCall = function (context = window, ...args) {
  let fn = Symbol()
  context[fn] = this
  let result = context[fn](...args)
  delete context[fn]
  return result
}
