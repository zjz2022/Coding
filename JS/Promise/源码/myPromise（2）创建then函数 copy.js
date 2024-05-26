// 记录Promise的三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

/**
 * 运行一个微队列任务
 * 把传递的函数放到微队列中
 * @param {Function} callback
 */
function runMicroTask(callback) {
  // 判断node环境
  if (process && process.nextTick) {
    process.nextTick(callback)
  } else {
    setTimeout(callback, 0)
  }
}

class MyPromise {
  /**
   * 创建一个Promise
   * @param {Function} executor 任务执行器，立即执行
   */
  constructor(executor) {
    this._state = PENDING // 状态
    this._value = undefined // 数据
    try {
      executor(this._resolve.bind(this), this._reject.bind(this))
    } catch (error) {
      this._reject(error)
    }
  }
  /**
   * Promise A+规范的then
   * @param {Function} onFulfilled
   * @param {Function} onRejected
   */
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {})
  }

  /**
   * 更改任务状态
   * @param {String} newState 状态
   * @param {any} value 相关数据
   */
  _changeState(newState, value) {
    if (this._state !== PENDING) {
      // 目前状态已经更改
      return
    }
    this._state = newState
    this._value = value
  }

  /**
   * 标记当前任务完成
   * @param {any} data 任务完成的相关数据
   */
  _resolve(data) {
    // 改变状态和数据
    this._changeState(FULFILLED, data)
  }
  /**
   * 标记当前任务失败
   * @param {any} reason 任务失败的相关数据
   */
  _reject(reason) {
    // 改变数据和状态
    this._changeState(REJECTED, reason)
  }
}
setTimeout(() => {
  console.log(1)
})
runMicroTask(() => {
  console.log(2)
})
console.log(3)

// const pro = new Promise((resolve, reject) => {
//   resolve(1)
// })

// pro.then(
//   (data) => {
//     console.log(data)
//   },
//   (reason) => {
//     console.log(reason)
//   }
// )
