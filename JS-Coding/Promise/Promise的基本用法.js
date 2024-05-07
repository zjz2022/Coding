let p = new Promise(function (resolve) {
  resolve('123')
})

p.then(function (a) {
  console.log(a)
})
