// race：返回数组中状态第一次发生改变时的 Promise 结果
// 参数： 必须是数组，不是数组会报错
function race(promises) {
  return new Promise((resolve, reject) => {
    // 判断 race 参数是否为数组
    if (!Array.isArray(promises)) {
      reject(new TypeError('race传递的参数不是数组'))
    }
    promises.forEach((promise) => {
      Promise.resolve(promise).then(
        (res) => resolve(res),
        (err) => reject(err)
      )
    })
  })
}
