function allSettled(promises) {
  return new Promise((resolve, reject) => {
    // 判断参数是否为数组
    if (!Array.isArray) return reject(new TypeError('参数不是数组'))
    if (promises.length === 0) return resolve(promises)
    const resArr = []
    let current = 0
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (res) => {
          resArr[index] = {
            status: 'fulfilled',
            value: res,
          }
          current++
          if (current === promises.length) {
            resolve(resArr)
          }
        },
        (err) => {
          resArr[index] = {
            status: 'rejected',
            reason: err,
          }
          current++
          if (current === promises.length) {
            resolve(resArr)
          }
        }
      )
    })
  })
}
