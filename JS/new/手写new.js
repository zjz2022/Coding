// 一、写在前面
// 我们如果想要手写new的实现过程，就必须要明白，当我们对一个构造函数执行new操作时，到底干了什么。

// 1、创建一个新对象。
// 2、让这个新的对象的原型指向该构造函数的原型对象。
// 3、执行构造函数，并且将构造函数指向新的对象。
// 4、拿到构造函数最后返回的结果，判断是否是对象或者函数，如果是的话，则直接
// 返回。如果不是则返回新创建的对象。
// 二、手写过程

function createNew(con) {
  let result = Object.create(con.prototype)
  let args = [].slice.call(arguments, 1)
  let ret = con.apply(result, args)
  return (typeof ret === 'object' && ret !== null) || typeof ret === 'function' ? ret : result
}
function Person(name, age, score) {
  this.name = name
  this.age = age
  this.score = score
  return { name: this.name }
}

let rest = createNew(Person, 'dmc', 21, 100)
console.log(rest)
