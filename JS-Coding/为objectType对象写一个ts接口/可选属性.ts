// 在 TypeScript 中，当一个对象的某个属性不一定总会有值或者可能在某些情况下不存在的时候，我们会使用可选属性。

// 可选属性通常用于定义可能存在但不一定需要的字段，或者在某些情况下，对象的属性可能不会被初始化。

// 在 TypeScript 中，可选属性用 ? 标记。举个例子：

interface IProfile {
  firstName: string
  lastName: string
  age?: number // 这是一个可选属性
  email?: string // 这也是一个可选属性
}

// 在这里，age 和 email 是可选属性。这意味着在创建符合 IProfile 接口的对象时，可以不包含 age 和 email 属性。

// 例如：

let person: IProfile = {
  firstName: 'David',
  lastName: 'Life',
}

// 在上述代码中，即使我们没有提供 age 和 email 属性，person 对象也符合 IProfile 接口的定义。这就是使用可选属性的一个典型例子。
