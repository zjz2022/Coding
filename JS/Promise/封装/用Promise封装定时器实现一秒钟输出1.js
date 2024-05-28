function delay(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('这道题是滴滴日常面试的手写题，简单')
    }, duration)
  })
}

delay(3000)
