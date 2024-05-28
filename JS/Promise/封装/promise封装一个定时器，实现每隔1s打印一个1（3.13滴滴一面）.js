function printNumber(number, times) {
  let count = 0 // 初始化计数器
  return new Promise((resolve, reject) => {
    // 设置一个间隔定时器
    let intervalId = setInterval(() => {
      if (count === times) {
        // 当计数器到达设定的打印次数时，清除定时器并解决Promise
        clearInterval(intervalId)
        resolve()
      } else {
        // 在计数器达到设定的打印次数之前，每次打印设定的数字
        console.log(number)
        count++
      }
    }, 1000) // 设置定时器每隔1秒触发一次
  })
}

// 调用函数
printNumber(1, 3).then(() => {
  // 当Promise解决时，此函数将被调用
  console.log('打印完成')
})
