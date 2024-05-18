# 模拟实现call、apply、bind

`call` 和 `apply` 都是为了改变某个函数运行时的上下文（context）而存在的，换句话说，就是**为了改变函数体内部 this 的指向**

## 一、模拟思路

先看个常用例子

```js
var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar.call(foo); // 1
```



试想下，是不是可以先把bar变成foo对象的属性，执行完后再删除它呢？

```js
var foo = {
  value: 1,
  bar: function() {
    console.log(this.value);
  }
};

foo.bar(); // 1
delete foo.bar;
```



总结一下步骤

- 1、将要执行的函数设置为对象的属性
- 2、执行函数（难点在于取出参数）
- 3、删除该函数

## 二、模拟call

```js
Function.prototype.myCall = function(context) {
  // 取得传入的对象（执行上下文），比如上文的foo对象
  // 不传第一个参数，默认是window,
  var context = context || window;
  // 给context添加一个属性，这时的this指向调用call的函数，比如上文的bar
  context.fn = this;
  // 通过展开运算符和解构赋值取出context后面的参数
  var args = [...arguments].slice(1);
  // 执行函数
  var result = context.fn(...args);
  // 删除函数
  delete context.fn;
  return result;
};
```

## 三、模拟apply

思路跟`call`一样，只是在处理参数的时候有点不一样

```js
Function.prototype.myApply = function(context) {
  var context = context || window;
  context.fn = this;
  var result;

  // 判断第二个参数是否存在，是一个数组
  // 如果存在，则需要展开第二个参数
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }

  delete context.fn;
  return result;
}
```

## 四、模拟bind

思路和作用基本一致，区别在于返回一个函数，并且可以通过`bind`实现柯里化

```js
Function.prototype.myBind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }

  var _this = this;
  var args = [...arguments].slice(1);

  // 返回函数
  return function Fn() {
    // bind有个特点 一个绑定函数也能使用new操作符创建对象
    if (this instanceof Fn) {
      return new _this(args, ...arguments);
    }
    return _this.apply(context, args.concat(arguments));
  }
}
```

## 五、三者区别

#### 相同点

- 都是用来改变函数的this对象的指向的；
- 第一个参数都是this要指向的对象，也就是想指定的上下文；
- 都可以利用后续参数传参；

#### 不同

- bind是返回对应函数，便于稍后调用；
- apply、call则是立即调用，call直接传入每个参数，apply以数组的形式传入参数（可以理解记忆为 a开头即为arr => 数组）

## 六、常见用法

#### 1、合并数组

```js
var arr1 = [1, 2, { id: 1, id: 2 }, [1, 2]];
var arr2 = ['ds', 1, 9, { name: 'jack' }];
// var arr = arr1.concat(arr2);
Array.prototype.push.apply(arr1,arr2)
```



#### 2、获取最大最小值

```js
var  numbers  = [ 5,  458  ,  120  ,  -215  ];
var  maxInNumbers  = Math .max .apply (Math ,  numbers),  //458
maxInNumbers =  Math. max. call( Math, 5,  458  ,  120  ,  -215 );  //458
```



#### 3、判断变量类型

```js
function isArray(obj) {
  return Object.prototype.toString.call(obj) == '[object Array]'
}
isArray([]) //true
```



```js
var toString = Object.prototype.toString;

toString.call(new Date); // [object Date]
toString.call(new String); // [object String]
toString.call(Math); // [object Math]

//Since JavaScript 1.8.5
toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```



#### 4、操作类数组

首先，何为类数组？
1、拥有length属性，其它属性（索引）为非负整数(对象中的索引会被当做字符串来处理，这里你可以当做是个非负整数串来理解)
2、不具有数组所具有的方法

常见类数组
1、arguments
2、DOM 对象列表（比如通过 document.getElementsByTags 得到的列表），jQuery 对象（比如 $("div")）

通过call/apply，使用数组原生方法操作类数组
先定义一个类数组
`var anArrayLikeObj = {0:"Martin", 1:78, 2:67, 3:["Letta", "Marieta", "Pauline"], length:4 };`
操作

```js
var newArray = Array.prototype.slice.call(anArrayLikeObj, 0);

console.log(newArray); // ["Martin", 78, 67, Array[3]]

// Search for "Martin" in the array-like object
console.log(Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false : true); // true

// Try using an Array method without the call () or apply ()
console.log(anArrayLikeObj.indexOf("Martin") === -1 ? false : true); // Error: Object has no method 'indexOf'

// Reverse the object:
console.log(Array.prototype.reverse.call(anArrayLikeObj));
// {0: Array[3], 1: 67, 2: 78, 3: "Martin", length: 4}

// Sweet. We can pop too:
console.log(Array.prototype.pop.call(anArrayLikeObj));
console.log(anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, length: 3}

// What about push?
console.log(Array.prototype.push.call(anArrayLikeObj, "Jackie"));
console.log(anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, 3: "Jackie", length: 4}
```



#### 5、提取arguments参数

slice：提取字符串的某个部分，并以新的字符串返回被提取的部分

```js
function transitionTo(name) {
  var args = Array.prototype.slice.call(arguments, 1, 3);
  return args;
}
transitionTo("contact", "Today", "20","hh","ghh"); 
//["Today", "20"]
```



## 后记

感谢您耐心看到这里，希望有所收获！

如果不是很忙的话，麻烦右上角点个star⭐，举手之劳，却是对作者莫大的鼓励。

我在学习过程中喜欢做记录，分享的是自己在前端之路上的一些积累和思考，希望能跟大家一起交流与进步，更多文章请看[【amandakelake的Github博客】](https://github.com/amandakelake/blog)