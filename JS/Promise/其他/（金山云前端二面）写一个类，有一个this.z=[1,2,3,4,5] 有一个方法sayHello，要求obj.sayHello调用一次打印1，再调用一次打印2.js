// 写一个类，有一个this.z=[1,2,3,4,5] 有一个方法sayHello，要求obj.sayHello调用一次打印1，再调用一次打印2...【我猜到面试官应该是想考我迭代器，然而我也糊涂了，直接写了个this.z[i++]了】
class Hello {
  constructor() {
    this.z = [1, 2, 3, 4, 5]
  }
  sayHello() {
    console.log(this.z)
  }
}

const obj = new Hello()
const { sayHello } = obj
sayHello()

// 面试官问我这样子解构可以吗，我说可以啊，面试官说会报错，我当时蒙了，我说obj身上有sayHello属性啊，面试官让我自己去查**（后面了解到解构是不会报错的，但是调用会报错，因为此时es6开启了严格模式，解构后this指向undefined，undefined没有z属性，所以报错）**
