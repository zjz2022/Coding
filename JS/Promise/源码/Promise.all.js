function all(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises))
      return reject(new TypeError('all参数不是数组'))
    // 如果是空数组，直接兑现
    if (promises.length === 0) return resolve(promises)
    const resArr = []
    let current = 0
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (res) => {
          resArr[index] = res
          current++
          if (current === promises.length) {
            resolve(resArr)
          }
        },
        (err) => {
          reject(err)
        }
      )
    })
  })
}
