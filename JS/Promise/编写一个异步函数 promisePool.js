//手撕1：请你编写一个异步函数 promisePool
//它接收一个异步函数款组functions 和 池限制 n，
//它应该返回一个 promise 对象，当所有输入函数都执行完毕后，promise 对象就执行完毕
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function promisePool(functions, n) {
  const results = []
  let index = 0

  async function executeNext() {
    const currentIndex = index
    index++

    if (currentIndex >= functions.length) {
      return // 所有函数都已执行完毕
    }

    const currentFunction = functions[currentIndex]
    const result = await currentFunction()
    results[currentIndex] = result

    await delay(0) // 让事件循环得以执行

    // 递归执行下一个函数
    await executeNext()
  }

  // 开始执行初始函数，不超过并发限制
  const initialPromises = []
  for (let i = 0; i < Math.min(n, functions.length); i++) {
    initialPromises.push(executeNext())
  }

  // 等待所有初始 promises 完成
  await Promise.all(initialPromises)

  return results
}

// 示例用法
async function asyncFunction1() {
  await delay(1000)
  return '函数 1 已完成'
}

async function asyncFunction2() {
  await delay(1500)
  return '函数 2 已完成'
}

async function asyncFunction3() {
  await delay(500)
  return '函数 3 已完成'
}

const functions = [asyncFunction1, asyncFunction2, asyncFunction3]
const concurrencyLimit = 2

promisePool(functions, concurrencyLimit)
  .then((results) => {
    console.log('所有函数已执行完毕:', results)
  })
  .catch((error) => {
    console.error('出现错误:', error)
  })
