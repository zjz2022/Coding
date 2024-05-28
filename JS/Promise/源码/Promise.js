const PENDING = 'pending'
const FULLFILLED = 'fulfilled'
const REJECTED = 'rejected'

// 将函数转换为异步执行
function runAsyncTask(callBack) {
  if (typeof queueMicrotask === 'function') {
    queueMicrotask(callBack)
  } else {
    setTimeout(callBack, 0)
  }
}

function resolvePromise(promiseRes, promise2, resolve, reject) {
  // 判断重复引用的情况
  if (promiseRes === promise2) {
    throw TypeError('重复引用了.....')
  }
  // 返回的仍然是 Prommise
  else if (promiseRes instanceof promise2) {
    promiseRes.then(
      (res) => resolve(res),
      (err) => reject(err)
    )
  } else {
    resolve(promiseRes)
  }
}

class MyPromise {
  status = PENDING
  result = undefined
  #callBacks = []
  constructor(func) {
    const resolve = (res) => {
      if (this.status === PENDING) {
        this.status = FULLFILLED
        this.result = res
        // 调用所有收集到的成功的回调
        this.#callBacks.forEach(({ onFulfilled }) => {
          onFulfilled(this.status)
        })
      }
    }
    const reject = (err) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.result = err
        // 调用所有收集到的失败的回调
        this.#callBacks.forEach(({ onRejected }) => {
          onRejected(this.status)
        })
      }
    }
    func(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (v) => v
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (v) => {
            throw v
          }

    // 支持链式调用，本质是仍然返回一个 Promise
    const promise2 = new MyPromise((resolve, reject) => {
      // 同步函数中改变 Promise 状态的情况
      if (this.status === FULLFILLED) {
        runAsyncTask(() => {
          try {
            // 拿到上一次 Promise 执行的结果
            const promiseRes = onFulfilled(this.result)
            // 处理重复引用问题
            if (promiseRes === promise2) {
              throw new TypeError('chaining cycle ......')
            }
            // 处理then中返回的是 Promise
            if (promiseRes instanceof MyPromise) {
              // 获取返回的 Promise 的状态与结果，结果会在下一次 promise2 的 then 中使用
              promiseRes.then(
                (res) => resolve(res),
                (err) => reject(err)
              )
            } else {
              // 将上一次 Promise 执行的结果传入下一次 Promise
              resolve(res)
            }
          } catch (error) {
            reject(error)
          }
        })
      } else if (this.status === REJECTED) {
        runAsyncTask(() => {
          try {
            // 得到 promise 结果
            const promiseRes = onRejected(this.status)
            // 根据结果做不同情况处理
            resolvePromise(promiseRes, promise2, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      // 处理在异步函数中才改变 Promise 状态的情况
      else if (this.status === PENDING) {
        this.#callBacks.push({
          onFulfilled: () => {
            runAsyncTask(() => {
              // 处理异常
              try {
                const promiseRes = onFulfilled(this.result)
                // 根据 promise 结果进行不同情况处理
                resolvePromise(promiseRes, promise2, resolve, reject)
              } catch (error) {
                reject(error)
              }
            })
          },
          onRejected: () => {
            runAsyncTask(() => {
              // 处理异常
              try {
                const promiseRes = onRejected(this.result)
                // 根据 promise 结果进行不同情况处理
                resolvePromise(promiseRes, promise2, resolve, reject)
              } catch (error) {
                reject(error)
              }
            })
          },
        })
      }
    })

    return promise2
  }
}
