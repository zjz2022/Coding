//手写Pomise.all
function myPromiseAll(promises) {
  let res = []
  return new Promise((reslove, reject) => {
    promises.forEach((item) => {
      item.then((data) => {
        res.push(data)
        if (res.length === promises.length) {
          reslove(res)
        }
      })
    })
  })
}
