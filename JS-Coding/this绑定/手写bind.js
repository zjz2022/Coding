Function.prototype.myBind = function (context = window, ...args) {
  let fn = Symbol()
  context[fn] = this
  return function (..._args) {
    context[fn](...args, ..._args)
    delete context[fn]
  }
}
