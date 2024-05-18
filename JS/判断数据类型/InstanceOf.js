//InstanceOf
function myInstanceOf(instance, constructor) {
  if (instance.__proto__ === constructor.prototype) {
    return true
  } else if (instance.__proto__ === null) {
    return false
  } else {
    instance = instance.__proto__
    return myInstanceOf(instance, constructor)
  }
}

console.log(myInstanceOf([1, 2, 3], Function))
